"use client";

import { useState } from 'react';
import styles from './SolucionesIndustriales.module.css';
import { FC } from 'react';

const SolucionesIndustriales: FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Imágenes placeholder industriales
    const slides = [
        {
            id: 1,
            color: '#1B263B',
            alt: 'Sanitario industrial - Modelo Obra'
        },
        {
            id: 2,
            color: '#415A77',
            alt: 'Sanitario industrial - Modelo Industrial'
        },
        {
            id: 3,
            color: '#778DA9',
            alt: 'Sanitario industrial - Modelo Premium'
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
        <section id="industriales" className={styles.industrialSection}>
            {/* --- TÍTULO DE LA SECCIÓN --- */}
            <div className={styles.titleContainer}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.sectionTitle}>
                        SOLUCIONES INDUSTRIALES
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
                                                    <h4>Sanitario Industrial</h4>
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
                                Sanitarios portátiles para <strong>obras y entornos industriales</strong>
                            </h3>
                            <div className={styles.description}>
                                <p>
                                    Disponemos de soluciones de sanitarios portátiles para obras, reformas y espacios industriales.
                                    Garantizamos higiene, resistencia y practicidad en cualquier entorno exigente, adaptándonos a las necesidades de tu proyecto.
                                    Nuestro servicio incluye instalación, mantenimiento y retirada, para que no tengas que preocuparte de nada.
                                    <strong>Solicita información y te asesoramos sin compromiso.</strong>
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

export default SolucionesIndustriales;