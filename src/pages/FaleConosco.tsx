import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const FaleConosco = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="title-hero text-foreground mb-6">
                <span className="text-gradient">Fale Conosco</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transforme desafios em oportunidades. Nossa equipe de especialistas está pronta 
                para impulsionar o crescimento da sua empresa.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Consultoria Especializada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Resultados Mensuráveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Suporte Contínuo</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-gradient-to-br from-muted/20 via-background to-auxiliary/10">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationType="fade-in-scale">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img
                src={teamCollaboration}
                alt="Equipe Alçar Humà - Consultoria e Desenvolvimento"
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Entre em Contato
                </h1>
                <p className="text-muted-foreground text-lg">
                  Estamos aqui para impulsionar o sucesso da sua empresa. 
                  Entre em contato através dos canais abaixo.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card-dark p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-dark-foreground mb-1">WhatsApp</h4>
                    <p className="text-card-dark-foreground-muted text-sm mb-2">(11) 99999-9999</p>
                    <p className="text-xs text-card-dark-foreground-muted">Resposta mais rápida</p>
                  </div>
                </div>
              </div>

              <div className="bg-card-dark p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-dark-foreground mb-1">Email</h4>
                    <p className="text-card-dark-foreground-muted text-sm mb-2">contato@alcarhumana.com.br</p>
                    <p className="text-xs text-card-dark-foreground-muted">Resposta em até 24h</p>
                  </div>
                </div>
              </div>

              <div className="bg-card-dark p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-dark-foreground mb-1">Localização</h4>
                    <p className="text-card-dark-foreground-muted text-sm mb-3">São Paulo, SP - Brasil</p>
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0973848166833!2d-46.65844662493743!3d-23.561187178776234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1695000000000!5m2!1spt!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-xs text-card-dark-foreground-muted">Presencial ou on-line</p>
                  </div>
                </div>
              </div>

              <div className="bg-card-dark p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-dark-foreground mb-1">Horários</h4>
                    <p className="text-card-dark-foreground-muted text-sm mb-2">Segunda à sexta: 8h às 18h</p>
                    <p className="text-xs text-card-dark-foreground-muted">Presencial ou on-line</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaleConosco;
