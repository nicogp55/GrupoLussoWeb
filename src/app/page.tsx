import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import InfoSection from "@/components/InfoSection/InfoSection";
import CardsSection from "@/components/CardsSection/CardsSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import WeddingToilets from "@/components/WeddingToilets/WeddingToilets"; // 1. IMPORTAR

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <InfoSection />
            <CardsSection />
            <FeatureSection />
            <WeddingToilets /> {/* 2. AÑADIR */}
        </main>
    );
}
