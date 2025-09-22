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
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const Contato = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      assunto: "",
      mensagem: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Entre em Contato
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos prontos para impulsionar o crescimento da sua empresa. 
                Fale conosco e descubra como podemos ajudar você a alcançar seus objetivos.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <ScrollAnimation>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Nossa equipe está pronta para ouvir suas necessidades e apresentar 
                    soluções personalizadas para o seu negócio.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-card-dark p-6 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-dark-foreground">Telefone</h3>
                        <p className="text-card-dark-foreground-muted">(11) 99999-9999</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card-dark p-6 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-dark-foreground">Email</h3>
                        <p className="text-card-dark-foreground-muted">contato@alcarhumana.com.br</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card-dark p-6 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-dark-foreground">Endereço</h3>
                        <p className="text-card-dark-foreground-muted">
                          São Paulo, SP<br />
                          Brasil
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card-dark p-6 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-dark-foreground">Horário de Atendimento</h3>
                        <p className="text-card-dark-foreground-muted">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 12h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation>
              <div className="bg-card-dark p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-card-dark-foreground">
                  Envie sua Mensagem
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-card-dark-foreground">Nome *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Seu nome completo"
                                className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted"
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
                            <FormLabel className="text-card-dark-foreground">Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="seu@email.com"
                                className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted"
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
                            <FormLabel className="text-card-dark-foreground">Telefone *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="(11) 99999-9999"
                                className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="empresa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-card-dark-foreground">Empresa *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Nome da sua empresa"
                                className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted"
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
                      name="assunto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-dark-foreground">Assunto *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/10 border-background/20 text-card-dark-foreground">
                                <SelectValue placeholder="Selecione o assunto" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="consultoria">Consultoria Empresarial</SelectItem>
                              <SelectItem value="treinamento">Treinamento e Desenvolvimento</SelectItem>
                              <SelectItem value="coaching">Coaching Executivo</SelectItem>
                              <SelectItem value="mentoria">Mentoria</SelectItem>
                              <SelectItem value="palestra">Palestras</SelectItem>
                              <SelectItem value="outros">Outros</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mensagem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-dark-foreground">Mensagem *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Conte-nos mais sobre suas necessidades e como podemos ajudar..."
                              className="bg-background/10 border-background/20 text-card-dark-foreground placeholder:text-card-dark-foreground-muted min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;