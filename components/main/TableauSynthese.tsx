"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const competences = [
    "Gérer le patrimoine informatique",
    "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    "Développer la présence en ligne de l'organisation",
    "Travailler en mode projet",
    "Mettre à disposition des utilisateurs un service informatique",
    "Organiser son développement professionnel",
];

const shortCompetences = [
    "Patrimoine",
    "Incidents",
    "Présence en ligne",
    "Mode projet",
    "Service info",
    "Dev. pro",
];

interface Realisation {
    title: string;
    period?: string;
    competences: boolean[];
}

const formationRealisations: Realisation[] = [
    {
        title: "Création d'une application de bureau pour la gestion du repas du midi en entreprise (Java)",
        competences: [false, false, false, false, true, false],
    },
    {
        title: "Création d'une application mobile Android pour la location de DVD",
        competences: [false, false, false, false, true, true],
    },
    {
        title: "Création d'une application Web pour la gestion admin du stock de DVD",
        competences: [false, false, false, false, true, true],
    },
];

const annee1Realisations: Realisation[] = [
    {
        title: "Extracteur de données dans un fichier XLS",
        period: "03/02/2025",
        competences: [false, false, false, false, false, false],
    },
    {
        title: "Correctifs d'incident rapportés par le client",
        period: "03/02/2025",
        competences: [false, true, false, false, false, false],
    },
    {
        title: "Migration d'un projet Laravel en une version plus récente",
        period: "03/02/2025",
        competences: [false, true, false, false, false, false],
    },
    {
        title: "Application Java pour la réalisation d'un mastermind",
        period: "15/10/2024",
        competences: [false, false, false, false, false, false],
    },
    {
        title: "Application Java pour un extracteur d'information sur un Excel",
        period: "15/10/2024",
        competences: [false, false, false, false, false, false],
    },
    {
        title: "Application Java pour le tri d'information dans un CSV",
        period: "15/10/2024",
        competences: [false, false, false, false, false, false],
    },
];

const annee2Realisations: Realisation[] = [
    {
        title: "Réalisation d'un code recompose en TypeScript pour l'application Java StructuralX",
        period: "16/07/2025",
        competences: [false, false, false, true, true, true],
    },
    {
        title: "Réalisation de tests pour le recompose",
        period: "16/07/2025",
        competences: [false, false, false, true, true, true],
    },
    {
        title: "Remise à jour de documentation d'un projet Angular",
        period: "31/08/2025",
        competences: [false, false, false, true, false, true],
    },
    {
        title: "Réalisation de nouvelles évolutions sur un projet web Angular",
        period: "20/10/2025",
        competences: [false, false, false, true, true, true],
    },
    {
        title: "Mise à jour de la documentation technique du projet",
        period: "20/10/2025",
        competences: [false, false, false, true, false, true],
    },
];

const RealisationRow = ({ real }: { real: Realisation }) => (
    <tr className="border-b border-[#7042f88b]/30 hover:bg-purple-500/5 transition-colors">
        <td className="py-3 px-3 text-sm text-gray-300">
            {real.title}
            {real.period && (
                <span className="block text-xs text-purple-400 mt-1">{real.period}</span>
            )}
        </td>
        {real.competences.map((has, i) => (
            <td key={i} className="py-3 px-1 text-center">
                {has && (
                    <span className="text-purple-400 font-bold text-lg">X</span>
                )}
            </td>
        ))}
    </tr>
);

const SectionHeader = ({ title }: { title: string }) => (
    <tr>
        <td
            colSpan={7}
            className="py-3 px-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-base"
        >
            {title}
        </td>
    </tr>
);

const TableauSynthese = () => {
    return (
        <section
            id="synthese"
            className="flex flex-col items-center justify-center w-full py-20 relative z-30"
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
                        Tableau de Synthèse
                    </motion.h1>
                )}
            </InView>

            <div className="w-full max-w-7xl px-4 overflow-x-auto">
                <table className="w-full border-collapse bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-lg overflow-hidden">
                    <thead>
                        <tr className="border-b border-[#7042f88b]">
                            <th className="py-4 px-3 text-left text-white font-semibold text-sm min-w-[250px]">
                                Réalisations professionnelles
                            </th>
                            {shortCompetences.map((comp, i) => (
                                <th
                                    key={i}
                                    className="py-4 px-2 text-center text-purple-300 font-medium text-xs min-w-[80px]"
                                    title={competences[i]}
                                >
                                    {comp}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <SectionHeader title="Réalisations en cours de formation" />
                        {formationRealisations.map((real, i) => (
                            <RealisationRow key={`f-${i}`} real={real} />
                        ))}

                        <SectionHeader title="Réalisations en milieu professionnel - 1ère année" />
                        {annee1Realisations.map((real, i) => (
                            <RealisationRow key={`a1-${i}`} real={real} />
                        ))}

                        <SectionHeader title="Réalisations en milieu professionnel - 2ème année" />
                        {annee2Realisations.map((real, i) => (
                            <RealisationRow key={`a2-${i}`} real={real} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TableauSynthese;
