"use client";

import { useState } from 'react';
import styles from './WeddingToilets.module.css';
import { FC } from 'react';

const WeddingToilets: FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // 5 variantes de imágenes placeholder azules
    const slides = [
        {
            id: 1,
            color: '#4A90E2',
            alt: 'Sanitario portátil de lujo - Modelo Premium'
        },
        {
            id: 2,
            color: '#357ABD',
            alt: 'Sanitario portátil de lujo - Modelo Executive'
        },
        {
            id: 3,
            color: '#2C5F8B',
            alt: 'Sanitario portátil de lujo - Modelo VIP'
        },
        {
            id: 4,
            color: '#1E4A6B',
            alt: 'Sanitario portátil de lujo - Modelo Elite'
        },
        {
            id: 5,
            color: '#6BB6FF',
            alt: 'Sanitario portátil de lujo - Modelo Deluxe'
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
        <section id="bodas" className={styles.weddingSection}>
            {/* Título de la sección */}
            <div className={styles.titleContainer}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.sectionTitle}>
                        SANITARIOS PORTÁTILES PARA BODAS
                    </h3>
                </div>
            </div>

            {/* Contenido principal con fondo */}
            <div className={styles.mainContent}>
                <div className={styles.contentWrapper}>

                    {/* Slider de imágenes */}
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
                                                    <h4>Sanitario Portátil</h4>
                                                    <p>Modelo de Lujo #{slide.id}</p>
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

                    {/* Contenido de texto */}
                    <div className={styles.textContent}>
                        <div className={styles.textWrapper}>
                            <h3 className={styles.contentTitle}>
                                Cada detalle puede <strong>marcar la diferencia</strong>.
                            </h3>
                            <div className={styles.description}>
                                <p>
                                    Sabemos que en un día tan especial cada detalle puede marcar la diferencia.
                                    Contar con aseos de lujo es una solución exclusiva para bodas de alto standing.
                                    Con Brillant, contarás con un diseño y un servicio a medida adaptado a los
                                    espacios y las condiciones del evento. <strong>Para que todo esté perfecto
                                    el día de tu boda</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botón de acción */}
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

export default WeddingToilets;
