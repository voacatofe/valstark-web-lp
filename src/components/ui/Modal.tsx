"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal Panel */}
                    <motion.div
                        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    >
                        {/* HUD Brackets — cantoneiras */}
                        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF4500]" />
                        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FF4500]" />
                        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FF4500]" />
                        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF4500]" />

                        {/* Header */}
                        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-zinc-800">
                            <div>
                                <p className="text-[10px] uppercase tracking-[3px] text-[#FF4500] font-bold mb-1">
                                    — ACESSO AUTORIZADO
                                </p>
                                {title && (
                                    <h2 className="text-white font-black uppercase text-xl tracking-wide">
                                        {title}
                                    </h2>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="text-zinc-500 hover:text-white transition-colors p-1"
                                aria-label="Fechar"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-8 py-8">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
