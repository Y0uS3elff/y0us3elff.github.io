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

            <a
                href="/tableau-synthese.pdf"
                download
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
                Télécharger le tableau de synthèse
            </a>
        </section>
    );
};

export default TableauSynthese;
