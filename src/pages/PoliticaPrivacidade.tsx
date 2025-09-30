import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animationType="fade-in-up">
            <h1 className="title-hero mb-6 text-center">
              <span className="text-gradient">Política de Privacidade</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animationType="fade-in-up">
            <div className="prose prose-lg max-w-none text-foreground space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A Alçar Humà valoriza a privacidade e a proteção dos dados pessoais de seus clientes, 
                  parceiros e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, 
                  armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de 
                  Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Informações que Coletamos</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Podemos coletar as seguintes informações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Telefone/WhatsApp</li>
                  <li>Informações sobre sua empresa (quando aplicável)</li>
                  <li>Mensagens e comunicações que você nos envia</li>
                  <li>Dados de navegação no site (cookies e tecnologias similares)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Como Usamos Suas Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Utilizamos suas informações pessoais para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Responder às suas solicitações de contato e consultas</li>
                  <li>Fornecer serviços de consultoria e treinamento</li>
                  <li>Enviar informações sobre nossos serviços e conteúdos relevantes</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Análise de dados para melhoria contínua de nossos processos</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Base Legal para Tratamento de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O tratamento de seus dados pessoais é fundamentado em:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Consentimento:</strong> Quando você nos fornece suas informações voluntariamente</li>
                  <li><strong>Execução de contrato:</strong> Para prestação de serviços contratados</li>
                  <li><strong>Legítimo interesse:</strong> Para melhorar nossos serviços e comunicação</li>
                  <li><strong>Cumprimento de obrigação legal:</strong> Quando exigido por lei</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para 
                  fins comerciais. Podemos compartilhar dados apenas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Com prestadores de serviços que nos auxiliam em nossas operações</li>
                  <li>Quando exigido por lei ou ordem judicial</li>
                  <li>Para proteger nossos direitos legais</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Segurança dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações 
                  pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Treinamento regular de nossa equipe sobre proteção de dados</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Seus Direitos</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  De acordo com a LGPD, você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                  <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou desatualizados</li>
                  <li><strong>Anonimização ou eliminação:</strong> Solicitar a exclusão de dados desnecessários</li>
                  <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                  <li><strong>Informação:</strong> Saber com quem compartilhamos seus dados</li>
                  <li><strong>Revogação do consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
                  <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas circunstâncias</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades 
                  descritas nesta política, a menos que um período de retenção mais longo seja exigido ou 
                  permitido por lei.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Cookies e Tecnologias Similares</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, 
                  analisar o tráfego e personalizar conteúdo. Você pode configurar seu navegador para 
                  recusar cookies, mas isso pode afetar algumas funcionalidades do site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                  alterações significativas publicando a nova política em nosso site e atualizando a 
                  data no topo desta página.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Para exercer seus direitos, tirar dúvidas ou fazer solicitações relacionadas a esta 
                  Política de Privacidade, entre em contato conosco:
                </p>
                <div className="bg-card-dark p-6 rounded-lg space-y-2">
                  <p className="text-card-dark-foreground"><strong>Alçar Humà</strong></p>
                  <p className="text-card-dark-foreground-muted">E-mail: contato@alcarhuma.com.br</p>
                  <p className="text-card-dark-foreground-muted">Telefone: (67) 99644-2404</p>
                  <p className="text-card-dark-foreground-muted">Campo Grande - MS</p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
                  e representa nosso compromisso com a transparência e proteção de seus dados pessoais.
                </p>
              </div>

            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
