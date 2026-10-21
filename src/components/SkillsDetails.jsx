import React from "react";

const SkillsDetails = ({ selectedSkill }) => {
    if (!selectedSkill) {
        return (
            <div className="mt-10 text-gray-400">
                Click any skill to see details.
            </div>
        );
    }

    return (
        <div className="mt-10 p-6 border border-white rounded-xl">
            <h2 className="text-3xl font-bold mb-4 flex">
                {selectedSkill.name}
                <img
                    src={selectedSkill.logo}
                    className="w-10 h-10 object-contain ml-2 rounded-full"
                />
            </h2>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                    What I Learned
                </h3>
                <ul className="list-disc ml-6 text-zinc-300">
                    {selectedSkill.learned.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">
                    Projects
                </h3>
                <ul className="list-disc ml-6 text-zinc-300">
                    {selectedSkill.projects.map((project, index) => (
                        <li key={index}>
                            {project}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillsDetails;