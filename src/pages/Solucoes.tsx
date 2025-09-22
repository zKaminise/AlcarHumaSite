import { CheckCircle, Target, TrendingDown, Zap, Shield, Scale, BarChart3, Cog, Lock, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useNavigate } from "react-router-dom";

const Solucoes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 px-4 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Nossas Soluções
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transformamos desafios em oportunidades através de soluções estratégicas 
              e personalizadas para sua organização.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gestão de Riscos Psicossociais Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-muted/5 to-background">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Gestão de Riscos Psicossociais (NR-1)
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Cuidado, Conformidade e Performance
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Vamos além da obrigação legal. Transformamos a gestão de riscos psicossociais 
                em um pilar para um ambiente de trabalho mais seguro, saudável e produtivo.
              </p>
              <div className="bg-card-dark border border-border/30 rounded-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold text-card-dark-foreground mb-2">Para quem é?</h3>
                <p className="text-card-dark-foreground-muted">
                  Para líderes, gestores de RH e empresas comprometidas com o bem-estar de suas 
                  equipes e que buscam se adequar proativamente às novas diretrizes da NR-1.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Nossa Abordagem */}
          <ScrollAnimation delay={200}>
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Nossa Abordagem
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    step: "1",
                    title: "Diagnóstico e Mapeamento de Riscos",
                    description: "Identificamos os fatores de risco psicossocial presentes na sua organização através de metodologias validadas."
                  },
                  {
                    step: "2",
                    title: "Palestra Estratégica para Lideranças",
                    description: "\"NR-1 Descomplicada\": Capacitamos seus líderes para entenderem a norma, seu papel e o impacto dos riscos psicossociais no negócio."
                  },
                  {
                    step: "3",
                    title: "Elaboração do Plano de Ação",
                    description: "Cocriamos um plano de ação prático e personalizado para mitigar os riscos identificados, com metas claras e cronograma."
                  },
                  {
                    step: "4",
                    title: "Atuação Direta e Suporte",
                    description: "Atuamos na implementação de ações, como workshops sobre comunicação não violenta, programas de segurança psicológica e treinamentos para a liderança."
                  }
                ].map((item, index) => (
                  <Card key={index} className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-card-dark-foreground mb-2">
                            {item.title}
                          </h4>
                          <p className="text-card-dark-foreground-muted leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Benefícios NR-1 */}
          <ScrollAnimation delay={400}>
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Benefícios
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: CheckCircle, title: "Conformidade total com a NR-1", color: "text-green-500" },
                  { icon: Target, title: "Promoção da saúde mental e bem-estar", color: "text-blue-500" },
                  { icon: TrendingDown, title: "Redução do absenteísmo e do turnover", color: "text-orange-500" },
                  { icon: Zap, title: "Aumento do engajamento e da produtividade", color: "text-yellow-500" },
                  { icon: Shield, title: "Fortalecimento da sua marca empregadora", color: "text-purple-500" }
                ].map((benefit, index) => (
                  <Card key={index} className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <benefit.icon className={`w-8 h-8 mx-auto mb-3 ${benefit.color}`} />
                      <p className="text-card-dark-foreground font-medium">{benefit.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                onClick={() => navigate('/sobre-nos')}
              >
                Solicite um Diagnóstico para sua Empresa
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* GRC Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Governança, Riscos e Conformidade (GRC)
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Estrutura Sólida para Decisões Inteligentes
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Construímos os alicerces para que sua empresa cresça de forma segura, 
                eficiente e transparente.
              </p>
              <div className="bg-card-dark border border-border/30 rounded-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold text-card-dark-foreground mb-2">Para quem é?</h3>
                <p className="text-card-dark-foreground-muted">
                  Para empresas em crescimento que precisam organizar processos, mitigar riscos, 
                  garantir a conformidade (incluindo LGPD) e preparar a organização para o próximo 
                  nível de maturidade.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Nossa Abordagem Integrada */}
          <ScrollAnimation delay={200}>
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Nossa Abordagem Integrada
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Governança Corporativa",
                    description: "Estruturamos papéis, responsabilidades e mecanismos de decisão para garantir alinhamento estratégico e agilidade."
                  },
                  {
                    title: "Gestão de Riscos",
                    description: "Implementamos processos para identificar, avaliar e monitorar continuamente os riscos que podem impactar seus objetivos."
                  },
                  {
                    title: "Auditorias e Controles Internos",
                    description: "Desenhamos e recomendamos controles internos para otimizar a eficiência operacional e garantir a integridade das informações."
                  },
                  {
                    title: "Compliance e Conformidade",
                    description: "Asseguramos a adequação a normas, políticas internas e legislações, incluindo a Lei Geral de Proteção de Dados (LGPD)."
                  },
                  {
                    title: "Governança de Dados e Segurança",
                    description: "Criamos políticas e controles para o uso ético e seguro das informações, protegendo o ativo mais valioso da sua empresa."
                  }
                ].map((item, index) => (
                  <Card key={index} className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-card-dark-foreground mb-3">
                        {item.title}
                      </h4>
                      <p className="text-card-dark-foreground-muted leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Benefícios GRC */}
          <ScrollAnimation delay={400}>
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Benefícios
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Scale, title: "Maior segurança jurídica e operacional", color: "text-blue-500" },
                  { icon: Target, title: "Tomada de decisão mais rápida e embasada", color: "text-green-500" },
                  { icon: Cog, title: "Otimização de processos e redução de custos", color: "text-orange-500" },
                  { icon: Lock, title: "Proteção de dados e reputação da marca", color: "text-red-500" },
                  { icon: Sprout, title: "Preparação para receber investimentos e escalar o negócio", color: "text-emerald-500" }
                ].map((benefit, index) => (
                  <Card key={index} className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <benefit.icon className={`w-8 h-8 mx-auto mb-3 ${benefit.color}`} />
                      <p className="text-card-dark-foreground font-medium">{benefit.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                onClick={() => navigate('/sobre-nos')}
              >
                Agende uma Avaliação de Maturidade em GRC
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;