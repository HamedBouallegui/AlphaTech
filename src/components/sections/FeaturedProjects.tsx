import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Ride Share Platform",
    category: "Transportation",
    description: "A ride share platform that connects drivers with riders, featuring real-time analytics, automated reporting, and AI-powered insights for enterprise clients.",
    tech: ["react", "Node.js", "MongoDB", "express.js"],
    image: "public/car.png",
    link: "https://couvoiturage-hayder-jacer.netlify.app/",
  },
  {
    title: "Delivery App",
    category: "E-commerce",
    description: "A cross-platform mobile application built with Flutter for a delivery service platform. The app supports multiple user roles with dedicated dashboards for clients, merchants, delivery drivers, and administrators.",
    tech: [" Flutter", "node.js", "mongodb", "express.js", "Docker"],
    image: "public/delivery_app.png",
    link: "https://github.com/HamedBouallegui/Delivery_App",
  },
  {
    title: "BLACKLISTED TRADERS",
    category: "E-learning",
    description: "Blacklisted Traders is an E-Learning platform that allows users to learn trading online.",
    tech: ["React", "Node.js", "MongoDB", "express.js"],
    image: "public/blacklisted.png",
    link: "https://blacklistedtraders.netlify.app/",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Showcasing our latest work and the innovative solutions we've delivered for our clients
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 perspective-2000">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 card-3d shadow-3d hover:shadow-3d-hover block"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Link */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity pulse-3d">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
