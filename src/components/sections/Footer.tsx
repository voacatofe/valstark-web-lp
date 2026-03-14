import React from "react";
import { ShieldCheck, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0E0E0E] py-16 text-[#BBBBBB] relative">
            <div className="absolute inset-0 texture-grid opacity-10" />

            <div className="container-design relative z-10 flex flex-col items-center justify-center text-center gap-8">
                {/* Logo */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                        <ShieldCheck className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-2xl font-display font-bold tracking-tight text-white uppercase">
                        Valstark
                    </h2>
                </div>

                {/* Description */}
                <p className="max-w-md text-sm leading-relaxed">
                    Soluções definitivas em Cofres Inteligentes e gestão de numerário.
                    Reduza perdas, elimine fraudes e otimize a sangria do seu negócio com a mais alta tecnologia.
                </p>

                {/* Social Icons */}
                <div className="flex gap-6 mt-2">
                    <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-6 h-6" strokeWidth={1.5} />
                    </a>
                    <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" strokeWidth={1.5} />
                    </a>
                    <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-6 h-6" strokeWidth={1.5} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-[#222222] w-full max-w-xl mt-4">
                    <p className="text-xs font-medium text-center">
                        © {currentYear} Valstark Security Systems. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
