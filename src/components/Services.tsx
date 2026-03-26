"use client";

import { motion } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Building2, 
  Lightbulb 
} from 'lucide-react';

const services = [
  {
    title: "Auditoría Eléctrica",
    description: "Análisis completo de infraestructura para optimizar consumo y detectar fallas.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Diseño de Proyectos",
    description: "Planificación de ingeniería de alto nivel para desarrollos inmobiliarios y retail.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: "Eficiencia Energética",
    description: "Implementación de tecnologías para reducir drásticamente tu factura eléctrica.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Infraestructura Retail",
    description: "Instalaciones especializadas para locales comerciales y grandes superficies.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Consultoría Técnica",
    description: "Asesoramiento experto para la toma de decisiones en inversiones.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

export default function Services() {
  return (
    <section 
      id="servicios" 
      // CAMBIO CLAVE: En 2560px (min-width: 2560px) eliminamos el min-h-screen y h-screen.
      // Usamos h-auto y un padding (py-32) para que ocupe solo lo necesario.
      className="relative bg-[#1d326f] overflow-hidden py-12 md:py-16 flex items-center justify-center min-h-screen [@media(min-width:2560px)]:min-h-0 [@media(min-width:2560px)]:h-auto [@media(min-width:2560px)]:py-32"
    >
      
      {/* Luces de fondo */}
      <div className="absolute top-0 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2">
            Nuestra Expertise
          </h2>
          <p className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Soluciones de Ingeniería <br />
            <span className="text-sky-200/30 text-2xl md:text-4xl font-medium italic">Hechas a Medida</span>
          </p>
        </motion.div>

        {/* GRILLA */}
        <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
              }}
              whileHover={{ y: -5 }}
              className={`
                group relative bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 
                flex-shrink-0 w-[85vw] md:w-auto snap-center
                hover:bg-white/[0.08] hover:border-sky-500/50 transition-all duration-500
                ${i === services.length - 1 && services.length % 2 !== 0 ? 'md:col-span-2 lg:col-span-1 md:max-w-[50%] md:mx-auto lg:max-w-none' : ''}
              `}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 leading-snug text-sm md:text-base mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sky-400 font-black text-[10px] tracking-[0.2em] group-hover:text-white transition-colors">
                  SABER MÁS 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicador de scroll */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {services.map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}