import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', targetId: 'home' },
    { name: 'About', targetId: 'about' },
    { name: 'Skills', targetId: 'skills' },
    { name: 'Projects', targetId: 'projects' },
    { name: 'Contact', targetId: 'contact' },
    { name: 'Education', targetId: 'education' },
  ];

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Automatically update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.targetId));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 ${
        darkMode
          ? 'bg-slate-950/90 border-slate-800/80 text-white'
          : 'bg-white/90 border-slate-200 text-slate-900'
      } backdrop-blur-md border-b px-6 md:px-12 py-4 flex justify-between items-center z-50 transition-all duration-300`}>
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        <button
          onClick={() => scrollToSection('home')}
          className="bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Portfolio<span className="text-blue-500">.</span>
        </button>
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
        {navLinks.map((link) => {
          const isActive = activeSection === link.targetId;
          return (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.targetId)}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-blue-500 font-semibold'
                    : darkMode
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full" />
                )}
              </button>
            </li>
          );
        })}
      </ul>


      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
        className="md:hidden ml-[150px] p-2 rounded-full border border-slate-400"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => scrollToSection('contact')}
          className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg shadow-md hover:shadow-blue-500/25 transition-all duration-300"
        >
          Hire Me
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          className="p-2 rounded-full border border-slate-400"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
        <span className={`block w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
        <span className={`block w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
      </button>
      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-800 backdrop-blur-lg px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.targetId)}
              className="text-left text-base font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;