import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  delay?: number;
  onClick?: () => void;
}

const ServiceCard = ({ title, description, buttonText, delay = 0, onClick }: ServiceCardProps) => {
  return (
    <ScrollAnimation delay={delay}>
      <Card className="card-floating card-glow bg-card-dark backdrop-blur-sm border-border/30 hover:border-primary/40 transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold text-card-dark-foreground mb-2 leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-card-dark-foreground-muted mb-4 leading-relaxed">
            {description}
          </CardDescription>
          <Button 
            variant="outline" 
            className="w-full group border-card-dark-foreground-muted/30 text-card-dark-foreground hover:bg-card-dark-foreground hover:text-card-dark transition-all duration-300"
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