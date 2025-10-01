import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Linkedin, Instagram } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  temaInteresse: z.string().min(3, "Tema de interesse é obrigatório"),
  tipo: z.string().min(1, "Selecione uma opção"),
  publicoAlvo: z.string().min(3, "Descreva o público-alvo"),
  modalidade: z.string().min(1, "Selecione uma modalidade"),
  dataPrevista: z.string().min(1, "Data prevista é obrigatória"),
  segundaData: z.string().optional(),
  localPresencial: z.string().optional(),
  estruturaEspaco: z.array(z.string()).optional(),
  estruturaOutros: z.string().optional(),
  eventoEspecifico: z.string().optional(),
  desafioObjetivo: z.string().min(10, "Descreva o principal desafio/objetivo"),
  espacoDinamicas: z.string().min(1, "Informe se há espaço para dinâmicas"),
  ideiasCompetencias: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface WorkshopRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  requestType: "palestra" | "workshop";
}

const WorkshopRequestModal = ({ open, onOpenChange, requestType }: WorkshopRequestModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      temaInteresse: "",
      tipo: requestType === "palestra" ? "Palestra" : "Workshop",
      publicoAlvo: "",
      modalidade: "",
      dataPrevista: "",
      segundaData: "",
      localPresencial: "",
      estruturaEspaco: [],
      estruturaOutros: "",
      eventoEspecifico: "",
      desafioObjetivo: "",
      espacoDinamicas: "",
      ideiasCompetencias: "",
    },
  });

  const estruturaOptions = [
    "Som",
    "Iluminação",
    "Microfone",
    "Telão",
    "TV",
    "Cabos",
    "Projetores",
    "Internet (WiFi)",
  ];

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setSubmittedName(data.nome);
    setIsSubmitted(true);
    
    toast({
      title: "Solicitação enviada!",
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
              Solicitação Recebida! 🎉
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
            Solicitar {requestType === "palestra" ? "Palestra" : "Workshop"} Personalizado
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo com suas informações e necessidades. Entraremos em contato em breve!
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Informações Básicas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Informações de Contato</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome *</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
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
                      <FormLabel>Empresa *</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone *</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Detalhes da Solicitação */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold text-foreground">Detalhes da Solicitação</h3>

              <FormField
                control={form.control}
                name="temaInteresse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tema de Interesse *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Comunicação Não Violenta, Liderança..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tipo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Você está em busca de: *</FormLabel>
                    <FormControl>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {["Palestra", "Workshop", "Ambos"].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              value={option}
                              checked={field.value === option}
                              onChange={(e) => field.onChange(e.target.value)}
                              className="w-4 h-4 text-primary"
                            />
                            <span>{option}</span>
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
                name="publicoAlvo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qual o público-alvo e o número estimado de participantes? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Ex: 50 colaboradores da área comercial..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="modalidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modalidade desejada: *</FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        {["Presencial", "Online"].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              value={option}
                              checked={field.value === option}
                              onChange={(e) => field.onChange(e.target.value)}
                              className="w-4 h-4 text-primary"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="dataPrevista"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data prevista: *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="segundaData"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Segunda melhor data:</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Informações do Local */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold text-foreground">Informações do Local</h3>

              <FormField
                control={form.control}
                name="localPresencial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Se presencial, onde será realizada?</FormLabel>
                    <FormControl>
                      <Input placeholder="Endereço ou local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="estruturaEspaco"
                render={() => (
                  <FormItem>
                    <FormLabel>Qual a estrutura do espaço?</FormLabel>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {estruturaOptions.map((option) => (
                        <FormField
                          key={option}
                          control={form.control}
                          name="estruturaEspaco"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
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
                              <FormLabel className="font-normal cursor-pointer">
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

              <FormField
                control={form.control}
                name="estruturaOutros"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Outros recursos:</FormLabel>
                    <FormControl>
                      <Input placeholder="Descreva outros recursos disponíveis" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="espacoDinamicas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>O local conta com espaço para realização de dinâmicas de grupo? *</FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        {["Sim", "Não", "Parcialmente"].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              value={option}
                              checked={field.value === option}
                              onChange={(e) => field.onChange(e.target.value)}
                              className="w-4 h-4 text-primary"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Objetivos e Expectativas */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-semibold text-foreground">Objetivos e Expectativas</h3>

              <FormField
                control={form.control}
                name="eventoEspecifico"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Este trabalho será parte de algum evento específico? Qual?</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do evento, se aplicável" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="desafioObjetivo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qual o principal desafio ou objetivo a ser alcançado com este trabalho? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva os principais desafios e resultados esperados..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ideiasCompetencias"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ideias de temas ou competências a serem desenvolvidas nos participantes</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Ex: trabalho em equipe, comunicação assertiva, resolução de conflitos..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-4 pt-6">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 btn-hero">
                Enviar Solicitação
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WorkshopRequestModal;
