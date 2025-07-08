import Image from 'next/image';
import Link from 'next/link';
import styles from './CardsSection.module.css';
import { FC } from 'react';

// Un array de datos para nuestras tarjetas con las imágenes actualizadas
const cardData = [
    {
        imageSrc: '/Weddd.jpeg',
        title: 'Fiestas privadas',
        link: '/trailer-8-personas',
    },
    {
        // EXPLICACIÓN: Imagen actualizada
        imageSrc: '/Corp.png',
        title: 'Eventos corporativos',
        link: '/trailer-12-personas',
    },
    {
        // EXPLICACIÓN: Imagen actualizada
        imageSrc: '/Dep.jpeg',
        title: 'Eventos deportivos',
        link: '/trailer-16-personas',
    },
    {
        // EXPLICACIÓN: Imagen actualizada
        imageSrc: '/Banos.jpg',
        title: 'Servicios industriales',
        link: '/trailer-20-personas',
    },
];

const CardsSection: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.gridContainer}>
                {/* Recorremos el array y creamos una tarjeta por cada item */}
                {cardData.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image src={card.imageSrc} alt={card.title} fill objectFit="cover" className={styles.cardImage} />
                        </div>
                        <div className={styles.contentContainer}>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <Link href={card.link} className={styles.cardButton}>
                                VER OPCIONES DISPONIBLES
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardsSection;