import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);
      data.append("access_key", "9c7c0bd8-7308-498a-a2ba-83f8ad1d9c07");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Message send nahi hua. Dobara try karo.");
      }
    } catch (error) {
      alert("Network error. Dobara try karo.");
    }
  };

  const contactDetails = [
    {
      title: 'Email',
      value: 'manishkumarsahni256@gmail.com',
      link: 'mailto:manishkumarsahni256@gmail.com',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Location',
      value: 'Dehradun, India',
      link: '#',
      icon: (
        <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Social Profiles',
      value: 'GitHub / LinkedIn',
      link: 'https://github.com',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden`}>
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Let&apos;s Connect
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 tracking-tight">
            Get In <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base md:text-lg max-w-xl mx-auto">
            Have a project in mind, an opportunity, or just want to talk about code? Feel free to drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            {contactDetails.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 block shadow-lg ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${
                      darkMode
                        ? 'bg-slate-800/80 border-slate-700/60'
                        : 'bg-slate-100 border-slate-200'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.title}</h3>
                    <p className={`text-lg font-bold transition-colors ${
                      darkMode
                        ? 'text-white group-hover:text-blue-400'
                        : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            {/* Quick Status Box */}
            <div
              className={`${
                darkMode
                  ? 'bg-slate-900/40 border border-slate-800/80'
                  : 'bg-white border border-slate-200'
              } rounded-2xl p-6`}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>

                <span
                  className={`text-sm font-medium ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Open for internships 💼
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className={`lg:col-span-2
          ${darkMode ? 'bg-slate-900/60 backdrop-blur-xl border border-slate-800/80' : 'bg-white border border-slate-200'} rounded-3xl p-8 md:p-10 shadow-2xl`}>
            {submitted ? (
              <div className={`py-16 text-center space-y-4 ${darkMode ? ' ' : 'text-slate-900'}`}>
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. I will get back to you as soon as possible!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-600'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-600'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-600'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Manish, I would like to talk about..."
                    className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm ${
                      darkMode
                        ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-600'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 active:scale-[0.99] text-sm"
                  >
                    Send Message
                  </button>

                  <a
                    href="https://wa.me/919006359892"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-300 active:scale-[0.99] text-sm flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                    >
                      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.53 0 .21 5.32.21 11.85c0 2.09.55 4.13 1.6 5.93L.1 24l6.38-1.67a11.84 11.84 0 0 0 5.58 1.42h.01c6.53 0 11.85-5.32 11.85-11.85 0-3.17-1.23-6.15-3.4-8.42ZM12.07 21.7a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.8 9.8 0 0 1-1.5-5.19c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.89 9.8 9.8 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.87 9.87Zm5.42-7.39c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.08-.12-.27-.2-.57-.35Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;