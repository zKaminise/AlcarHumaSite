import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import MetodoImpulsionar from "./pages/MetodoImpulsionar";
import Solucoes from "./pages/Solucoes";
import Parceiros from "./pages/Parceiros";
import Artigos from "./pages/Artigos";
import FaleConosco from "./pages/FaleConosco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/metodo-impulsionar" element={<MetodoImpulsionar />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/contato" element={<FaleConosco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
