import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Compass, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import ImpulsionarRequestModal from "@/components/ImpulsionarRequestModal";
import metodoStepsImage from "@/assets/metodo-steps.jpg";

const MetodoImpulsionar = () => {
  const [modalOpen, setModalOpen] = useState(false);

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

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Profundo",
      description: "Mapeamento completo do seu perfil, competências e objetivos de carreira através de ferramentas validadas.",
    },
    {
      number: "02",
      title: "Planejamento Estratégico",
      description: "Construção do seu PDI personalizado com metas claras, prazos definidos e indicadores de progresso.",
    },
    {
      number: "03",
      title: "Desenvolvimento Contínuo",
      description: "Acompanhamento próximo com sessões de mentoria, ferramentas práticas e ajustes ao longo do processo.",
    },
    {
      number: "04",
      title: "Resultados Tangíveis",
      description: "Avaliação de resultados, celebração de conquistas e preparação para os próximos passos da sua jornada.",
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
              <h1 className="title-hero text-gradient mb-8">
                Programa Impulsionar - Sua carreira em aceleração
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Cansado de sentir que sua carreira está estagnada? Precisa se preparar para assumir uma posição de liderança? Quer melhorar seus resultados? Nossa abordagem guia um Plano de Desenvolvimento Individual (PDI), que transforma potencial em liderança. Mapeamos suas competências, definimos metas claras e criamos um plano de ação para você alcançar o próximo nível. O nosso propósito é impulsionar o seu!
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
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-xl font-semibold text-card-dark-foreground mb-4">
                      {benefit.title}
                    </h1>
                    <p className="text-card-dark-foreground-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="container mx-auto px-4 mt-24">
          <ScrollAnimation>
            <h2 className="title-section text-center mb-4">
              Como funciona o <span className="text-gradient">Programa Impulsionar</span>
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Uma jornada estruturada em 4 etapas para transformar sua carreira
            </p>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <ScrollAnimation delay={300}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={metodoStepsImage} 
                  alt="Etapas do Método Impulsionar" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <ScrollAnimation key={step.number} delay={400 + index * 100}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <div className="container mx-auto px-4 mt-20">
          <ScrollAnimation delay={600}>
            <div className="text-center">
              <Button 
                size="lg"
                className="btn-hero text-lg px-8 py-4 h-auto"
                onClick={() => setModalOpen(true)}
              >
                Quero Impulsionar Minha Carreira
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </main>

      <ImpulsionarRequestModal 
        open={modalOpen} 
        onOpenChange={setModalOpen}
      />

      <Footer />
    </div>
  );
};

export default MetodoImpulsionar;