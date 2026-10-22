import { Link } from 'react-router-dom';
import profile from '../assets/MyImage.png';
import { TypeAnimation } from 'react-type-animation';

const featuredSkills = ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'MySQL','Java', 'Tailwind CSS'];

const featuredProjects = [
  {
    title: 'URL Shortener',
    desc: 'Full-stack URL shortening service with authentication and click analytics.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '/projects',
  },
  {
    title: 'Wanderlust App',
    desc: 'Full-stack travel accommodation web app inspired by Airbnb with review features.',
    tech: ['Express', 'MongoDB', 'EJS'],
    link: '/projects',
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather dashboard featuring location lookup and multi-day forecasts.',
    tech: ['React', 'OpenWeather API'],
    link: '/projects',
  },
];

const Home = ({darkMode}) => {
  return (
    <div className={`${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden`}>
      {/* Background Ambient Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-28">
        
        {/* HERO SECTION */}
        <section className="min-h-[75vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-8">
          
          {/* Hero Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className={`inline-block text-xs md:text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border mb-4 transition-colors duration-300 ${
                darkMode
                  ? 'text-blue-400 bg-blue-500/10 border-blue-500/20'
                  : 'text-blue-700 bg-blue-50 border-blue-200 shadow-sm'
              }`}
            >
              ✨ Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
                Manish
              </span>
            </h1>

            <h2
              className={`text-lg sm:text-2xl font-medium ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              } mb-6`}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Java & DSA Enthusiast',
                  2000,
                  'Web Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
                cursor={true}
              />
            </h2>

            <p className={`max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-800'} text-base sm:text-lg leading-relaxed mb-8 mx-auto lg:mx-0`}>
              I construct responsive full-stack web applications and continuously sharpen my problem-solving abilities by tackling algorithmic challenges in Java.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Projects
              </button>

              <a
                href="/RESUME1.pdf"
                download="My_Resume.pdf"
                className="inline-block px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Hero Right Image Avatar */}
          <div className="flex justify-center items-center relative group">
            {/* Pulsing ring aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-fuchsia-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-fuchsia-500 shadow-2xl">
              <img
                src={profile}
                alt="Manish profile"
                className="w-full h-full object-cover rounded-full bg-slate-900"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/320?text=Manish';
                }}
              />
            </div>
          </div>

        </section>


        {/* FEATURED SKILLS */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Expertise</span>
              <h2 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'} mt-1`}>
                Core Tech Stack
              </h2>
            </div>
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 md:mt-0 text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
            >
              View Detailed Skills &rarr;
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className={`px-5 py-2.5 ${darkMode ? 'bg-slate-900/80 text-slate-300 border-slate-800/80 hover:text-white' : 'bg-gray-200 text-slate-800 border-slate-200 hover:text-blue-600'} border hover:border-blue-500/50 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>


        {/* FEATURED PROJECTS */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-fuchsia-400 uppercase tracking-wider">Portfolio</span>
              <h2 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'} mt-1`}>Featured Work</h2>
            </div>
            <a
              href="https://github.com/Manishkumarsahni900"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300 flex items-center gap-1 transition-colors"
            >
              View All Projects &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className={`group backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-blue-500/50'
                    : 'bg-white border-slate-200 hover:border-blue-400/60'
                }`}
              >
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${
                      darkMode
                        ? 'text-white group-hover:text-blue-400'
                        : 'text-slate-900 group-hover:text-blue-600'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2.5 py-1 rounded-md border ${
                          darkMode
                            ? 'bg-slate-950 text-blue-400 border-slate-800'
                            : 'bg-blue-50 text-blue-600 border-blue-100'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={project.link}
                    className={`inline-flex items-center text-xs font-semibold transition-colors ${
                      darkMode
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    View details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* CALL TO ACTION */}
        <section
          className={`relative overflow-hidden rounded-3xl border p-8 sm:p-12 text-center shadow-xl transition-all duration-300 ${
            darkMode
              ? 'bg-gradient-to-r from-blue-950/60 via-slate-900 to-fuchsia-950/60 border-slate-800'
              : 'bg-gradient-to-r from-blue-50 via-white to-fuchsia-50 border-blue-100'
          }`}
        >
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl" />

          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Let&apos;s Build Something Great Together
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              I&apos;m currently open to software engineering opportunities, collaborative projects, and tech discussions.
            </p>

            <div className="pt-4">
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="inline-block px-8 py-3.5 bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;