"use client";

import React, { useState, useRef, useEffect } from "react";
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
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const relatedProjects = projects.filter((project) =>
        project.technologies.some(
            (tech) => tech.toLowerCase() === skillName.toLowerCase()
        )
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false);
            }
        };
        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showPopup]);

    const handleProjectClick = (projectTitle: string) => {
        setShowPopup(false);
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
            className="relative flex flex-col items-center"
        >
            <div
                onClick={() => relatedProjects.length > 0 && setShowPopup(!showPopup)}
                className={`flex flex-col items-center gap-1 ${relatedProjects.length > 0 ? "cursor-pointer hover:scale-110 transition-transform duration-200" : ""}`}
                title={relatedProjects.length > 0 ? `Voir les projets utilisant ${skillName}` : skillName}
            >
                <Image src={src} width={width} height={height} alt={skillName} />
                <span className="text-gray-400 text-xs mt-1">{skillName}</span>
            </div>

            {showPopup && relatedProjects.length > 0 && (
                <div
                    ref={popupRef}
                    className="absolute top-full mt-2 z-50 bg-[#0c0524] border border-[#7042f88b] rounded-lg p-3 min-w-[220px] shadow-xl shadow-purple-500/10"
                >
                    <p className="text-xs text-gray-400 mb-2 font-semibold">
                        Projets utilisant {skillName} :
                    </p>
                    <div className="flex flex-col gap-1">
                        {relatedProjects.map((project, i) => (
                            <button
                                key={i}
                                onClick={() => handleProjectClick(project.title)}
                                className="text-left text-sm text-purple-300 hover:text-white hover:bg-purple-500/20 rounded px-2 py-1.5 transition-all duration-150"
                            >
                                {project.title}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default SkillDataProvider;
