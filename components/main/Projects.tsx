"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectModal from "../sub/ProjectModal";
import { projects, Project } from "@/constants";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("[data-project]") as HTMLElement | null;
            if (link) {
                const title = link.getAttribute("data-project");
                if (title) {
                    const project = projects.find((p) => p.title === title);
                    if (project) {
                        setTimeout(() => setSelectedProject(project), 600);
                    }
                }
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

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
