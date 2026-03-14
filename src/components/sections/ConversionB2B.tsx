"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function ConversionB2B() {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const scrollToForm = () => {
        const element = document.querySelector("#formulario-conversao");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Dobra 5: CTA Final Banner */}
            <section className="bg-slate-800 py-20 border-b border-slate-700 relative overflow-hidden" id="demo">
                <div className="absolute inset-0 bg-[url('/simbolo%20(2).png')] bg-no-repeat bg-right-bottom opacity-5 mix-blend-overlay"></div>
                <div className="container-design relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 font-display"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            VALSTARK: ONDE O <span className="text-primary">VALOR</span> SE TORNA FORTE.
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl text-slate-300 mb-10 font-sans leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            "Val" de Valor e Credibilidade. "Stark" de Forte e Robustez Industrial. Nossa engenharia verticalizada (Metallurgy as a Service) está pronta para elevar o padrão da sua operação global.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                rightIcon={<ArrowRight className="w-5 h-5" />}
                                onClick={scrollToForm}
                                className="font-bold tracking-wide uppercase"
                            >
                                Agendar Demo Técnica Internacional
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dobra 6: Formulário B2B */}
            <section className="py-24 bg-slate-50" id="formulario-conversao">
                <div className="container-design">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white border border-slate-200 shadow-industrial p-8 md:p-12">
                            <div className="mb-10 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-sans">
                                    Inicie seu Processo de Parceria Global
                                </h3>
                                <p className="text-slate-600 font-sans">
                                    Preencha os dados corporativos abaixo para que nossos engenheiros de soluções possam direcionar o atendimento correto à sua operação de Cash-in-Transit.
                                </p>
                            </div>

                            {submitted ? (
                                <motion.div
                                    className="bg-green-50 border border-green-200 text-green-800 p-8 text-center rounded-lg"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Solicitação Recebida com Sucesso</h4>
                                    <p>
                                        Agradecemos o interesse. Um de nossos especialistas internacionais entrará em contato em breve.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                                                Nome Completo
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-sans"
                                                placeholder="Ex: João Silva"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="role" className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                                                Cargo (Title)
                                            </label>
                                            <input
                                                type="text"
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-sans"
                                                placeholder="Ex: Diretor de Operações"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                                                Email Corporativo
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-sans"
                                                placeholder="nome@empresa.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                                                Nome da Empresa
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-sans"
                                                placeholder="Nome da sua Empresa"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="country" className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                                                País de Operação
                                            </label>
                                            <input
                                                type="text"
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-sans"
                                                placeholder="Ex: Brasil"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="volume" className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                                                Terminais Administrados <span className="text-primary">*</span>
                                            </label>
                                            <select
                                                id="volume"
                                                name="volume"
                                                value={formData.volume}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-sans appearance-none"
                                            >
                                                <option value="" disabled>Selecione o volume</option>
                                                <option value="1-50">1 a 50 Terminais</option>
                                                <option value="51-200">51 a 200 Terminais</option>
                                                <option value="200+">Mais de 200 Terminais</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            fullWidth
                                            disabled={isSubmitting}
                                            className="font-bold tracking-widest text-base"
                                        >
                                            {isSubmitting ? "Enviando Solicitação..." : "SOLICITAR KIT DE PARCERIA GLOBAL"}
                                        </Button>
                                    </div>

                                    <p className="text-xs text-slate-500 text-center mt-4">
                                        Ao enviar, você concorda com nossa <a href="#" className="underline hover:text-primary">Política de Privacidade</a> e processamento de dados corporativos (GDPR / LGPD).
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}