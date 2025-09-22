import { useState } from "react";
import { Search, Calendar, BookOpen, Users, Shield, Building, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const Artigos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [email, setEmail] = useState("");

  const categories = [
    { name: "Todos", icon: BookOpen },
    { name: "Liderança", icon: Users },
    { name: "Carreira", icon: Heart },
    { name: "NR-1 Riscos Psicossociais", icon: Shield },
    { name: "GRC", icon: Building },
    { name: "Gestão de Pessoas", icon: Users },
    { name: "Inovação", icon: Lightbulb },
  ];

  // Mock articles data
  const articles = [
    {
      id: 1,
      title: "Como uma Liderança Empática Transforma o Ambiente de Trabalho",
      excerpt: "Descubra como uma liderança empática pode transformar o ambiente de trabalho e impulsionar a produtividade...",
      category: "Liderança",
      date: "2024-01-15",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "NR-1 Descomplicada: Guia Prático para Gestão de Riscos Psicossociais",
      excerpt: "Um guia completo para entender e implementar as diretrizes da NR-1 na sua empresa...",
      category: "NR-1 Riscos Psicossociais",
      date: "2024-01-10",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "LGPD na Prática: Como Proteger os Dados da Sua Empresa",
      excerpt: "Estratégias práticas para implementar a LGPD e garantir a conformidade na sua organização...",
      category: "GRC",
      date: "2024-01-05",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Desenvolvimento de Carreira: Planejamento Estratégico Pessoal",
      excerpt: "Aprenda a criar um plano de carreira eficaz que alinhe seus objetivos pessoais e profissionais...",
      category: "Carreira",
      date: "2023-12-28",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Cultura Organizacional: O DNA do Sucesso Empresarial",
      excerpt: "Como construir uma cultura organizacional forte que impulsione o engajamento e os resultados...",
      category: "Gestão de Pessoas",
      date: "2023-12-20",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Inovação em PMEs: Estratégias para Crescimento Sustentável",
      excerpt: "Descubra como pequenas e médias empresas podem inovar de forma eficiente e sustentável...",
      category: "Inovação",
      date: "2023-12-15",
      image: "/placeholder.svg"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Artigos & Insights
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
                Conhecimento prático e tendências de mercado para impulsionar sua carreira e seus negócios.
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No dinâmico cenário empresarial e de desenvolvimento humano, manter-se atualizado é mais do que uma vantagem, é uma necessidade. Aqui, na seção "Artigos & Insights" da Alçar Humà, compilamos um acervo valioso de conhecimento prático, análises aprofundadas e as últimas tendências de mercado. Nosso objetivo é munir você, empreendedor(a) e líder, com informações relevantes para tomar decisões mais assertivas, desenvolver suas habilidades e impulsionar o crescimento sustentável do seu negócio e de sua carreira.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Navegação Inteligente</h3>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="text"
                    placeholder='Digite palavras-chave como "liderança humanizada", "compliance LGPD", "gestão de conflitos"...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-3 text-base"
                  />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="mb-8">
                <h4 className="text-lg font-medium text-foreground mb-4">Filtros por Categoria</h4>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <Button
                        key={category.name}
                        variant={selectedCategory === category.name ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category.name)}
                        className="flex items-center gap-2"
                      >
                        <IconComponent className="h-4 w-4" />
                        {category.name}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                {selectedCategory === "Todos" ? "Todos os Artigos" : `Artigos de ${selectedCategory}`}
                <span className="text-muted-foreground text-lg ml-2">({filteredArticles.length})</span>
              </h3>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ScrollAnimation key={article.id} delay={index * 100}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40">
                    <div className="aspect-video bg-gradient-to-br from-card-dark-foreground/10 to-card-dark-foreground/20 rounded-t-lg mb-4 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-card-dark-foreground/60" />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs bg-card-dark-foreground/20 text-card-dark-foreground">
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-xs text-card-dark-foreground-muted">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(article.date).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold leading-tight text-card-dark-foreground group-hover:text-card-dark-foreground transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-card-dark-foreground-muted leading-relaxed">
                        {article.excerpt}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <ScrollAnimation>
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-foreground mb-2">Nenhum artigo encontrado</h3>
                  <p className="text-muted-foreground">
                    Tente ajustar seus filtros ou termos de busca.
                  </p>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <Card className="bg-card-dark border-border/30">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-card-dark-foreground mb-4">
                    Não perca nenhuma atualização.
                  </CardTitle>
                  <CardDescription className="text-lg text-card-dark-foreground-muted">
                    Deseja receber insights exclusivos e as últimas tendências diretamente na sua caixa de entrada? 
                    Assine nossa newsletter e mantenha-se à frente, com conteúdo relevante para o crescimento da sua carreira e do seu negócio.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button type="submit" className="sm:w-auto">
                      Inscrever-se
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Artigos;