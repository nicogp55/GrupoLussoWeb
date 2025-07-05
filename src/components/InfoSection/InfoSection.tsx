import Image from 'next/image';
import Link from 'next/link';
import styles from './InfoSection.module.css';
import { FC } from 'react';

const InfoSection: FC = () => {
    return (
        <section className={styles.infoSection}>
            <div className={styles.contentContainer}>
                <Image
                    src="/Logo Grupo Lusso SVG.svg"
                    alt="Logo de Grupo Lusso"
                    /* Dimensiones del logo actualizadas */
                    width={175.05}
                    height={51.32}
                />

                <h2 className={styles.title}>
                    LÍDERES EN EL ALQUILER DE BAÑOS PORTÁTILES DE LUJO EN URUGUAY
                </h2>

                {/* Usamos clases diferentes para cada párrafo ya que tienen estilos distintos */}
                <p className={styles.paragraph1}>
                    Nuestros baños portátiles cuentan con la mejor calidad unida al mejor servicio para que puedas cubrir todas las necesidades higiénicas de tu evento.
                </p>

                <p className={styles.paragraph2}>
                    Nos integramos en tu evento exclusivo con un servicio 100% premium. Nuestras soluciones de sanitarios móviles se adaptan a tus necesidades, con un diseño impecable y un servicio personalizado para tu fiesta privada o evento corporativo de alto standing en Uruguay.
                </p>

                <Link href="/solicitar-presupuesto" className={styles.bottomLink}>
                    Solicitar presupuesto
                </Link>
            </div>
        </section>
    );
};

export default InfoSection;