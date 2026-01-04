import { Helmet } from "react-helmet-async";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ride Share Platform",
    category: "Transportation",
    description:
      "A ride share platform that connects drivers with riders, featuring real-time analytics, automated reporting, and AI-powered insights for enterprise clients.",
    tech: ["React", "Node.js", "MongoDB", "express.js"],
    image: "/car.png",
    link: "https://couvoiturage-hayder-jacer.netlify.app/",
  },
  {
    title: "BLACKLISTED TRADERS",
    category: "E-Learning",
    description:
      "Blacklisted Traders is an E-Learning platform that allows users to learn trading online.",
    tech: ["React", "Node.js", "MongoDB", "express.js"],
    image: "/blacklisted.png",
    link: "https://blacklistedtraders.netlify.app/",
  },
  {
    title: "CarWash App",
    category: "E-Commerce",
    description:
      "🚗 CarWash App A mobile application for managing car wash bookings easily and efficiently. Built with Flutter for the frontend, Spring Boot for the backend, and MySQL as the database.",
    tech: ["Flutter", "Spring Boot", "MySQL"],
    image: "/carwash.png",
    link: "https://github.com/HamedBouallegui/Car_Wash"
  },
  {
    title: "Library Managment",
    category: "E-Learning",
    description:
      "A cross-platform mobile application built with Flutter for a delivery service platform. The app supports multiple user roles with dedicated dashboards for clients, merchants, delivery drivers, and administrators.",
    tech: ["PHP", "Blade", "mysql", "Laravel"],
    image: "/library.png",
    link: "https://github.com/HayderLabidi/libraray_managment"
  },
  {
    title: "Travel App",
    category: "Travel",
    description:
      "A comprehensive travel application built with Flutter and Spring Boot, featuring destination discovery, booking, and itinerary management.",
    tech: ["Flutter", "Spring Boot", "MySQL"],
    image: "/travel.png",
    link: "https://github.com/HayderLabidi/Travel_app"
  },
  {
    title: "Delivery App",
    category: "E-Commerce",
    description:
      "A cross-platform mobile application built with Flutter for a delivery service platform. The app supports multiple user roles with dedicated dashboards for clients, merchants, delivery drivers, and administrators.",
    tech: ["Flutter", "node.js", "mongodb", "express.js", "Docker"],
    image: "/delivery_app.png",
    link: "https://github.com/HamedBouallegui/Delivery_App"
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects - Techora | Portfolio of Digital Solutions</title>
        <meta
          name="description"
          content="Explore Techora's portfolio of successful projects across FinTech, Healthcare, Supply Chain, EdTech, and more. See our work in action."
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-2000">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 card-3d shadow-3d hover:shadow-3d-hover"
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
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity pulse-3d">
                  <a
                    href={project.link || "#"}
                    target={project.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 perspective-1000">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Industries Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center card-3d p-4 rounded-xl">
                <div className="text-4xl sm:text-5xl font-bold text-gradient pulse-3d">
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
