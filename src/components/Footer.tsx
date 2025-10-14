import { Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import logoFooter from "@/assets/logo-footer-new.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Company Info & Logo */}
          <div className="space-y-4">
            <img 
              src={logoFooter} 
              alt="Alçar Humà Gestão e Pessoas" 
              className="h-24 w-auto mb-4"
            />
            <h3 className="text-lg font-bold">Alçar Humà Gestão e Pessoas Ltda.</h3>
            <p className="text-sm text-primary-foreground/80 italic leading-relaxed">
              Transformar pessoas. Fortalecer empresas.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
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

          {/* Navigation Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-auxiliary">Navegação</h4>
            <ul className="space-y-2.5">
              <li><a href="/sobre-nos" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors">Sobre Nós</a></li>
              <li><a href="/solucoes" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors">Soluções</a></li>
              <li><a href="/metodo-impulsionar" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors">Programa Impulsionar</a></li>
              <li><a href="/parceiros" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors">Parceiros</a></li>
              <li><a href="/palestras-workshops" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors">Palestras & Workshops</a></li>
              <li><a href="/artigos" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors">Artigos</a></li>
              <li><a href="/fale-conosco" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-auxiliary">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-auxiliary flex-shrink-0 mt-1" />
                <a href="tel:+5567996442404" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors">
                  (67) 99644 2404
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-auxiliary flex-shrink-0 mt-1" />
                <a href="mailto:contato@alcarhumacom.br" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors break-all">
                  contato@alcarhumacom.br
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-auxiliary flex-shrink-0 mt-1" />
                <span className="text-sm text-primary-foreground/80">Campo Grande. MS.</span>
              </div>
              
              {/* LGPD Contact */}
              <div className="pt-4 border-t border-primary-foreground/10">
                <p className="text-xs text-primary-foreground/60 mb-2">Encarregado de Dados (LGPD)</p>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-auxiliary flex-shrink-0 mt-0.5" />
                  <a href="mailto:lgpd@alcarhuma.com.br" className="text-sm text-primary-foreground/80 hover:text-auxiliary transition-colors break-all">
                    lgpd@alcarhuma.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Alçar Humà. Todos os direitos reservados. | Desenvolvido com excelência para transformar negócios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
