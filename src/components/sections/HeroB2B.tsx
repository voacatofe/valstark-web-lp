"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroB2B() {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0a0a0a] py-20 lg:py-0">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/IMG_4214.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-[#0a0a0a]/60"></div>

                {/* Subtle Abstract Highlights */}
                <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F25C2A]/20 via-transparent to-transparent opacity-60 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#1E1E1E]/50 via-transparent to-transparent opacity-80 blur-3xl"></div>
            </div>

            <div className="container relative z-20 mx-auto px-4 md:px-6 mt-12 md:mt-0">
                <div className="max-w-[90rem] mx-auto flex flex-col items-start justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full"
                    >
                        <h1
                            className="font-display font-black tracking-tighter flex flex-col uppercase m-0 p-0 whitespace-nowrap"
                            style={{
                                fontSize: "clamp(6rem, 15vw, 8rem)",
                                lineHeight: "0.7"
                            }}
                        >
                            <span className="text-[#d1d1d1]">
                                GLOBAL.
                            </span>
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: "1px #F25C2A" }}
                            >
                                INVIOLÁVEL.
                            </span>
                            <span className="text-[#d1d1d1]">
                                ININTERRUPTO.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mt-12 md:mt-16 max-w-2xl ml-1 md:ml-2"
                    >
                        <p className="text-lg md:text-xl text-[#a3a3a3] font-body leading-relaxed mb-8">
                            A engenharia de precisão que as maiores redes de varejo e empresas de transporte de valores confiam. A Valstark transforma a complexidade técnica em fluidez operacional e vantagem competitiva.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="bg-[#F25C2A] hover:bg-[#d94f0a] text-white w-full sm:w-auto text-sm md:text-base px-8 py-4 rounded-full border-none shadow-none"
                                rightIcon={<ArrowRight className="w-5 h-5 ml-2" />}
                            >
                                CONHEÇA O PADRÃO VALSTARK
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
