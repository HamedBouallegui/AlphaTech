import { Helmet } from "react-helmet-async";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinanceFlow Pro",
    category: "FinTech",
    description:
      "A comprehensive financial management platform featuring real-time analytics, automated reporting, and AI-powered insights for enterprise clients.",
    tech: ["React", "Node.js", "PostgreSQL", "TensorFlow", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "HealthHub Connect",
    category: "Healthcare",
    description:
      "Telemedicine platform connecting patients with healthcare providers, featuring video consultations, appointment scheduling, and health tracking.",
    tech: ["React Native", "Firebase", "WebRTC", "AWS", "HIPAA Compliant"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    title: "LogiTrack Enterprise",
    category: "Supply Chain",
    description:
      "End-to-end supply chain management system with IoT integration, predictive analytics, and real-time tracking for global logistics.",
    tech: ["Vue.js", "Python", "MongoDB", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
  {
    title: "EduLearn Platform",
    category: "EdTech",
    description:
      "Interactive e-learning platform with live classes, progress tracking, gamification elements, and personalized learning paths.",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "Stripe"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
  },
  {
    title: "RetailMax POS",
    category: "Retail",
    description:
      "Modern point-of-sale system with inventory management, customer analytics, and multi-location support for retail businesses.",
    tech: ["React", "Electron", "SQLite", "Stripe", "Square API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    title: "GreenEnergy Dashboard",
    category: "Energy",
    description:
      "Real-time energy monitoring dashboard for renewable energy installations with predictive maintenance and efficiency optimization.",
    tech: ["Angular", "Python", "InfluxDB", "TensorFlow", "IoT"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects - NexaTech | Portfolio of Digital Solutions</title>
        <meta
          name="description"
          content="Explore NexaTech's portfolio of successful projects across FinTech, Healthcare, Supply Chain, EdTech, and more. See our work in action."
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up-delay-1">
              A showcase of our work across industries. Each project represents our 
              commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Link */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Industries Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
