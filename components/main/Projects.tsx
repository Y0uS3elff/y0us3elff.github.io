import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Mes Projets
            </h1>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10 max-w-7xl">
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Application Laravel Assurance"
                    description="Développement d'une application web Laravel pour une compagnie d'assurance chez MTB by Creative. Gestion des polices, clients et sinistres."
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Projets Internes Java"
                    description="Développement de projets internes en Java pour MTB by Creative. Applications métiers et outils de gestion."
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Application Android Location Films"
                    description="Application mobile Android permettant aux utilisateurs de louer des films. Interface intuitive pour parcourir le catalogue et gérer ses locations. Projet BTS SIO."
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Application Laravel Admin Films"
                    description="Application web Laravel pour l'administration et la gestion du stock de films. Gestion du catalogue, des locations et des statistiques. Projet BTS SIO."
                />
            </div>
        </div>
    );
};

export default Projects;