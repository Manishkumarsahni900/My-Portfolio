// Project data array for easy maintenance and scaling
const projectsData = [
    {
        id: 1,
        title: 'URL Shortener',
        techStack: 'MERN Stack',
        description:
        'A full-stack URL Shortener that allows users to create, manage, copy, and delete shortened URLs with user authentication.',
        image: '/projects/urlshortner.png',
        liveUrl: 'https://url-shortner-app-mern-mern-stack.vercel.app',
        githubUrl: 'https://github.com/Manishkumarsahni900/url-shortner-app-mern-MERN-STACK-',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
        id: 2,
        title: 'E-Commerce',
        techStack: 'Full Stack',
        description:
        'A full-stack e-commerce platform with product browsing, shopping cart, secure user authentication, order management, and an admin dashboard for managing products and customer orders.',
        image: '/projects/E-comm.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/Manishkumarsahni900/codealpha_ECommerce_-Task1-',
        tags: ['javaScript', 'MongoDB', 'Express', 'EJS', 'Node.js'],
    },
    {
        id: 3,
        title: 'SocialMedia Hub',
        techStack: 'Full Stack',
        description:
        'A full-stack social media platform where users can create posts, share updates, interact with content, and connect with others through a user-friendly interface.',
        image: '/projects/socialMedia.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/Manishkumarsahni900/codealpha_SocialMediaPlateform-Hub-_task2',
        tags: ['JavaScript', 'MongoDB', 'Express', 'EJS', 'Node.js'],
    },
];

const Project = ({darkMode}) => {
    return (
        <section
            className={`relative w-full min-h-screen py-20 px-4 pt-28 overflow-hidden transition-colors duration-300 ${
                darkMode
                    ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'
                    : 'bg-gradient-to-b from-white via-blue-50 to-slate-100 text-slate-900'
            }`}
        >
            {/* Ambient Background Blur Elements */}
            <div
                className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${
                    darkMode ? 'bg-blue-600/10' : 'bg-blue-400/20'
                }`}
            />

            <div
                className={`absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none ${
                    darkMode ? 'bg-indigo-600/10' : 'bg-indigo-400/20'
                }`}
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}
                <div className="text-center mb-16 animate-fade-in-down">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                        Featured Projects
                    </h1>

                    <p
                        className={`mt-4 text-lg max-w-2xl mx-auto ${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}
                    >
                        Here are some of the web applications I’ve built recently.
                    </p>

                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-fuchsia-500 mx-auto mt-4 rounded-full" />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-4">

                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className={`rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform flex flex-col group backdrop-blur-md ${
                                darkMode
                                    ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 hover:shadow-blue-500/10'
                                    : 'bg-white/90 border-slate-200 hover:border-blue-400 hover:shadow-blue-500/15'
                            }`}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                            }}
                        >

                            {/* Project Image */}
                            <div
                                className={`relative overflow-hidden h-48 ${
                                    darkMode ? 'bg-slate-950' : 'bg-slate-200'
                                }`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src =
                                            'https://placehold.co/400x225?text=Project+Preview';
                                    }}
                                />

                                <span
                                    className={`absolute top-3 right-3 border text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md shadow-md ${
                                        darkMode
                                            ? 'bg-slate-950/90 border-slate-700 text-blue-400'
                                            : 'bg-white/95 border-blue-200 text-blue-700'
                                    }`}
                                >
                                    {project.techStack}
                                </span>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">

                                <h2
                                    className={`text-2xl font-bold transition-colors duration-200 ${
                                        darkMode
                                            ? 'text-slate-100 group-hover:text-blue-400'
                                            : 'text-slate-900 group-hover:text-blue-600'
                                    }`}
                                >
                                    {project.title}
                                </h2>

                                <p
                                    className={`text-sm mt-3 leading-relaxed flex-grow ${
                                        darkMode ? 'text-slate-400' : 'text-slate-600'
                                    }`}
                                >
                                    {project.description}
                                </p>

                                {/* Project Tags */}
                                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`text-xs font-medium px-2.5 py-1 rounded-md border ${
                                                darkMode
                                                    ? 'bg-blue-950/50 border-blue-900/50 text-blue-300'
                                                    : 'bg-blue-50 border-blue-200 text-blue-700'
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div
                                    className={`flex items-center gap-4 pt-4 border-t ${
                                        darkMode
                                            ? 'border-slate-800'
                                            : 'border-slate-200'
                                    }`}
                                >
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-2 rounded-lg shadow-md hover:shadow-blue-500/25 transition-all duration-200 text-sm"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 text-center font-medium py-2 rounded-lg border transition-all duration-200 text-sm ${
                                            darkMode
                                                ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                                                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                                        }`}
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Project;