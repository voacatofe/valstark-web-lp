"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function ClientsB2B() {
    const clients = [
        { name: "PROSEGUR", filename: "Prossegur.png", width: 140 },
        { name: "ZARA", filename: "Zara.png", width: 110 },
        { name: "AUDACES", filename: "audaces.png", width: 140 },
        { name: "HEXAGON", filename: "Hexagon.png", width: 140 },
        { name: "INTELBRAS", filename: "Intelbras.png", width: 140 },
    ];

    return (
        <section className="h-[10vh] w-full bg-[#0a0a0a] border-y border-white/5 flex items-center overflow-hidden">
            <div className="container-design flex items-center justify-between gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
                {clients.map((client, index) => (
                    <motion.div
                        key={client.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex items-center justify-center grayscale brightness-0 invert"
                        style={{ width: client.width * 1.6, height: 150 }}
                    >
                        <Image
                            src={`/partners/${client.filename}`}
                            alt={client.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 33vw, 20vw"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
