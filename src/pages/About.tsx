import { Helmet } from "react-helmet-async";
import { Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";

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
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - NexaTech | Our Story, Mission & Team</title>
        <meta 
          name="description" 
          content="Learn about NexaTech's journey, our mission to transform businesses through technology, and meet our expert team of developers and designers." 
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
                  Founded in 2016, NexaTech started with a simple vision: to help businesses 
                  harness the power of technology to achieve their goals. What began as a 
                  small team of three developers has grown into a full-service digital agency 
                  with over 30 talented professionals.
                </p>
                <p>
                  Over the years, we've partnered with startups, enterprises, and everything 
                  in between, delivering solutions that drive real business results. Our 
                  commitment to quality and innovation has earned us the trust of clients 
                  across industries.
                </p>
                <p>
                  Today, we continue to push boundaries, exploring emerging technologies 
                  like AI and machine learning while staying true to our core values of 
                  excellence, integrity, and collaboration.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="NexaTech team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl -z-10" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mb-4 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
