"use client";

import Image from "next/image";

export default function GlobalCompliance() {
    const certifications = [
        { name: "CE", filename: "CE.png", width: 60, height: 60 },
        { name: "UL", filename: "UL.png", width: 60, height: 60 },
        { name: "FCC", filename: "FCC.png", width: 60, height: 60 },
    ];



    return (
        <section className="w-full bg-[#212121] border-y border-white/5 py-6 md:py-8 overflow-hidden">
            <div className="container-design flex flex-col items-center gap-6">
                {/* Mini-Headline */}
                <h3 className="font-display font-bold text-[12px] md:text-[14px] text-[#ff5632] tracking-[2px] md:tracking-[3px] text-center uppercase">
                    ENGINEERED FOR GLOBAL COMPLIANCE & SECURITY
                </h3>

                {/* Wrapper for the scrolling area on mobile */}
                <div className="w-full overflow-x-auto flex-nowrap flex items-center justify-start md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    
                    {/* Inner container to hold items and separator */}
                    <div className="flex items-center gap-8 md:gap-16 min-w-max px-4">
                        
                        {/* Certifications Group */}
                        <div className="flex items-center gap-6 md:gap-10">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.name}
                                    className="relative flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    style={{ width: cert.width, height: cert.height }}
                                >
                                    <Image
                                        src={`/cofres/selos/${cert.filename}`}
                                        alt={`Certificação de Segurança ${cert.name}`}
                                        fill
                                        className="object-contain brightness-0 invert"
                                        aria-label={`Certificação de Segurança ${cert.name}`}
                                        sizes="60px"
                                    />
                                </div>
                            ))}
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
}
