import { Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import logoAlcarHuma from "@/assets/logo-alcarhuma.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <img 
                src={logoAlcarHuma} 
                alt="Alçar Humà Gestão e Pessoas" 
                className="h-16 w-auto mb-3"
              />
              <h1 className="text-lg font-bold">Alçar Humà Gestão e Pessoas Ltda.</h1>
              <p className="text-sm text-primary-foreground/80 italic mt-2">
                Transformar pessoas. Fortalecer empresas.
              </p>
            </div>
            
            {/* Social Links - Modern Style */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/company/alçar-humà-gestão-e-pessoas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-auxiliary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/alcarhumagp?igsh=MXJqMWduMHM1dmh3cg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-auxiliary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Início</a></li>
              <li><a href="/sobre-nos" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Sobre Nós</a></li>
              <li><a href="/solucoes" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Soluções</a></li>
              <li><a href="/metodo-impulsionar" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Método Impulsionar</a></li>
              <li><a href="/parceiros" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Parceiros</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="/solucoes" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Gestão de Riscos (NR-1)</a></li>
              <li><a href="/solucoes" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Governança & Conformidade</a></li>
              <li><a href="/metodo-impulsionar" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Mentorias</a></li>
              <li><a href="/palestras-workshops" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Palestras & Workshops</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-auxiliary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">(67) 99644 2404</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-auxiliary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm break-all">contato@alcarhumacom.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-auxiliary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Campo Grande. MS.</span>
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <Mail className="h-5 w-5 text-auxiliary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-primary-foreground/60 mb-1">Encarregado de Dados</p>
                  <span className="text-primary-foreground/80 text-sm break-all">lgpd@alcarhuma.com.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Alçar Humà. Todos os direitos reservados. | Desenvolvido com excelência para transformar negócios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
