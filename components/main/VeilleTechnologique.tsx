"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const VeilleTechnologique = () => {
    return (
        <section
            id="veille"
            className="flex flex-col items-center justify-center min-h-screen w-full py-20 relative"
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
                        Veille Technologique
                    </motion.h1>
                )}
            </InView>

            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromLeft(0.5)}
                        className="max-w-4xl w-full px-5"
                    >
                        <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-8 backdrop-blur-sm">
                            <h2 className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                                Intelligence Artificielle
                            </h2>
                            <p className="text-gray-300 text-[16px] leading-relaxed mb-6">
                                Dans le cadre de mon BTS SIO, j&apos;ai réalisé une veille technologique sur l&apos;intelligence artificielle.
                                J&apos;ai exploré ce domaine en consultant des vidéos YouTube et en documentant mes découvertes
                                sur le fonctionnement des technologies d&apos;IA.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[20px] font-semibold text-white mb-2">
                                        Sujets étudiés
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Les réseaux de neurones et leur fonctionnement général</li>
                                        <li>La rétropropagation (backpropagation)</li>
                                        <li>Le fonctionnement de ChatGPT et des modèles de langage</li>
                                        <li>Compréhension des concepts fondamentaux de l&apos;IA</li>
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-[20px] font-semibold text-white mb-2">
                                        Démarche
                                    </h3>
                                    <p className="text-gray-300 text-[16px] leading-relaxed">
                                        J&apos;ai abordé ces sujets de manière accessible, en privilégiant la compréhension
                                        des concepts généraux plutôt que les détails techniques poussés. Cette approche
                                        m&apos;a permis de saisir les principes fondamentaux de l&apos;IA et de comprendre comment
                                        ces technologies révolutionnent le monde du développement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </InView>
        </section>
    );
};

export default VeilleTechnologique;
