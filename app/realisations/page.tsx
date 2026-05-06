"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleReveal } from "@/utils/motion";
import ProjectCard from "@/components/sub/ProjectCard";
import { projects } from "@/constants";

export default function RealisationsPage() {
    const allTechs = useMemo(() => {
        const set = new Set<string>();
        projects.forEach((p) => p.technologies.forEach((t) => set.add(t)));
        return ["Tous", ...Array.from(set).sort()];
    }, []);

    const [active, setActive] = useState<string>("Tous");

    const filtered = useMemo(() => {
        if (active === "Tous") return projects;
        return projects.filter((p) =>
            p.technologies.some((t) => t.toLowerCase() === active.toLowerCase())
        );
    }, [active]);

    return (
        <main className="bg-black text-white min-h-screen">
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div
                    className="halo-blue"
                    style={{ top: "-10%", left: "50%", transform: "translateX(-50%)", width: "60vw", height: "60vw", opacity: 0.4 }}
                />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger(0.08, 0.05)}
                    className="relative z-10 max-w-6xl mx-auto"
                >
                    <motion.p
                        variants={fadeUp(0)}
                        className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-6"
                    >
                        Mes réalisations
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
                        <span className="block">Tous les projets,</span>
                        <span className="block title-muted">en un coup d&apos;œil.</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeUp(0.1)}
                        className="mt-8 max-w-2xl text-[18px] text-apple-gray-300 leading-relaxed"
                    >
                        Projets professionnels en alternance et travaux académiques
                        réalisés dans le cadre du BTS SIO option SLAM. Filtrez par
                        technologie pour explorer.
                    </motion.p>
                </motion.div>
            </section>

            <section className="px-6 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-12 sticky top-12 bg-black/70 backdrop-blur-xl py-3 z-20 -mx-6 px-6 border-y border-white/5">
                        {allTechs.map((t) => {
                            const isActive = t === active;
                            return (
                                <button
                                    key={t}
                                    onClick={() => setActive(t)}
                                    className={`text-[12px] px-3.5 py-1.5 rounded-full border transition-all duration-300 ease-apple ${
                                        isActive
                                            ? "bg-apple-blue text-white border-apple-blue"
                                            : "bg-white/[0.03] text-apple-gray-300 border-white/10 hover:border-white/30 hover:text-white"
                                    }`}
                                >
                                    {t}
                                </button>
                            );
                        })}
                    </div>

                    {filtered.length === 0 ? (
                        <p className="text-apple-gray-400 text-center py-20">
                            Aucun projet ne correspond à ce filtre.
                        </p>
                    ) : (
                        <div
                            key={active}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                        >
                            {filtered.map((project) => (
                                <motion.div
                                    key={project.slug}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    variants={scaleReveal(0)}
                                >
                                    <ProjectCard
                                        slug={project.slug}
                                        src={project.src}
                                        title={project.title}
                                        description={project.description}
                                        technologies={project.technologies}
                                        variant="dark"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    )}

                    <div className="mt-20 flex justify-center">
                        <Link href="/" className="btn-pill btn-pill-outline">
                            ← Retour à l&apos;accueil
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
