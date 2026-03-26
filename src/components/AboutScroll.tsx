"use client";

import { motion, animate, useInView } from 'framer-motion';
import { Target, Eye, Diamond } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const aboutData = [
  {
    id: 'mision',
    title: "Misión",
    text: "Fabricación de gabinetes metálicos y bancos de capacitores que cumplen con la normativa técnica vigente.",
    desktop: { x: -320, y: 0, rotate: -2 }, // Posición a la izquierda del centro
    tablet: { x: -240, y: 20, rotate: -6 }, 
    icon: <Target className="text-emerald-500 w-6 h-6" />
  },
  {
    id: 'vision',
    title: "Visión",
    text: "Ser una empresa altamente reconocida, sistematizada en mejora continua y generadora de valor.",
    desktop: { x: 0, y: 40, rotate: 3 }, // Justo al centro
    tablet: { x: 0, y: -10, rotate: 0 }, 
    icon: <Eye className="text-sky-500 w-6 h-6" />
  },
  {
    id: 'valores',
    title: "Valores",
    text: "Integridad y responsabilidad guían nuestro trabajo para ofrecer soluciones eléctricas precisas.",
    desktop: { x: 320, y: 0, rotate: -1 }, // Posición a la derecha del centro
    tablet: { x: 240, y: 20, rotate: 6 }, 
    icon: <Diamond className="text-blue-500 w-6 h-6" />
  },
];

const stats = [
  { label: "Años de experiencia", value: 20, suffix: "+" },
  { label: "Servicio Integral", value: 100, suffix: "%" },
  { label: "Asesoramiento", value: 1, suffix: ":1" },
];

export default function AboutUs() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section id="sobre-nosotros" className="relative py-20 lg:py-32 bg-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CONTENEDOR UNIFICADO Y CENTRADO */}
        <div className="flex flex-col items-center text-center">
          
          {/* --- BLOQUE DE TEXTO --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-none mb-6">
              Sobre <span className="text-sky-500 italic font-light">Nosotros</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto">
              Trabajamos bajo un esquema de <span className="text-slate-900 font-bold">excelencia técnica</span> que le permite a tu empresa tener previsibilidad y organización.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8 max-w-md mx-auto">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-4xl font-black text-slate-900">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- CONTENEDOR DE TARJETAS CENTRADO --- */}
          <div className={`relative w-full flex flex-col items-center gap-6 
            ${isMobile ? 'h-auto' : 'h-[300px] lg:h-[350px]'}`}>
            
            {aboutData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  x: isMobile ? 0 : (isTablet ? item.tablet.x : item.desktop.x), 
                  y: isMobile ? 0 : (isTablet ? item.tablet.y : item.desktop.y), 
                  rotate: isMobile ? 0 : (isTablet ? item.tablet.rotate : item.desktop.rotate) 
                }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 60 
                }}
                className="md:absolute relative md:left-1/2 md:-translate-x-1/2 w-full max-w-[280px] lg:max-w-[320px] p-6 rounded-2xl border border-slate-100 bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex flex-col z-10 text-left"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-slate-50 rounded-lg shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Decoración de fondo simétrica */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-sky-100/40 blur-[100px] rounded-full z-0" />
    </section>
  );
}