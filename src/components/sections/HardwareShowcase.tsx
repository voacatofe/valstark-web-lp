"use client";

import Image from "next/image";
import { Crosshair, Lock, ShieldAlert } from "lucide-react";

export default function HardwareShowcase() {
    return (
        <section className="relative py-32 bg-[#09090b] overflow-hidden" id="portfolio">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5632]/50 to-transparent"></div>

            <div className="container-design relative z-10 max-w-7xl mx-auto px-6">

                {/* Header Subtitles / Micro-copy */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-zinc-800 pb-8 gap-6 md:gap-0">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[#FF5632] font-mono text-[10px] tracking-[0.2em] font-bold uppercase">VOL.01 --- DNA VALSTARK</span>
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-zinc-50 leading-tight">
                            PORTFÓLIO <br />
                            <span className="text-zinc-500">ESCALÁVEL</span>
                        </h2>
                    </div>
                    <div className="max-w-xs md:text-right">
                        <p className="text-sm text-zinc-400 font-sans font-light leading-relaxed">
                            Uma arquitetura tática desenvolvida sob tolerância zero para cada dimensão crítica da sua operação global.
                        </p>
                    </div>
                </div>

                <div className="space-y-40 font-sans text-zinc-300">

                    {/* Product 1: Compact Pro */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center group cursor-default">

                        {/* Image Left */}
                        <div className="relative order-2 lg:order-1 lg:col-span-6 flex items-center justify-center">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF5632]/5 blur-[100px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[#FF5632]/10 z-0"></div>

                            <div className="relative z-10 w-full max-w-md aspect-[4/3]">
                                <Image
                                    src="/cofres/cofres/linha_compact/compact_pro.png"
                                    alt="Compact Pro"
                                    fill
                                    className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Connection Line */}
                            <div className="hidden lg:block absolute right-[-2.5rem] top-1/2 w-10 h-px bg-zinc-800"></div>
                        </div>

                        {/* Stats Right */}
                        <div className="order-1 lg:order-2 lg:col-span-6">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[#FF5632] font-mono text-[11px] tracking-[0.2em] uppercase font-bold">/// SÉRIE COMPACTA</span>
                            </div>
                            <h3 className="font-display font-black text-3xl md:text-4xl mb-6 tracking-tighter uppercase text-zinc-50">Compact Pro / Fit Pro</h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-[1.6] font-light">
                                Projetado para frentes de caixa de alta densidade. Oferece a máxima fixação mecânica no menor footprint industrial do mercado.
                            </p>

                            {/* Technical Card */}
                            <div className="relative bg-zinc-900/40 border border-zinc-800 p-8 backdrop-blur-sm transition-colors duration-500 group-hover:bg-zinc-900/60 group-hover:border-zinc-700">
                                {/* HUD Brackets */}
                                <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-[#FF5632]"></div>
                                <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t border-r border-[#FF5632]"></div>
                                <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b border-l border-[#FF5632]"></div>
                                <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-[#FF5632]"></div>

                                <div className="flex items-center gap-3 mb-4">
                                    <Lock className="w-4 h-4 text-[#FF5632]" />
                                    <p className="text-[10px] font-mono text-[#FF5632] uppercase tracking-widest font-bold">ARQUITETURA FECHADA</p>
                                </div>
                                <p className="font-display font-bold text-xl text-zinc-100 mb-6 uppercase tracking-tight">Design com Boca de Lobo Oculta</p>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 border-t border-zinc-800/50 pt-4">
                                        <span className="text-zinc-500 font-mono text-xs mt-1">01</span>
                                        <span className="text-zinc-400 font-light leading-relaxed">Capacidade de 1.200 a 3.000 cédulas sem expansão física lateral. Validador NV200 Spectral com 4,8M pontos de dados por nota.</span>
                                    </li>
                                    <li className="flex items-start gap-4 border-t border-zinc-800/50 pt-4">
                                        <span className="text-zinc-500 font-mono text-xs mt-1">02</span>
                                        <span className="text-zinc-400 font-light leading-relaxed">Design ultra compacto com <strong className="text-zinc-300">Boca de Lobo Oculta</strong>: fenda dissimulada na estrutura frontal com defletores antidirecionais que eliminam a tentativa de pescaria.</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Stat Bar */}
                            <div className="mt-10 flex items-center justify-between text-zinc-400 text-sm font-mono uppercase tracking-wider border-t border-zinc-800 pt-6">
                                <span>1.200-3.000 CÉDULAS</span>
                                <span>NV200 SPECTRAL</span>
                            </div>
                        </div>
                    </div>

                    {/* Product 2: Smart Pro / Mini Pro */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center group cursor-default">

                        {/* Stats Left */}
                        <div className="order-1 lg:col-span-6">
                            <div className="flex items-center gap-3 mb-6 block lg:ml-auto w-fit">
                                <span className="text-[#FF5632] font-mono text-[11px] tracking-[0.2em] uppercase font-bold">/// SÉRIE CORPORATIVA</span>
                            </div>
                            <h3 className="font-display font-black text-3xl md:text-4xl mb-6 tracking-tighter uppercase text-zinc-50 lg:text-right">Mini Pro / Smart Pro</h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-[1.6] font-light lg:text-right">
                                Solução tática versátil para retaguardas e tesourarias intermediárias. Alta velocidade de leitura e bloqueio absoluto de acessos indevidos.
                            </p>

                            {/* Technical Card */}
                            <div className="relative bg-zinc-900/40 border border-zinc-800 p-8 backdrop-blur-sm transition-colors duration-500 group-hover:bg-zinc-900/60 group-hover:border-zinc-700">
                                {/* HUD Brackets */}
                                <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-[#FF5632]"></div>
                                <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t border-r border-[#FF5632]"></div>
                                <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b border-l border-[#FF5632]"></div>
                                <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-[#FF5632]"></div>

                                <div className="flex items-center gap-3 mb-4 lg:justify-end">
                                    <Crosshair className="w-4 h-4 text-[#FF5632]" />
                                    <p className="text-[10px] font-mono text-[#FF5632] uppercase tracking-widest font-bold">PRECISÃO MICROMÉTRICA</p>
                                </div>
                                <p className="font-display font-bold text-xl text-zinc-100 mb-6 uppercase tracking-tight lg:text-right">Validação Multiespectral (25 notas/s)</p>

                                <ul className="space-y-4">
                                    <li className="flex items-start lg:items-center justify-start lg:justify-end gap-4 border-t border-zinc-800/50 pt-4">
                                        <span className="text-zinc-500 font-mono text-xs mt-1 lg:mt-0 lg:order-2">01</span>
                                        <span className="text-zinc-400 font-light leading-relaxed lg:text-right lg:order-1">Motor SNBC BNE-D10: processamento de até <strong className="text-zinc-300">25 notas por segundo</strong> com CIS multiespectral duplo e detecção de entintamento de segurança.</span>
                                    </li>
                                    <li className="flex items-start lg:items-center justify-start lg:justify-end gap-4 border-t border-zinc-800/50 pt-4">
                                        <span className="text-zinc-500 font-mono text-xs mt-1 lg:mt-0 lg:order-2">02</span>
                                        <span className="text-zinc-400 font-light leading-relaxed lg:text-right lg:order-1">MTBF de 24.500 horas e vida útil de <strong className="text-zinc-300">25 milhões de cédulas</strong>. Bateria integrada nativa com 2h de autonomia real.</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Stat Bar */}
                            <div className="mt-10 flex items-center justify-between text-zinc-400 text-sm font-mono uppercase tracking-wider border-t border-zinc-800 pt-6">
                                <span>25 NOTAS/SEGUNDO</span>
                                <span>25 MILHÕES DE CÉDULAS</span>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div className="relative order-2 lg:col-span-6 flex items-center justify-center">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF5632]/5 blur-[100px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[#FF5632]/10 z-0"></div>

                            {/* Connection Line */}
                            <div className="hidden lg:block absolute left-[-2.5rem] top-1/2 w-10 h-px bg-zinc-800"></div>

                            <div className="relative z-10 w-full max-w-md aspect-[4/3] md:scale-110">
                                <Image
                                    src="/cofres/cofres/mini_pro.png"
                                    alt="Mini Pro"
                                    fill
                                    className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product 3: Valstark Plus */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center group cursor-default">

                        {/* Image Left */}
                        <div className="relative order-2 lg:order-1 lg:col-span-6 flex items-center justify-center">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[#FF5632]/5 blur-[120px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[#FF5632]/10 z-0"></div>

                            <div className="relative z-10 w-full max-w-md aspect-[4/3] scale-110 md:scale-[1.3] mt-10 lg:mt-0">
                                <Image
                                    src="/cofres/cofres/cofre_plus.png"
                                    alt="Valstark Plus"
                                    fill
                                    className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Connection Line */}
                            <div className="hidden lg:block absolute right-[-2.5rem] top-1/2 w-10 h-px bg-zinc-800"></div>
                        </div>

                        {/* Stats Right */}
                        <div className="order-1 lg:order-2 lg:col-span-6">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[#FF5632] font-mono text-[11px] tracking-[0.2em] uppercase font-bold">/// SÉRIE FULL PERFORMANCE</span>
                            </div>
                            <h3 className="font-display font-black text-3xl md:text-4xl mb-6 tracking-tighter uppercase text-zinc-50">Cofre Plus</h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-[1.6] font-light">
                                Fabricado nativamente para processamento financeiro massivo. O motor mais denso de validação de numerário e blindagem em toda a cadeia Valstark.
                            </p>

                            {/* Technical Card */}
                            <div className="relative bg-zinc-900/40 border border-zinc-800 p-8 backdrop-blur-sm transition-colors duration-500 group-hover:bg-zinc-900/60 group-hover:border-zinc-700">
                                {/* HUD Brackets */}
                                <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-[#FF5632]"></div>
                                <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t border-r border-[#FF5632]"></div>
                                <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b border-l border-[#FF5632]"></div>
                                <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-[#FF5632]"></div>

                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldAlert className="w-4 h-4 text-[#FF5632]" />
                                    <p className="text-[10px] font-mono text-[#FF5632] uppercase tracking-widest font-bold">TOLERÂNCIA ZERO</p>
                                </div>
                                <p className="font-display font-bold text-xl text-zinc-100 mb-6 uppercase tracking-tight">Módulo Escrow + 12 Notas/Segundo</p>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 border-t border-zinc-800/50 pt-4">
                                        <span className="text-zinc-500 font-mono text-xs mt-1">01</span>
                                        <span className="text-zinc-400 font-light leading-relaxed"><strong className="text-zinc-300">Câmara Escrow:</strong> notas ficam suspensas e auditadas antes da aprovação final. Com divergência, todo o numerário é devolvido. Zero litígio de "dinheiro engolido".</span>
                                    </li>
                                    <li className="flex items-start gap-4 border-t border-zinc-800/50 pt-4">
                                        <span className="text-zinc-500 font-mono text-xs mt-1">02</span>
                                        <span className="text-zinc-400 font-light leading-relaxed">Velocidade de <strong className="text-zinc-300">12 cédulas/segundo</strong> com sensores geométricos identificando notas entintadas, mutiladas, manchadas ou perfuradas em tempo real.</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Stat Bar */}
                            <div className="mt-10 flex items-center justify-between text-zinc-400 text-sm font-mono uppercase tracking-wider border-t border-zinc-800 pt-6">
                                <span>MÓDULO ESCROW</span>
                                <span>12 NOTAS/SEGUNDO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

