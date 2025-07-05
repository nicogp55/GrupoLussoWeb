import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import { FC } from 'react';

const Hero: FC = () => {
    return (
        <section className={styles.heroSection}>
            <Image src="/Foto Hero.png" alt="Imagen principal de la hero section" fill={true} priority={true} className={styles.heroImage} />
            <div className={styles.textOverlay}>
                <h1 className={styles.mainTitle}>ALQUILER DE</h1>
                <h2 className={styles.subTitle}>BAÑOS PORTÁTILES DE LUJO</h2>
                <p className={styles.locationText}>EN URUGUAY</p>
                <div className={styles.heroButtonContainer}>
                    {/*
                      EXPLICACIÓN:
                      Aquí está la nueva estructura. Un 'div' con los estilos
                      envuelve al 'Link'.
                    */}
                    <div className={styles.heroCtaButton}>
                        <Link href="/solicitar-presupuesto" className={styles.heroCtaLinkInner}>
                            <Image
                                src="/ico wpp.svg"
                                alt="Ícono de WhatsApp"
                                width={22.44}
                                height={22}
                            />
                            <div className={styles.separator}></div>
                            <span className={styles.buttonText}>Solicitar presupuesto</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;