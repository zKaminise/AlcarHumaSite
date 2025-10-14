import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const FaleConosco = () => {
  const whatsappNumber = "5511999999999"; // Formato: código do país + DDD + número
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Alçar Humà.");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-10 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation animationType="fade-in-up">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="title-hero mb-6">
                <span className="text-gradient">Fale Conosco</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
                Transforme desafios em oportunidades. Nossa equipe de especialistas está pronta 
                para impulsionar o crescimento da sua empresa.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Image Section with CTA */}
      <section className="py-12 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollAnimation animationType="slide-in-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                <img
                  src={teamCollaboration}
                  alt="Equipe Alçar Humà - Consultoria e Desenvolvimento"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="slide-in-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Transforme Desafios em <span className="text-gradient">Oportunidades</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa equipe de especialistas está pronta para entender suas necessidades 
                  e propor soluções sob medida para o seu negócio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="btn-hero group"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/5"
                    onClick={() => window.location.href = 'mailto:contato@alcarhumana.com.br'}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar E-mail
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos <span className="text-gradient">Canais de Atendimento</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escolha a melhor forma de entrar em contato conosco
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* WhatsApp Card */}
            <ScrollAnimation delay={100} animationType="fade-in-up">
              <div className="group relative bg-gradient-to-br from-green-500/10 to-green-600/5 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-4">(11) 99999-9999</p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-green-600 hover:text-green-700 hover:bg-green-500/10 p-0 h-auto font-semibold"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    Iniciar conversa →
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Email Card */}
            <ScrollAnimation delay={200} animationType="fade-in-up">
              <div className="group relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">E-mail</h3>
                  <p className="text-muted-foreground text-sm mb-1 break-all">contato@alcarhumana.com.br</p>
                  <p className="text-xs text-muted-foreground/70 mb-4">Resposta em até 24h</p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-500/10 p-0 h-auto font-semibold"
                    onClick={() => window.location.href = 'mailto:contato@alcarhumana.com.br'}
                  >
                    Enviar e-mail →
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Horários Card */}
            <ScrollAnimation delay={300} animationType="fade-in-up">
              <div className="group relative bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">Horários</h3>
                  <p className="text-muted-foreground text-sm mb-1">Segunda à sexta</p>
                  <p className="text-foreground font-semibold mb-2">8h às 18h</p>
                  <p className="text-xs text-muted-foreground/70">Presencial ou on-line</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Localização Card */}
            <ScrollAnimation delay={400} animationType="fade-in-up">
              <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">Localização</h3>
                  <p className="text-muted-foreground text-sm mb-1">São Paulo, SP</p>
                  <p className="text-foreground font-semibold mb-2">Brasil</p>
                  <p className="text-xs text-muted-foreground/70">Atendimento em todo território nacional</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Nossa Localização
                </h2>
                <p className="text-muted-foreground">
                  Baseados em São Paulo, atendemos clientes em todo o Brasil
                </p>
              </div>
              
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0973848166833!2d-46.65844662493743!3d-23.561187178776234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1695000000000!5m2!1spt!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaleConosco;
