import Navigation from "@/components/sections/Navigation";
import HeroB2B from "@/components/sections/HeroB2B";
import ClientsB2B from "@/components/sections/ClientsB2B";
import ValidationB2B from "@/components/sections/ValidationB2B";
import GlobalCompliance from "@/components/sections/GlobalCompliance";
import OperationalSolutionB2B from "@/components/sections/OperationalSolutionB2B";
import PortfolioB2B from "@/components/sections/PortfolioB2B";
import HardwareShowcase from "@/components/sections/HardwareShowcase";
import NameOrigin from "@/components/sections/NameOrigin";
import ConversionB2B from "@/components/sections/ConversionB2B";
import Footer from "@/components/sections/Footer";

export default function Home() {
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
        <NameOrigin />
        <ConversionB2B />
      </main>
      <Footer />
    </div>
  );
}
