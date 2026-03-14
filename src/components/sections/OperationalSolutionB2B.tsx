"use client";

import { motion } from "framer-motion";
import { AlertOctagon, CheckCircle2 } from "lucide-react";

export default function OperationalSolutionB2B() {
    const solutions = [
        {
            pain: "Quedas de energia param o PDV e as manutenções geram paradas operacionais custosas.",
            solutionTitle: "BATERIA INTEGRADA DE EMERGÊNCIA (NATIVA)",
            solutionBody: "Garante 2 horas de operação ininterrupta, eliminando o custo e o risco de nobreaks periféricos."
        },
        {
            pain: "Fraudes de \"pescaria\" de notas (stringing) e tentativas de violação cibernética de sistemas operacionais legados (ex: Windows/legados).",
            solutionTitle: "ANTI-STRINGING ÓPTICO + SOFTWARE CONTÊINERIZADO (VSK OS)",
            solutionBody: "Tecnologia óptica de detecção e sistema Free Fall de descarte de cédulas. Software Linux proprietário, leve e criptografado."
        },
        {
            pain: "Ciclo de numerário lento e baixa capacidade de aceitação multimoeda em fronteiras corporativas.",
            solutionTitle: "PERFORMANCE E ESCALABILIDADE GLOBAL",
            solutionBody: "Validação de 12 cédulas por segundo com sistema Escrow. Suporte nativo para mais de 140 moedas (USD, EUR, GBP, ARS, BRL, etc.)."
        }
    ];

    return (
        <section className="py-24 bg-[#F6F6F6] relative" id="solucao">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-black text-[#424242] tracking-tighter mb-6 uppercase">
                            A NOVA ERA DA GESTÃO DE <span className="text-[#ff5632]">NUMERÁRIO.</span>
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-body">
                            As soluções legadas geram vulnerabilidades. A Valstark resolve a ineficiência com tecnologia contínua.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Pain Section */}
                            <div className="md:w-5/12 bg-[#424242] text-white p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertOctagon className="w-6 h-6 text-red-400" />
                                    <span className="font-display font-bold uppercase tracking-widest text-xs text-gray-300">
                                        Dor do Cliente Global
                                    </span>
                                </div>
                                <p className="font-body text-lg leading-relaxed text-gray-200">
                                    {item.pain}
                                </p>
                            </div>

                            {/* Solution Section */}
                            <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#ff5632] hidden md:block"></div>
                                <div className="flex items-center gap-3 mb-6">
                                    <CheckCircle2 className="w-6 h-6 text-[#ff5632]" />
                                    <span className="font-display font-bold uppercase tracking-widest text-xs text-[#ff5632]">
                                        A Solução Valstark
                                    </span>
                                </div>
                                <h3 className="font-display font-black text-xl md:text-2xl text-[#424242] mb-4 uppercase tracking-tight">
                                    {item.solutionTitle}
                                </h3>
                                <p className="font-body text-gray-600 leading-relaxed">
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
