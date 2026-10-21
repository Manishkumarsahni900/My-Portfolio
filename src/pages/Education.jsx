import { useEffect, useRef, useState } from "react";

const educationData = [
    {
        id: 1,
        title: "B.Tech in Computer Science",
        institution: "Shivalik University",
        duration: "2024 - 2028",
        status: "Currently Pursuing",
        description:
        "Building a strong foundation in computer science, software development, and problem-solving.",
        cgpa: [
        { label: "First Year CGPA", value: "7.17" },
        { label: "Second Year CGPA", value: "7.49" },
        ],
    },
    {
        id: 2,
        title: "Class 12",
        institution: "M R JANATA COLLEGE SAMASTIPUR",
        duration: "2024",
        status: "Completed",
        description:
        "Completed senior secondary education in 2024.",
        cgpa: [],
    },
    {
        id: 3,
        title: "Class 10",
        institution: "M A R B J HIGH SCHOOL BAHDURA, SAMASTIPUR",
        duration: "2022",
        status: "Completed",
        description:
        "Completed secondary education in 2022.",
        cgpa: [],
    },
];

// 2. Main component
export default function Education({ darkMode = true }) {

  // 3. Scroll animation logic
    const [visibleItems, setVisibleItems] = useState({});
    const cardRefs = useRef([]);

useEffect(() => {
    const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
    setVisibleItems({
        0: true,
        1: true,
        2: true,
    });
    return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Number(entry.target.dataset.index);

                setVisibleItems((prev) => ({
                ...prev,
                [index]: true,
                }));

                observer.unobserve(entry.target);
            }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -30px 0px",
        }
        );

        cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
        });

        return () => observer.disconnect();
}, []);

  // 4. Theme colors
    const sectionBg = darkMode
        ? "bg-slate-950 text-slate-100"
        : "bg-slate-50 text-slate-900";

    const cardBg = darkMode
        ? "bg-slate-900/80 border-slate-700/60"
        : "bg-white border-slate-200";

    const mutedText = darkMode
        ? "text-slate-400"
        : "text-slate-600";

    const accentText = darkMode
        ? "text-blue-400"
        : "text-blue-700";

    return (
        <section
            id="education"
            className={`relative isolate overflow-hidden px-5 py-24 sm:px-8 md:px-12 lg:px-20 transition-colors duration-300 scroll-mt-24 ${sectionBg}`}
            >
            {/* Background glow */}
            <div
                className={`pointer-events-none absolute -top-20 left-1/4 -z-10 h-72 w-72 rounded-full blur-3xl ${
                darkMode ? "bg-blue-600/20" : "bg-blue-300/30"
                }`}
            />

            <div
                className={`pointer-events-none absolute right-0 top-1/2 -z-10 h-72 w-72 rounded-full blur-3xl ${
                darkMode ? "bg-purple-600/10" : "bg-purple-300/30"
                }`}
            />

            <div className="mx-auto max-w-5xl">

                {/* Section heading */}
                <div className="mb-14 text-center">
                <p
                    className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] ${accentText}`}
                >
                    My Learning Journey
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Education{" "}
                    <span className={accentText}>& Growth</span>
                </h2>

                <p
                    className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${mutedText}`}
                >
                    My academic journey, where I continue to develop my
                    knowledge of computer science, programming, and software
                    development.
                </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                {/* Timeline line */}
                <div
                    className={`absolute bottom-8 left-5 top-8 w-px sm:left-7 ${
                    darkMode ? "bg-blue-400/40" : "bg-blue-500/40"
                    }`}
                />

                <div className="space-y-8">

                    {educationData.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(element) => {
                        cardRefs.current[index] = element;
                        }}
                        data-index={index}
                        style={{
                        transitionDelay: visibleItems[index]
                            ? `${index * 120}ms`
                            : "0ms",
                        }}
                        className={`relative pl-14 transition-all duration-700 ease-out sm:pl-20 ${
                        visibleItems[index]
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                    >
                        {/* Timeline icon */}
                        <div
                        className={`absolute left-0 top-7 z-10 flex h-10 w-10 items-center justify-center rounded-2xl border shadow-lg sm:left-2 sm:h-12 sm:w-12 ${
                            darkMode
                            ? "border-blue-400/30 bg-slate-900 text-blue-400"
                            : "border-blue-200 bg-white text-blue-700"
                        }`}
                        >
                        {index === 0 ? (
                            <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            >
                            <path
                                d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 11v5.2c3.8 2.8 8.2 2.8 12 0V11M21.5 9v6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                        ) : (
                            <span className="text-sm font-bold">
                            {item.id}
                            </span>
                        )}
                        </div>

                        {/* Education card */}
                        <article
                        className={`group relative overflow-hidden rounded-3xl border p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7 ${
                            cardBg
                        } ${
                            darkMode
                            ? "hover:border-blue-400/40 hover:shadow-blue-950/20"
                            : "hover:border-blue-300 hover:shadow-blue-100"
                        }`}
                        >
                        {/* Card glow */}
                        {index === 0 && (
                            <div
                            className={`pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl ${
                                darkMode ? "bg-blue-500/10" : "bg-blue-300/20"
                            }`}
                            />
                        )}

                        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                            <div>
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                                <span
                                className={`rounded-full border px-3 py-1 text-xs ${mutedText} ${
                                    darkMode
                                    ? "border-slate-700 bg-slate-800"
                                    : "border-slate-200 bg-slate-50"
                                }`}
                                >
                                {index === 0
                                    ? "Undergraduate"
                                    : index === 1
                                    ? "Senior Secondary"
                                    : "Secondary"}
                                </span>

                                <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                    index === 0
                                    ? darkMode
                                        ? "bg-emerald-400/10 text-emerald-300"
                                        : "bg-emerald-50 text-emerald-700"
                                    : darkMode
                                    ? "bg-slate-800 text-slate-300"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                                >
                                {item.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold sm:text-2xl">
                                {item.title}
                            </h3>

                            <p className={`mt-2 text-sm font-medium sm:text-base ${accentText}`}>
                                {item.institution}
                            </p>
                            </div>

                            <div
                            className={`shrink-0 rounded-xl border px-3 py-2 text-sm font-semibold ${
                                darkMode
                                ? "border-slate-700 bg-slate-800 text-slate-200"
                                : "border-slate-200 bg-slate-50 text-slate-700"
                            }`}
                            >
                            {item.duration}
                            </div>
                        </div>

                        <p className={`relative mt-5 max-w-3xl text-sm leading-7 sm:text-base ${mutedText}`}>
                            {item.description}
                        </p>

                        {/* CGPA details: B.Tech only */}
                        {item.cgpa.length > 0 && (
                            <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                            {item.cgpa.map((score) => (
                                <div
                                key={score.label}
                                className={`rounded-2xl border p-4 ${
                                    darkMode
                                    ? "border-slate-700 bg-slate-800/70"
                                    : "border-slate-200 bg-slate-50"
                                }`}
                                >
                                <p className={`text-xs font-medium uppercase tracking-wider ${mutedText}`}>
                                    {score.label}
                                </p>

                                <p
                                    className={`mt-2 text-2xl font-bold ${
                                    darkMode ? "text-white" : "text-slate-900"
                                    }`}
                                >
                                    {score.value}
                                </p>
                                </div>
                            ))}
                            </div>
                        )}
                        </article>
                    </div>
                    ))}

                </div>
                </div>

                {/* Closing message */}
                <div
                className={`mt-12 rounded-2xl border p-5 text-center sm:p-6 ${
                    cardBg
                }`}
                >
                <p className="font-semibold">
                    Learning today, building for tomorrow.
                </p>

                <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
                    I continue to strengthen my knowledge through academic
                    learning, coding practice, and hands-on development.
                </p>
                </div>

            </div>
        </section>
    );
}