import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, ClipboardCheck, FileText, Users } from "lucide-react";
import WorkshopRequestModal from "@/components/WorkshopRequestModal";
import palestrasHeroImage from "@/assets/palestras-hero.png";

const PalestrasWorkshops = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [requestType, setRequestType] = useState<"palestra" | "workshop">("palestra");

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5567996442404', '_blank');
  };

  const handleCustomRequest = (type: "palestra" | "workshop") => {
    setRequestType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animationType="fade-in-up">
            <h1 className="title-hero mb-6 text-center">
              Palestras e Workshops que <span className="text-gradient">Transformam Equipes</span> e Fortalecem{" "}
              <span className="text-gradient">Negócios</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-in-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-12">
              Desenvolvemos e aplicamos treinamentos com foco em comunicação, liderança e conformidade, adaptados à realidade da sua empresa.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animationType="fade-in-up" delay={400}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img 
                src={palestrasHeroImage} 
                alt="Palestrante apresentando workshop para audiência" 
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfólio de Palestras */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animationType="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Nosso Portfólio de Palestras
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              title="Comunicação Não Violenta"
              description="Aprenda a criar um ambiente de trabalho mais empático e colaborativo, reduzindo conflitos e aumentando a produtividade."
              buttonText="Leve para sua Empresa"
              delay={100}
              onClick={handleWhatsAppContact}
            />

            <ServiceCard
              title="NR-1 Descomplicada"
              description="Garanta a conformidade e a segurança da sua equipe com um treinamento claro e objetivo sobre as diretrizes da Norma Regulamentadora 1."
              buttonText="Leve para sua Empresa"
              delay={200}
              onClick={handleWhatsAppContact}
            />
          </div>

          <ScrollAnimation animationType="fade-in-up" delay={300}>
            <p className="text-center text-muted-foreground mt-8 italic">
              Público-alvo: Líderes, equipes, acadêmicos que se preparam ou já encontram-se no mercado de trabalho.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tema Específico Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animationType="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Precisa de um Tema Específico?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animationType="fade-in-up" delay={200}>
            <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
              Entendemos que cada empresa tem desafios únicos. Além de nosso portfólio, desenvolvemos palestras e workshops totalmente personalizados para atender às suas necessidades. Fale conosco sobre seus objetivos e criaremos uma solução exclusiva para você.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animationType="fade-in-up" delay={300}>
            <div className="flex justify-center">
              <Button 
                className="btn-hero group"
                size="lg"
                onClick={() => handleCustomRequest("palestra")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar uma Palestra Personalizada
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Workshop Ideal Section */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <ScrollAnimation animationType="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Desenvolvemos o Workshop Ideal para sua Equipe
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animationType="fade-in-up" delay={200}>
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-3xl mx-auto">
              Cada empresa tem desafios únicos. Por isso, nossa especialidade é construir workshops sob medida. A partir de um diagnóstico preciso das suas necessidades, criamos experiências de aprendizado interativas e com foco em resultados práticos para o seu time.
            </p>
          </ScrollAnimation>

          {/* Como Funciona */}
          <ScrollAnimation animationType="fade-in-up" delay={300}>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              Como funciona?
            </h3>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimation animationType="fade-in-up" delay={400}>
              <div className="bg-card-dark backdrop-blur-sm border border-border/30 rounded-lg p-6 text-center hover:border-primary/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ClipboardCheck className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-card-dark-foreground mb-3">Diagnóstico</h4>
                <p className="text-card-dark-foreground-muted">
                  Você preenche nosso formulário de briefing.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={500}>
              <div className="bg-card-dark backdrop-blur-sm border border-border/30 rounded-lg p-6 text-center hover:border-primary/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-card-dark-foreground mb-3">Desenho</h4>
                <p className="text-card-dark-foreground-muted">
                  Montamos uma proposta de workshop exclusiva.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={600}>
              <div className="bg-card-dark backdrop-blur-sm border border-border/30 rounded-lg p-6 text-center hover:border-primary/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-card-dark-foreground mb-3">Execução</h4>
                <p className="text-card-dark-foreground-muted">
                  Realizamos a aplicação com sua equipe.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animationType="fade-in-up" delay={700}>
            <div className="flex justify-center">
              <Button 
                className="btn-hero group"
                size="lg"
                onClick={() => handleCustomRequest("workshop")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar um Workshop Personalizado
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <WorkshopRequestModal 
        open={modalOpen} 
        onOpenChange={setModalOpen}
        requestType={requestType}
      />

      <Footer />
    </div>
  );
};

export default PalestrasWorkshops;
