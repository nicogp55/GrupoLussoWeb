import React from 'react';
import styles from './FeatureSection.module.css';
import Link from "next/link";

const FeatureSection = () => {
    return (
        <section className={styles.featureSection}>
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <h3 className={styles.heading}>
                        Instalación de baños portátiles de Lujo
                    </h3>
                </div>
                <div className={styles.paragraphWrapper}>
                    <p className={styles.paragraph}>
                        Desde Grupo Lusso, ofrecemos la máxima calidad para clientes selectos. Con un
                        servicio 360º a la medida de nuestros clientes,
                        <strong> nos encargamos de la instalación, el mantenimiento y la retirada.</strong>
                        {' '}Para que solo te preocupes de disfrutar.
                    </p>
                </div>
                <div className={styles.buttonWrapper}>
                    <Link href="#presupuesto" className={styles.ctaButton}>
                        Solicita Presupuesto
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;