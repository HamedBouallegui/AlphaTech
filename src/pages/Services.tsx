import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Database,
  Brain,
  Shield,
  BarChart3,
  ArrowRight,
  Check,
  MonitorPlay,
  Megaphone,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies. From responsive marketing sites to complex enterprise platforms, we deliver scalable solutions.",
    features: [
      "React, Vue, Angular development",
      "Progressive Web Apps (PWA)",
      "E-commerce platforms",
      "Content Management Systems",
      "API development & integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences. We build for iOS, Android, and beyond.",
    features: [
      "iOS & Android native apps",
      "React Native & Flutter",
      "App Store optimization",
      "Push notifications & analytics",
      "Offline-first architecture",
    ],
  },
  {
    icon: MonitorPlay,
    title: "Presentation Creation",
    description:
      "Compelling visual storytelling for your business. We create professional presentations that engage your audience and deliver your message effectively.",
    features: [
      "Corporate pitch decks",
      "Sales presentations",
      "Conference slides",
      "Interactive templates",
      "Visual data storytelling",
    ],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.",
    features: [
      "Machine learning models",
      "Natural language processing",
      "Computer vision systems",
      "Predictive analytics",
      "AI chatbots & assistants",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Ads",
    description:
      "Boost your brand visibility and ROI with targeted digital marketing campaigns and strategic advertising solutions.",
    features: [
      "Social media advertising",
      "Google Ads (PPC) campaigns",
      "SEO optimization",
      "Content marketing strategy",
      "Email marketing automation",
    ],
  },
  {
    icon: Palette,
    title: "Poster, Logo & CV Design",
    description:
      "Creative graphic design solutions to elevate your brand identity. From logos to marketing materials, we make you look your best.",
    features: [
      "Professional logo design",
      "Event posters & banners",
      "Modern CV/Resume design",
      "Brand identity packages",
      "Marketing collateral",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Techora | Web, Mobile, AI & Enterprise Solutions</title>
        <meta
          name="description"
          content="Explore Techora's comprehensive services: web development, mobile apps, presentation creation, AI solutions, digital marketing, and graphic design."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up-delay-1">
              End-to-end digital solutions designed to drive your business forward.
              From concept to deployment, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 pulse-3d">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link to="/contact">
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-card border border-border overflow-hidden transform-3d-hover shadow-3d hover:shadow-3d-hover">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/20 rotate-3d" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  </div>
                  <div
                    className={`absolute -bottom-4 ${index % 2 === 0 ? "-right-4" : "-left-4"
                      } w-24 h-24 bg-primary/20 rounded-xl -z-10 float-3d`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 perspective-1000">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Planning", desc: "Defining scope, timeline, and resources" },
              { step: "03", title: "Development", desc: "Building with agile methodology" },
              { step: "04", title: "Delivery", desc: "Launch, support, and iteration" },
            ].map((phase, index) => (
              <div key={phase.step} className="relative text-center card-3d p-4 rounded-xl">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help bring your project to life.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
