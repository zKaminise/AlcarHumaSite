import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Target, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  cargo: z.string().min(2, "Cargo é obrigatório"),
  assunto: z.string().min(1, "Selecione um assunto"),
  desafio: z.string().min(1, "Selecione o principal desafio"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const FaleConosco = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      cargo: "",
      assunto: "",
      desafio: "",
      mensagem: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "✅ Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em até 24h. Prepare-se para impulsionar seus resultados!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "❌ Erro ao enviar",
        description: "Tente novamente ou entre em contato por WhatsApp: (11) 99999-9999",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: MessageCircle,
      title: "Resposta em 24h",
      description: "Garantimos retorno rápido para sua solicitação"
    },
    {
      icon: Users,
      title: "Consultoria Gratuita",
      description: "Primeira conversa sem compromisso"
    },
    {
      icon: Target,
      title: "Soluções Personalizadas",
      description: "Estratégias sob medida para seu negócio"
    },
    {
      icon: Zap,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso com nossos clientes"
    }
  ];

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

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-auxiliary/10">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h1 className="title-section text-foreground mb-4">
                Por que escolher a <span className="text-gradient">Alçar Humà?</span>
              </h1>
              <p className="subtitle-main text-muted-foreground max-w-2xl mx-auto">
                Mais que uma consultoria, uma parceria estratégica para o seu sucesso.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="group relative bg-card-dark backdrop-blur-sm p-8 rounded-2xl border border-border/30 hover:border-primary/40 transition-all duration-500 card-floating card-glow overflow-hidden"
                >
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Icon container with enhanced design */}
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-inner">
                        <benefit.icon className="h-8 w-8 text-white drop-shadow-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h1 className="text-xl font-bold text-card-dark-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h1>
                    <p className="text-card-dark-foreground-muted leading-relaxed group-hover:text-card-dark-foreground transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - Takes more space */}
            <div className="lg:col-span-3">
              <ScrollAnimation>
                <div className="bg-card-dark p-8 rounded-2xl shadow-2xl">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-card-dark-foreground mb-4">
                      Vamos Conversar Sobre Seu Negócio
                    </h1>
                    <p className="text-card-dark-foreground-muted">
                      Preencha o formulário abaixo e nossa equipe entrará em contato para 
                      uma consultoria personalizada e gratuita.
                    </p>
                  </div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="nome"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-card-dark-foreground font-medium">Nome Completo *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Digite seu nome completo"
                                  className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted h-12 rounded-lg"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-card-dark-foreground font-medium">Email Corporativo *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="seu.email@empresa.com"
                                  className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted h-12 rounded-lg"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="telefone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-card-dark-foreground font-medium">WhatsApp/Telefone *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="(11) 99999-9999"
                                  className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted h-12 rounded-lg"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="cargo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-card-dark-foreground font-medium">Seu Cargo *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Ex: CEO, Diretor, Gerente..."
                                  className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted h-12 rounded-lg"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="empresa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-card-dark-foreground font-medium">Nome da Empresa *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Digite o nome da sua empresa"
                                className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted h-12 rounded-lg"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="assunto"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-card-dark-foreground font-medium">Área de Interesse *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/10 border-background/20 text-card-dark-foreground h-12 rounded-lg">
                                    <SelectValue placeholder="Selecione uma área" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="consultoria">Consultoria Empresarial</SelectItem>
                                  <SelectItem value="lideranca">Desenvolvimento de Liderança</SelectItem>
                                  <SelectItem value="equipes">Desenvolvimento de Equipes</SelectItem>
                                  <SelectItem value="coaching">Coaching Executivo</SelectItem>
                                  <SelectItem value="mentoria">Mentoria Empresarial</SelectItem>
                                  <SelectItem value="treinamento">Treinamentos Corporativos</SelectItem>
                                  <SelectItem value="palestra">Palestras Motivacionais</SelectItem>
                                  <SelectItem value="outros">Outros Serviços</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="desafio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-card-dark-foreground font-medium">Principal Desafio *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/10 border-background/20 text-card-dark-foreground h-12 rounded-lg">
                                    <SelectValue placeholder="Qual seu maior desafio?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="crescimento">Crescimento da Empresa</SelectItem>
                                  <SelectItem value="vendas">Aumento de Vendas</SelectItem>
                                  <SelectItem value="produtividade">Produtividade da Equipe</SelectItem>
                                  <SelectItem value="lideranca">Desenvolvimento de Liderança</SelectItem>
                                  <SelectItem value="comunicacao">Comunicação Interna</SelectItem>
                                  <SelectItem value="motivacao">Motivação dos Colaboradores</SelectItem>
                                  <SelectItem value="processos">Otimização de Processos</SelectItem>
                                  <SelectItem value="outros">Outros</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="mensagem"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-card-dark-foreground font-medium">Conte-nos Mais Sobre Seu Desafio *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Descreva sua situação atual, objetivos e como podemos ajudar sua empresa a alcançar melhores resultados..."
                                className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted min-h-[120px] rounded-lg"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white h-12 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Enviando sua mensagem...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Enviar Mensagem e Agendar Consultoria
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-card-dark-foreground-muted text-center">
                        * Ao enviar este formulário, você concorda em ser contatado pela Alçar Humà para oferecer soluções personalizadas.
                      </p>
                    </form>
                  </Form>
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Information - Sidebar */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold mb-4">Informações de Contato</h1>
                    <p className="text-muted-foreground mb-8">
                      Estamos aqui para impulsionar o sucesso da sua empresa. 
                      Entre em contato através dos canais abaixo.
                    </p>
                  </div>

                  <div className="space-y-4">
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
                          <p className="text-xs text-card-dark-foreground-muted">Atendimento presencial e online</p>
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
                          <p className="text-card-dark-foreground-muted text-sm mb-1">Seg - Sex: 8h às 18h</p>
                          <p className="text-card-dark-foreground-muted text-sm mb-2">Sáb: 8h às 12h</p>
                          <p className="text-xs text-card-dark-foreground-muted">Atendimento de emergência via WhatsApp</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaleConosco;