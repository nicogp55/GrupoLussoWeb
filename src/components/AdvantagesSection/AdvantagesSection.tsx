"use client";

import { FC } from 'react';
import Image from 'next/image';
import styles from './AdvantagesSection.module.css';

interface Advantage {
    id: string;
    icon: string;
    title: string;
    strongText: string;
    description: string;
}

const AdvantagesSection: FC = () => {
    const advantages: Advantage[] = [
        {
            id: 'asesoramiento',
            icon: '/icons/asistencia-personalizada.svg',
            title: 'PERSONALIZADO',
            strongText: 'ASESORAMIENTO',
            description: 'Ofreciéndote la instalación sanitaria más adecuada a todas tus necesidades.'
        },
        {
            id: 'respuesta',
            icon: '/icons/transporte.svg',
            title: 'INMEDIATA',
            strongText: 'RESPUESTA',
            description: 'Nos adaptamos a tu calendario. Cuéntanos tus fechas y nosotros coordinamos los tiempos para que todo salga perfecto.'
        },
        {
            id: 'limpieza',
            icon: '/icons/desinfeccion.svg',
            title: 'LIMPIEZA Y DESINFECCIÓN',
            strongText: 'GARANTÍA',
            description: 'Nuestro personal de limpieza garantizará el perfecto estado de los sanitarios durante el tiempo que dure el evento.'
        },
        {
            id: 'ambiental',
            icon: '/icons/responsabilidad-medioambiental.svg',
            title: 'GESTIÓN AMBIENTAL',
            strongText: 'RESPONSABILIDAD',
            description: 'Gestionamos todos los residuos cumpliendo con los protocolos y procesos establecidos con responsabilidad medioambiental.'
        }
    ];

    return (
        <section className={styles.advantagesSection}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h3 className={styles.title}>
                        Elige Brillant para alquilar baños portátiles en Ibiza
                    </h3>
                    <p className={styles.description}>
                        Nos encargamos de la{' '}
                        <strong>gestión integral en el equipamiento de sanitarios portátiles de lujo en Ibiza</strong>{' '}
                        y contamos con una amplia experiencia y catálogo. Estas son sólo algunas de las ventajas de contar con nosotros:
                    </p>
                </header>

                <div className={styles.advantagesGrid}>
                    {advantages.map((advantage) => (
                        <article key={advantage.id} className={styles.advantageCard}>
                            <div className={styles.iconContainer}>
                                <Image
                                    src={advantage.icon}
                                    alt={`Ícono de ${advantage.strongText.toLowerCase()}`}
                                    width={66}
                                    height={65}
                                    className={styles.icon}
                                />
                            </div>
                            <h4 className={styles.cardTitle}>
                                <strong>{advantage.strongText}</strong>
                                <br />
                                {advantage.title}
                            </h4>
                            <p className={styles.cardDescription}>
                                {advantage.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
