"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const images = [
    '/assets/hero-1.jfif',
    '/assets/hero-2.jfif',
    '/assets/hero-3.jfif',
    '/assets/hero-4.jfif',
    '/assets/hero-5.jfif',
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (paused || !mounted) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [paused, mounted]);

    if (!mounted) return <div className="bg-black min-h-screen w-full" />;

    return (
        <section
            // Se mantiene min-h-screen para todo, pero se limita solo en pantallas ultra anchas (2xl)
            className="relative w-full min-h-screen 2xl:min-h-[800px] 2xl:h-[85vh] 2xl:max-h-[1000px] flex flex-col items-center justify-center overflow-hidden bg-black"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* 1. SLIDESHOW DE FONDO */}
            <div className="absolute inset-0 w-full h-full z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={images[index]}
                        src={images[index]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.45 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
            </div>

            {/* 2. CONTENIDO PRINCIPAL */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 w-full max-w-[100ch] mx-auto px-6 text-center pt-32 pb-10"
            >
               
                {/* Título Principal */}
                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                    Soluciones eléctricas <br />
                    <span className="font-normal opacity-90 text-[0.85em]">para empresas que necesitan</span> <br />
                    <span className="font-extrabold italic text-sky-400">previsibilidad</span>
                </h1>

                {/* Bajada de Título */}
                <p className="text-white/80 text-base md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
                    Servicio anual enfocado en proyectos eléctricos <br className="hidden md:block" />
                    para industrias, retail y desarrollos.
                </p>

                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    {/* Botón Iluminado con Salto */}
                    <motion.button 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full sm:w-auto bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white font-bold py-2 px-5 rounded-lg text-sm md:text-base uppercase transition-all shadow-[0_0_20px_rgba(2,132,199,0.6)] hover:shadow-[0_0_30px_rgba(2,132,199,0.8)] border border-blue-400/30"
                    >
                        Solicitar Propuesta
                    </motion.button>
                    
                    {/* Botón con Hover Transparente Borroso */}
                    <button className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/10 hover:backdrop-blur-md text-white font-bold py-2 px-5 rounded-lg text-sm md:text-base uppercase transition-all flex items-center justify-center gap-2">
                        Coordinar Reunión <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </motion.div>
        </section>
    );
}