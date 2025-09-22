import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Compass, Rocket, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MetodoImpulsionar = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Target,
      title: "PDI Estratégico",
      description: "Um plano de desenvolvimento que realmente sai do papel.",
    },
    {
      icon: Compass,
      title: "Clareza de Carreira",
      description: "Mapeamento de perfil e direcionamento profissional.",
    },
    {
      icon: Rocket,
      title: "Resultados Acelerados",
      description: "Ferramentas práticas para sua evolução imediata.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Método Impulsionar:{" "}
                <span className="text-gradient">
                  Sua Carreira em Aceleração
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Cansado de sentir que sua carreira está estagnada? Precisa se preparar para assumir uma posição de liderança? Quer melhorar seus resultados? O Impulsionar é nossa metodologia exclusiva, aplicada em um Programa de Desenvolvimento Individual (PDI), que transforma potencial em liderança. Mapeamos suas competências, definimos metas claras e criamos um plano de ação para você alcançar o próximo nível. O nosso propósito é impulsionar o seu!
              </p>
            </ScrollAnimation>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={benefit.title} delay={300 + index * 100}>
                <Card className="text-center card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card-dark-foreground/20 mb-6">
                      <benefit.icon className="h-8 w-8 text-card-dark-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-dark-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-card-dark-foreground-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mt-20">
          <ScrollAnimation delay={600}>
            <div className="text-center">
              <Button 
                size="lg"
                className="btn-hero text-lg px-8 py-4 h-auto"
                onClick={() => navigate("/contato")}
              >
                Quero Impulsionar Minha Carreira
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MetodoImpulsionar;