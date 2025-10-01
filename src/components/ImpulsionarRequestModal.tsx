import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Linkedin, Instagram } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos"),
  linkedinUrl: z.string().optional(),
  situacaoAtual: z.string().min(1, "Selecione sua situação atual"),
  situacaoOutra: z.string().optional(),
  maiorDesafio: z.string().min(10, "Descreva seu maior desafio profissional"),
  objetivos: z.array(z.string()).min(1, "Selecione pelo menos um objetivo"),
  objetivosOutro: z.string().optional(),
  comoConheceu: z.string().min(1, "Selecione como conheceu"),
  aceitaTermos: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar os termos para continuar",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface ImpulsionarRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImpulsionarRequestModal = ({ open, onOpenChange }: ImpulsionarRequestModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      linkedinUrl: "",
      situacaoAtual: "",
      situacaoOutra: "",
      maiorDesafio: "",
      objetivos: [],
      objetivosOutro: "",
      comoConheceu: "",
      aceitaTermos: false,
    },
  });

  const situacoesOptions = [
    "Sou CLT e busco crescimento/promoção na minha empresa",
    "Sou CLT e planejo uma transição de carreira",
    "Sou empreendedor(a) e busco alavancar meu negócio",
    "Estou buscando recolocação profissional",
    "Outro",
  ];

  const objetivosOptions = [
    "Ter mais clareza sobre meus próximos passos na carreira",
    "Desenvolver habilidades de liderança e gestão",
    "Melhorar minha comunicação e meu marketing pessoal",
    "Estruturar ou escalar meu negócio",
    "Aumentar minha renda",
    "Conseguir uma promoção ou um novo emprego",
    "Outro",
  ];

  const comoConheceuOptions = [
    "LinkedIn",
    "Instagram",
    "Google",
    "Indicação de um amigo/colega",
    "Em uma palestra/workshop",
    "Outro",
  ];

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setSubmittedName(data.nome);
    setIsSubmitted(true);
    
    toast({
      title: "Aplicação enviada!",
      description: `Obrigada, ${data.nome}! Em breve entraremos em contato.`,
    });

    // Aqui você pode adicionar a lógica para enviar os dados para um backend/API
  };

  const handleClose = () => {
    setIsSubmitted(false);
    form.reset();
    onOpenChange(false);
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-primary">
              Aplicação Recebida! 🎉
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-6">
            <p className="text-lg text-center leading-relaxed">
              Obrigada, <span className="font-semibold text-primary">{submittedName}</span>! 
              Recebemos sua aplicação.
            </p>
            
            <p className="text-center text-muted-foreground">
              Nossa equipe entrará em contato com você pelo WhatsApp em até <span className="font-semibold">48 horas úteis</span> para agendar sua sessão de alinhamento.
            </p>

            <div className="bg-auxiliary/30 border border-auxiliary rounded-lg p-6 space-y-4">
              <p className="text-center font-semibold text-foreground">
                Enquanto isso, que tal se conectar conosco em nossas redes?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://www.linkedin.com/company/alçar-humà-gestão-e-pessoas/?viewAsMember=true', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
                
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://www.instagram.com/alcarhumagp/', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </Button>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button onClick={handleClose} size="lg" className="btn-hero">
                Fechar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Impulsionar Minha Carreira
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para dar o primeiro passo rumo ao próximo nível da sua carreira!
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Informações Básicas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Informações de Contato</h3>
              
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo *</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
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
                    <FormLabel>Seu melhor E-mail *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp com DDD *</FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedinUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link do seu Perfil no LinkedIn (Opcional, mas recomendado)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://linkedin.com/in/seu-perfil" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Momento Atual */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold text-foreground">O Seu Momento Atual</h3>

              <FormField
                control={form.control}
                name="situacaoAtual"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qual sua situação profissional atual? *</FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        {situacoesOptions.map((option) => (
                          <label key={option} className="flex items-start gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              value={option}
                              checked={field.value === option}
                              onChange={(e) => field.onChange(e.target.value)}
                              className="mt-1 w-4 h-4 text-primary cursor-pointer"
                            />
                            <span className="group-hover:text-primary transition-colors">{option}</span>
                          </label>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("situacaoAtual") === "Outro" && (
                <FormField
                  control={form.control}
                  name="situacaoOutra"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual?</FormLabel>
                      <FormControl>
                        <Input placeholder="Descreva sua situação" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="maiorDesafio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descreva em poucas palavras, qual é o seu MAIOR desafio profissional hoje? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Compartilhe seu maior desafio profissional..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Objetivos */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold text-foreground">Seus Objetivos</h3>

              <FormField
                control={form.control}
                name="objetivos"
                render={() => (
                  <FormItem>
                    <FormLabel>O que você mais deseja alcançar ao aplicar o Método Impulsionar? * (pode selecionar mais de um)</FormLabel>
                    <div className="space-y-3">
                      {objetivosOptions.map((option) => (
                        <FormField
                          key={option}
                          control={form.control}
                          name="objetivos"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option)}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...(field.value || []), option]
                                      : field.value?.filter((val) => val !== option) || [];
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer leading-relaxed">
                                {option}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("objetivos")?.includes("Outro") && (
                <FormField
                  control={form.control}
                  name="objetivosOutro"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual?</FormLabel>
                      <FormControl>
                        <Input placeholder="Descreva seu objetivo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            {/* Logística e Compromisso */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold text-foreground">Logística e Compromisso</h3>

              <FormField
                control={form.control}
                name="comoConheceu"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Como você conheceu a Alçar Humà / Método Impulsionar? *</FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        {comoConheceuOptions.map((option) => (
                          <label key={option} className="flex items-start gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              value={option}
                              checked={field.value === option}
                              onChange={(e) => field.onChange(e.target.value)}
                              className="mt-1 w-4 h-4 text-primary cursor-pointer"
                            />
                            <span className="group-hover:text-primary transition-colors">{option}</span>
                          </label>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="aceitaTermos"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-primary/20 p-4 bg-auxiliary/10">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal cursor-pointer leading-relaxed">
                        Sim, entendo que o preenchimento deste formulário é o primeiro passo e que a equipe da Alçar Humà entrará em contato para agendar uma sessão de alinhamento gratuita e sem compromisso. *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-4 pt-6">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 btn-hero">
                QUERO IMPULSIONAR MINHA CARREIRA
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ImpulsionarRequestModal;
