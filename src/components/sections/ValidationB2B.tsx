"use client";

import { motion } from "framer-motion";
import { Settings, Code, Globe } from "lucide-react";

export default function ValidationB2B() {
    const pillars = [
        {
            id: "01",
            icon: <Settings className="w-8 h-8 text-[#ff5632]" strokeWidth={1.5} />,
            title: "PRECISÃO CNC EM MÍCRON",
            desc: "Tolerância zero. Encaixes milimétricos que garantem inviolabilidade mecânica absoluta e robustez extrema contra ataques físicos."
        },
        {
            id: "02",
            icon: <Code className="w-8 h-8 text-[#ff5632]" strokeWidth={1.5} />,
            title: "SOFTWARE PROPRIETÁRIO (VSK OS)",
            desc: "Cérebro nativo. Arquitetura de sistema fechada e imune a vulnerabilidades genéricas, garantindo auditoria e controle cibernético."
        },
        {
            id: "03",
            icon: <Globe className="w-8 h-8 text-[#ff5632]" strokeWidth={1.5} />,
            title: "SUPORTE MULTI-MOEDA (+140)",
            desc: "Validação em escala global. Sensores de nível bancário processam o numerário mundial em tempo real para o varejo internacional."
        }
    ];



    return (
        <section className="py-24 lg:py-32 bg-[#0B0C10] relative overflow-hidden" id="validacao">
            {/* Engineering Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Glowing Top Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff5632] to-transparent opacity-40"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[500px] bg-[#ff5632] opacity-[0.04] blur-[120px] pointer-events-none"></div>

            <div className="container-design relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24 mb-24">
                    {/* Left Content - Typography & Story */}
                    <motion.div
                        className="lg:w-5/12 relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Technical Label */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#ff5632]"></span>
                            <span className="font-mono text-xs text-[#ff5632] tracking-[0.3em] uppercase">DNA Valstark</span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-[1.1]">
                            ENGENHARIA SEM <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5632] to-[#ff8f73] inline-block mt-2">
                                FRONTEIRAS.
                            </span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-body font-light">
                            <p>
                                Não somos apenas fabricantes de cofres inteligentes. Somos engenheiros especializados em <strong className="text-gray-200 font-medium">escuta ativa</strong> e na <strong className="text-gray-200 font-medium">verticalização industrial</strong>.
                            </p>
                            <p>
                                Nossa precisão micrométrica, herdada das exigências extremas da indústria de mineração, é aplicada na arquitetura de segurança do numerário global. Hardware e software construídos do zero para tolerância zero a falhas.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Content - Technical Pillars */}
                    <div className="lg:w-7/12 w-full flex flex-col gap-4 mt-8 lg:mt-0">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.id}
                                className="group relative p-6 sm:p-8 bg-[#111111] border border-white/5 hover:border-[#ff5632]/40 transition-colors duration-500 overflow-hidden flex flex-col sm:flex-row gap-6 sm:items-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                            >
                                {/* Hover Gradient Fill */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ff5632]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Precision Corner Markers */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#ff5632] transition-colors"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#ff5632] transition-colors"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#ff5632] transition-colors"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#ff5632] transition-colors"></div>

                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-16 h-16 flex items-center justify-center bg-black/60 border border-white/10 !text-white rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:shadow-[inset_0_1px_0_rgba(242,92,42,0.2)] transition-shadow">
                                        {pillar.icon}
                                    </div>
                                </div>

                                <div className="relative z-10 flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-display font-bold text-sm sm:text-base tracking-widest !text-white uppercase pr-4">
                                            {pillar.title}
                                        </h3>
                                        <span className="font-mono text-[10px] !text-gray-400 tracking-widest hidden sm:block">
                                            VOL.{pillar.id}
                                        </span>
                                    </div>
                                    <p className="font-mono text-xs sm:text-sm !text-gray-400 leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
