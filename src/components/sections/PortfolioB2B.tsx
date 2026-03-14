"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

interface PortfolioItem {
    id: string;
    name: string;
    focus: string;
    keyFeature: string;
    features: string[];
}

const portfolioItems: PortfolioItem[] = [
    {
        id: "compact-pro",
        name: "Compact Pro",
        focus: "Frente de Caixa Compacta",
        keyFeature: "Bateria Nativa Integrada (2h)",
        features: [
            "1.200 a 3.000 cédulas",
            "Design ergonômico",
            "Boca de Lobo Oculta",
            "Segurança discreta",
        ],
    },
    {
        id: "smart-pro",
        name: "Smart Pro",
        focus: "Tesouraria e Inteligência de Varejo",
        keyFeature: "Interface Touch 7\" com VSK OS",
        features: [
            "5.000 a 7.500 cédulas",
            "Validador SNBC multiespectral",
            "25 notas por segundo",
            "Controle remoto VNC",
        ],
    },
    {
        id: "plus",
        name: "Cofre Plus",
        focus: "Alto Volume e Processamento Massivo",
        keyFeature: "Sistema Escrow e 12 cédulas/seg",
        features: [
            "Carregamento automático massivo",
            "Maços de até 500 cédulas",
            "Retenção intermediária (Escrow)",
            "Fechamento em tempo recorde",
        ],
    },
];

export default function PortfolioB2B() {
    return (
        <section className="py-24 bg-white" id="portfolio">
            <div className="container-design">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-800 mb-6 font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Uma Linha Completa Para Cada Operação Global.
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 font-sans"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Equipamentos modulares desenvolvidos com engenharia de precisão para atender desde o pequeno varejo até grandes tesourarias industriais.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="bg-slate-50 border border-slate-200 flex flex-col h-full rounded-none"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-sans">{item.name}</h3>
                                    <p className="text-primary font-medium text-sm uppercase tracking-wide">
                                        {item.focus}
                                    </p>
                                </div>

                                <div className="bg-white p-4 border-l-4 border-primary mb-6">
                                    <p className="text-sm text-slate-500 mb-1 uppercase tracking-wider font-semibold">Recurso Chave</p>
                                    <p className="text-slate-800 font-bold">{item.keyFeature}</p>
                                </div>

                                <ul className="space-y-4 flex-1 mb-8">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                                            <span className="text-slate-600 font-sans">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6 border-t border-slate-200 mt-auto">
                                    <Button
                                        variant="outline"
                                        fullWidth
                                        rightIcon={<ArrowRight className="w-4 h-4" />}
                                    >
                                        Especificações Técnicas
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}