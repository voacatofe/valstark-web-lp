"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroB2B() {
    return (
        <section className="relative h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-[#0a0a0a] pt-[10vh] pb-0">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-[#0a0a0a] before:from-10% before:via-[#0a0a0a]/80 before:via-60% before:to-transparent">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/IMG_4214.mp4" type="video/mp4" />
                </video>

                {/* Subtle Abstract Highlights */}
                <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F25C2A]/20 via-transparent to-transparent opacity-60 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#1E1E1E]/50 via-transparent to-transparent opacity-80 blur-3xl"></div>
            </div>

            <div className="container-design relative z-20 mt-12 md:mt-0">
                <div className="flex flex-col items-start justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full"
                    >
                        <h1
                            className="font-display font-black tracking-tighter flex flex-col uppercase m-0 p-0 whitespace-nowrap"
                            style={{
                                fontSize: "clamp(7rem, 18vw, 8rem)",
                                lineHeight: "0.9"
                            }}
                        >
                            <span className="text-[#d1d1d1]">GLOBAL.</span>
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: "2px #F25C2A" }}
                            >
                                INVIOLÁVEL.
                            </span>
                            <span className="text-[#d1d1d1]">ININTERRUPTO.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mt-12 md:mt-16 max-w-2xl"
                    >
                        <p className="text-md md:text-lg text-[#a3a3a3] font-body leading-relaxed mb-8">
                            A engenharia de precisão que as maiores redes de varejo e empresas de transporte de valores confiam. A Valstark transforma a complexidade técnica em fluidez operacional e vantagem competitiva.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
                            <Button
                                variant="outline"
                                size="lg"
                                className="group relative bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-all duration-500 ease-out w-full sm:w-auto text-sm md:text-base px-8 py-4 rounded-full overflow-hidden"
                                rightIcon={<ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/80" />}
                            >
                                <span className="relative z-10 font-medium tracking-wide group-hover:text-white/90 transition-colors duration-300">CONHEÇA O PADRÃO VALSTARK</span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
