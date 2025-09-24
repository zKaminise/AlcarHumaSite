import { Shield, Building, UserCheck, Presentation } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Gestão de Riscos Psicossociais (NR-1)",
      description: "Transforme a conformidade com a NR-1 em uma vantagem competitiva. Mapeamos riscos, desenvolvemos planos de ação e promovemos uma cultura de segurança psicológica e bem-estar.",
      buttonText: "Saiba Mais"
    },
    {
      icon: Building,
      title: "Governança, Riscos e Conformidade (GRC)",
      description: "Fortaleça as bases do seu negócio. Implementamos estruturas de governança robustas, gerenciamos riscos e garantimos a conformidade para proteger e otimizar toda sua operação.",
      buttonText: "Saiba Mais"
    },
    {
      icon: UserCheck,
      title: "Mentorias de Carreira e Negócios",
      description: "Impulsione seu potencial máximo. Oferecemos mentoria individual para profissionais que buscam clareza e crescimento na carreira, e para empreendedores que desejam estruturar e escalar seus negócios.",
      buttonText: "Conheça as Mentorias"
    },
    {
      icon: Presentation,
      title: "Palestras &\nWorkshops",
      description: "Nossas palestras e workshops levam conteúdo prático e relevante que inspira a ação a equipes e lideranças sobre temas como liderança humanizada, comunicação, cultura e tendências.",
      buttonText: "Ver Temas de Palestras"
    }
  ];

  return (
    <section id="solucoes" className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollAnimation animationType="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Soluções Estratégicas para um{" "}
              <span className="text-gradient">Crescimento Sustentável</span>
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-in-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Navegue por nossos pilares de atuação e encontre a solução ideal para os desafios da sua empresa.
            </p>
          </ScrollAnimation>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="relative">
              {/* Icon */}
              <ScrollAnimation animationType="fade-in-up" delay={index * 100}>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-md">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </ScrollAnimation>

              {/* Service Card */}
              <ServiceCard
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                delay={index * 100 + 100}
                onClick={() => console.log(`Navigate to ${service.title}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;