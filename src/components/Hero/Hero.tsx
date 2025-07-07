import Link from 'next/link';
import Image from 'next/image'; // Mantenemos Image por el ícono del botón
import styles from './Hero.module.css';
import { FC } from 'react';

const Hero: FC = () => {
    return (
        <section className={styles.heroSection}>
            {/*
              EXPLICACIÓN:
              Reemplazamos el componente <Image> por la etiqueta <video>.
              Le añadimos los atributos para que se comporte como un fondo.
            */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.heroVideo}
            >
                <source src="/Fondo Web Lusso Vid.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
            </video>

            {/* El overlay de texto no cambia */}
            <div className={styles.textOverlay}>
                <h1 className={styles.mainTitle}>ALQUILER DE</h1>
                <h2 className={styles.subTitle}>BAÑOS PORTÁTILES DE LUJO</h2>
                <p className={styles.locationText}>EN URUGUAY</p>
                <div className={styles.heroButtonContainer}>
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