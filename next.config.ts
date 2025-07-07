import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',

    // 👇 AÑADE ESTA SECCIÓN
    images: {
        unoptimized: true,
    },
};

export default nextConfig;