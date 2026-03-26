"use client";

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterSection() {
    return (
        <section className="bg-slate-950 pt-10">

            {/* --- FOOTER COMPACTO --- */}
            <footer className="relative border-t border-white/5 pb-8">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Frase Superior */}
                    <div className="py-4 text-center">
                        <p className="text-slate-400 text-sm md:text-base font-medium tracking-tight px-4">
                            Empresas que buscan <span className="text-white font-bold">eficiencia, previsibilidad y resultados.</span>
                        </p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

                    {/* Grid Principal: 
              - Mobile: 2 cols
              - Tablet (md): 3 cols (Logo arriba)
              - Desktop (lg): 4 cols (Logo al costado)
          */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-4 mb-10 items-start">

                        {/* Logo: Ocupa todo el ancho en Tablet (col-span-3) y se centra */}
                        <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                    animate={{
                                        filter: ["drop-shadow(0 0 2px #0ea5e9)", "drop-shadow(0 0 8px #0ea5e9)", "drop-shadow(0 0 2px #0ea5e9)"]
                                    }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="relative w-16 h-16 md:w-20 md:h-20 shrink-0"
                                >
                                    <Image
                                        src="/assets/logo_Koudentech.png"
                                        alt="Logo Empresa"
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                                <div className="text-left">
                                    <h3 className="text-white font-sans font-black text-sm md:text-base leading-none tracking-tighter">
                                        Koudentech
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Contacto: Centrado en tablet */}
                        <div className="col-span-1 flex flex-col items-center md:items-center lg:items-start text-center lg:text-left">
                            <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4">Contacto</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-center lg:justify-start gap-2 text-slate-300 text-[12px] md:text-[13px]">
                                    <Mail className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                                    <span className="whitespace-nowrap">contacto@empresa.com</span>
                                </li>
                                <li className="flex items-center justify-center lg:justify-start gap-2 text-slate-300 text-[12px] md:text-[13px]">
                                    <Phone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                                    <span className="whitespace-nowrap">+54 9 11 1234 5678</span>
                                </li>
                            </ul>
                        </div>

                        {/* Servicios: Centrado en tablet */}
                        <div className="col-span-1 flex flex-col items-center md:items-center lg:items-start text-center lg:text-left">
                            <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4">Servicios</h4>
                            <ul className="space-y-2">
                                {["Proyectos", "Instalaciones", "Asesoramiento"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-300 text-[13px] hover:text-white transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Empresa: Centrado en tablet */}
                        {/* En mobile ocupa 2 cols para centrarse, en tablet ocupa 1 de las 3 disponibles */}
                        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-center lg:items-start text-center lg:text-left">
                            <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4">Empresa</h4>
                            <ul className="space-y-2">
                                {["Nosotros", "Trabajo", "Contacto"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-300 text-[13px] hover:text-white transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-slate-500 text-[9px] md:text-[10px] font-medium tracking-widest uppercase">
                            © 2026 Koudentech - Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}