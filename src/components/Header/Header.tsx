"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { FC } from 'react';

// Ya no necesitamos el componente Button aquí si lo quitamos
// import Button from '../Button/Button';

const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    return (
        <header className={styles.header}>
            {/* El contenedor principal del header visible no cambia */}
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src="/Logo Grupo Lusso SVG.svg"
                        alt="Logo de Grupo Lusso"
                        width={128.12}
                        height={37.56}
                        priority={true}
                    />
                </Link>

                <div className={styles.mainNav}>
                    <nav className={styles.navigation}>
                        <Link href="/fiestas-privadas" className={styles.navLink}>Fiestas privadas</Link>
                        <Link href="/eventos-corporativos" className={styles.navLink}>Eventos corporativos</Link>
                        <Link href="/eventos-deportivos" className={styles.navLink}>Eventos deportivos</Link>
                        <Link href="/servicios-industriales" className={styles.navLink}>Servicios industriales</Link>
                    </nav>

                    {/* El botón fue reemplazado por un Link normal en el CSS que me pasaste */}
                    <a href="/solicitar-presupuesto" className={styles.ctaButton}>
                        <Image
                            src="/ico wpp.svg"
                            alt="Ícono de WhatsApp"
                            width={22.44}
                            height={22}
                        />
                        <div className={styles.separator}></div>
                        <span className={styles.buttonText}>Solicitar presupuesto</span>
                    </a>
                </div>

                <button
                    className={`${styles.btMenu} ${menuOpen ? styles.menuOpen : ''}`}
                    title="Menu"
                    onClick={handleMenuToggle}
                >
                    <span className={styles.hamburguer}>
                        <span className={`${styles.bar} ${styles.bar1}`}></span>
                        <span className={`${styles.bar} ${styles.bar2}`}></span>
                        <span className={`${styles.bar} ${styles.bar3}`}></span>
                    </span>
                </button>
            </div>

            {/*
              EXPLICACIÓN:
              El menú móvil ahora está aquí. Al estar en el flujo normal,
              cuando gane altura, empujará todo lo que venga después.
            */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
                <Link href="/fiestas-privadas" className={styles.mobileNavLink} onClick={handleMenuToggle}>Fiestas privadas</Link>
                <Link href="/eventos-corporativos" className={styles.mobileNavLink} onClick={handleMenuToggle}>Eventos corporativos</Link>
                <Link href="/eventos-deportivos" className={styles.mobileNavLink} onClick={handleMenuToggle}>Eventos deportivos</Link>
                <Link href="/servicios-industriales" className={styles.mobileNavLink} onClick={handleMenuToggle}>Servicios industriales</Link>
                <Link href="/solicitar-presupuesto" className={styles.mobileCtaButton} onClick={handleMenuToggle}>
                    Solicitar presupuesto
                </Link>
            </div>
        </header>
    );
};

export default Header;