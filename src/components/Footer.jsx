import { Link } from 'react-router-dom';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className={`${
        darkMode
          ? 'bg-slate-950 text-slate-400 border-slate-800/80'
          : 'bg-slate-50 text-slate-600 border-slate-200'
      } border-t px-6 md:px-12 lg:px-20 py-12 relative overflow-hidden transition-colors duration-300`}
    >
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left">
            <Link to="/" onClick={scrollToTop}
                className={`text-xl font-extrabold tracking-tight group ${
                  darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Manish{' '}
              <span className="text-blue-500 group-hover:text-fuchsia-400 transition-colors duration-300">
                .
              </span>
            </Link>
            <p className={`text-xs sm:text-sm mt-1 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Full Stack Developer <span className="text-blue-500">|</span> Java & DSA Enthusiast
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className={`transition-colors duration-200 ${
                    darkMode
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/Manishkumarsahni900"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manish-kumar-686654309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 shadow-sm'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:manishkumarsahni256@gmail.com"
              aria-label="Send Email"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-fuchsia-500/50 hover:text-fuchsia-400 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-fuchsia-200 hover:text-fuchsia-600 hover:bg-fuchsia-50 shadow-sm'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

        </div>
        {/* Bottom Section */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          <p>© {new Date().getFullYear()} Manish. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 transition-colors group focus:outline-none ${
              darkMode ? 'hover:text-white' : 'hover:text-blue-600'
            }`}
          >
            <span>Back to top</span>

            <div
              className={`w-6 h-6 rounded-lg border flex items-center justify-center group-hover:-translate-y-0.5 transition-transform ${
                darkMode
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              &uarr;
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;