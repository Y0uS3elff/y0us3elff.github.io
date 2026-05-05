"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleReveal } from "@/utils/motion";
import { Backend_skill, Frontend_skill, libraries, projects } from "@/constants";

type Skill = {
    skill_name: string;
    Image: string;
    width: number;
    height: number;
};

const SkillTile = ({ skill }: { skill: Skill }) => {
    const related = projects.filter((p) =>
        p.technologies.some(
            (t) => t.toLowerCase() === skill.skill_name.toLowerCase()
        )
    );

    return (
        <motion.div
            variants={scaleReveal(0)}
            whileHover={{ y: -3, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 ease-apple"
        >
            <div className="h-12 flex items-center justify-center">
                <Image
                    src={skill.Image}
                    alt={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                    className="object-contain max-h-12 w-auto"
                />
            </div>
            <p className="mt-3 text-[13px] text-apple-gray-300 font-medium">
                {skill.skill_name}
            </p>
            {related.length > 0 && (
                <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                    {related.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/projects/${p.slug}`}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-apple-blue/10 border border-apple-blue/30 text-apple-blue hover:bg-apple-blue/20 transition"
                        >
                            {p.title.length > 24 ? p.title.slice(0, 22) + "…" : p.title}
                        </Link>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

const SkillCategory = ({
    label,
    items,
    cols,
}: {
    label: string;
    items: Skill[];
    cols: string;
}) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.06)}
        className="card-dark p-7 md:p-9"
    >
        <motion.p
            variants={fadeUp(0)}
            className="text-[12px] tracking-[0.2em] uppercase text-apple-blue mb-6"
        >
            {label}
        </motion.p>
        <div className={`grid ${cols} gap-3`}>
            {items.map((s) => (
                <SkillTile key={s.skill_name} skill={s} />
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative bg-black text-white py-32 md:py-40 px-6 overflow-hidden"
        >
            <div
                className="halo-blue"
                style={{ top: "20%", right: "-20%", width: "55vw", height: "55vw", opacity: 0.35 }}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger(0.08)}
                className="relative z-10 max-w-6xl mx-auto"
            >
                <motion.p
                    variants={fadeUp(0)}
                    className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-6"
                >
                    Compétences
                </motion.p>
                <motion.h2
                    variants={fadeUp(0.05)}
                    className="font-semibold tracking-tight mb-16"
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 4rem)",
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                    }}
                >
                    <span className="block">Les outils,</span>
                    <span className="block title-muted">les langages, les usages.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                        <SkillCategory
                            label="Langages"
                            items={Frontend_skill}
                            cols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
                        />
                    </div>
                    <SkillCategory
                        label="Frameworks & librairies"
                        items={libraries}
                        cols="grid-cols-2"
                    />
                    <SkillCategory
                        label="Outils"
                        items={Backend_skill}
                        cols="grid-cols-3"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
