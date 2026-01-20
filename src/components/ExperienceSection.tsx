import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experience = [
    {
      type: "work",
      title: "Python Intern",
      company: "FCTEC (First Coast Technologies)",
      period: "Aug 2025 – Feb 2026",
      description:
        "Focused on Python development and backend systems. Contributing to real-world projects while expanding technical expertise in software engineering practices.",
      current: true,
    },
    {
      type: "work",
      title: "Software Engineer Intern",
      company: "Faranani IT Services",
      period: "Feb 2025 – Aug 2025",
      description:
        "Gained hands-on experience in software development, collaboration with development teams, and understanding of real-world systems and workflows.",
      current: false,
    },
  ];

  const education = [
    {
      title: "Diploma in Information Technology",
      institution: "Richfield",
      period: "2025",
      description:
        "Comprehensive study of IT fundamentals including programming, databases, web development, and software engineering principles.",
    },
    {
      title: "Grade 12 / Matric",
      institution: "Uxolo High School",
      period: "2021",
      description:
        "Completed secondary education with a focus on mathematics and science subjects.",
    },
  ];

  return (
    <section id="experience" className="relative bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="icon-container">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative">
              <div className="timeline-line" />
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-2 top-2 w-4 h-4 rounded-full border-2 ${
                        item.current
                          ? "bg-primary border-primary"
                          : "bg-background border-primary"
                      }`}
                    />
                    
                    <div className="card-glow p-6 border border-border">
                      {item.current && (
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                          Current
                        </span>
                      )}
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-primary font-medium text-sm mb-2">
                        {item.company}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar size={14} />
                        {item.period}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="icon-container">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative">
              <div className="timeline-line" />
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full border-2 bg-background border-primary" />
                    
                    <div className="card-glow p-6 border border-border">
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-primary font-medium text-sm mb-2">
                        {item.institution}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar size={14} />
                        {item.period}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
