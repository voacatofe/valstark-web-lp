"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: "Engenharia", href: "#validacao" },
    { label: "Solução", href: "#solucao" },
    { label: "Portfólio", href: "#portfolio" },
];

export default function Navigation() {
    const { openCatalogModal } = useModal();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
                    ? "bg-background/90 backdrop-blur-md shadow-industrial border-b border-border-subtle"
                    : "bg-transparent"
                }
      `}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container-design">
                <div className="flex items-center justify-between h-[10vh]">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="relative w-48 h-12 flex items-center">
                            <Image
                                src="/cofres/logo_branco.png"
                                alt="Valstark Logo"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 150px, 200px"
                            />
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="relative text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-primary transition-colors duration-200 group"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button
                            variant="primary"
                            size="sm"
                            rightIcon={<ArrowRight className="w-4 h-4" />}
                            onClick={openCatalogModal}
                        >
                            Falar com Especialista
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden bg-background border-t border-border-subtle"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col px-6 py-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className="py-3 px-4 text-base font-semibold uppercase tracking-wider text-slate-200 hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-border-subtle">
                                <Button
                                    variant="primary"
                                    fullWidth
                                    onClick={openCatalogModal}
                                >
                                    Falar com Especialista
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
