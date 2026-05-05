"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/utils/motion";

const TableauSynthese = () => {
    return (
        <section
            id="synthese"
            className="relative bg-apple-gray-50 text-apple-gray-700 py-32 md:py-40 px-6"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={stagger(0.1)}
                className="max-w-3xl mx-auto text-center"
            >
                <motion.p
                    variants={fadeUp(0)}
                    className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-6"
                >
                    Synthèse
                </motion.p>
                <motion.h2
                    variants={fadeUp(0.05)}
                    className="font-semibold tracking-tight"
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 4rem)",
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                    }}
                >
                    <span className="block">Tableau de synthèse,</span>
                    <span className="block title-muted-dark">en un document.</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp(0.1)}
                    className="mt-8 text-[18px] text-apple-gray-500 leading-relaxed"
                >
                    Récapitulatif des réalisations professionnelles et compétences
                    couvertes dans le cadre du BTS SIO option SLAM.
                </motion.p>

                <motion.div
                    variants={fadeUp(0.15)}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="/tableau-synthese.pdf"
                        download
                        className="btn-pill btn-pill-primary"
                    >
                        Télécharger le PDF ↓
                    </a>
                    <a
                        href="/tableau-synthese.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-pill-ghost"
                    >
                        Ouvrir dans le navigateur →
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default TableauSynthese;
