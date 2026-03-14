"use client";

import { motion } from "framer-motion";
import { Settings, Code, Globe } from "lucide-react";
import Image from "next/image";

export default function ValidationB2B() {
    const pillars = [
        {
            icon: <Settings className="w-10 h-10 text-[#ff5632]" />,
            title: "PRECIÇÃO CNC EM MÍCRON"
        },
        {
            icon: <Code className="w-10 h-10 text-[#ff5632]" />,
            title: "SOFTWARE PROPRIETÁRIO (VSK OS)"
        },
        {
            icon: <Globe className="w-10 h-10 text-[#ff5632]" />,
            title: "SUPORTE MULTI-MOEDA (+140 MOEDAS)"
        }
    ];

    const partners = ["PROSEGUR", "ZARA", "HEXAGON", "INTELBRAS"];
    const certs = ["CE", "UL", "FCC"];

    return (
        <section className="py-24 bg-white relative border-b border-gray-100" id="validacao">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 mb-20">
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-black text-[#424242] tracking-tighter mb-6">
                            ENGENHARIA SEM <span className="text-[#ff5632]">FRONTEIRAS.</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed font-body">
                            Não somos apenas fabricantes de cofres inteligentes. Somos engenheiros especializados em escuta ativa e na verticalização industrial. Nossa precisão micrométrica, herdada da indústria de mineração, é aplicada na segurança do numerário global.
                        </p>
                    </motion.div>

                    <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-start gap-4 p-6 bg-[#F6F6F6] rounded-xl border border-gray-100 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                    {pillar.icon}
                                </div>
                                <h3 className="font-display font-bold text-sm tracking-widest text-[#424242] uppercase">
                                    {pillar.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Authority Badges Area */}
                <motion.div
                    className="pt-16 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col items-center justify-center gap-12">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 text-center">
                            Conformidade & Confiança Global
                        </h4>

                        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                            {/* Certifications Mock */}
                            <div className="flex gap-8 items-center border-r border-gray-300 pr-8 md:pr-24">
                                {certs.map((cert) => (
                                    <div key={cert} className="font-display font-black text-3xl text-[#424242] tracking-tighter">
                                        {cert}
                                    </div>
                                ))}
                            </div>

                            {/* Partners Mock */}
                            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                                {partners.map((partner) => (
                                    <div key={partner} className="font-display font-bold text-2xl text-gray-800 tracking-tight">
                                        {partner}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
