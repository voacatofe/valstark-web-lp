"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function HeroB2B() {
    const { openCatalogModal } = useModal();
    return (
        <section className="relative h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-[#000000] pt-[10vh] pb-0">
            {/* Engineering Grid Background */}
            <div 
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Video Background */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-[#000000] before:from-10% before:via-[#000000]/70 before:via-60% before:to-transparent">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 grayscale opacity-40"
                >
                    <source src="/cofres/hero-bg.mp4" type="video/mp4" />
                </video>

                {/* Subtle Abstract Highlights */}
                <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F25C2A]/10 via-transparent to-transparent opacity-40 blur-3xl"></div>
            </div>

            <div className="container-design relative z-20 mt-12 md:mt-0">
                <div className="flex flex-col items-start justify-center">
                    {/* Micro-label technical */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="text-[10px] tracking-[0.3em] text-[#F25C2A] font-bold uppercase">VOL.01</span>
                        <div className="h-[1px] w-12 bg-[#F25C2A]/30"></div>
                        <span className="text-[10px] tracking-[0.3em] text-[#a3a3a3] uppercase">DNA VALSTARK</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full"
                    >
                        <h1
                            className="font-display font-black tracking-tighter flex flex-col uppercase m-0 p-0"
                            style={{
                                fontSize: "clamp(1.8rem, 11vw, 8rem)",
                                lineHeight: "1.1"
                            }}
                        >
                            <span className="text-[#FFFFFF]">GLOBAL.</span>
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: "1.5px #F25C2A" }}
                            >
                                INVIOLÁVEL.
                            </span>
                            <span className="text-[#FFFFFF]">ININTERRUPTO.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mt-10 md:mt-12 max-w-2xl relative"
                    >
                        {/* HUD Brackets for text */}
                        <div className="absolute -left-6 -top-2 w-2 h-2 border-l border-t border-[#F25C2A]/40"></div>
                        <div className="absolute -right-6 -bottom-2 w-2 h-2 border-r border-b border-[#F25C2A]/40"></div>

                        <p className="text-sm md:text-base text-[#9CA3AF] font-body leading-relaxed mb-10 border-l border-[#F25C2A] pl-6 py-1">
                            Engenharia de tolerância zero para operações críticas. A Valstark projeta arquiteturas de segurança física com precisão micrométrica, transformando inviolabilidade mecânica em vantagem competitiva global.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="group relative rounded-none px-10 py-5 bg-[#F25C2A] hover:bg-[#ff6a3d] text-black border-none transition-all duration-300 overflow-hidden"
                                rightIcon={<ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
                                onClick={openCatalogModal}
                            >
                                <span className="relative z-10 font-bold tracking-widest uppercase text-xs">CONHEÇA O PADRÃO VALSTARK</span>
                                
                                {/* Industrial hover effect */}
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
