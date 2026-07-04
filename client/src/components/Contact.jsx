import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, success: "Your message has been sent successfully!", error: null });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: null, error: "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, success: null, error: "Server error. Please verify your backend server is active." });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-950">
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Contact Me
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-blue-500 rounded-full" />
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind, or looking to collaborate? Reach out and let's create something together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-panel p-8 rounded-3xl flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Feel free to contact me via email or phone. I will respond to your queries as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/40 transition duration-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Email Me</p>
                    <a href="mailto:mgrishi2005@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition">
                      mgrishi2005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition duration-300">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Call Me</p>
                    <a href="tel:+917358980501" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition">
                      +91 7358980501
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:border-blue-500/40 transition duration-300">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Location</p>
                    <p className="text-sm font-semibold text-slate-200">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

              {/* Status Alert Modal/Banner */}
              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3 relative">
                  <FaCheckCircle className="text-lg flex-shrink-0" />
                  <span>{status.success}</span>
                  <button onClick={() => setStatus({ ...status, success: null })} className="absolute top-4 right-4 text-emerald-400/75 hover:text-emerald-400 transition">
                    <FaTimes />
                  </button>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3 relative">
                  <FaTimesCircle className="text-lg flex-shrink-0" />
                  <span>{status.error}</span>
                  <button onClick={() => setStatus({ ...status, error: null })} className="absolute top-4 right-4 text-red-400/75 hover:text-red-400 transition">
                    <FaTimes />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Your Name"
                    required
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/80 hover:border-slate-700/60 transition duration-300 text-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="Your Email Address"
                    required
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/80 hover:border-slate-700/60 transition duration-300 text-sm"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    placeholder="Brief details of your project or inquiry..."
                    rows="5"
                    required
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/80 hover:border-slate-700/60 transition duration-300 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition duration-300 flex items-center justify-center gap-2 ${
                    status.loading
                      ? "bg-slate-800 cursor-not-allowed text-slate-500"
                      : "bg-blue-600 hover:bg-blue-500 glowing-btn-blue cursor-pointer"
                  }`}
                >
                  {status.loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-500 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}