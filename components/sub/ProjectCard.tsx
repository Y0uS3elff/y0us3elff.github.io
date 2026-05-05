import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    slug: string;
    src: string;
    title: string;
    description: string;
    technologies?: string[];
    variant?: "dark" | "light";
}

const ProjectCard = ({ slug, src, title, description, technologies, variant = "dark" }: Props) => {
    const isDark = variant === "dark";
    return (
        <Link
            href={`/projects/${slug}`}
            className={`group relative block overflow-hidden rounded-3xl border transition-all duration-700 ease-apple hover:-translate-y-1 ${
                isDark
                    ? "card-dark hover:border-white/15"
                    : "card-light hover:shadow-2xl border-transparent"
            }`}
        >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-apple group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                    className={`absolute inset-0 ${
                        isDark
                            ? "bg-gradient-to-t from-black/60 via-black/0 to-transparent"
                            : "bg-gradient-to-t from-black/30 via-transparent to-transparent"
                    }`}
                />
            </div>

            <div className="p-7 md:p-8">
                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {technologies.slice(0, 4).map((t) => (
                            <span
                                key={t}
                                className={`text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full ${
                                    isDark
                                        ? "bg-white/5 text-apple-gray-300 border border-white/10"
                                        : "bg-black/5 text-apple-gray-600 border border-black/5"
                                }`}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}
                <h3
                    className={`text-[22px] md:text-[26px] font-semibold tracking-tight ${
                        isDark ? "text-white" : "text-apple-gray-700"
                    }`}
                >
                    {title}
                </h3>
                <p
                    className={`mt-3 text-[15px] leading-relaxed line-clamp-3 ${
                        isDark ? "text-apple-gray-300" : "text-apple-gray-500"
                    }`}
                >
                    {description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] text-apple-blue group-hover:gap-2.5 transition-all duration-500 ease-apple">
                    Découvrir le projet
                    <span aria-hidden>→</span>
                </span>
            </div>
        </Link>
    );
};

export default ProjectCard;
