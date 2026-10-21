import React, { useState } from 'react';

const skillsData = [
  // Frontend
  { name: "React", category: "Frontend", level: 75, logo: "/logos/reactlogo.png", learned: ["Components", "Props & State", "Hooks", "React Router"], projects: ["Portfolio", "Todo App"] },
  { name: "JavaScript", category: "Frontend", level: 70, logo: "/logos/js.png", learned: ["DOM", "Functions", "ES6+", "Async/Await"], projects: ["Todo App", "Weather App"] },
  { name: "Tailwind CSS", category: "Frontend", level: 60, logo: "/logos/tailwind.png", learned: ["Utility Classes", "Responsive Design", "Flex/Grid"], projects: ["Portfolio UI"] },
  { name: "HTML5 & CSS3", category: "Frontend", level: 85, logo: "/logos/html.png", learned: ["Semantic HTML", "Flexbox/Grid", "Animations"], projects: ["Landing Pages"] },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 75, logo: "/logos/node.png", learned: ["Express", "REST API", "Middleware"], projects: ["Auth System"] },
  { name: "Express.js", category: "Backend", level: 80, logo: "/logos/express.png", learned: ["Routing", "Controllers", "JWT Auth"], projects: ["Backend APIs"] },
  
  // Database
  { name: "MongoDB", category: "Database", level: 80, logo: "/logos/mongo.png", learned: ["CRUD Operations", "Schema Design", "Mongoose"], projects: ["Wanderlust App"] },
  { name: "MySQL", category: "Database", level: 60, logo: "/logos/mysql.png", learned: ["SQL Queries", "Joins", "Database Design"], projects: ["Database Systems"] },
  
  // Languages
  { name: "Java", category: "Languages", level: 75, logo: "/logos/java.png", learned: ["OOP Concepts", "Data Structures", "Algorithms"], projects: ["College Programs"] },
];

const categories = ["All", "Frontend", "Backend", "Database", "Languages"];

const Skills = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = activeTab === "All"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeTab);
  return (
    <div
      className={`min-h-screen pt-28 pb-16 px-6 md:px-12 lg:px-20 relative transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-slate-100"
          : "bg-gradient-to-b from-white via-blue-50 to-slate-100 text-slate-900"
      }`}
    >
      {/* Background Lighting */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none ${
          darkMode ? "bg-blue-600/10" : "bg-blue-400/20"
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Page Title */}
        <div className="text-center mb-10">
          <span
            className={`text-xs md:text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${
              darkMode
                ? "text-blue-400 bg-blue-500/10 border-blue-500/20"
                : "text-blue-700 bg-blue-100 border-blue-200"
            }`}
          >
            Technical Proficiency
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>

          <p
            className={`mt-2 text-sm md:text-base max-w-lg mx-auto ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Technologies and frameworks I work with to build scalable web applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                  : darkMode
                  ? "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                  : "bg-white text-slate-600 border border-slate-200 hover:text-blue-700 hover:border-blue-300 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`group backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                darkMode
                  ? "bg-slate-900/60 border-slate-800/80 hover:border-blue-500/50 hover:shadow-blue-500/5"
                  : "bg-white/90 border-slate-200 hover:border-blue-400 hover:shadow-blue-500/10 shadow-sm"
              }`}
            >
              <div>
                {/* Skill Icon & Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl border p-2.5 flex items-center justify-center group-hover:scale-105 transition-transform ${
                        darkMode
                          ? "bg-slate-800/80 border-slate-700/60"
                          : "bg-blue-50 border-blue-100"
                      }`}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    <div>
                      <h3
                        className={`text-lg font-bold transition-colors ${
                          darkMode
                            ? "text-white group-hover:text-blue-400"
                            : "text-slate-900 group-hover:text-blue-600"
                        }`}
                      >
                        {skill.name}
                      </h3>

                      <span
                        className={`text-xs ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                      darkMode
                        ? "bg-slate-800 text-blue-400 border-slate-700"
                        : "bg-blue-50 text-blue-700 border-blue-200"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className={`w-full rounded-full h-1.5 mb-5 overflow-hidden ${
                    darkMode ? "bg-slate-800/80" : "bg-slate-200"
                  }`}
                >
                  <div
                    className="bg-gradient-to-r from-blue-500 to-fuchsia-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Concepts Tags */}
                <div className="mb-4">
                  <span
                    className={`text-xs font-medium block mb-2 ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Key Concepts:
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.learned.map((concept, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2.5 py-1 rounded-md border ${
                          darkMode
                            ? "bg-slate-950/80 text-slate-300 border-slate-800/80"
                            : "bg-slate-50 text-slate-700 border-slate-200"
                        }`}
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Projects */}
              <div
                className={`pt-3 border-t flex items-center justify-between text-xs ${
                  darkMode
                    ? "border-slate-800/60 text-slate-400"
                    : "border-slate-200 text-slate-500"
                }`}
              >
                <span>Projects:</span>

                <span
                  className={`font-medium truncate max-w-[180px] ${
                    darkMode ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  {skill.projects.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default Skills;