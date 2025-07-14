"use client"; // <-- LA SOLUCIÓN QUE ENCONTRASTE Y QUE FALTABA

import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './CardsSection.module.css';

interface CardProps {
    title: string;
    description: string;
    buttonText: string;
    backgroundImage: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText, backgroundImage }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const cardClasses = `${styles.card} ${inView ? styles.isVisible : ''}`;

    return (
        <div
            ref={ref}
            className={cardClasses}
            style={{ '--bg-image': `url(${backgroundImage})` } as React.CSSProperties}
        >
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.copy}>{description}</p>
                <button className={styles.btn}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Card;