import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-auxiliary to-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Alçar Humà</h1>
                <p className="text-sm text-primary-foreground/70">Consultoria Estratégica</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando pessoas e fortalecendo empresas através de soluções estratégicas 
              e desenvolvimento humano.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Sobre Nós</a></li>
              <li><a href="#solucoes" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Soluções</a></li>
              <li><a href="#metodo" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Método Impulsionar</a></li>
              <li><a href="#parceiros" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Parceiros</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#solucoes" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Gestão de Riscos (NR-1)</a></li>
              <li><a href="#solucoes" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Governança & Conformidade</a></li>
              <li><a href="#solucoes" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Mentorias</a></li>
              <li><a href="#solucoes" className="text-primary-foreground/80 hover:text-auxiliary transition-colors">Palestras & Workshops</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-auxiliary" />
                <span className="text-primary-foreground/80">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-auxiliary" />
                <span className="text-primary-foreground/80">contato@alcarhumacom.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-auxiliary" />
                <span className="text-primary-foreground/80">São Paulo, SP</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-auxiliary hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-auxiliary hover:text-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Alçar Humà. Todos os direitos reservados. | Desenvolvido com excelência para transformar negócios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;