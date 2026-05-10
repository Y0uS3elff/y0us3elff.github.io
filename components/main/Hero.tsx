"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, stagger, APPLE_EASE } from "@/utils/motion";

const Hero = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const haloY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0]);

    return (
        <section
            ref={ref}
            id="home"
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
            <motion.div
                className="halo-blue"
                style={{
                    top: "-10%",
                    left: "50%",
                    translateX: "-50%",
                    width: "70vw",
                    height: "70vw",
                    opacity: 0.6,
                    y: haloY,
                }}
            />
            <div
                className="halo-soft"
                style={{
                    bottom: "-20%",
                    right: "-10%",
                    width: "40vw",
                    height: "40vw",
                }}
            />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger(0.12, 0.1)}
                style={{ opacity: contentOpacity }}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
            >
                <motion.p
                    variants={fadeUp(0)}
                    className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-6"
                >
                    Portfolio · BTS SIO SLAM
                </motion.p>

                <motion.h1
                    variants={fadeUp(0.05)}
                    className="font-semibold tracking-tight"
                    style={{
                        fontSize: "clamp(3rem, 8vw, 5rem)",
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                    }}
                >
                    <span className="block text-white">Léo Clerc.</span>
                    <span className="block title-muted">
                        Développeur en alternance.
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeUp(0.15)}
                    className="mt-8 max-w-2xl mx-auto text-[19px] md:text-[21px] leading-relaxed text-apple-gray-300"
                >
                    Étudiant en BTS SIO option SLAM, en alternance chez MTB by Creative.
                    Passionné par le développement et les nouvelles technologies,
                    notamment l&apos;intelligence artificielle.
                </motion.p>

                <motion.div
                    variants={fadeUp(0.25)}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/realisations" className="btn-pill btn-pill-primary">
                        Voir mes réalisations
                    </Link>
                    <Link href="#about" className="btn-pill btn-pill-ghost">
                        En savoir plus →
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1, ease: APPLE_EASE }}
                style={{ opacity: contentOpacity }}
                className="absolute bottom-10 inset-x-0 text-center text-[11px] uppercase tracking-widest text-apple-gray-500"
            >
                Faites défiler ↓
            </motion.div>
        </section>
    );
};

export default Hero;
