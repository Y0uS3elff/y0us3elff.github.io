"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/utils/motion";

type ParcoursItem = {
    year: string;
    title: string;
    description: string;
};

const parcours: ParcoursItem[] = [
    {
        year: "2019",
        title: "Prix Xperium",
        description:
            "Lauréat du concours Xperium à l'Université de Lille avec un groupe d'élèves de ma classe de seconde.",
    },
    {
        year: "2021",
        title: "Bac Général",
        description:
            "Spécialités Numérique Informatique et Mathématiques — Lycée Porte de Normandie à Verneuil-sur-Avre.",
    },
    {
        year: "2021 — 2023",
        title: "Licence Informatique",
        description:
            "Université de Rouen — Formation interrompue pour raisons de santé.",
    },
    {
        year: "2024",
        title: "BTS SIO",
        description:
            "Entrée en BTS Services Informatiques aux Organisations en alternance à 3IFA (L'Aigle).",
    },
    {
        year: "2024 — Présent",
        title: "Alternance chez MTB by Creative",
        description:
            "Développeur en alternance chez MTB by Creative — projets Laravel et Java.",
    },
    {
        year: "2025",
        title: "2ème année BTS SIO",
        description:
            "Poursuite du BTS en alternance chez MTB by Creative avec spécialisation développement.",
    },
    {
        year: "2026",
        title: "SUPINFO",
        description:
            "Intégration prévue à SUPINFO pour poursuivre mon parcours en Master IA.",
    },
];

const Parcours = () => {
    return (
        <section
            id="parcours"
            className="relative bg-black text-white py-32 md:py-40 px-6 overflow-hidden"
        >
            <div
                className="halo-blue"
                style={{ top: "10%", left: "-15%", width: "45vw", height: "45vw", opacity: 0.3 }}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={stagger(0.06)}
                className="relative z-10 max-w-5xl mx-auto"
            >
                <motion.p
                    variants={fadeUp(0)}
                    className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-6"
                >
                    Parcours
                </motion.p>

                <motion.h2
                    variants={fadeUp(0.05)}
                    className="font-semibold tracking-tight mb-20"
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 4rem)",
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                    }}
                >
                    <span className="block">Une trajectoire,</span>
                    <span className="block title-muted">étape par étape.</span>
                </motion.h2>

                <ol className="relative border-l border-white/10 ml-3 md:ml-5">
                    {parcours.map((item, i) => (
                        <motion.li
                            key={i}
                            variants={fadeUp(0)}
                            className="relative pl-8 md:pl-12 pb-12 last:pb-0"
                        >
                            <span className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-apple-blue ring-4 ring-black" />
                            <p className="text-[12px] tracking-widest uppercase text-apple-gray-400 mb-2">
                                {item.year}
                            </p>
                            <div className="card-dark p-6 md:p-8 max-w-xl">
                                <h3 className="text-[22px] md:text-[24px] font-semibold text-white tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-[15px] text-apple-gray-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </motion.div>
        </section>
    );
};

export default Parcours;
