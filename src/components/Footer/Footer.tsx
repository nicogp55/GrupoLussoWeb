import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.logoColumn}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/Logo Grupo Lusso SVG.svg"
                                alt="Grupo Lusso Logo"
                                width={150}
                                height={50}
                                className={styles.logo}
                            />
                        </Link>
                    </div>

                    <div className={styles.linksWrapper}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Sobre Nosotros</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/quienes-somos">¿Quiénes somos?</Link></li>
                                <li><Link href="/contacto">Contacto</Link></li>
                            </ul>
                        </div>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Legal</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/terminos-y-condiciones">Términos y condiciones</Link></li>
                                <li><Link href="/politicas-de-privacidad">Políticas de privacidad</Link></li>
                                <li><Link href="/cookies">Cookies</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.socialsColumn}>
                        {/* Aquí puedes añadir tus iconos de redes sociales en el futuro */}
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Grupo Lusso. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
