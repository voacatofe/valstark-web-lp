"use client";

import { motion } from "framer-motion";
import { AlertOctagon, CheckCircle2 } from "lucide-react";

export default function OperationalSolutionB2B() {
    const solutions = [
        {
            pain: "Quedas de energia param o PDV e as manutenções geram paradas operacionais custosas.",
            solutionTitle: "BATERIA INTEGRADA DE EMERGÊNCIA (NATIVA)",
            solutionBody: "Garante 2 horas de operação ininterrupta, eliminando o custo e o risco de nobreaks periféricos.",
            index: "01"
        },
        {
            pain: "Fraudes de «pescaria» de notas (stringing) e tentativas de violação cibernética em sistemas legados.",
            solutionTitle: "ANTI-STRINGING ÓPTICO + SOFTWARE VSK OS",
            solutionBody: "Tecnologia óptica de detecção com sistema Free Fall. Software Linux proprietário, leve e criptografado.",
            index: "02"
        },
        {
            pain: "Ciclo de numerário lento e baixa capacidade de aceitação multimoeda em fronteiras corporativas.",
            solutionTitle: "PERFORMANCE E ESCALABILIDADE GLOBAL",
            solutionBody: "Validação de 12 cédulas por segundo com sistema Escrow. Suporte nativo para mais de 140 moedas mundiais.",
            index: "03"
        }
    ];

    return (
        <section className="py-32 bg-zinc-50 relative overflow-hidden" id="solucao">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>

            <div className="container-design max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header Subtitles / Micro-copy */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-zinc-200 pb-8 gap-6 md:gap-0">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[#FF5632] font-mono text-[10px] tracking-[0.2em] font-bold uppercase">VOL.02 --- DIAGNÓSTICO E RESOLUÇÃO</span>
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-zinc-950 leading-tight">
                            A NOVA ERA DA GESTÃO <br/>
                            <span className="text-[#FF5632]">DE NUMERÁRIO</span>
                        </h2>
                    </div>
                    <div className="max-w-sm md:text-right">
                        <p className="text-sm text-zinc-600 font-sans font-medium leading-relaxed">
                            As soluções legadas geram vulnerabilidades. A Valstark extingue a ineficiência substituindo falhas humanas por tecnologia paramétrica contínua.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-12 max-w-6xl mx-auto">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group flex flex-col md:flex-row bg-white relative border border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-zinc-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* HUD Brackets */}
                            <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-[#FF5632] transition-transform duration-500 group-hover:scale-125 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                            <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t border-r border-[#FF5632] transition-transform duration-500 group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
                            <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b border-l border-[#FF5632] transition-transform duration-500 group-hover:scale-125 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
                            <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-[#FF5632] transition-transform duration-500 group-hover:scale-125 group-hover:translate-x-1 group-hover:translate-y-1"></div>

                            {/* Center separator for desktop */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-100"></div>

                            {/* Pain Section */}
                            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative">
                                {/* Number Index */}
                                <div className="absolute top-6 left-6 opacity-5 font-display font-black text-6xl text-zinc-900 pointer-events-none">
                                    {item.index}
                                </div>

                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <AlertOctagon className="w-5 h-5 text-zinc-400" strokeWidth={2} />
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                                        FALHA ESTRUTURAL IDENTIFICADA
                                    </span>
                                </div>
                                <p className="font-sans text-xl leading-relaxed text-zinc-700 font-medium relative z-10">
                                    {item.pain}
                                </p>
                            </div>

                            {/* Solution Section */}
                            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative bg-zinc-50/50">
                                <div className="flex items-center gap-3 mb-6">
                                    <CheckCircle2 className="w-5 h-5 text-[#FF5632]" strokeWidth={2.5} />
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF5632] font-bold">
                                        RESOLUÇÃO VALSTARK
                                    </span>
                                </div>
                                <h3 className="font-display font-black text-2xl md:text-3xl text-zinc-950 mb-5 uppercase tracking-tighter">
                                    {item.solutionTitle}
                                </h3>
                                <p className="font-sans text-lg text-zinc-600 leading-relaxed">
                                    {item.solutionBody}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
