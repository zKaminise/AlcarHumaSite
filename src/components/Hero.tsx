import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroCarousel1 from "@/assets/hero-carousel-1.jpg";
import heroCarousel2 from "@/assets/hero-carousel-2.jpg";
import heroCarousel3 from "@/assets/hero-carousel-3.jpg";
import ScrollAnimation from "./ScrollAnimation";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const carouselImages = [
    { src: heroCarousel1, alt: "Consultoria estratégica - Reunião de negócios" },
    { src: heroCarousel2, alt: "Consultoria estratégica - Análise de crescimento" },
    { src: heroCarousel3, alt: "Consultoria estratégica - Inovação tecnológica" }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-auxiliary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <ScrollAnimation animationType="fade-in-scale" duration={1000}>
              <h1 className="title-hero">
                <span className="text-gradient">Transformar pessoas.</span>
                <br />
                <span className="text-foreground">Fortalecer empresas.</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={200} duration={1200}>
              <p className="subtitle-main text-muted-foreground max-w-2xl">
                Integramos governança, gestão de riscos e desenvolvimento humano para construir 
                organizações resilientes, eficientes e preparadas para o futuro.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animationType="slide-in-up" delay={400} duration={1000}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="btn-hero group" onClick={() => {
                  navigate("/metodo-impulsionar");
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}>
                  Descubra o Método Impulsionar
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button className="btn-hero-secondary group" onClick={() => {
                  navigate("/solucoes");
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}>
                  Conheça Nossas Soluções
                  <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Hero Image Carousel */}
          <ScrollAnimation animationType="slide-in-right" delay={300} duration={1200}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Carousel
                  setApi={setApi}
                  opts={{
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index 
                        ? "w-8 bg-gradient-to-r from-primary to-secondary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;