"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { IconType } from "react-icons";
import {
    FaRocket,
    FaSearch,
    FaExclamationTriangle,
    FaGlobe,
    FaBullseye,
} from "react-icons/fa";

interface TimelineStep {
    Icon: IconType;
    label: string;
    period: string;
    intro: string;
    items: string[] | null;
    note: string | null;
}

const timelineSteps: TimelineStep[] = [
    {
        Icon: FaRocket,
        label: "Point de départ",
        period: "Année 1 — 2024-2025",
        intro:
            "Quand j'ai commencé mon BTS SIO, j'utilisais ChatGPT et Claude au quotidien sans vraiment comprendre ce qui tournait derrière. Pour moi, c'était une boîte noire qui crachait du texte : pratique, mais opaque. Je ne me posais aucune question sur où mes données partaient, qui entraînait ces modèles, ni pourquoi ils répondaient comme ça.",
        items: null,
        note: null,
    },
    {
        Icon: FaSearch,
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
        Icon: FaExclamationTriangle,
        label: "La prise de conscience",
        period: "Mi-2025",
        intro:
            "En continuant ma veille, un constat s'est imposé : les modèles que j'utilise tous les jours sont tous américains. OpenAI, Anthropic, Google… Chaque requête envoie potentiellement des données sensibles (code client, infos d'alternance, projets perso) sur des serveurs hors UE.",
        items: null,
        note: "Avec mes certifications ANSSI/SecNumacadémie et RGPD obtenues en parallèle, j'ai commencé à recouper les sujets : ce n'est plus juste une question technique, c'est une question de conformité légale (RGPD, Cloud Act) et de dépendance stratégique.",
    },
    {
        Icon: FaGlobe,
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
            className="flex flex-col items-center justify-center min-h-screen w-full py-20 relative"
        >
            {/* En-tête de section */}
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-center mb-16 px-5 max-w-3xl"
                    >
                        <span className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3 block">
                            Veille Technologique
                        </span>
                        <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 leading-tight">
                            Intelligence Artificielle &amp; Souveraineté Numérique
                        </h1>
                        <p className="text-gray-400 text-[16px]">
                            Une veille de 2 ans sur l&apos;IA, depuis l&apos;usage quotidien jusqu&apos;aux enjeux de souveraineté européenne.
                        </p>
                    </motion.div>
                )}
            </InView>

            {/* Timeline */}
            <div className="w-full max-w-3xl px-5 md:px-10">
                <div className="relative">
                    {/* Ligne verticale reliant les jalons */}
                    <div
                        aria-hidden="true"
                        className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-purple-500/20"
                    />

                    {timelineSteps.map((step, index) => {
                        const StepIcon = step.Icon;
                        return (
                            <InView key={index} triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.article
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromLeft(0.2 + index * 0.1)}
                                        className="relative flex items-start gap-6 mb-10"
                                    >
                                        {/* Jalon */}
                                        <div
                                            aria-hidden="true"
                                            className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center z-10 border-2 border-[#030014]"
                                        >
                                            <StepIcon className="text-white w-3.5 h-3.5" />
                                        </div>

                                        {/* Card */}
                                        <div className="flex-1 bg-[#0300145e] border border-[#7042f88b] rounded-lg p-5 md:p-6 backdrop-blur-sm hover:border-purple-500 transition-all duration-300">
                                            <header className="flex flex-wrap items-center gap-2 mb-3">
                                                <span className="text-[11px] font-semibold tracking-wide uppercase text-purple-300 bg-[#2A0E61] px-3 py-1 rounded-full border border-[#7042f88b]">
                                                    {step.period}
                                                </span>
                                                <h2 className="text-[16px] md:text-[18px] font-bold text-white">
                                                    {step.label}
                                                </h2>
                                            </header>
                                            <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed">
                                                {step.intro}
                                            </p>
                                            {step.items && (
                                                <ul className="mt-3 space-y-1.5">
                                                    {step.items.map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2 text-gray-300 text-[13px] md:text-[14px]"
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                className="text-purple-400 mt-0.5 flex-shrink-0"
                                                            >
                                                                ›
                                                            </span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {step.note && (
                                                <p className="mt-4 text-[13px] md:text-[14px] text-cyan-400/80 italic border-l-2 border-cyan-500/40 pl-3">
                                                    {step.note}
                                                </p>
                                            )}
                                        </div>
                                    </motion.article>
                                )}
                            </InView>
                        );
                    })}

                    {/* Conclusion */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.article
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.6)}
                                className="relative flex items-start gap-6"
                            >
                                <div
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center z-10 border-2 border-[#030014]"
                                >
                                    <FaBullseye className="text-white w-3.5 h-3.5" />
                                </div>

                                <div className="flex-1 bg-[#0300145e] border border-[#7042f88b] rounded-lg p-5 md:p-6 backdrop-blur-sm hover:border-purple-500 transition-all duration-300">
                                    <header className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="text-[11px] font-semibold tracking-wide uppercase text-cyan-300 bg-[#0a1628] px-3 py-1 rounded-full border border-cyan-500/30">
                                            Aujourd&apos;hui
                                        </span>
                                        <h2 className="text-[16px] md:text-[18px] font-bold text-white">
                                            Ma vision aujourd&apos;hui
                                        </h2>
                                    </header>
                                    <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed">
                                        En deux ans, ma vision a complètement basculé. Je suis passé d&apos;un usage naïf de l&apos;IA à une lecture{" "}
                                        <span className="text-purple-300 font-medium">technique</span>,{" "}
                                        <span className="text-purple-300 font-medium">juridique</span> et{" "}
                                        <span className="text-purple-300 font-medium">stratégique</span>{" "}
                                        du sujet. Aujourd&apos;hui, je comprends comment fonctionne un réseau de neurones, mais surtout je sais pourquoi le choix d&apos;un modèle n&apos;est jamais neutre : derrière chaque API se cachent des questions de souveraineté, de protection des données et de dépendance technologique.
                                    </p>
                                    <p className="mt-4 text-[13px] md:text-[14px] text-cyan-400/80 italic border-l-2 border-cyan-500/40 pl-3">
                                        C&apos;est cette grille de lecture que je compte porter dans mon futur parcours en DevSecOps et en IA Engineering.
                                    </p>
                                </div>
                            </motion.article>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    );
};

export default VeilleTechnologique;
