import { 
  Code2, 
  Globe, 
  Database, 
  Cloud, 
  Wrench, 
  Users,
  Cpu,
  FileCode
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "SQL"],
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML5", "CSS3", "PHP", "React", "Next.js"],
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: ["Python Flask", "Firebase", "PostgreSQL"],
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      skills: ["AWS (SAA - In Progress)", "Cloud Architecture"],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "VS Code", "Linux CLI", "Docker Basics"],
    },
    {
      icon: FileCode,
      title: "Methodologies",
      skills: ["Agile/Scrum", "Basic Testing", "Code Review"],
    },
  ];

  const professionalSkills = [
    "Communication",
    "Problem-solving",
    "Autonomy",
    "Quick Learning",
    "Attention to Detail",
    "Team Collaboration",
  ];

  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">What I Know</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-glow p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="icon-container mb-4 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills */}
        <div className="card-glow p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="icon-container">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold">
              Professional Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AWS Certification Banner */}
        <div className="mt-8 card-glow p-6 border border-primary/30 bg-primary/5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="icon-container bg-primary/20">
              <Cpu className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">
                AWS Solutions Architect Associate
              </h4>
              <p className="text-muted-foreground text-sm">
                Currently preparing for certification to expand cloud computing expertise
              </p>
            </div>
            <span className="sm:ml-auto px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              In Progress
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
