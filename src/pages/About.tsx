import { Helmet } from "react-helmet-async";
import { Target, Eye, Users, Award, Lightbulb, Heart, Linkedin, Github, Globe } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace emerging technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating every project as a true partnership.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is non-negotiable. We deliver solutions that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparency and honesty guide every interaction and decision we make.",
  },
];

const team = [
  {
    name: "Hamed Bouallagui",
    role: "Full Stack Developer",
    image: "/hamed.png",
    linkedin: "https://www.linkedin.com/in/hamed-bouallegui/",
    github: "https://github.com/HamedBouallegui",
    portfolio: "https://hamedbouallagui.vercel.app/",
  }



];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AlphaTech | Our Story, Mission & Team</title>
        <meta
          name="description"
          content="Learn about AlphaTech's journey, our mission to transform businesses through technology, and meet our expert team of developers and designers."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              Building the <span className="text-gradient">Future</span> Together
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up-delay-1">
              We're a team of passionate technologists dedicated to transforming
              businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AlphaTech is an IT services company based in Sidi Bouzid, Tunisia, dedicated to delivering reliable and modern digital solutions. We specialize in web and application development, IT consulting, and innovative technology services tailored to meet business needs.
                </p>
                <p>
                  Our mission is to help startups and companies grow through smart, secure, and scalable technology. At AlphaTech, we focus on quality, simplicity, and performance to turn ideas into effective digital products.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden transform-3d-hover">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="AlphaTech team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-2xl -z-10 float-3d" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl -z-10 float-3d" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that drive
                growth, efficiency, and competitive advantage. We believe every company
                deserves access to world-class digital capabilities.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading digital transformation partner for businesses worldwide,
                known for our innovative solutions, exceptional quality, and the lasting
                value we create for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-2000">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 card-3d text-center shadow-3d hover:shadow-3d-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 pulse-3d">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground">
              The talented people behind our success
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 perspective-2000">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center w-full max-w-xs"
              >
                <div className="relative mb-4 rounded-2xl overflow-hidden aspect-square shadow-3d group-hover:shadow-3d-hover">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground flex items-center justify-center backdrop-blur-sm transition-all duration-200 shadow-lg cursor-pointer"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground flex items-center justify-center backdrop-blur-sm transition-all duration-200 shadow-lg cursor-pointer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground flex items-center justify-center backdrop-blur-sm transition-all duration-200 shadow-lg cursor-pointer"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
