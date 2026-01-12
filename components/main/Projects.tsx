"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectModal from "../sub/ProjectModal";

interface Project {
    src: string;
    title: string;
    description: string;
    detailedDescription: string;
    technologies?: string[];
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            src: "/cnp-assurances.jpg",
            title: "Application Laravel Assurance",
            description: "Développement d'une application web Laravel pour une compagnie d'assurance chez MTB by Creative. Gestion des polices, clients et sinistres.",
            detailedDescription: "Application Laravel développée chez MTB by Creative permettant la gestion complète de contrats d'assurance pour les entreprises.\n\nFonctionnalités principales :\n- Gestion des polices d'assurance\n- Suivi des clients et des contrats\n- Traitement des sinistres\n- Interface d'administration complète\n- Génération de rapports et statistiques",
            technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"]
        },
        {
            src: "/java.png",
            title: "Projets Internes Java",
            description: "Développement de projets internes en Java pour MTB by Creative. Applications métiers et outils de gestion.",
            detailedDescription: "Développement d'outils internes pour MTB by Creative avec une interface Web via Angular.\n\nProjet réalisé avec des technologies internes de l'entreprise pour des besoins métiers spécifiques.\n\nApplications métiers et outils de gestion pour améliorer les processus internes de l'entreprise.",
            technologies: ["Java", "Angular", "TypeScript", "Technologies internes"]
        },
        {
            src: "/mobile.png",
            title: "Application Android Location Films",
            description: "Application mobile Android permettant aux utilisateurs de louer des films. Interface intuitive pour parcourir le catalogue et gérer ses locations. Projet BTS SIO.",
            detailedDescription: "Application mobile Android développée dans le cadre du BTS SIO permettant la location de films.\n\nFonctionnalités :\n- Parcourir le catalogue de films\n- Rechercher des films par titre, genre ou acteur\n- Ajouter des films au panier\n- Gérer ses locations en cours\n- Interface utilisateur intuitive et moderne\n- Système de recommandations",
            technologies: ["Android", "Java", "SQLite", "XML"]
        },
        {
            src: "/laravel_rftg.png",
            title: "Application Laravel Admin Films",
            description: "Application web Laravel pour l'administration et la gestion du stock de films. Gestion du catalogue, des locations et des statistiques. Projet BTS SIO.",
            detailedDescription: "Application web Laravel développée dans le cadre du BTS SIO pour l'administration du catalogue de films.\n\nFonctionnalités :\n- Gestion complète du catalogue de films\n- Ajout, modification et suppression de films\n- Gestion des stocks et disponibilités\n- Suivi des locations et retours\n- Statistiques détaillées sur les locations\n- Interface d'administration moderne et ergonomique",
            technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"]
        },
        {
            src: "/mtbeat.png",
            title: "Application Java Vote Restaurant",
            description: "Application Java desktop permettant aux employés de voter pour un restaurant. Génération de menus personnalisés et exploration de restaurants. Projet BTS SIO.",
            detailedDescription: "Application Java réalisée pour le bloc 2 de la première année de BTS SIO.\n\nFonctionnalités :\n- Système d'authentification des utilisateurs\n- Affichage de 3 choix de restaurants\n- Vote pour le restaurant du midi en cliquant sur un choix\n- Mise en favori du restaurant sélectionné\n- Visualisation en temps réel des votes des autres utilisateurs\n- Chaque utilisateur peut voir qui a voté pour quel restaurant\n- Interface conviviale et intuitive",
            technologies: ["Java", "Swing", "Base de données", "JDBC"]
        }
    ];

    return (
        <div
            className="flex flex-col items-center justify-center py-20 relative z-30"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Mes Projets
            </h1>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10 max-w-7xl">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        src={project.src}
                        title={project.title}
                        description={project.description}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            <ProjectModal
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title || ""}
                description={selectedProject?.description || ""}
                detailedDescription={selectedProject?.detailedDescription || ""}
                src={selectedProject?.src || ""}
                technologies={selectedProject?.technologies}
            />
        </div>
    );
};

export default Projects;