import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import dns from "dns";

// Override DNS servers to Google's public DNS to bypass Windows/c-ares loopback resolution bug
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
// 🔥 Create Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);
// 🔥 Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection on startup
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ SMTP Transporter Verification Failed:", error.message);
      if (error.code === 'EAUTH' || error.message.includes('Username and Password not accepted')) {
        console.error("👉 RECOMMENDATION: Ensure 'EMAIL_PASS' in .env is a 16-character Google App Password (without spaces) and 2-Step Verification is active on your Google account.");
      }
    } else {
      console.log("✅ SMTP Server is ready to take messages");
    }
  });
} else {
  console.warn("⚠️ SMTP Config Warning: EMAIL_USER or EMAIL_PASS not set in .env");
}

// Root Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});


// 🔥 Contact Route (Now Saves to DB and Sends Email)
app.post("/api/contact", async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);

    const newMessage = new Contact(req.body);
    await newMessage.save();

    console.log("Message Saved to MongoDB");

    // Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "mgrishi2005@gmail.com",
        subject: `New Portfolio Contact from ${req.body.name}`,
        text: `You have a new message from your portfolio contact form.\n\nName: ${req.body.name}\nEmail: ${req.body.email}\nMessage:\n${req.body.message}`,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email Notification Sent Successfully");
    } else {
      console.log("Skipping email notification: EMAIL_USER or EMAIL_PASS not set in .env");
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Error in /api/contact Route:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
