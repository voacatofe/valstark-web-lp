"use client";

import { motion } from "framer-motion";
import { Settings, Code, Globe, ScanLine, Fish, Layers } from "lucide-react";

export default function ValidationB2B() {
    const pillars = [
        {
            id: "01",
            icon: <ScanLine className="w-8 h-8 text-[#ff5632]" strokeWidth={1.5} />,
            title: "SENSOR SPECTRAL TOTAL",
            desc: "O validador NV200 Spectral captura 100% da cédula em múltiplos comprimentos de onda. 4,8 milhões de pontos de dados por nota. Taxa de aceitação de primeira vez superior a 99%. Detecta UV, IR e tinta magnética de segurança."
        },
        {
            id: "02",
            icon: <Fish className="w-8 h-8 text-[#ff5632]" strokeWidth={1.5} />,
            title: "ANTI-STRINGING ÓPTICO",
            desc: "Sensores ópticos transversais de alta resolução eliminam a fraude da \"pescaria\": qualquer fio translúcido amarrado à cédula é detectado em microssegundos, bloqueando a catracas eletromecânicas antes que o dinheiro saia do sistema."
        },
        {
            id: "03",
            icon: <Globe className="w-8 h-8 text-[#ff5632]" strokeWidth={1.5} />,
            title: "SUPORTE MULTI-MOEDA (+140)",
            desc: "Validação global nativa: BRL, USD, EUR, GBP, CNY, INR e mais de 140 divisas em papel fiduciário e polímero termoplástico. MTBF de 24.500h e vida útil de 25 milhões de cédulas certificados."
        },
        {
            id: "04",
            icon: <Layers className="w-8 h-8 text-[#ff5632]" strokeWidth={1.5} />,
            title: "FREE FALL & 4-WAY ALIGNMENT",
            desc: "Independente da orientação de inserção, guias motorizados realinham a nota automaticamente (4 vias). O mecanismo Free Fall garante transporte sem jamming em cédulas úmidas, velhas ou coladas, liberando-as por gravidade apenas dentro do cassete seguro."
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
                    <div className="lg:w-7/12 w-full grid sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.id}
                                className="group relative p-6 sm:p-8 bg-[#111111] border border-white/5 hover:border-[#ff5632]/40 transition-colors duration-500 overflow-hidden flex flex-col gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            >
                                {/* Hover Gradient Fill */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5632]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Precision Corner Markers */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#ff5632] transition-colors"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#ff5632] transition-colors"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#ff5632] transition-colors"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#ff5632] transition-colors"></div>

                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-black/60 border border-white/10 !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:shadow-[inset_0_1px_0_rgba(242,92,42,0.2)] transition-shadow">
                                        {pillar.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-mono text-[9px] !text-[#ff5632]/60 tracking-[0.25em] uppercase">VOL.{pillar.id}</span>
                                        <h3 className="font-display font-bold text-sm tracking-wider !text-white uppercase">{pillar.title}</h3>
                                    </div>
                                </div>

                                <div className="relative z-10 border-t border-white/5 pt-4">
                                    <p className="font-sans text-xs !text-gray-400 leading-relaxed font-light">
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
