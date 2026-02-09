"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { projects } from "@/constants";

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    skillName: string;
}

const SkillDataProvider = ({ src, width, height, index, skillName }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const relatedProjects = projects.filter((project) =>
        project.technologies.some(
            (tech) => tech.toLowerCase() === skillName.toLowerCase()
        )
    );

    const handleProjectClick = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.3;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className="flex flex-col items-center min-w-[100px]"
        >
            <Image src={src} width={width} height={height} alt={skillName} />
            <span className="text-gray-400 text-xs mt-1 font-medium">{skillName}</span>

            {relatedProjects.length > 0 && (
                <div className="flex flex-col items-center mt-3 gap-1.5">
                    {relatedProjects.map((project, i) => (
                        <button
                            key={i}
                            onClick={handleProjectClick}
                            className="text-xs px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-500/30 hover:text-white transition-all duration-150 cursor-pointer"
                        >
                            {project.title}
                        </button>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default SkillDataProvider;
