import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    slug: string;
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({ slug, src, title, description }: Props) => {
    return (
        <Link
            href={`/projects/${slug}`}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer hover:border-purple-500 transition-all duration-300 hover:scale-105 block"
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
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-purple-400 group-hover:text-cyan-400 transition-colors">
                    Voir le projet
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </Link>
    );
};

export default ProjectCard;
