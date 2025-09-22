import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useNavigate } from "react-router-dom";
import { Users, Target, Network } from "lucide-react";

// Dados de exemplo dos parceiros - serão substituídos pelos dados reais
const parceiros = [
  {
    id: 1,
    nome: "Dr. Ricardo Silva",
    especialidade: "Especialista em Comunicação Não-Violenta e Liderança",
    descricao: "Com mais de 15 anos de experiência em desenvolvimento humano, Dr. Ricardo traz metodologias inovadoras para transformar a comunicação organizacional e fortalecer a liderança.",
    logo: "/placeholder.svg", // Será substituído pela logo real
  },
  {
    id: 2,
    nome: "Ana Carolina Mendes",
    especialidade: "Consultora em Proteção de Dados e LGPD",
    descricao: "Especialista reconhecida em compliance e proteção de dados, Ana Carolina garante que sua empresa esteja alinhada com as melhores práticas de segurança da informação.",
    logo: "/placeholder.svg", // Será substituído pela logo real
  },
  {
    id: 3,
    nome: "Carlos Eduardo Nunes",
    especialidade: "Consultor em Gestão de Riscos Empresariais",
    descricao: "Expert em identificação e mitigação de riscos corporativos, Carlos Eduardo desenvolve estratégias robustas para proteger e fortalecer organizações.",
    logo: "/placeholder.svg", // Será substituído pela logo real
  },
];

const Parceiros = () => {
  const navigate = useNavigate();
  const [selectedParceiro, setSelectedParceiro] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 px-4 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Nosso Ecossistema de Especialistas
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Acreditamos no poder da colaboração. Unimos os melhores talentos de diversas áreas 
              para entregar a solução mais completa e precisa para o seu desafio.
            </h2>
          </ScrollAnimation>
        </div>
      </section>

      {/* Texto Introdutório */}
      <section className="py-10 px-4 bg-gradient-to-br from-muted/5 to-background">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <Card className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg text-card-dark-foreground-muted leading-relaxed mb-6">
                  Em um mundo de desafios empresariais cada vez mais complexos e multifacetados, 
                  sabemos que nenhuma empresa, por mais competente que seja, detém todas as respostas. 
                  Na Alçar Humà, valorizamos a inteligência coletiva e a expertise complementar. 
                  Por isso, construímos com rigor um ecossistema de parceiros estratégicos – profissionais 
                  e empresas renomadas em suas áreas de atuação – que ampliam a nossa capacidade de 
                  entregar soluções integradas e de alta performance.
                </p>
                <p className="text-lg text-card-dark-foreground-muted leading-relaxed">
                  Quando você escolhe a Alçar Humà, não acessa apenas o nosso know-how, mas uma rede 
                  cuidadosamente curada de talentos prontos para alavancar seu negócio.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Galeria de Especialistas */}
      <section className="py-12 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <Users className="w-16 h-16 mx-auto text-primary mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossos Especialistas
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Conheça os profissionais que compõem nossa rede de excelência
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parceiros.map((parceiro, index) => (
              <ScrollAnimation key={parceiro.id} delay={index * 100}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <img 
                            src={parceiro.logo} 
                            alt={`Logo ${parceiro.nome}`}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-card-dark-foreground mb-2">
                          {parceiro.nome}
                        </h3>
                        <p className="text-card-dark-foreground font-medium mb-3">
                          {parceiro.especialidade}
                        </p>
                        <p className="text-card-dark-foreground-muted text-sm leading-relaxed line-clamp-3">
                          {parceiro.descricao}
                        </p>
                        <div className="mt-4 bg-white text-primary text-sm font-medium px-3 py-1 rounded-md inline-block group-hover:bg-white/90 transition-colors duration-300">
                          Saiba mais →
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                          <img 
                            src={parceiro.logo} 
                            alt={`Logo ${parceiro.nome}`}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        {parceiro.nome}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="text-center space-y-4">
                      <p className="text-primary font-medium">
                        {parceiro.especialidade}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {parceiro.descricao}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Nossa Parceria */}
      <section className="py-12 px-4 bg-gradient-to-br from-muted/5 to-background">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <Network className="w-16 h-16 mx-auto text-primary mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Inteligência Coletiva a Serviço do Seu Negócio
              </h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="max-w-4xl mx-auto">
              <Card className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <p className="text-lg text-card-dark-foreground-muted leading-relaxed mb-6">
                    Entendemos que gerenciar múltiplos fornecedores e especialistas pode ser um 
                    desafio para qualquer empresa, especialmente para pequenas e médias. Por isso, 
                    na Alçar Humà, simplificamos esse processo para você.
                  </p>
                  <p className="text-lg text-card-dark-foreground-muted leading-relaxed mb-6">
                    Nós atuamos como seu único ponto de contato, realizando a curadoria, a gestão 
                    e a integração de todos os especialistas necessários para o seu projeto. Isso 
                    significa que você se beneficia da mais alta expertise em diversas áreas, sem 
                    a complexidade operacional.
                  </p>
                  <p className="text-lg text-card-dark-foreground-muted leading-relaxed">
                    Nosso papel é garantir que todas as pontas se conectem, que a comunicação seja 
                    fluida e que o resultado final seja uma solução coesa, alinhada aos seus objetivos 
                    e entregue com a excelência que sua empresa merece. Sua jornada conosco é clara, 
                    eficiente e focada em resultados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                onClick={() => navigate('/sobre-nos')}
              >
                Fale com um Especialista
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parceiros;