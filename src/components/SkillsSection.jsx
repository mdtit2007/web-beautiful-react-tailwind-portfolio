import { useState } from "react";
import { cn } from "@/lib/utils";

//frontend
const skills = [
    { name: "HTML,CSS", lever: 95, category: "Frontend" },
    { name: "JavaScript", lever: 80, category: "Frontend" },
    { name: "React", lever: 80, category: "Frontend" },
    { name: "TypeScript", lever: 60, category: "Frontend" },
    { name: "Next.js", lever: 80, category: "Frontend" },
    { name: "Tailwind CSS", lever: 75, category: "Frontend" },
    { name: "Bootstrap", lever: 85, category: "Frontend" },

    //Backend
    { name: "Node.js", lever: 85, category: "Backend" },
    { name: "Express.js", lever: 80, category: "Backend" },
    { name: "MongoDB", lever: 80, category: "Backend" },
    { name: "PostgreSQL", lever: 75, category: "Backend" },
    { name: "GraphQL", lever: 70, category: "Backend" },
    { name: "ASP.NET", lever: 85, categorys: "Backend" },

    //Tools
    { name: "Git/GitHub", lever: 90, category: "Tools" },
    { name: "Docker", lever: 75, category: "Tools" },
    { name: "Figma", lever: 70, category: "Tools" },
    { name: "VS Code", lever: 90, category: "Tools" },
];

const categorys = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    //lọc theo category
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Buttons chọn category */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categorys.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.lever + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.lever}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
