import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import InfoSection from '@/components/InfoSection/InfoSection'; // 1. Importamos el nuevo componente

export default function Home() {
    return (
        <main style={{ paddingTop: '72px' }}>
            <Header />
            <Hero />
            <InfoSection /> {/* 2. Añadimos la nueva sección */}

            {/* El resto del contenido irá debajo */}
        </main>
    );
}