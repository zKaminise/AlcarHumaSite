import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section id="contato" className="py-12 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-90" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollAnimation animationType="fade-in-up">
            <h1 className="title-hero text-primary-foreground mb-8">
              Vamos construir o futuro do seu{" "}
              <span className="text-gradient">negócio juntos?</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animationType="fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
              Agende uma conversa sem compromisso e descubra como a Alçar Humà pode 
              ajudar sua empresa a alcançar novos patamares.
            </p>
          </ScrollAnimation>

          {/* CTA Button */}
          <ScrollAnimation animationType="fade-in-up" delay={300}>
            <div className="flex justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                onClick={() => {
                  navigate("/fale-conosco");
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}
              >
                <Calendar className="mr-4 h-7 w-7" />
                Fale com um Especialista
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;