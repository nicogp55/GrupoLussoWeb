"use client";

import { useState, FC, useRef, useEffect } from 'react'; // Importamos useRef y useEffect
import styles from './WeddingToilets.module.css';

const WeddingToilets: FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // --- NUEVO: Refs para la lógica de Snap ---
    // Ref para apuntar al elemento <section> en el DOM
    const sectionRef = useRef<HTMLElement>(null);
    // Ref para guardar el estado de si la sección está visible o no
    const isIntersecting = useRef(false);
    // Ref para controlar el temporizador de fin de scroll
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

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

    // --- NUEVO: Lógica del Intersection Observer ---
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Solo aplicamos la lógica en vistas de móvil/tablet
        if (window.innerWidth >= 1200) return;

        // 1. Lógica para detectar el fin del scroll
        const handleScroll = () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                // Cuando el usuario deja de hacer scroll, comprobamos si la sección es visible
                if (isIntersecting.current) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 1000); // Un pequeño delay para detectar la parada
        };

        // 2. Observer para detectar la visibilidad de la sección
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Actualizamos la ref con el estado de visibilidad
                isIntersecting.current = entry.isIntersecting;
            },
            {
                // Se activa cuando el 35% de la sección es visible
                threshold: 0.1,
            }
        );

        // 3. Activamos los listeners
        observer.observe(section);
        window.addEventListener('scroll', handleScroll);

        // 4. Función de limpieza para evitar fugas de memoria
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez


    return (
        // Asignamos la ref a la sección
        <section id="bodas" className={styles.weddingSection} ref={sectionRef}>
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
                                                // Cambiamos 'display' por 'opacity' para que la transición funcione
                                                opacity: index === currentSlide ? 1 : 0,
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