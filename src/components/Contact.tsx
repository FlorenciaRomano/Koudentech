"use client";

import { motion } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  return (
    // CAMBIO CLAVE: Quitamos min-h-screen para evitar que se estire en 4K. 
    // Usamos h-auto y un padding (py) consistente para que se vea igual en toda medida.
    <section 
      id="contacto" 
      className="bg-slate-950 w-full h-auto flex items-center justify-center px-4 md:px-6 relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      
      {/* Luces de fondo ambientales */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Contenedor principal: El max-w-6xl mantiene el ancho perfecto en 2560px */}
      <div className="max-w-6xl w-full relative z-10 flex flex-col">
        
        {/* Encabezado */}
        <div className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
          >
            Contanos tu <br />
            <span className="text-slate-500">proyecto</span>
          </motion.h2>
          <div className="h-1.5 w-20 bg-sky-500 rounded-full" />
        </div>

        {/* Grid: items-stretch para que las tarjetas midan lo mismo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* --- TARJETA IZQUIERDA: WHATSAPP DIRECTO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-slate-900/50 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">¿Preferís escribirnos directo?</h3>
              <p className="text-slate-400 text-sm mb-8">Abrí el chat y charlamos ahora mismo.</p>

              <motion.a 
                href="https://wa.me/5491124682070" 
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="group flex items-center justify-center gap-3 w-full py-4 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white border border-emerald-500/40 rounded-2xl font-bold text-sm transition-all duration-300 mb-10"
              >
                <MessageCircle className="w-5 h-5" />
                Abrir chat ahora
                <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </motion.a>
            </div>

            <ul className="space-y-6">
              {[
                { t: "Atención personalizada", d: "Un asesor te responde de forma humana." },
                { t: "Respuesta en el día", d: "Horarios hábiles de lunes a viernes." },
                { t: "Asesoramiento sin cargo", d: "Resolvemos tus dudas técnicas iniciales." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="bg-emerald-500/20 p-1.5 rounded-full h-fit">
                    <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.t}</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- TARJETA DERECHA: FORMULARIO --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-slate-900/40 border border-white/5 p-8 md:p-10 rounded-[2.5rem]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Nombre</label>
                  <input type="text" className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-sky-500 transition-all shadow-inner" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Apellido</label>
                  <input type="text" className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-sky-500 transition-all shadow-inner" placeholder="Tu apellido" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Email</label>
                  <input type="email" className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-sky-500 transition-all shadow-inner" placeholder="ejemplo@empresa.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Ubicación</label>
                  <input type="text" className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-sky-500 transition-all shadow-inner" placeholder="Ciudad / Provincia" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Tu necesidad</label>
                <textarea rows={4} className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-sky-500 transition-all resize-none shadow-inner" placeholder="Contanos brevemente..." />
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-4">
                <p className="text-slate-500 text-xs leading-relaxed max-w-sm text-center lg:text-left">
                  Continuaremos la conversación por WhatsApp para una atención más rápida.
                </p>
                <button 
                  type="submit"
                  className="w-full lg:w-auto bg-white text-slate-950 px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all duration-300 active:scale-95 shadow-xl"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}