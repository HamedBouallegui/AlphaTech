import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NexaTech - Digital Transformation & Custom Software Solutions</title>
        <meta 
          name="description" 
          content="Transform your business with NexaTech's cutting-edge software solutions. Web development, mobile apps, AI solutions, and more. 150+ projects delivered." 
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesPreview />
        <FeaturedProjects />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
