"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Lock, Zap } from "lucide-react";

const specs = [
    { label: "PROCESSADOR", value: "BCM2712", sub: "Broadcom SoC · 16nm" },
    { label: "ARQUITETURA", value: "Cortex-A76", sub: "Quad-core ARM 64-bits · 2.4GHz" },
    { label: "MEMÓRIA RAM", value: "4GB", sub: "LPDDR4 SDRAM · Baixa Latência" },
    { label: "CRIPTOGRAFIA", value: "AES/SHA", sub: "Aceleração via Hardware Nativa" },
];

const softwareFeatures = [
    {
        icon: <Zap className="w-5 h-5 text-[#FF5632]" strokeWidth={1.5} />,
        title: "Event-Driven Architecture",
        desc: "Cada inserção de cédula ou interação física gera um evento instantâneo. Zero polling. Zero desperdício de ciclos de CPU. O VSK OS acorda exatamente o microserviço certo, no momento certo.",
    },
    {
        icon: <Database className="w-5 h-5 text-[#FF5632]" strokeWidth={1.5} />,
        title: "Infraestrutura Contêinerizada",
        desc: "Validadores ópticos, drivers de impressão e telemetria rodam em contêineres isolados. Uma falha de bobina de papel não interrompe jamais a contagem em andamento.",
    },
    {
        icon: <Lock className="w-5 h-5 text-[#FF5632]" strokeWidth={1.5} />,
        title: "Banco MySQL Criptografado",
        desc: "Todas as transações residem em banco local com salting avançado e criptografia Data at Rest + Data in Transit via hardware BCM2712. Dados extraídos pelo crime: ininteligíveis.",
    },
    {
        icon: <Cpu className="w-5 h-5 text-[#FF5632]" strokeWidth={1.5} />,
        title: "Linux Kernel Enxuto + VNC",
        desc: "SO proprietário sem componentes supérfluos reduz a superfície de ataque a zero. Acesso remoto seguro VNC  permite suporte em tempo real sem deslocamento de técnicos.",
    },
];

export default function InnovationComputing() {
    return (
        <section className="relative py-32 bg-[#09090b] overflow-hidden" id="tech">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5632]/40 to-transparent" />

            {/* Radial glow (center-left) */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5632]/4 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* --- Header --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-zinc-800 pb-8 gap-6 md:gap-0">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Cpu className="w-3.5 h-3.5 text-[#FF5632]" />
                            <span className="text-[#FF5632] font-mono text-[10px] tracking-[0.2em] font-bold uppercase">VOL.03 --- COMPUTAÇÃO DE BORDA</span>
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-zinc-50 leading-tight">
                            INTELIGÊNCIA <br />
                            <span className="text-zinc-500">EMBARCADA</span>
                        </h2>
                    </div>
                    <div className="max-w-xs md:text-right">
                        <p className="text-sm text-zinc-400 font-sans font-light leading-relaxed">
                            O cofre Valstark não armazena dinheiro. Ele processa, autentica, encripta e transmite em tempo real — tudo dentro de um chassi de aço blindado.
                        </p>
                    </div>
                </div>

                {/* --- Specs Grid --- */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 mb-16">
                    {specs.map((spec, i) => (
                        <motion.div
                            key={i}
                            className="bg-[#09090b] p-8 flex flex-col gap-1 group hover:bg-zinc-900/80 transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <span className="font-mono text-[9px] text-zinc-600 tracking-[0.25em] uppercase mb-2 group-hover:text-[#FF5632]/70 transition-colors">{spec.label}</span>
                            <span className="font-display font-black text-3xl lg:text-4xl text-zinc-100 tracking-tighter">{spec.value}</span>
                            <span className="font-mono text-[10px] text-zinc-500 mt-1">{spec.sub}</span>
                        </motion.div>
                    ))}
                </div>

                {/* --- VSK OS Divider --- */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="flex-1 h-px bg-zinc-800" />
                    <span className="font-mono text-[10px] text-[#FF5632] tracking-[0.3em] uppercase font-bold whitespace-nowrap">VSK OS // SOFTWARE STACK</span>
                    <div className="flex-1 h-px bg-zinc-800" />
                </div>

                {/* --- Software Features Grid --- */}
                <div className="grid md:grid-cols-2 gap-4">
                    {softwareFeatures.map((feat, i) => (
                        <motion.div
                            key={i}
                            className="group relative border border-zinc-800 bg-zinc-900/30 p-8 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {/* HUD Brackets */}
                            <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-[#FF5632]/40 group-hover:border-[#FF5632] transition-colors duration-500" />
                            <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t border-r border-[#FF5632]/40 group-hover:border-[#FF5632] transition-colors duration-500" />
                            <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b border-l border-[#FF5632]/40 group-hover:border-[#FF5632] transition-colors duration-500" />
                            <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-[#FF5632]/40 group-hover:border-[#FF5632] transition-colors duration-500" />

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5632]/0 to-[#FF5632]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex items-start gap-5">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-zinc-700 bg-black/40 group-hover:border-[#FF5632]/40 transition-colors duration-500">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-sm text-zinc-100 uppercase tracking-widest mb-3">{feat.title}</h3>
                                    <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light">{feat.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- Bottom footnote --- */}
                <div className="mt-12 flex items-center gap-4">
                    <div className="w-px h-8 bg-[#FF5632]/40" />
                    <p className="font-mono text-[10px] text-zinc-600 leading-relaxed">
                        SoC fabricado em litografia de <span className="text-zinc-400">16nm</span> · Cache L2 exclusivo por núcleo (<span className="text-zinc-400">512KB</span>) + L3 compartilhado (<span className="text-zinc-400">2MB</span>) · Out-of-order execution superescalar · Atualizações OTA automáticas (Over-The-Air)
                    </p>
                </div>
            </div>
        </section>
    );
}
