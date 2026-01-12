import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    onClick?: () => void;
}

const ProjectCard = ({ src, title, description, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer hover:border-purple-500 transition-all duration-300 hover:scale-105"
        >
            <Image
                src={src}
                alt={title}
                width={1000}
                height={600}
                className="w-full h-[200px] object-cover"
            />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;