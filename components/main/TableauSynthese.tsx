"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const TableauSynthese = () => {
    return (
        <section
            id="synthese"
            className="flex flex-col items-center justify-center w-full py-20 relative z-30"
        >
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.h1
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
                    >
                        Tableau de Synthèse
                    </motion.h1>
                )}
            </InView>

            <div className="w-full max-w-7xl px-4">
                <div className="bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-lg p-4 md:p-6">
                    <iframe
                        src="/tableau-synthese.pdf"
                        className="w-full rounded-lg"
                        style={{ height: "80vh", minHeight: "600px" }}
                        title="Tableau de synthèse des réalisations professionnelles"
                    />
                    <div className="mt-4 text-center">
                        <a
                            href="/tableau-synthese.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Ouvrir le PDF en plein écran
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableauSynthese;
