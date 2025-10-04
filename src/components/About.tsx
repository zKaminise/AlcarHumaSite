import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import integrationImage from "@/assets/integration-image.jpg";
import founderImage from "@/assets/founder-image.jpg";
import ScrollAnimation from "./ScrollAnimation";

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="sobre" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="title-section text-foreground">
                Mais que uma consultoria, uma{" "}
                <span className="text-gradient">parceira estratégica</span>{" "}
                para o seu crescimento.
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Alçar humà nasceu da convicção 
                de que empresas de sucesso são construídas sobre dois pilares: processos 
                inteligentes e pessoas valorizadas.
              </p>
            </ScrollAnimation>

            {/* Stats/Features */}
            <ScrollAnimation animationType="fade-in-up" delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h1 className="font-semibold text-foreground">Pessoas</h1>
                  <p className="text-sm text-muted-foreground">Valorizadas</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h1 className="font-semibold text-foreground">Processos</h1>
                  <p className="text-sm text-muted-foreground">Inteligentes</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h1 className="font-semibold text-foreground">Resultados</h1>
                  <p className="text-sm text-muted-foreground">Duradouros</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={400}>
              <Button className="btn-hero group" onClick={() => {
                navigate("/sobre-nos");
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}>
                Nosso Propósito
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </ScrollAnimation>
          </div>

          {/* Images */}
          <div className="relative">
            <ScrollAnimation animationType="slide-in-right" delay={200}>
              <div className="relative">
                {/* Main image */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg bg-white">
                  <img
                    src={integrationImage}
                    alt="Integração de processos e pessoas"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Founder image overlay */}
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-background bg-white">
                  <img
                    src={founderImage}
                    alt="Marianna S. P. Aquino - Fundadora"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;