import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import InfoSection from "@/components/InfoSection/InfoSection";
import CardsSection from "@/components/CardsSection/CardsSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection"; // ← NUEVO
import WeddingToilets from "@/components/WeddingToilets/WeddingToilets";
import PrivatePartiesSection from "@/components/PrivatePartiesSection/PrivatePartiesSection";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <InfoSection />
            <CardsSection />
            <FeatureSection />
            <WeddingToilets />
            <AdvantagesSection /> {/* ← NUEVO - Entre FeatureSection y WeddingToilets */}
            <PrivatePartiesSection />
        </main>
    );
}
