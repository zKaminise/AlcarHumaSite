import { Target, Eye, Heart, Award, Users2, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useNavigate } from "react-router-dom";
import teamImage from "@/assets/team-collaboration.jpg";
import missionVisionImage from "@/assets/mission-vision-hero.jpg";

const AboutUs = () => {
  const navigate = useNavigate();
  
  const approach = [
    {
      title: "Diagnóstico Preciso",
      description: "Analisamos profundamente a cultura e os processos da sua empresa para identificar a raiz dos desafios."
    },
    {
      title: "Estratégia Personalizada",
      description: "Não acreditamos em fórmulas prontas. Desenvolvemos um plano de ação exclusivo, alinhado aos seus objetivos de negócio e à sua realidade."
    },
    {
      title: "Implementação e Acompanhamento",
      description: "Atuamos lado a lado com sua equipe para garantir que a estratégia se transforme em resultados concretos e sustentáveis."
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade e resultados superiores em cada projeto."
    },
    {
      icon: Users2,
      title: "Parceria Estratégica",
      description: "Relacionamentos duradouros baseados em confiança e colaboração."
    },
    {
      icon: Eye,
      title: "Clareza",
      description: "Comunicação transparente e objetiva em todos os processos."
    },
    {
      icon: Target,
      title: "Desenvolvimento Contínuo",
      description: "Evolução constante e aprendizado para oferecer o melhor."
    },
    {
      icon: Heart,
      title: "Humanização",
      description: "Valorização das pessoas como centro de toda transformação."
    },
    {
      icon: Shield,
      title: "Ética",
      description: "A integridade e a transparência guiam nossas decisões, garantindo relações de confiança e impacto positivo."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-muted/20 to-auxiliary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="title-hero mb-8">
                Nossa Essência: <span className="text-gradient">Estratégia, Pessoas</span> e Resultados{" "}
                <span className="text-gradient">Sustentáveis</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animationType="fade-in-up" delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Entenda o que nos move, nossa filosofia de trabalho e os valores que guiam cada projeto que assumimos.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Nossa Abordagem Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollAnimation animationType="fade-in-up">
              <h2 className="title-section text-foreground mb-6">
                Nossa <span className="text-gradient">Abordagem</span>
              </h2>
            </ScrollAnimation>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {approach.map((item, index) => (
              <ScrollAnimation key={item.title} animationType="fade-in-up" delay={index * 100}>
                <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="title-section text-foreground mb-6">
                O que nos <span className="text-gradient">Define</span>
              </h1>
              <p className="subtitle-main text-muted-foreground max-w-3xl mx-auto">
                Nossos pilares fundamentais que orientam cada decisão e projeto.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollAnimation animationType="slide-in-left">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white">
                  <img
                    src={missionVisionImage}
                    alt="Propósito, Missão e Visão da Alçar Humà"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-90 flex items-center justify-center shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
              </div>
            </ScrollAnimation>

            {/* Content */}
            <div className="space-y-8">
              {/* Propósito */}
              <ScrollAnimation animationType="fade-in-up">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  <div className="pl-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h1 className="text-2xl font-bold text-foreground">Propósito</h1>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Descomplicar a gestão e potencializar pessoas, transformando desafios em 
                      oportunidades de crescimento sustentável.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Missão */}
              <ScrollAnimation animationType="fade-in-up" delay={100}>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-auxiliary to-primary rounded-full"></div>
                  <div className="pl-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h1 className="text-2xl font-bold text-foreground">Missão</h1>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Oferecer soluções integradas de gestão, governança e desenvolvimento humano, 
                      guiando empreendedores e líderes na construção de negócios prósperos, éticos e humanizados.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Visão */}
              <ScrollAnimation animationType="fade-in-up" delay={200}>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-auxiliary rounded-full"></div>
                  <div className="pl-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                        <Eye className="h-6 w-6 text-white" />
                      </div>
                      <h1 className="text-2xl font-bold text-foreground">Visão</h1>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Ser referência como parceira estratégica no desenvolvimento e estruturação de 
                      pequenas e médias empresas, reconhecida por gerar resultados mensuráveis através 
                      da valorização do capital humano.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="title-section text-foreground mb-6">
                Nossos <span className="text-gradient">Valores</span>
              </h1>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {values.map((value, index) => (
              <div key={value.title} className="flex h-full">
                <ScrollAnimation animationType="fade-in-up" delay={index * 100} className="flex-1 h-full">
                  <Card className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-card-dark-foreground">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-card-dark-foreground-muted leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollAnimation animationType="slide-in-left">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white">
                  <img
                    src={teamImage}
                    alt="Ecossistema de especialistas"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <Users2 className="h-6 w-6 text-white" />
                </div>
              </div>
            </ScrollAnimation>

            {/* Content */}
            <div className="space-y-8">
              <ScrollAnimation animationType="fade-in-up">
                <h1 className="title-section text-foreground">
                  Mais que uma consultoria, uma{" "}
                  <span className="text-gradient">rede de inteligência.</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animationType="fade-in-up" delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acreditamos que os melhores resultados nascem da colaboração. Por isso, cultivamos 
                  um ecossistema de especialistas parceiros, cuidadosamente selecionados, que são 
                  referências em suas áreas: finanças, marketing, tecnologia, direito tributário, 
                  entre outros. Quando você contrata a Alçar Humà, não tem acesso apenas à nossa 
                  expertise, mas a uma rede completa de profissionais prontos para solucionar de 
                  forma integrada as demandas do seu negócio.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animationType="fade-in-up" delay={400}>
                <Button 
                  className="btn-hero group"
                  onClick={() => {
                    navigate('/parceiros');
                    window.scrollTo(0, 0);
                  }}
                >
                  <Users2 className="mr-3 h-5 w-5" />
                  Conheça nossos parceiros
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;