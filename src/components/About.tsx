import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import integrationImage from "@/assets/about-partnership.jpg";
import founderImage from "@/assets/founder-image.jpg";
import ScrollAnimation from "./ScrollAnimation";

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="sobre" className="py-10 md:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="title-section text-foreground">
                Mais que uma consultoria, uma <span className="text-gradient">parceira estratégica</span> para o seu
                crescimento.
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Alçar Humà nasceu da convicção de que empresas de sucesso são construídas sobre dois pilares:
                processos inteligentes e pessoas valorizadas.
              </p>
            </ScrollAnimation>

            {/* Stats/Features */}
            <ScrollAnimation animationType="fade-in-up" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 my-6 md:my-8">
                <div className="text-center p-3 md:p-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg">
                    <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h1 className="text-base md:text-lg font-semibold text-foreground">Pessoas</h1>
                  <p className="text-xs md:text-sm text-muted-foreground">Valorizadas</p>
                </div>
                <div className="text-center p-3 md:p-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg">
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h1 className="text-base md:text-lg font-semibold text-foreground">Processos</h1>
                  <p className="text-xs md:text-sm text-muted-foreground">Inteligentes</p>
                </div>
                <div className="text-center p-3 md:p-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg">
                    <Award className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h1 className="text-base md:text-lg font-semibold text-foreground">Resultados</h1>
                  <p className="text-xs md:text-sm text-muted-foreground">Duradouros</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={400}>
              <div className="flex justify-center lg:justify-start">
                <Button
                  className="btn-hero group"
                  onClick={() => {
                    navigate("/sobre-nos");
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                >
                  Nosso Propósito
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
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
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
