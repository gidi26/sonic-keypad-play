import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MovementPage from "./pages/MovementPage";
import HarmoniaFuncional from "./pages/HarmoniaFuncional";
import HarmoniaFuncional2 from "./pages/HarmoniaFuncional2";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/movimento/1/tonalidade/1" replace />} />
            <Route path="/movimento/:movementId/tonalidade/:tonalityId" element={<MovementPage />} />
            <Route path="/harmonia-funcional" element={<HarmoniaFuncional />} />
            <Route path="/harmonia-funcional-2" element={<HarmoniaFuncional2 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
