import React from 'react';
import styles from './CardsSection.module.css';
import Card from './Card';

const cardsData = [
    {
        id: 1,
        title: 'Fiestas Privadas',
        description: 'Diseñamos celebraciones y bodas exclusivas, cuidando cada detalle para que tus momentos más especiales sean únicos.',
        buttonText: 'Ver opciones',
        backgroundImage: '/images/TarjetaBoda.jpeg',
    },
    {
        id: 2,
        title: 'Eventos Corporativos',
        description: 'Potencia la imagen de tu empresa con eventos impecables, desde conferencias y lanzamientos hasta celebraciones de fin de año.',
        buttonText: 'Ver opciones',
        backgroundImage: '/images/TarjetaCorporativo.png',
    },
    {
        id: 3,
        title: 'Eventos Deportivos',
        description: 'Desde torneos locales hasta competiciones de alto nivel, gestionamos cada detalle para una experiencia deportiva inolvidable.',
        buttonText: 'Ver opciones',
        backgroundImage: '/images/TarjetaDeportivo.jpeg',
    },
    {
        id: 4,
        title: 'Servicios Industriales',
        description: 'Ofrecemos soluciones integrales para eventos a gran escala, garantizando la infraestructura y logística que tu proyecto necesita.',
        buttonText: 'Ver opciones',
        backgroundImage: '/images/TarjetaIndustrial.jpg',
    },
];

const CardsSection = () => {
    return (
        <section className={styles.cardsSection}>
            <div className={styles.cardsGrid}>
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        backgroundImage={card.backgroundImage}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardsSection;