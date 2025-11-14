import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StockPrediction from "./pages/StockPrediction";
import PriceProjection from "./pages/PriceProjection";
import Visualization from "./pages/Visualization";
import Classification from "./pages/Classification";
import Simulation from "./pages/Simulation";
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
          <Route path="/stock-prediction" element={<StockPrediction />} />
          <Route path="/price-projection" element={<PriceProjection />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/simulation" element={<Simulation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
