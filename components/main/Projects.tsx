"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/utils/motion";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
    const featured = projects.slice(0, 4);

    return (
        <section
            id="projects"
            className="relative bg-apple-gray-50 text-apple-gray-700 py-32 md:py-40 px-6"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger(0.08)}
                className="max-w-6xl mx-auto"
            >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <motion.p
                            variants={fadeUp(0)}
                            className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-6"
                        >
                            Réalisations
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
                            <span className="block">Quelques projets,</span>
                            <span className="block title-muted-dark">choisis avec soin.</span>
                        </motion.h2>
                    </div>
                    <motion.div variants={fadeUp(0.1)} className="md:pb-3">
                        <Link href="/realisations" className="btn-pill btn-pill-outline-dark">
                            Toutes mes réalisations →
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeUp(0.1)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {featured.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            slug={project.slug}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            variant="light"
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
