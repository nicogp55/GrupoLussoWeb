import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import InfoSection from '@/components/InfoSection/InfoSection';
import CardsSection from '@/components/CardsSection/CardsSection'; // 1. Importamos

export default function Home() {
    return (
        <main style={{ paddingTop: '72px' }}>
            <Header />
            <Hero />
            <InfoSection />
            <CardsSection /> {/* 2. Añadimos la nueva sección */}
        </main>
    );
}