"use client";

import { useState, useRef, useEffect } from 'react';
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import InfoSection from "@/components/InfoSection/InfoSection";
import CardsSection from "@/components/CardsSection/CardsSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import WeddingToilets from "@/components/WeddingToilets/WeddingToilets";
import PrivatePartiesSection from "@/components/PrivatePartiesSection/PrivatePartiesSection";
import SportsEventsSection from "@/components/SportsEventsSection/SportsEventsSection";
import SolucionesIndustriales from "@/components/SolucionesIndustriales/SolucionesIndustriales";
import Formulario from "@/components/Formulario/Formulario";
// La siguiente línea se elimina porque causaba el error de compilación.
// import styles from './globals.css';


export default function Home() {
    const [scrollMode, setScrollMode] = useState<'free' | 'presentation'>('free');

    const featureSectionRef = useRef<HTMLDivElement>(null);
    const presentationContainerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const featureSection = featureSectionRef.current;
        const presentationContainer = presentationContainerRef.current;
        const triggerElement = triggerRef.current;

        if (!featureSection || !presentationContainer || !triggerElement) return;

        if (scrollMode === 'free') {
            document.body.classList.remove('presentation-active');

            const handleLockedScroll = (event: WheelEvent) => {
                event.preventDefault();
                if (event.deltaY > 0) {
                    setScrollMode('presentation');
                }
            };

            let touchStartY = 0;
            const handleTouchStart = (event: TouchEvent) => {
                touchStartY = event.touches[0].clientY;
            };
            const handleLockedTouchMove = (event: TouchEvent) => {
                event.preventDefault();
                const currentY = event.touches[0].clientY;
                if (touchStartY > currentY) {
                    setScrollMode('presentation');
                }
            };

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        window.addEventListener('wheel', handleLockedScroll, { passive: false });
                        window.addEventListener('touchstart', handleTouchStart, { passive: false });
                        window.addEventListener('touchmove', handleLockedTouchMove, { passive: false });
                    } else {
                        window.removeEventListener('wheel', handleLockedScroll);
                        window.removeEventListener('touchstart', handleTouchStart);
                        window.removeEventListener('touchmove', handleLockedTouchMove);
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(triggerElement);

            return () => {
                observer.disconnect();
                window.removeEventListener('wheel', handleLockedScroll);
                window.removeEventListener('touchstart', handleTouchStart);
                window.removeEventListener('touchmove', handleLockedTouchMove);
            };
        }

        else if (scrollMode === 'presentation') {
            document.body.classList.add('presentation-active');
            presentationContainer.focus();

            presentationContainer.scrollIntoView();

            const handleExitPresentation = (event: WheelEvent) => {
                if (event.deltaY < 0 && presentationContainer.scrollTop === 0) {
                    event.preventDefault();
                    setScrollMode('free');
                    featureSection.scrollIntoView({ behavior: 'smooth' });
                }
            };

            let touchStartY = 0;
            const handleExitTouchStart = (e: TouchEvent) => {
                touchStartY = e.touches[0].clientY;
            };
            const handleExitTouchMove = (e: TouchEvent) => {
                const currentY = e.touches[0].clientY;
                if (currentY > touchStartY && presentationContainer.scrollTop === 0) {
                    e.preventDefault();
                    setScrollMode('free');
                    featureSection.scrollIntoView({ behavior: 'smooth' });
                }
            };

            presentationContainer.addEventListener('wheel', handleExitPresentation, { passive: false });
            presentationContainer.addEventListener('touchstart', handleExitTouchStart, { passive: false });
            presentationContainer.addEventListener('touchmove', handleExitTouchMove, { passive: false });

            return () => {
                presentationContainer.removeEventListener('wheel', handleExitPresentation);
                presentationContainer.removeEventListener('touchstart', handleExitTouchStart);
                presentationContainer.removeEventListener('touchmove', handleExitTouchMove);
            };
        }

    }, [scrollMode]);


    return (
        <main>
            <Header />
            <Hero />
            <InfoSection />
            <CardsSection />

            <div ref={featureSectionRef}>
                <FeatureSection />
            </div>

            <div ref={triggerRef} style={{ height: '1px' }} />

            {/* Se cambian los classNames para que sean strings, ya que vienen de un CSS global */}
            <div
                ref={presentationContainerRef}
                className={`presentationContainer ${scrollMode === 'presentation' ? 'active' : ''}`}
            >
                <div className="presentationSection">
                    <WeddingToilets />
                </div>
                <div className="presentationSection">
                    <AdvantagesSection />
                </div>
                <div className="presentationSection">
                    <PrivatePartiesSection />
                </div>
                <div className="presentationSection">
                    <SportsEventsSection />
                </div>
                <div className="presentationSection">
                    <SolucionesIndustriales />
                </div>
            </div>

            {scrollMode === 'free' && <Formulario />}
        </main>
    );
}