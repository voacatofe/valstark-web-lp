"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Zap, BatteryCharging } from "lucide-react";

const systems = [
    {
        index: "01",
        icon: <ShieldAlert className="w-8 h-8 text-[#FF5632]" strokeWidth={1} />,
        tag: "CONTRAMEDIDA IRREVERSÍVEL",
        title: "GUILHOTINA AUTOMÁTICA",
        description:
            "Quando acelerômetros internos detectam extração violenta ou movimentação não autorizada, uma placa de liga blindada desce automaticamente, selando o canal de depósito para sempre. Sem contato humano. Sem janela de falha.",
        metrics: [
            { label: "GATILHO", value: "Acelerômetro Inercial" },
            { label: "RESPOSTA", value: "< 1 seg" },
            { label: "AÇÃO", value: "Irreversível" },
        ],
    },
    {
        index: "02",
        icon: <ShieldAlert className="w-8 h-8 text-[#FF5632]" strokeWidth={1} />,
        tag: "ARQUITETURA DE AÇO",
        title: "TRANCA ANGULAR COM INTERTRAVAMENTO",
        description:
            "Ferrolhos de aço denso que se projetam em eixos perpendiculares e angulares simultâneos. A porta recusa o destravamento mecânico mesmo sob torção extrema, alavancas hidráulicas ou destruição do painel frontal — o solenoide permanece bloqueado sem energia.",
        metrics: [
            { label: "EIXOS", value: "Multi-Angular" },
            { label: "FALHA SEGURA", value: "Padrão" },
            { label: "ATAQUE", value: "Resistente a Serra e Garrafa" },
        ],
    },
    {
        index: "03",
        icon: <BatteryCharging className="w-8 h-8 text-[#FF5632]" strokeWidth={1} />,
        tag: "RESILIÊNCIA ENERGÉTICA",
        title: "BATERIA DE EMERGÊNCIA NATIVA",
        description:
            "Sistema de bateria integrado diretamente à placa controladora. Comutação de estado sólido ultrarápida em caso de corte de energia criminoso. Saída linear estabilizada em 12V DC por até 2 horas contínuas — sem nobreaks externos, sem ponto único de falha.",
        metrics: [
            { label: "AUTONOMIA", value: "2 horas" },
            { label: "TENSÃO", value: "12V DC Estabilizado" },
            { label: "COMUTAÇÃO", value: "Estado Sólido" },
        ],
    },
];

export default function ActiveDefense() {
    return (
        <section className="relative py-32 bg-zinc-950 overflow-hidden" id="defesa">
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5632]/30 to-transparent" />

            {/* Background glow (right-aligned) */}
            <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[700px] bg-[#FF5632]/3 blur-[180px] rounded-full pointer-events-none" />

            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* --- Header --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-zinc-800 pb-8 gap-6 md:gap-0">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-3.5 h-3.5 text-[#FF5632]" />
                            <span className="text-[#FF5632] font-mono text-[10px] tracking-[0.2em] font-bold uppercase">VOL.04 --- DEFESA ATIVA</span>
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-zinc-50 leading-tight">
                            MECÂNICA QUE <br />
                            <span className="text-zinc-500">REAGE.</span>
                        </h2>
                    </div>
                    <div className="max-w-xs md:text-right">
                        <p className="text-sm text-zinc-400 font-sans font-light leading-relaxed">
                            Blindagem não é passiva. Os sistemas Valstark reagem autonomamente a qualquer tentativa de violação — sem depender de operador humano.
                        </p>
                    </div>
                </div>

                {/* --- Systems List --- */}
                <div className="flex flex-col gap-6">
                    {systems.map((sys, i) => (
                        <motion.div
                            key={i}
                            className="group relative grid lg:grid-cols-12 gap-0 border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-500 overflow-hidden"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            {/* HUD brackets */}
                            <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t-2 border-l-2 border-[#FF5632]/50 group-hover:border-[#FF5632] transition-colors duration-500" />
                            <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b-2 border-r-2 border-[#FF5632]/50 group-hover:border-[#FF5632] transition-colors duration-500" />

                            {/* Index + Icon panel */}
                            <div className="lg:col-span-2 flex lg:flex-col items-center justify-center gap-4 lg:gap-0 p-8 lg:p-0 border-b lg:border-b-0 lg:border-r border-zinc-800 bg-black/20">
                                <span className="font-mono font-bold text-5xl lg:text-6xl text-zinc-800 group-hover:text-zinc-700 transition-colors duration-500 leading-none select-none">{sys.index}</span>
                                <div className="lg:mt-6">{sys.icon}</div>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                                <span className="font-mono text-[9px] text-[#FF5632]/70 tracking-[0.3em] uppercase mb-3 group-hover:text-[#FF5632] transition-colors">{sys.tag}</span>
                                <h3 className="font-display font-black text-2xl md:text-3xl text-zinc-100 uppercase tracking-tighter mb-4">{sys.title}</h3>
                                <p className="font-sans text-base text-zinc-400 leading-relaxed font-light max-w-xl">{sys.description}</p>
                            </div>

                            {/* Metrics panel */}
                            <div className="lg:col-span-3 flex lg:flex-col divide-y divide-zinc-800 border-t lg:border-t-0 lg:border-l border-zinc-800">
                                {sys.metrics.map((m, j) => (
                                    <div key={j} className="flex lg:flex-col gap-2 p-6 items-start justify-between lg:justify-center flex-1">
                                        <span className="font-mono text-[9px] text-zinc-600 tracking-[0.2em] uppercase">{m.label}</span>
                                        <span className="font-display font-bold text-sm lg:text-base text-zinc-200 tracking-tight">{m.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- Bottom Badge --- */}
                <motion.div
                    className="mt-16 flex items-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="flex-1 h-px bg-zinc-800" />
                    <div className="flex items-center gap-3 px-6 py-3 border border-zinc-700 bg-zinc-900/50">
                        <ShieldAlert className="w-4 h-4 text-[#FF5632]" />
                        <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase">Todos os sistemas operam de forma autônoma, sem intervenção humana.</span>
                    </div>
                    <div className="flex-1 h-px bg-zinc-800" />
                </motion.div>
            </div>
        </section>
    );
}
