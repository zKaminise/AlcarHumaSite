import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import ScrollAnimation from "./ScrollAnimation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-auxiliary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="title-hero">
                <span className="text-gradient">Transformar pessoas.</span>
                <br />
                <span className="text-foreground">Fortalecer empresas.</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={200}>
              <p className="subtitle-main text-muted-foreground max-w-2xl">
                Integramos governança, gestão de riscos e desenvolvimento humano para construir 
                organizações resilientes, eficientes e preparadas para o futuro.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="btn-hero group">
                  Descubra o Método Impulsionar
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button className="btn-hero-secondary group">
                  Conheça Nossas Soluções
                  <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Hero Image */}
          <ScrollAnimation animationType="slide-in-right" delay={300}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6" />
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="Consultoria estratégica Alçar Humà"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;