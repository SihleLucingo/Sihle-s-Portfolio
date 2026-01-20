import { GraduationCap, Target, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Diploma in IT (2025) from Richfield",
    },
    {
      icon: Target,
      title: "Goal",
      description: "Career growth in reputable tech companies",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Problem-solving & continuous learning",
    },
    {
      icon: Lightbulb,
      title: "Approach",
      description: "Self-motivated & detail-oriented",
    },
  ];

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              A Passionate Developer <br />
              <span className="text-gradient">Based in Cape Town</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a motivated and self-driven software developer from Cape Town, South Africa. 
                My journey into technology began with a natural curiosity about how things work, 
                which evolved into a deep passion for building software solutions.
              </p>
              <p>
                With a strong foundation in Python programming and web development, I'm constantly 
                expanding my skill set to include cloud technologies, particularly AWS. I believe 
                in the power of continuous learning and always strive to stay updated with the 
                latest industry trends.
              </p>
              <p>
                My long-term goal is to achieve a senior position in a reputable technology 
                company, where I can contribute to impactful projects while continuing to grow 
                as a professional. I value independence, attention to detail, and effective 
                communication in my work.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-display font-bold text-primary">2+</p>
                <p className="text-sm text-muted-foreground">Internships</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-glow p-6 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="icon-container mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
