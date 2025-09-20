import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const CTA = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-90" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollAnimation animationType="fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              Vamos construir o futuro do seu{" "}
              <span className="text-auxiliary">negócio juntos?</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animationType="fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
              Agende uma conversa sem compromisso e descubra como a Alçar Humà pode 
              ajudar sua empresa a alcançar novos patamares.
            </p>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation animationType="fade-in-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Fale com um Especialista
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <Phone className="mr-3 h-5 w-5" />
                Ligue Agora
              </Button>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation animationType="fade-in-up" delay={400}>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <Phone className="h-8 w-8 text-auxiliary mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-2">Telefone</h3>
                <p className="text-primary-foreground/80">(11) 9999-9999</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <Mail className="h-8 w-8 text-auxiliary mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-2">E-mail</h3>
                <p className="text-primary-foreground/80">contato@alcarhumacom.br</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <Calendar className="h-8 w-8 text-auxiliary mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-2">Horário</h3>
                <p className="text-primary-foreground/80">Seg-Sex, 9h-18h</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;