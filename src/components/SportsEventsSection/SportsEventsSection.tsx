"use client";

import { useState } from 'react';
import styles from './SportsEventsSection.module.css';
import { FC } from 'react';

const SportsEventsSection: FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Imágenes placeholder para el slider de eventos deportivos
    const slides = [
        {
            id: 1,
            color: '#2D8B3D',
            alt: 'Sanitario portátil deportivo - Modelo Stadium'
        },
        {
            id: 2,
            color: '#50B96F',
            alt: 'Sanitario portátil deportivo - Modelo Runner'
        },
        {
            id: 3,
            color: '#1B5C28',
            alt: 'Sanitario portátil deportivo - Modelo Champion'
        }
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleGoToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section id="deportivos" className={styles.sportsEventsSection}>
            {/* --- TÍTULO DE LA SECCIÓN --- */}
            <div className={styles.titleContainer}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.sectionTitle}>
                        SANITARIOS PORTÁTILES PARA EVENTOS DEPORTIVOS
                    </h3>
                </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL CON FONDO --- */}
            <div className={styles.mainContent}>
                <div className={styles.contentWrapper}>

                    {/* --- SLIDER DE IMÁGENES --- */}
                    <div className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.sliderContainer}>
                                {/* Botón anterior */}
                                <button
                                    className={`${styles.sliderButton} ${styles.prevButton}`}
                                    onClick={handlePrevSlide}
                                    aria-label="Imagen anterior"
                                >
                                    ❮
                                </button>

                                {/* Slides */}
                                <div className={styles.slidesWrapper}>
                                    {slides.map((slide, index) => (
                                        <div
                                            key={slide.id}
                                            className={`${styles.slide} ${
                                                index === currentSlide ? styles.activeSlide : ''
                                            }`}
                                            style={{
                                                backgroundColor: slide.color,
                                                display: index === currentSlide ? 'flex' : 'none'
                                            }}
                                        >
                                            <div className={styles.slideContent}>
                                                <div className={styles.slideText}>
                                                    <h4>Sanitario Deportivo</h4>
                                                    <p>Modelo {slide.alt.split('-')[1]?.trim()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Botón siguiente */}
                                <button
                                    className={`${styles.sliderButton} ${styles.nextButton}`}
                                    onClick={handleNextSlide}
                                    aria-label="Siguiente imagen"
                                >
                                    ❯
                                </button>

                                {/* Puntos de navegación */}
                                <div className={styles.dotsContainer}>
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`${styles.dot} ${
                                                index === currentSlide ? styles.activeDot : ''
                                            }`}
                                            onClick={() => handleGoToSlide(index)}
                                            aria-label={`Ir a imagen ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- CONTENIDO DE TEXTO --- */}
                    <div className={styles.textContent}>
                        <div className={styles.textWrapper}>
                            <h3 className={styles.contentTitle}>
                                Sanitarios de alta gama para todo tipo de <strong>eventos deportivos</strong>
                            </h3>
                            <div className={styles.description}>
                                <p>
                                    Ofrecemos sanitarios de alta gama para todo tipo de eventos deportivos.
                                    Podrás contar con todas las prestaciones de un baño con las mejores calidades
                                    y ofrecer una experiencia excelente a organizadores y asistentes.
                                    Evita colas y aglomeraciones, malos olores, y prioriza la higiene, seguridad
                                    y comodidad de todos. Cuéntanos tus necesidades y te daremos <strong>la mejor solución a medida</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- BOTÓN DE ACCIÓN --- */}
                    <div className={styles.actionContainer}>
                        <div className={styles.actionWrapper}>
                            <a
                                href="#presupuesto"
                                className={styles.ctaButton}
                            >
                                <span>SOLICITA PRESUPUESTO</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SportsEventsSection;
