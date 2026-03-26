"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import Services from '@/src/components/Services';

const targets = [
  { title: "Empresas industriales", img: "/assets/empresas-industriales.jpg" },
  { title: "Cadenas comerciales", img: "/assets/cadenas-comerciales.jpg" },
  { title: "Desarrollos inmobiliarios", img: "/assets/desarrollos-inmobiliarios.webp" },
  { title: "Plantas de energía", img: "/assets/plantas-energia.jpg" },
  { title: "Centros Logísticos", img: "/assets/centros-logisticos.webp" }, 
  { title: "Hotelería Premium", img: "/assets/hoteleria.jpg" },
  { title: "Sector Agroindustrial", img: "/assets/agroindustrial.jpg" },
];

const steps = [
  { number: "1", title: "Evaluación de necesidades", description: "Comprendemos las necesidades eléctricas de tus proyectos." },
  { number: "2", title: "Planificación", description: "Desarrollamos un plan anual claro y predecible." },
  { number: "3", title: "Ejecución", description: "Supervisamos cada proyecto, asegurando calidad." },
];

export default function HowWeWork() {
  const duplicatedTargets = [...targets, ...targets];

  return (
    <section className="bg-white text-slate-900 overflow-hidden">
      
      {/* --- CÓMO TRABAJAMOS --- */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-12 tracking-tight">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#0284c7] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="text-base font-semibold text-[#1e293b]">{step.title}</h3>
                </div>
                <p className="text-slate-500 text-xs font-normal leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Services/>

      {/* --- CARRUSEL INFINITO --- */}
      <div className="pt-20 pb-10 bg-white border-t border-slate-50" id='proyectos'>
        <div className="text-center mb-5">
          <h2 className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-2 px-4">Para quiénes trabajamos</h2>
          <div className="h-0.5 w-8 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative flex items-center overflow-hidden py-4">
          <motion.div 
            className="flex gap-4 px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {duplicatedTargets.map((item, i) => (
              <div key={i} className="relative flex-shrink-0 w-60 md:w-72 h-32 overflow-hidden group border border-slate-50 shadow-md rounded-sm">
                <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 240px, 300px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="text-white font-bold text-xs md:text-sm tracking-tight text-center leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/40 to-transparent z-10" />
        </div>
      </div>

      {/* --- CALL TO ACTION --- */}
      {/* Ajuste: eliminamos restricciones de max-width en mobile para que ocupe el ancho completo */}
      <div className="w-full md:max-w-4xl md:mx-auto px-4 md:px-6 pb-16">
        <div className="relative overflow-hidden bg-slate-900 px-5 py-6 md:px-8 md:py-6 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-5 border border-white/10 shadow-2xl">
          
          <motion.div 
            animate={{ x: ['-150%', '150%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 blur-sm pointer-events-none"
          />

          <div className="relative z-10 w-full md:w-auto">
            {/* Ajuste: text-md en mobile para asegurar que entre en un renglón */}
            <h2 className="text-[15px] sm:text-base md:text-xl font-bold text-white leading-tight whitespace-nowrap md:whitespace-normal">
              ¿Querés implementar este modelo?
            </h2>
            <p className="text-slate-400 text-[10px] md:text-xs mt-1 md:mt-0.5 font-normal">
              Eficiencia eléctrica pensada para tu industria.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden w-full md:w-auto bg-sky-500 text-white font-bold py-3 px-6 text-xs rounded-lg flex items-center justify-center gap-2 transition-all duration-300 border border-sky-400 shrink-0 group shadow-[0_10px_20px_rgba(14,165,233,0.3)] z-10"
          >
            <motion.div 
              animate={{ x: ['-150%', '150%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatDelay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            />

            <Zap className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
            <span className="relative z-10 uppercase tracking-wider">Solicitar Propuesta</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}