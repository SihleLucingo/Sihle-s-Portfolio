import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/sihle-profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <p className="text-primary font-medium mb-4 flex items-center justify-center lg:justify-start gap-2">
                <MapPin size={16} />
                Cape Town, South Africa
              </p>
              <p className="text-muted-foreground text-lg mb-2">Hello, I'm</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Sihle{" "}
                <span className="text-gradient">Lucingo</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
                Python-Focused Software Developer &{" "}
                <span className="text-foreground">Aspiring Cloud Engineer</span>
              </p>
            </div>

            <p className="animate-fade-in-delay text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              A passionate and driven software developer with a strong foundation in 
              Python development, web technologies, and emerging cloud solutions. 
              Completed my Diploma in Information Technology while gaining 
              real-world experience through internships.
            </p>

            <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-gold inline-flex items-center justify-center gap-2">
                View My Work
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 font-medium rounded-lg border border-border hover:border-primary transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-delay-2 flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/SihleLucingo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/sihle-lucingo-aaa568247"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:lucingosihle@gmail.com"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src={profileImage}
                  alt="Sihle Lucingo - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-lg px-4 py-2 shadow-lg">
                <p className="text-sm font-medium text-primary">Open to Work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
