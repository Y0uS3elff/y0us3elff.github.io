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

                            <div className="space-y-6">
                                {/* Point de départ */}
                                <div>
                                    <h3 className="text-[20px] font-semibold text-white mb-2">
                                        Point de départ
                                    </h3>
                                    <p className="text-gray-300 text-[16px] leading-relaxed">
                                        Au début de cette veille technologique réalisée dans le cadre de mon BTS SIO,
                                        je connaissais l&apos;IA uniquement en tant qu&apos;utilisateur de ChatGPT et Claude,
                                        sans vraiment comprendre ce qui se passait derrière ces outils que j&apos;utilisais quotidiennement.
                                    </p>
                                </div>

                                {/* Démarche et sujets étudiés */}
                                <div>
                                    <h3 className="text-[20px] font-semibold text-white mb-2">
                                        Ma démarche
                                    </h3>
                                    <p className="text-gray-300 text-[16px] leading-relaxed mb-3">
                                        J&apos;ai exploré ce domaine en consultant des vidéos YouTube et en documentant mes découvertes,
                                        en privilégiant la compréhension des concepts généraux plutôt que les détails techniques poussés.
                                    </p>
                                    <p className="text-gray-300 text-[16px] font-semibold mb-2">Sujets étudiés :</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Les réseaux de neurones et leur fonctionnement général</li>
                                        <li>La rétropropagation (backpropagation)</li>
                                        <li>Le fonctionnement de ChatGPT et des modèles de langage</li>
                                        <li>Les concepts fondamentaux de l&apos;IA et son architecture</li>
                                    </ul>
                                </div>

                                {/* Conclusions */}
                                <div>
                                    <h3 className="text-[20px] font-semibold text-white mb-2">
                                        Mes conclusions
                                    </h3>
                                    <p className="text-gray-300 text-[16px] leading-relaxed">
                                        Aujourd&apos;hui, ma vision a complètement évolué : je comprends maintenant le fonctionnement
                                        général de ces intelligences artificielles, notamment grâce aux réseaux de neurones,
                                        aux différentes couches de traitement et à la rétropropagation. Cette compréhension technique
                                        m&apos;a permis de passer du statut de simple utilisateur à celui de développeur capable
                                        d&apos;appréhender les enjeux et les possibilités de l&apos;IA dans mes projets futurs.
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
