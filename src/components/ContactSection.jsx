import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";




export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">
                    Touch
                </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind  or want  to collaborate? Feel free to reach out.
                I'm always open to  discussing new opportunities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        {" "}
                        Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />{" "}
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Email
                                </h4>
                                <a href="mailto:maiductrungit@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ">
                                    maiductrungit@gmail.com
                                </a>
                            </div>

                        </div>




                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />{" "}
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Phone
                                </h4>
                                <a href="tel:+84819374972" className="text-muted-foreground hover:text-primary transition-colors ">
                                    +84 819374972
                                </a>
                            </div>

                        </div>



                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />{" "}
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Location
                                </h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors ">
                                    Tuyen Quang,Viet Nam
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-mmedium mb-4"> </h4>
                        Connect With Me
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/trung-mai-duc-43695237b/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.facebook.com/mdtdvfb207/" target="_blank">
                                <Facebook />
                            </a>
                            <a href="https://www.instagram.com/mdtdvfb/" target="_blank">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8  rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">
                        Sent a Message
                    </h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name">
                                Your Name
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                                Your Email
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com"
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="message">
                                Your Message
                                <input
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Hello,I'd like to talk about..."
                                />
                            </label>
                        </div>
                        <button type="submit"
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            {isSubmitting ? "Sending..." : "Send Messge"}
                            <Send size={16} />
                        </button>
                    </form>

                </div>

            </div>
        </div>
    </section >



}