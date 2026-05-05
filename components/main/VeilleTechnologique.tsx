"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/utils/motion";

interface TimelineStep {
    label: string;
    period: string;
    intro: string;
    items: string[] | null;
    note: string | null;
}

const timelineSteps: TimelineStep[] = [
    {
        label: "Point de départ",
        period: "Année 1 — 2024-2025",
        intro:
            "Quand j'ai commencé mon BTS SIO, j'utilisais ChatGPT et Claude au quotidien sans vraiment comprendre ce qui tournait derrière. Pour moi, c'était une boîte noire qui crachait du texte : pratique, mais opaque. Je ne me posais aucune question sur où mes données partaient, qui entraînait ces modèles, ni pourquoi ils répondaient comme ça.",
        items: null,
        note: null,
    },
    {
        label: "Comprendre la mécanique",
        period: "Début 2025",
        intro:
            "Première phase de ma veille : ouvrir le capot. J'ai consulté des vidéos YouTube et documenté mes découvertes en privilégiant la compréhension des concepts généraux plutôt que les détails mathématiques.",
        items: [
            "Les réseaux de neurones et leur fonctionnement général",
            "La rétropropagation (backpropagation)",
            "Le fonctionnement des LLM (ChatGPT, Claude) et leur architecture Transformer",
            "Les notions de tokens, d'embeddings et de fenêtre de contexte",
        ],
        note: "Je suis passé du statut d'utilisateur passif à celui de développeur capable de comprendre techniquement ce qu'il manipule.",
    },
    {
        label: "La prise de conscience",
        period: "Mi-2025",
        intro:
            "En continuant ma veille, un constat s'est imposé : les modèles que j'utilise tous les jours sont tous américains. OpenAI, Anthropic, Google… Chaque requête envoie potentiellement des données sensibles (code client, infos d'alternance, projets perso) sur des serveurs hors UE.",
        items: null,
        note: "Avec mes certifications ANSSI/SecNumacadémie et RGPD obtenues en parallèle, j'ai commencé à recouper les sujets : ce n'est plus juste une question technique, c'est une question de conformité légale (RGPD, Cloud Act) et de dépendance stratégique.",
    },
    {
        label: "La découverte de l'alternative souveraine",
        period: "Fin 2025 — 2026",
        intro:
            "Cette prise de conscience m'a poussé vers une nouvelle phase de veille, plus orientée géopolitique du numérique :",
        items: [
            "Découverte de Mistral AI (Paris) et de son écosystème open-weight",
            "Veille sur les acteurs européens : Hugging Face, Kyutai, LightOn",
            "Réflexion sur l'AI Act européen et ses implications pour les entreprises",
            "Comparaison des stratégies : modèles US fermés vs approche EU plus ouverte",
        ],
        note: null,
    },
];

const VeilleTechnologique = () => {
    return (
        <section
            id="veille"
            className="relative bg-black text-white py-32 md:py-40 px-6 overflow-hidden"
        >
            <div
                className="halo-blue"
                style={{ bottom: "-15%", left: "-10%", width: "50vw", height: "50vw", opacity: 0.25 }}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={stagger(0.08)}
                className="relative z-10 max-w-4xl mx-auto"
            >
                <motion.p
                    variants={fadeUp(0)}
                    className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-6"
                >
                    Veille technologique
                </motion.p>
                <motion.h2
                    variants={fadeUp(0.05)}
                    className="font-semibold tracking-tight mb-6"
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 4rem)",
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                    }}
                >
                    <span className="block">Intelligence artificielle</span>
                    <span className="block title-muted">&amp; souveraineté numérique.</span>
                </motion.h2>
                <motion.p
                    variants={fadeUp(0.1)}
                    className="text-[18px] text-apple-gray-300 leading-relaxed max-w-2xl mb-20"
                >
                    Une veille de 2 ans sur l&apos;IA, depuis l&apos;usage quotidien
                    jusqu&apos;aux enjeux de souveraineté européenne.
                </motion.p>

                <ol className="relative border-l border-white/10 ml-3">
                    {timelineSteps.map((step, i) => (
                        <motion.li
                            key={i}
                            variants={fadeUp(0)}
                            className="relative pl-8 md:pl-12 pb-12 last:pb-0"
                        >
                            <span className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-apple-blue ring-4 ring-black" />
                            <p className="text-[12px] tracking-widest uppercase text-apple-gray-400 mb-3">
                                {step.period} · {step.label}
                            </p>
                            <div className="card-dark p-7 md:p-8">
                                <p className="text-[15px] md:text-[16px] text-apple-gray-200 leading-[1.7]">
                                    {step.intro}
                                </p>
                                {step.items && (
                                    <ul className="mt-5 space-y-2.5">
                                        {step.items.map((item, j) => (
                                            <li
                                                key={j}
                                                className="flex items-start gap-3 text-[14px] md:text-[15px] text-apple-gray-300 leading-relaxed"
                                            >
                                                <span
                                                    aria-hidden
                                                    className="text-apple-blue mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-apple-blue"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {step.note && (
                                    <p className="mt-5 pl-4 border-l-2 border-apple-blue/40 text-[14px] text-apple-gray-300 italic">
                                        {step.note}
                                    </p>
                                )}
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </motion.div>
        </section>
    );
};

export default VeilleTechnologique;
