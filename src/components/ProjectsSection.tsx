import { ExternalLink, Github, Users, Layers } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Study Hub",
      description:
        "An AI-powered study assistant and timetable generator that exports schedules to personal calendars with reminders. Also includes student job listings.",
      tech: ["Next.js", "React", "Python Flask", "Firebase"],
      isGroup: true,
      featured: true,
    },
    {
      title: "Alexa Clone",
      description:
        "A voice-controlled AI assistant designed for PC automation. Enables hands-free control of computer functions through voice commands.",
      tech: ["Python"],
      isGroup: false,
      featured: false,
    },
    {
      title: "Zam Dashboard",
      description:
        "An ERP dashboard for a driving school that tracks student records, monitors busiest months, and provides business insights.",
      tech: ["Python"],
      isGroup: false,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in Python development, 
            web technologies, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-glow border border-border overflow-hidden group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project Header with gradient */}
              <div className="h-32 relative overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, hsl(222, 47%, 18%) 0%, hsl(222, 47%, 14%) 50%, hsl(43, 96%, 56%, 0.1) 100%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="text-primary/30 group-hover:text-primary/50 transition-colors" size={64} />
                </div>
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.isGroup && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users size={14} />
                      Group
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold">
              Additional <span className="text-gradient">Services</span>
            </h3>
          </div>
          
          <div className="card-glow p-8 border border-border max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="icon-container flex-shrink-0">
                <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Maths Tutoring</h4>
                <p className="text-muted-foreground">
                  Offering maths tutoring for primary and high school students. Focus on building 
                  clear understanding, confidence, and achieving academic improvement through 
                  personalized teaching approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
