"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
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
                        slug={project.slug}
                        src={project.src}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
