import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// Configuración de las fuentes del proyecto
const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter', // Asigna una variable CSS
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: '--font-montserrat', // Asigna una variable CSS
    weight: ['400', '500', '700', '800']
});

export const metadata: Metadata = {
    title: "Grupo Lusso",
    description: "Soluciones para eventos de lujo en Ibiza.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        {/* Usamos las variables para que estén disponibles en todo el CSS */}
        <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
        </html>
    );
}