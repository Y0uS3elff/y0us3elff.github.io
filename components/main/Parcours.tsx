"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const Parcours = () => {
    const parcours = [
        {
            year: "2019",
            title: "Prix Xperium",
            description: "Lauréat du concours Xperium à l'Université de Lille",
            position: "left"
        },
        {
            year: "2021",
            title: "Bac Général",
            description: "Spécialités Numérique Informatique et Mathématiques",
            position: "right"
        },
        {
            year: "2024",
            title: "BTS SIO",
            description: "Entrée en BTS Services Informatiques aux Organisations en alternance",
            position: "left"
        },
        {
            year: "2024 - Présent",
            title: "Alternance chez MTB by Creative",
            description: "Développeur en alternance - Projets Laravel et Java",
            position: "right"
        },
        {
            year: "2025",
            title: "2ème année BTS SIO",
            description: "Poursuite du BTS en alternance avec spécialisation développement",
            position: "left"
        },
        {
            year: "2026",
            title: "SUPINFO",
            description: "Intégration prévue à SUPINFO pour poursuivre mon parcours",
            position: "right"
        }
    ];

    return (
        <section
            id="parcours"
            className="flex flex-col items-center justify-center min-h-screen w-full py-20 relative"
        >
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.h1
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-20"
                    >
                        Mon Parcours
                    </motion.h1>
                )}
            </InView>

            <div className="relative w-full max-w-6xl px-5 md:px-10">
                {/* Ligne verticale centrale */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 opacity-30"></div>

                {parcours.map((item, index) => (
                    <InView key={index} triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={item.position === "left" ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
                                className={`relative mb-12 md:mb-16 flex ${
                                    item.position === "left"
                                        ? "md:flex-row flex-col"
                                        : "md:flex-row-reverse flex-col"
                                } items-center justify-between w-full`}
                            >
                                {/* Contenu */}
                                <div className={`w-full md:w-5/12 ${item.position === "left" ? "md:text-right" : "md:text-left"}`}>
                                    <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 backdrop-blur-sm hover:border-purple-500 transition-all duration-300">
                                        <div className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
                                            {item.year}
                                        </div>
                                        <h3 className="text-[20px] font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 text-[14px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Point central */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-[#0f0728] z-10">
                                    <div className="w-full h-full rounded-full bg-white animate-ping opacity-20"></div>
                                </div>

                                {/* Espace vide pour l'autre côté */}
                                <div className="hidden md:block w-5/12"></div>
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>
        </section>
    );
};

export default Parcours;
