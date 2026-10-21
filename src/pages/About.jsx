const About = ({ darkMode}) => {
    const stats = [
        { label: 'Projects Completed', value: '3' },
        { label: 'DSA Problems Solved', value: '300+' },
        { label: 'Primary Language', value: 'Java' },
        { label: 'Core Stack', value: 'MERN' },
    ];

    const highlights = [
        {
        title: 'Full-Stack Development',
        description:
            'Building responsive, user-focused web apps using React, Tailwind CSS, Node.js, Express, and MongoDB.',
        icon: (
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        },
        {
        title: 'Data Structures & Algorithms',
        description:
            'Solving algorithmic challenges in Java with a strong emphasis on time/space efficiency and clean code.',
        icon: (
            <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
        },
    ];

    return (
        <div className={`min-h-screen ${
            darkMode
                ? "bg-slate-950 text-slate-100"
                : "bg-slate-50 text-slate-900"
        } pt-28 pb-20 px-6 md:px-12 lg:px-20 relative overflow-hidden transition-colors duration-300`}>

            {/* Background Ambient Lighting Effects */}
            <div className={`absolute top-1/4 left-10 w-[500px] h-[500px] ${
                darkMode ? "bg-blue-600/10" : "bg-blue-400/15"
            } rounded-full blur-[140px] pointer-events-none`} />

            <div className={`absolute bottom-1/4 right-10 w-[400px] h-[400px] ${
                darkMode ? "bg-fuchsia-600/10" : "bg-fuchsia-400/15"
            } rounded-full blur-[140px] pointer-events-none`} />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center md:text-left mb-16">
                    <span className={`text-xs md:text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${
                        darkMode
                            ? "text-blue-400 bg-blue-500/10 border-blue-500/20"
                            : "text-blue-600 bg-blue-100 border-blue-200"
                    }`}>
                        Get To Know Me
                    </span>

                    <h1 className={`text-4xl md:text-6xl font-extrabold mt-4 tracking-tight ${
                        darkMode ? "text-white" : "text-slate-900"
                    }`}>
                        About{" "}
                        <span className={`bg-gradient-to-r ${
                            darkMode
                                ? "from-blue-400 via-indigo-400 to-fuchsia-500"
                                : "from-blue-600 via-indigo-600 to-fuchsia-600"
                        } bg-clip-text text-transparent`}>
                            Me
                        </span>
                    </h1>

                    <p className={`mt-3 text-base md:text-lg max-w-2xl ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                        Computer Science student passionate about full-stack web engineering and problem-solving.
                    </p>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

                    {/* Main Story Card */}
                    <div className={`lg:col-span-2 backdrop-blur-xl border rounded-3xl p-8 shadow-xl flex flex-col justify-between transition-colors duration-300 ${
                        darkMode
                            ? "bg-slate-900/60 border-slate-800/80"
                            : "bg-white/80 border-slate-200 shadow-slate-200/50"
                    }`}>
                        <div className={`space-y-4 text-base md:text-lg leading-relaxed ${
                            darkMode ? "text-slate-300" : "text-slate-600"
                        }`}>
                            <p>
                                Hi, I'm{" "}
                                <span className={`font-semibold ${
                                    darkMode ? "text-white" : "text-slate-900"
                                }`}>
                                    Manish
                                </span>
                                , an aspiring software developer currently pursuing my{" "}
                                <span className={`font-medium ${
                                    darkMode ? "text-blue-400" : "text-blue-600"
                                }`}>
                                    B.Tech in Computer Science
                                </span>.
                            </p>

                            <p>
                                My primary focus revolves around constructing modern web applications using the{" "}
                                <span className={`font-medium ${
                                    darkMode ? "text-white" : "text-slate-900"
                                }`}>
                                    MERN Stack
                                </span>{" "}
                                (MongoDB, Express, React, Node.js) and styling tools like{" "}
                                <span className={`font-medium ${
                                    darkMode ? "text-white" : "text-slate-900"
                                }`}>
                                    Tailwind CSS
                                </span>.
                            </p>

                            <p>
                                Alongside my primary focus on full-stack development, I regularly practice Data Structures and Algorithms in{" "}
                                <span className={`font-medium ${
                                    darkMode ? "text-fuchsia-400" : "text-fuchsia-600"
                                }`}>
                                    Java
                                </span>{" "}
                                on LeetCode to improve my problem-solving skills and write efficient code.
                            </p>
                        </div>

                        {/* Quick Skills Badges */}
                        <div className={`mt-8 pt-6 border-t ${
                            darkMode ? "border-slate-800/80" : "border-slate-200"
                        }`}>
                            <span className={`text-xs font-semibold uppercase tracking-wider block mb-3 ${
                                darkMode ? "text-slate-400" : "text-slate-500"
                            }`}>
                                Core Stack & Tools
                            </span>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React",
                                    "JavaScript",
                                    "Node.js",
                                    "Express",
                                    "MongoDB",
                                    "Java",
                                    "Tailwind CSS",
                                    "Git",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                                            darkMode
                                                ? "bg-slate-950 text-slate-300 border-slate-800 hover:border-blue-500/50 hover:text-white"
                                                : "bg-slate-100 text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-700"
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Side Focus Cards */}
                    <div className="space-y-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className={`backdrop-blur-xl border rounded-3xl p-6 transition-all duration-300 ${
                                    darkMode
                                        ? "bg-slate-900/60 border-slate-800/80 hover:border-slate-700"
                                        : "bg-white/80 border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/50"
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 ${
                                    darkMode
                                        ? "bg-slate-800/80 border-slate-700/60"
                                        : "bg-blue-50 border-blue-100 text-blue-600"
                                }`}>
                                    {item.icon}
                                </div>

                                <h3 className={`text-xl font-bold mb-2 ${
                                    darkMode ? "text-white" : "text-slate-900"
                                }`}>
                                    {item.title}
                                </h3>

                                <p className={`text-sm leading-relaxed ${
                                    darkMode ? "text-slate-400" : "text-slate-600"
                                }`}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl p-6 text-center transition-all duration-300 ${
                                darkMode
                                    ? "bg-slate-900/40 border-slate-800/80 hover:border-blue-500/40"
                                    : "bg-white/80 border-slate-200 hover:border-blue-300 hover:shadow-md"
                            }`}
                        >
                            <h4 className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${
                                darkMode
                                    ? "from-blue-400 to-fuchsia-400"
                                    : "from-blue-600 to-fuchsia-600"
                            } bg-clip-text text-transparent`}>
                                {stat.value}
                            </h4>

                            <p className={`text-xs md:text-sm mt-1 font-medium ${
                                darkMode ? "text-slate-400" : "text-slate-500"
                            }`}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Education & Career Goal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Education Box */}
                    <div className={`backdrop-blur-xl border rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 ${
                        darkMode
                            ? "bg-slate-900/60 border-slate-800/80 hover:border-blue-500/50"
                            : "bg-white/80 border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
                    }`}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2.5 rounded-xl border ${
                                darkMode
                                    ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                    : "bg-blue-50 text-blue-600 border-blue-100"
                            }`}>
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                </svg>
                            </div>

                            <h2 className={`text-2xl font-bold ${
                                darkMode ? "text-white" : "text-slate-900"
                            }`}>
                                Education
                            </h2>
                        </div>

                        <h3 className={`text-lg font-semibold ${
                            darkMode ? "text-slate-200" : "text-slate-800"
                        }`}>
                            B.Tech in Computer Science
                        </h3>

                        <p className={`text-sm mt-1 ${
                            darkMode ? "text-slate-400" : "text-slate-500"
                        }`}>
                            B.Tech — 3rd Year
                        </p>

                        <p className={`text-sm mt-3 leading-relaxed ${
                            darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                            Focusing on Software Engineering, Database Systems, Object-Oriented Programming, and Web Architectures.
                        </p>
                    </div>

                    {/* Goal Box */}
                    <div className={`backdrop-blur-xl border rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 ${
                        darkMode
                            ? "bg-slate-900/60 border-slate-800/80 hover:border-fuchsia-500/50"
                            : "bg-white/80 border-slate-200 hover:border-fuchsia-300 hover:shadow-lg hover:shadow-fuchsia-100/50"
                    }`}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2.5 rounded-xl border ${
                                darkMode
                                    ? "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20"
                                    : "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100"
                            }`}>
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>

                            <h2 className={`text-2xl font-bold ${
                                darkMode ? "text-white" : "text-slate-900"
                            }`}>
                                Career Goal
                            </h2>
                        </div>

                        <h3 className={`text-lg font-semibold ${
                            darkMode ? "text-slate-200" : "text-slate-800"
                        }`}>
                            Software Engineer
                        </h3>

                        <p className={`text-sm mt-1 ${
                            darkMode ? "text-slate-400" : "text-slate-500"
                        }`}>
                            Aspiration
                        </p>

                        <p className={`text-sm mt-3 leading-relaxed ${
                            darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                            To join a forward-thinking engineering team where I can build scalable, high-impact digital products and continue mastering software architecture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;