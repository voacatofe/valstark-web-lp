"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Send, CheckCircle, ArrowRight } from "lucide-react";
import Modal from "../ui/Modal";

const inputClass =
    "w-full px-4 py-3 bg-black/60 border border-zinc-700 text-white text-sm placeholder:text-zinc-600 focus:border-[#FF4500] focus:outline-none transition-colors font-mono tracking-wide";

const labelClass =
    "block text-[10px] uppercase tracking-[2.5px] text-zinc-400 font-bold mb-2";

import { useModal } from "@/context/ModalContext";

export default function CatalogCTA() {
    const { isCatalogModalOpen, openCatalogModal, closeCatalogModal } = useModal();
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        email: "",
        company: "",
        country: "",
        volume: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const handleClose = () => {
        closeCatalogModal();
        // Resetar após animação de fechar
        setTimeout(() => {
            if (submitted) {
                setSubmitted(false);
                setFormData({ name: "", role: "", email: "", company: "", country: "", volume: "" });
            }
        }, 300);
    };

    return (
        <>
            {/* Seção CTA */}
            <section
                id="catalogo"
                className="relative py-32 overflow-hidden"
                style={{
                    background: "#09090b",
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            >
                {/* Linha accent topo */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#FF4500]/40" />

                {/* Decorativo laranja */}
                <div className="absolute top-1/2 left-0 w-1 h-32 bg-[#FF4500] -translate-y-1/2 opacity-60" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

                        {/* LEFT: copy de impacto */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-[10px] uppercase tracking-[3px] text-[#FF4500] font-bold mb-5">
                                — VOL.02 / ESPECIFICAÇÕES COMPLETAS
                            </p>

                            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black uppercase text-white leading-[1.05] mb-6">
                                ECOSSISTEMA{" "}
                                <span className="text-[#FF4500]">VALSTARK</span>
                                <br />
                                EM DETALHE
                            </h2>

                            <p className="text-zinc-400 text-base leading-relaxed max-w-xl mb-4">
                                Acesse o catálogo técnico completo: especificações de hardware, arquitetura do VSK OS, certificações internacionais e fichas de engenharia de cada linha de produtos.
                            </p>

                            <ul className="space-y-3 mt-6">
                                {[
                                    "Hardware specs: dimensões, peso, capacidades de cédulas",
                                    "Arquitetura de software VSK OS e módulos de validação",
                                    "Certificações internacionais (EN 1143-1, UL 687, CCTV+)",
                                    "Configurações OEM disponíveis para parceiros globais",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                        <ArrowRight className="w-4 h-4 text-[#FF4500] mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* RIGHT: card CTA */}
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="relative p-8 bg-white/[0.02] border border-zinc-800 group hover:border-zinc-600 transition-colors duration-300">
                                {/* HUD Brackets */}
                                <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#FF4500]" />
                                <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#FF4500]" />
                                <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#FF4500]" />
                                <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#FF4500]" />

                                <FileText className="w-10 h-10 text-[#FF4500] mb-5" strokeWidth={1} />

                                <p className="text-[10px] uppercase tracking-[2px] text-zinc-500 mb-2">
                                    CATÁLOGO TÉCNICO VALSTARK
                                </p>
                                <h3 className="text-2xl font-black uppercase text-white mb-3">
                                    ACESSO COMPLETO
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                                    Solicite o dossiê técnico completo de todos os produtos. Disponível exclusivamente para distribuidores, integradores e parceiros B2B verificados.
                                </p>

                                <button
                                    onClick={openCatalogModal}
                                    className="w-full py-4 px-6 bg-[#FF4500] hover:bg-[#cc3700] text-white text-sm font-black uppercase tracking-[2px] transition-colors duration-200 flex items-center justify-center gap-3 group"
                                >
                                    SOLICITAR CATÁLOGO
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-[10px] text-zinc-600 text-center mt-4 tracking-wide">
                                    ACESSO RESTRITO · NÍVEL B2B · GDPR / LGPD COMPLIANT
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Linha accent base */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800" />
            </section>

            {/* Modal de captura */}
            <Modal
                isOpen={isCatalogModalOpen}
                onClose={handleClose}
                title="SOLICITAR CATÁLOGO TÉCNICO"
            >
                {submitted ? (
                    <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <CheckCircle className="w-14 h-14 text-[#FF4500] mx-auto mb-5" strokeWidth={1} />
                        <h4 className="text-xl font-black uppercase text-white mb-3">
                            SOLICITAÇÃO RECEBIDA
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Seus dados foram registrados. Um especialista Valstark entrará em contato com o catálogo técnico completo em até <span className="text-white font-bold">48 horas úteis</span>.
                        </p>
                        <p className="text-[10px] uppercase tracking-[2px] text-zinc-600 mt-6">
                            — PROTOCOLO DE VERIFICAÇÃO B2B INICIADO
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="modal-name" className={labelClass}>
                                    Nome Completo
                                </label>
                                <input
                                    type="text"
                                    id="modal-name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="João Silva"
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-role" className={labelClass}>
                                    Cargo
                                </label>
                                <input
                                    type="text"
                                    id="modal-role"
                                    name="role"
                                    required
                                    value={formData.role}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Diretor de Operações"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="modal-email" className={labelClass}>
                                    Email Corporativo
                                </label>
                                <input
                                    type="email"
                                    id="modal-email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="nome@empresa.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-company" className={labelClass}>
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    id="modal-company"
                                    name="company"
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Nome da Empresa"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="modal-country" className={labelClass}>
                                    País
                                </label>
                                <input
                                    type="text"
                                    id="modal-country"
                                    name="country"
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="Brasil"
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-volume" className={labelClass}>
                                    Terminais Administrados
                                </label>
                                <select
                                    id="modal-volume"
                                    name="volume"
                                    required
                                    value={formData.volume}
                                    onChange={handleChange}
                                    className={`${inputClass} appearance-none`}
                                >
                                    <option value="" disabled>
                                        Selecione
                                    </option>
                                    <option value="1-50">1 a 50 Terminais</option>
                                    <option value="51-200">51 a 200 Terminais</option>
                                    <option value="200+">Mais de 200 Terminais</option>
                                </select>
                            </div>
                        </div>

                        <div className="pt-3">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-[#FF4500] hover:bg-[#cc3700] disabled:bg-zinc-700 disabled:cursor-not-allowed text-white text-sm font-black uppercase tracking-[2px] transition-colors duration-200 flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    "PROCESSANDO..."
                                ) : (
                                    <>
                                        SOLICITAR ACESSO AO CATÁLOGO
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>

                        <p className="text-[10px] text-zinc-600 text-center tracking-wide">
                            Ao enviar, você concorda com a{" "}
                            <a href="#" className="underline hover:text-zinc-400 transition-colors">
                                Política de Privacidade
                            </a>
                            . Processamento em conformidade com GDPR e LGPD.
                        </p>
                    </form>
                )}
            </Modal>
        </>
    );
}
