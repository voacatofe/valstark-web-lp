import Navigation from "@/components/sections/Navigation";
import HeroB2B from "@/components/sections/HeroB2B";
import ClientsB2B from "@/components/sections/ClientsB2B";
import ValidationB2B from "@/components/sections/ValidationB2B";
import GlobalCompliance from "@/components/sections/GlobalCompliance";
import OperationalSolutionB2B from "@/components/sections/OperationalSolutionB2B";
import HardwareShowcase from "@/components/sections/HardwareShowcase";
import InnovationComputing from "@/components/sections/InnovationComputing";
import ActiveDefense from "@/components/sections/ActiveDefense";
import NameOrigin from "@/components/sections/NameOrigin";
import CatalogCTA from "@/components/sections/CatalogCTA";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cofres Inteligentes Valstark | Engenharia de Segurança",
  description:
    "Cofres inteligentes de grau industrial da Valstark. Tecnologia edge computing embarcada, validação espectral multimoeda e blindagem ativa com guilhotina automática. Projetados para o varejo de alta performance.",
};

export default function CofresPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <HeroB2B />
        <ClientsB2B />
        <ValidationB2B />
        <GlobalCompliance />
        <OperationalSolutionB2B />
        <HardwareShowcase />
        <InnovationComputing />
        <ActiveDefense />
        <NameOrigin />
        <CatalogCTA />
      </main>
      <Footer />
    </div>
  );
}
