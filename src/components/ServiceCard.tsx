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
    <ScrollAnimation delay={delay} className="h-full">
      <Card className="h-full card-floating card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-foreground mb-2 leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 flex flex-col h-full">
          <CardDescription className="text-muted-foreground mb-6 leading-relaxed flex-grow">
            {description}
          </CardDescription>
          <Button 
            variant="outline" 
            className="w-full group border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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