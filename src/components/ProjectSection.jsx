import { Description } from "@radix-ui/react-toast"
import { ArrowRightCircleIcon, ExternalLink, Github, Key, Tag, ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Smart Study Assistant",
        description: "A smart web-based learning assistant platform that helps students, teachers, and parents manage, track, and improve the learning process effectively.",
        image: "/photo/project1.png",
        Tags: ["JavaScript", "HTML", "CSS", "ASP.NET"],
        demoUrl: "https://github.com/mdtit2007/smartstudyassistant",
        githubUrl: "https://github.com/mdtit2007/smartstudyassistant",
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is a brief description of project two.",
        image: "/photo/project2.jpg",
        Tags: ["Vue", "Express", "Sass"],
        demoUrl: "https://example.com/demo2",
        githubUrl: "",
    },
    {
        id: 3,
        title: "Project Three",
        description: "This is a brief description of project three.",
        image: "/photo/project3.jpg",
        Tags: ["Angular", "Django", "Bootstrap"],
        demoUrl: "https://example.com/demo3",
        githubUrl: "",
    }
]





export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"> Featured
                {" "}
                <span className="text-primary">
                    Project
                </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity. Click on the project title to view more details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.Tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    {" "}
                                    <ExternalLink />
                                </a>
                                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20} />
                                </a>

                            </div>

                        </div>

                    </div>
                ))}


            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/mdtit2007">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div >
    </section >
}