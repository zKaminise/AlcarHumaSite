import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
  onClick?: () => void;
}

const ServiceCard = ({ title, description, buttonText, icon: Icon, delay = 0, onClick }: ServiceCardProps) => {
  return (
    <ScrollAnimation delay={delay}>
      <Card className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300 h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-md">
              <Icon className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-xl font-semibold text-card-dark-foreground mb-2 leading-tight whitespace-pre-line text-center">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pb-6 h-full flex flex-col">
          <CardDescription className="text-card-dark-foreground-muted mb-6 leading-relaxed flex-1 text-center">
            {description}
          </CardDescription>
          <Button 
            className="w-full group bg-card-dark text-card-dark-foreground border border-card-dark-foreground-muted/30 hover:bg-card-dark/80 transition-all duration-300"
            onClick={onClick}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );
};

export default ServiceCard;