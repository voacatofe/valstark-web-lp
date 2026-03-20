"use client";

import { motion } from "framer-motion";
import { Shield, Zap } from "lucide-react";

export default function NameOrigin() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="name-origin">
            {/* Grid Background - Using utility from globals.css */}
            <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
            
            <div className="container-design relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <motion.span 
                        className="text-primary font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        --- DNA VALSTARK ---
                    </motion.span>
                    <motion.h2 
                        className="text-4xl md:text-6xl font-black text-white text-center uppercase tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        A ORIGEM DA <span className="text-primary text-gradient-primary">FORÇA</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* VAL SIDE */}
                    <motion.div 
                        className="relative group h-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* HUD Brackets - Design Requirement 4.27 */}
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                        
                        <div className="bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 backdrop-blur-sm h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-primary/10 rounded-sm border border-primary/20">
                                        <Shield className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter opacity-90">VAL</h3>
                                </div>
                                
                                <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8">
                                    Derivado de <span className="text-white font-bold italic uppercase">Valor</span> e <span className="text-white font-bold italic uppercase">Credibilidade</span>. 
                                    Representa o nosso compromisso inegociável com a segurança do seu patrimônio e a precisão em cada transação.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-auto pt-8 border-t border-zinc-800/50">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Protocolo</span>
                                    <span className="text-xs md:text-sm text-green-500 font-mono flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> ATIVO.V_01
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1 text-right">
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Confiança</span>
                                    <span className="text-xs md:text-sm text-white font-mono tracking-tighter italic">ABS_TOLERANCE_ZERO</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* STARK SIDE */}
                    <motion.div 
                        className="relative group h-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* HUD Brackets - Design Requirement 4.27 */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                        
                        <div className="bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 backdrop-blur-sm h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-primary/10 rounded-sm border border-primary/20">
                                        <Zap className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter opacity-90">STARK</h3>
                                </div>
                                
                                <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8">
                                    Expressa <span className="text-white font-bold italic uppercase">Força</span> e <span className="text-white font-bold italic uppercase">Robustez Industrial</span>. 
                                    Inspirado na engenharia de ponta que torna nossos cofres barreiras impenetráveis contra qualquer ameaça física.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-auto pt-8 border-t border-zinc-800/50">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Material</span>
                                    <span className="text-xs md:text-sm text-white font-mono">ARMOR_AÇO_V1</span>
                                </div>
                                <div className="flex flex-col gap-1 text-right">
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Engenharia</span>
                                    <span className="text-xs md:text-sm text-primary font-mono italic">HEAVY_DUTY_SYS</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    className="mt-20 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="inline-block p-4 border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm relative">
                         {/* Micro decorative line */}
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-primary" />
                         
                        <p className="text-slate-400 font-sans italic text-sm md:text-base leading-relaxed">
                            "Nossa engenharia verticalizada (Metallurgy as a Service) está pronta para elevar o padrão da sua operação global, unindo a integridade do valor à indestructibilidade da forma."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
