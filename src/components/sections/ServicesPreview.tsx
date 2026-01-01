import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Database,
  Brain,
  Shield,
  BarChart3,
  ArrowRight,
  MonitorPlay,
  Megaphone,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable web applications built with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android.",
  },
  {
    icon: MonitorPlay,
    title: "Presentation Creation",
    description: "Professional presentations and pitch decks that engage your audience.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Machine learning and AI-powered tools to automate and optimize.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Ads",
    description: "Targeted campaigns and SEO strategies to boost your brand visibility.",
  },
  {
    icon: Palette,
    title: "Poster, Logo & CV Design",
    description: "Creative graphic design for logos, posters, and professional CVs.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground">
            End-to-end digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-2000">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 card-3d card-shine shadow-3d hover:shadow-3d-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors pulse-3d">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
