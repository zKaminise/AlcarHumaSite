import { Linkedin, Target, Eye, Heart, Award, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import teamImage from "@/assets/team-collaboration.jpg";
import valuesImage from "@/assets/values-mission.jpg";

const AboutUs = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/20 to-auxiliary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animationType="fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Nossa Essência: <span className="text-gradient">Estratégia, Direito</span> e a Força do{" "}
                <span className="text-gradient">Fator Humano</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animationType="fade-in-up" delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Entenda o que nos move, a jornada que nos trouxe até aqui e os valores que guiam 
                cada projeto que assumimos.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-12">
              {/* Propósito */}
              <ScrollAnimation animationType="fade-in-up">
                <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-primary/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Propósito</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Descomplicar a gestão e potencializar pessoas, transformando desafios em 
                    oportunidades de crescimento sustentável.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Missão */}
              <ScrollAnimation animationType="fade-in-up" delay={100}>
                <div className="p-8 bg-gradient-to-br from-auxiliary/10 to-primary/5 rounded-3xl border border-auxiliary/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-auxiliary to-primary rounded-xl flex items-center justify-center">
                      <Target className="h-5 w-5 text-auxiliary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Missão</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Oferecer soluções integradas de gestão, governança e desenvolvimento humano, 
                    guiando empreendedores e líderes na construção de negócios prósperos, éticos e humanizados.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Visão */}
              <ScrollAnimation animationType="fade-in-up" delay={200}>
                <div className="p-8 bg-gradient-to-br from-secondary/5 to-auxiliary/10 rounded-3xl border border-secondary/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary to-auxiliary rounded-xl flex items-center justify-center">
                      <Eye className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Visão</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ser referência como parceira estratégica no desenvolvimento e estruturação de 
                    pequenas e médias empresas, reconhecida por gerar resultados mensuráveis através 
                    da valorização do capital humano.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Image */}
            <ScrollAnimation animationType="slide-in-right" delay={100}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white">
                  <img
                    src={valuesImage}
                    alt="Valores e missão da Alçar Humà"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-80" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollAnimation animationType="fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossos <span className="text-gradient">Valores</span>
              </h2>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} animationType="fade-in-up" delay={index * 100}>
                <Card className="card-floating card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20">
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
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-auxiliary rounded-2xl flex items-center justify-center shadow-md">
                  <Users2 className="h-6 w-6 text-auxiliary-foreground" />
                </div>
              </div>
            </ScrollAnimation>

            {/* Content */}
            <div className="space-y-8">
              <ScrollAnimation animationType="fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Mais que uma consultoria, uma{" "}
                  <span className="text-gradient">rede de inteligência.</span>
                </h2>
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
                <Button className="btn-hero group">
                  <Linkedin className="mr-3 h-5 w-5" />
                  Conecte-se conosco no LinkedIn
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