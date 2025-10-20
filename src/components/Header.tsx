import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import logoAlcar from "@/assets/logo-nav.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsAtTop(scrollTop < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // Handle hash navigation for homepage sections
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Handle page navigation
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const menuItems = [
    { name: "Nosso Propósito", href: "/sobre-nos" },
    { name: "Nossas Soluções", href: "/solucoes" },
    { name: "Programa Impulsionar", href: "/metodo-impulsionar" },
    { name: "Palestras & Workshops", href: "/palestras-workshops" },
    { name: "Parceiros", href: "/parceiros" },
    { name: "Artigos & Insights", href: "/artigos" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${isAtTop ? 'py-1' : 'py-1'}`}>
      <div className={`container mx-auto px-4 transition-all duration-300 ${isAtTop ? 'py-3' : 'py-2'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation("/")}
            className="flex items-center space-x-3 group"
          >
            <img 
              src={logoAlcar} 
              alt="Alçar Humà - Gestão e Pessoas" 
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isAtTop ? 'h-16' : 'h-14'}`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="btn-hero-secondary"
              onClick={() => handleNavigation("/fale-conosco")}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavigation(item.href);
                  }}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="btn-hero-secondary mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleNavigation("/fale-conosco");
                }}
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;