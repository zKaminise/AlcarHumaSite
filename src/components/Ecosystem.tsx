import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Lightbulb, Users2 } from "lucide-react";
import ecosystemImage from "@/assets/ecosystem-image.jpg";
import ScrollAnimation from "./ScrollAnimation";

const Ecosystem = () => {
  return (
    <section id="ecossistema" className="py-12 bg-gradient-to-br from-auxiliary/20 to-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollAnimation animationType="slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform -rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={ecosystemImage}
                  alt="Ecossistema de especialistas Alçar Humà"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Network className="h-10 w-10 text-primary-foreground" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-auxiliary rounded-2xl flex items-center justify-center shadow-md">
                <Users2 className="h-8 w-8 text-auxiliary-foreground" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <div className="space-y-8">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="title-section text-foreground">
                <span className="text-gradient">Inteligência Coletiva</span>{" "}
                para o seu Negócio
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Não oferecemos soluções de prateleira. Contamos com um ecossistema de especialistas 
                parceiros em diversas áreas – de finanças a tecnologia – para garantir que cada desafio 
                da sua empresa seja analisado sob múltiplas perspectivas e resolvido com a máxima excelência.
              </p>
            </ScrollAnimation>

            {/* Features */}
            <ScrollAnimation animationType="fade-in-up" delay={300}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-foreground mb-2">Soluções Personalizadas</h1>
                    <p className="text-muted-foreground">Cada desafio é único e merece uma abordagem específica e inteligente.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Network className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-foreground mb-2">Rede de Especialistas</h1>
                    <p className="text-muted-foreground">Acesso a profissionais de elite em diversas áreas de conhecimento.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Users2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-foreground mb-2">Múltiplas Perspectivas</h1>
                    <p className="text-muted-foreground">Análise 360° dos desafios para soluções mais robustas e eficazes.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={400}>
              <Button className="btn-hero group">
                Conheça nosso Ecossistema
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;