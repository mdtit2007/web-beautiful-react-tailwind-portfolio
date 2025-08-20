import { Briefcase, Code, User } from "lucide-react"


export const AboutMeSection = () => {

    return <section id="about" className="py-24 px-4 relative ">
        {""}
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary">
                    Me
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibol"> Basic  Web Developer</h3>
                    <p className="text-muted-foreground">
                        I am a web developer with a passion for creating beautiful and functional web applications. I have experience in HTML, CSS, JavaScript, Nodejs and React. I love learning new technologies and improving my skills.
                    </p>
                    <p className="text-muted-foreground">
                        I am currently looking for opportunities to work on exciting projects and collaborate with other developers. I am always eager to learn and grow as a developer.
                    </p>
                    <img src="/photo/profile.jpeg" alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-6" />
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full sm:flex-row boder border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            DownLoad CV
                        </a>
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Web Development</h4>
                                <p className="text-muted-foreground">
                                    I specialize in building responsive and accessible web applications using modern technologies.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">
                                    UI/UX Design
                                </h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive user interfaces and seamless user
                                    experiences.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Project Management</h4>
                                <p className="text-muted-foreground">
                                    Leading projects from conception to completion with agile
                                    methodologies.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}