"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleReveal } from "@/utils/motion";

const About = () => {
    return (
        <section
            id="about"
            className="relative bg-apple-gray-50 text-apple-gray-700 py-32 md:py-40 px-6"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={stagger(0.1)}
                className="max-w-6xl mx-auto"
            >
                <motion.p
                    variants={fadeUp(0)}
                    className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-6"
                >
                    Qui suis-je
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
                    <span className="block text-apple-gray-700">Étudiant, alternant,</span>
                    <span className="block title-muted-dark">passionné de technologie.</span>
                </motion.h2>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                    <motion.div
                        variants={scaleReveal(0.1)}
                        className="md:col-span-1 flex justify-center md:justify-start"
                    >
                        <div className="relative w-full max-w-[280px] aspect-square rounded-3xl overflow-hidden shadow-card-light bg-white">
                            <img
                                src="/leo.jpg"
                                alt="Léo Clerc"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp(0.15)}
                        className="md:col-span-2 space-y-5 text-[17px] md:text-[19px] leading-[1.6] text-apple-gray-600"
                    >
                        <p>
                            J&apos;ai 22 ans et je suis étudiant en BTS SIO 2<sup>ème</sup> année,
                            alternant développeur depuis 2 ans chez{" "}
                            <span className="text-apple-gray-700 font-medium">MTB by Creative</span>.
                        </p>
                        <p>
                            Passionné par les nouvelles technologies et le développement de
                            l&apos;intelligence artificielle, je développe mes compétences en
                            Java, JavaScript, PHP, SQL, Python, Laravel et Angular.
                        </p>
                        <p>
                            Grand fan de réalité virtuelle, je fais également partie d&apos;une
                            équipe d&apos;<span className="text-apple-gray-700 font-medium">esport VR</span>{" "}
                            pour le jeu <span className="text-apple-gray-700 font-medium">After-H (EVA)</span>.
                        </p>
                        <p>
                            Ma prochaine étape sera un{" "}
                            <span className="text-apple-blue font-medium">
                                Master en Intelligence Artificielle à SUPINFO
                            </span>.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
