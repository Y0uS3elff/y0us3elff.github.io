import { projects } from "@/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ImageZoom from "@/components/sub/ImageZoom";

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
    return { title: project ? `${project.title} — Portfolio` : "Projet" };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-5">
            {children}
        </h2>
    );
}

function Divider() {
    return <div className="border-t border-[#2A0E61] my-10" />;
}

export default function ProjectPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) notFound();

    return (
        <main className="relative z-30 min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 mb-10 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour aux projets
            </Link>

            {/* Banner */}
            <div className="rounded-2xl overflow-hidden border border-[#2A0E61] bg-[#0a0a1a]/60 backdrop-blur-md mb-8">
                <div className="relative w-full h-[280px] md:h-[380px]">
                    <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.context && (
                                <span className="text-xs font-medium text-purple-300 border border-purple-500/40 bg-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                                    {project.context}
                                </span>
                            )}
                            {project.period && (
                                <span className="text-xs font-medium text-gray-300 border border-gray-500/40 bg-gray-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                                    {project.period}
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Info cards */}
            {(project.organisation || project.team || project.period) && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {project.organisation && (
                        <div className="rounded-xl border border-[#2A0E61] bg-[#0a0a1a]/60 backdrop-blur-md p-5">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Organisation</p>
                            <p className="text-white font-medium">{project.organisation}</p>
                        </div>
                    )}
                    {project.period && (
                        <div className="rounded-xl border border-[#2A0E61] bg-[#0a0a1a]/60 backdrop-blur-md p-5">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Période</p>
                            <p className="text-white font-medium">{project.period}</p>
                        </div>
                    )}
                    {project.team && (
                        <div className="rounded-xl border border-[#2A0E61] bg-[#0a0a1a]/60 backdrop-blur-md p-5">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Modalité</p>
                            <p className="text-white font-medium">{project.team}</p>
                        </div>
                    )}
                </div>
            )}

            {/* Main content */}
            <div className="rounded-2xl border border-[#2A0E61] bg-[#0a0a1a]/60 backdrop-blur-md p-8 md:p-12">

                {/* Description */}
                <SectionTitle>Description du projet</SectionTitle>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.detailedDescription || project.description}
                </p>

                {/* Technologies */}
                <Divider />
                <SectionTitle>Technologies utilisées</SectionTitle>
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-sm text-cyan-300 border border-cyan-500/30 bg-cyan-500/10 rounded-full px-3 py-1"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                {(project.githubUrl || project.liveUrl) && (
                    <>
                        <Divider />
                        <SectionTitle>Liens</SectionTitle>
                        <div className="flex flex-wrap gap-3">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-white border border-[#7042f88b] bg-[#7042f8]/10 hover:bg-[#7042f8]/20 rounded-full px-4 py-2 transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    Code source (GitHub)
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-white border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full px-4 py-2 transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Voir en ligne
                                </a>
                            )}
                        </div>
                    </>
                )}

                {/* Architecture */}
                {(project.architecture || project.architectureImage) && (
                    <>
                        <Divider />
                        <SectionTitle>Architecture technique</SectionTitle>
                        {project.architecture && (
                            <div className="bg-[#0d0d1f] border border-[#2A0E61] rounded-xl px-5 py-4 font-mono text-sm text-cyan-300 leading-relaxed mb-6">
                                {project.architecture}
                            </div>
                        )}
                        {project.architectureImage && (
                            <div className="flex justify-center">
                                <div className="rounded-xl overflow-hidden border border-[#2A0E61] w-full max-w-md">
                                    <ImageZoom
                                        src={project.architectureImage}
                                        alt="Schéma d'architecture"
                                        width={900}
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Conditions */}
                {(project.resourcesProvided || project.expectedResults) && (
                    <>
                        <Divider />
                        <SectionTitle>Conditions de réalisation</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.resourcesProvided && (
                                <div className="rounded-xl border border-[#2A0E61] bg-[#0d0d1f]/60 p-5">
                                    <p className="text-sm font-semibold text-purple-300 mb-3">Ressources fournies</p>
                                    <ul className="space-y-2">
                                        {project.resourcesProvided.map((r) => (
                                            <li key={r} className="flex items-start gap-2 text-sm text-gray-400">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {project.expectedResults && (
                                <div className="rounded-xl border border-[#2A0E61] bg-[#0d0d1f]/60 p-5">
                                    <p className="text-sm font-semibold text-cyan-300 mb-3">Résultats attendus</p>
                                    <ul className="space-y-2">
                                        {project.expectedResults.map((r) => (
                                            <li key={r} className="flex items-start gap-2 text-sm text-gray-400">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                    <>
                        <Divider />
                        <SectionTitle>Fonctionnalités</SectionTitle>
                        <ul className="space-y-3">
                            {project.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-gray-300">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {/* MCD */}
                {project.mcdImage && (
                    <>
                        <Divider />
                        <SectionTitle>Modèle Conceptuel de Données (MCD)</SectionTitle>
                        <div className="rounded-xl overflow-hidden border border-[#2A0E61]">
                            <ImageZoom
                                src={project.mcdImage}
                                alt="MCD de la base de données"
                                width={1200}
                                height={700}
                                className="w-full h-auto"
                            />
                        </div>
                    </>
                )}

                {/* Screens */}
                {project.screens && project.screens.length > 0 && (
                    <>
                        <Divider />
                        <SectionTitle>Écrans de l&apos;application</SectionTitle>
                        <div className="space-y-4">
                            {project.screens.map((screen, i) => (
                                <div
                                    key={screen.title}
                                    className="rounded-xl border border-[#2A0E61] bg-[#0d0d1f]/60 p-5"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                                            {i + 1}
                                        </span>
                                        <p className="text-white font-semibold">{screen.title}</p>
                                    </div>
                                    <div className={`pl-10 ${screen.image ? "flex flex-col md:flex-row gap-5 items-start" : ""}`}>
                                        <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                            {screen.description}
                                        </p>
                                        {screen.image && (
                                            <div className="rounded-lg overflow-hidden border border-[#2A0E61] w-full md:w-48 flex-shrink-0">
                                                <ImageZoom
                                                    src={screen.image}
                                                    alt={screen.title}
                                                    width={300}
                                                    height={500}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Competences */}
                {project.competences && project.competences.length > 0 && (
                    <>
                        <Divider />
                        <SectionTitle>Compétences travaillées</SectionTitle>
                        <ul className="space-y-2">
                            {project.competences.map((c) => (
                                <li key={c} className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </main>
    );
}
