"use client"; // Directiva para indicar que es un componente de cliente

import React, { useState } from 'react';
import styles from './Formulario.module.css';
import Image from "next/image";

const Formulario = () => {
    // Estado para guardar todos los datos del formulario en un solo objeto
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        evento: 'Bodas', // Valor por defecto del radio button
        mensaje: '',
        aceptaPolitica: false,
    });

    // Manejador genérico para actualizar el estado del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        // Si es un checkbox, manejamos el valor 'checked'
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prevState => ({
                ...prevState,
                [name]: checked,
            }));
        } else {
            // Para todos los demás inputs (text, email, radio, textarea)
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    // Manejador para el envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Por ahora, solo mostraremos los datos en la consola
        console.log('Datos del formulario enviados:', formData);
        // Aquí iría la lógica para enviar los datos a un servidor
    };

    return (
        <section id="presupuesto" className={styles.formSection}>
            <div className={styles.container}>
                <div className={styles.introWrapper}>
                    <Image src="/Logo Grupo Lusso SVG.svg" alt="Logo Grupo Lusso SVG.svg" width={147} height={65} />
                    <h2 className={styles.heading}>ALQUILER DE SANITARIOS PORTÁTILES DE LUJO</h2>
                    <h4 className={styles.subheading}>
                        Solicita presupuesto, <strong>el compromiso es nuestro</strong>.
                    </h4>
                </div>

                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className={styles.inputField}
                            />
                            <input
                                type="text"
                                name="apellidos"
                                placeholder="Apellidos"
                                value={formData.apellidos}
                                onChange={handleChange}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.inputField}
                            />
                            <input
                                type="tel"
                                name="telefono"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.radioGroup}>
                            <p><b>Tipo de Evento:</b></p>
                            <div className={styles.radioOptions}>
                                {['Bodas', 'Privados', 'Públicos', 'Deportivos', 'Otros'].map(type => (
                                    <label key={type} className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="evento"
                                            value={type}
                                            checked={formData.evento === type}
                                            onChange={handleChange}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className={styles.fullWidthRow}>
                            <textarea
                                name="mensaje"
                                placeholder="Mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                className={styles.textareaField}
                            />
                        </div>
                        <div className={styles.submissionRow}>
                            <div className={styles.checkboxWrapper}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="aceptaPolitica"
                                        checked={formData.aceptaPolitica}
                                        onChange={handleChange}
                                    />
                                    He leído y acepto la Política de Privacidad
                                </label>
                            </div>
                            <div className={styles.buttonWrapper}>
                                <button type="submit" className={styles.submitButton}>
                                    SOLICITAR PRESUPUESTO
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Formulario;