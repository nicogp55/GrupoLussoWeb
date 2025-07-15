import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import InfoSection from "@/components/InfoSection/InfoSection";
import CardsSection from "@/components/CardsSection/CardsSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import WeddingToilets from "@/components/WeddingToilets/WeddingToilets";
import PrivatePartiesSection from "@/components/PrivatePartiesSection/PrivatePartiesSection";
import SportsEventsSection from "@/components/SportsEventsSection/SportsEventsSection"; // ← NUEVO
import SolucionesIndustriales from "@/components/SolucionesIndustriales/SolucionesIndustriales";
import Formulario from "@/components/Formulario/Formulario";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <InfoSection />
            <CardsSection />
            <FeatureSection />
            <WeddingToilets />
            <AdvantagesSection />
            <PrivatePartiesSection />
            <SportsEventsSection /> {/* ← NUEVO - Añadido al flujo */}
            <SolucionesIndustriales />
            <Formulario />
        </main>
    );
}
