import Link from 'next/link';
import Image from 'next/image';
import styles from './Button.module.css';
import { FC } from 'react';

type ButtonProps = {
    href: string;
    size?: 'default' | 'large';
};

const Button: FC<ButtonProps> = ({ href, size = 'default' }) => {
    return (
        <Link href={href} className={`${styles.ctaButton} ${size === 'large' ? styles.large : ''}`}>
            <Image
                src="/ico wpp.svg"
                alt="Ícono de WhatsApp"
                width={22.44}
                height={22}
            />
            <div className={styles.separator}></div>
            <span className={styles.buttonText}>Solicitar presupuesto</span>
        </Link>
    );
};

export default Button;