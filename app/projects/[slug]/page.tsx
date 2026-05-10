import { projects } from "@/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ImageZoom from "@/components/sub/ImageZoom";
import Reveal, { RevealStagger, RevealItem } from "@/components/sub/Reveal";

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
    return { title: project ? `${project.title} — Léo Clerc` : "Projet" };
}

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <Reveal className="text-[13px] tracking-[0.2em] uppercase text-apple-blue mb-4">
            {children}
        </Reveal>
    );
}

function SectionTitle({
    children,
    light = false,
}: {
    children: React.ReactNode;
    light?: boolean;
}) {
    return (
        <Reveal
            delay={0.05}
            className="font-semibold tracking-tight"
        >
            <span style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: light ? "#1d1d1f" : "#fff",
                display: "block",
            }}>
                {children}
            </span>
        </Reveal>
    );
}

export default function ProjectPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
        notFound();
        return null;
    }

    return (
        <main className="bg-black text-white">
            {/* HERO PROJET */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
                <div
                    className="halo-blue"
                    style={{ top: "-15%", left: "50%", transform: "translateX(-50%)", width: "60vw", height: "60vw", opacity: 0.35 }}
                />
                <div className="relative z-10 max-w-5xl mx-auto">
                    <Link
                        href="/realisations"
                        className="inline-flex items-center gap-2 text-[13px] text-apple-gray-300 hover:text-apple-blue transition mb-10"
                    >
                        ← Toutes les réalisations
                    </Link>

                    <Reveal className="flex flex-wrap gap-2 mb-6">
                        {project.context && (
                            <span className="text-[11px] tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-apple-gray-200">
                                {project.context}
                            </span>
                        )}
                        {project.period && (
                            <span className="text-[11px] tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-apple-gray-200">
                                {project.period}
                            </span>
                        )}
                    </Reveal>

                    <Reveal delay={0.05}
                        className="font-semibold tracking-tight"
                    >
                        <span style={{
                            fontSize: "clamp(2.75rem, 7vw, 5rem)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            display: "block",
                        }}>{project.title}</span>
                    </Reveal>
                    <Reveal delay={0.1} className="mt-6 max-w-2xl text-[19px] text-apple-gray-300 leading-relaxed">
                        {project.description}
                    </Reveal>

                    <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pill btn-pill-outline"
                            >
                                Code source GitHub →
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pill btn-pill-primary"
                            >
                                Voir en ligne →
                            </a>
                        )}
                    </Reveal>
                </div>

                {/* Image hero pleine largeur */}
                <Reveal variant="scaleReveal" delay={0.2} amount={0.15} className="relative z-10 mt-16 max-w-6xl mx-auto">
                    <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-card-dark">
                        <Image
                            src={project.src}
                            alt={project.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-cover"
                        />
                    </div>
                </Reveal>
            </section>

            {/* INFO BAR */}
            {(project.organisation || project.team || project.period) && (
                <section className="px-6 py-12 bg-black border-t border-white/5">
                    <RevealStagger
                        staggerChildren={0.1}
                        amount={0.3}
                        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                        {project.organisation && (
                            <RevealItem>
                                <p className="text-[11px] uppercase tracking-widest text-apple-gray-500 mb-1.5">Organisation</p>
                                <p className="text-[16px] text-white">{project.organisation}</p>
                            </RevealItem>
                        )}
                        {project.period && (
                            <RevealItem>
                                <p className="text-[11px] uppercase tracking-widest text-apple-gray-500 mb-1.5">Période</p>
                                <p className="text-[16px] text-white">{project.period}</p>
                            </RevealItem>
                        )}
                        {project.team && (
                            <RevealItem>
                                <p className="text-[11px] uppercase tracking-widest text-apple-gray-500 mb-1.5">Modalité</p>
                                <p className="text-[16px] text-white">{project.team}</p>
                            </RevealItem>
                        )}
                    </RevealStagger>
                </section>
            )}

            {/* DESCRIPTION DETAILLEE — fond clair */}
            {(project.detailedDescription || project.description) && (
                <section className="bg-apple-gray-50 text-apple-gray-700 px-6 py-28 md:py-36">
                    <div className="max-w-3xl mx-auto">
                        <Eyebrow>Le projet</Eyebrow>
                        <SectionTitle light>
                            <span className="block">En quelques mots,</span>
                            <span className="block title-muted-dark">de quoi s&apos;agit-il ?</span>
                        </SectionTitle>
                        <Reveal delay={0.1} className="mt-10 space-y-5 text-[18px] leading-[1.7] text-apple-gray-600 whitespace-pre-line">
                            {project.detailedDescription || project.description}
                        </Reveal>
                    </div>
                </section>
            )}

            {/* TECHNOLOGIES — fond noir */}
            <section className="bg-black px-6 py-28 md:py-36 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <Eyebrow>Technologies</Eyebrow>
                    <SectionTitle>
                        <span className="block">Une stack,</span>
                        <span className="block title-muted">pour ce projet.</span>
                    </SectionTitle>
                    <RevealStagger staggerChildren={0.04} delayChildren={0.1} amount={0.3} className="mt-10 flex flex-wrap gap-2.5">
                        {project.technologies.map((tech) => (
                            <RevealItem key={tech}>
                                <span className="text-[14px] px-4 py-2 rounded-full bg-apple-blue/10 border border-apple-blue/30 text-apple-blue inline-block">
                                    {tech}
                                </span>
                            </RevealItem>
                        ))}
                    </RevealStagger>
                </div>
            </section>

            {/* ARCHITECTURE — fond clair */}
            {(project.architecture || project.architectureImage) && (
                <section className="bg-apple-gray-50 text-apple-gray-700 px-6 py-28 md:py-36">
                    <div className="max-w-5xl mx-auto">
                        <Eyebrow>Architecture</Eyebrow>
                        <SectionTitle light>
                            <span className="block">Sous le capot,</span>
                            <span className="block title-muted-dark">les flux et les briques.</span>
                        </SectionTitle>
                        {project.architecture && (
                            <Reveal delay={0.1} className="mt-10 rounded-2xl bg-apple-gray-700 text-apple-gray-50 p-6 md:p-8 font-mono text-[14px] md:text-[15px] leading-relaxed overflow-x-auto">
                                {project.architecture}
                            </Reveal>
                        )}
                        {project.architectureImage && (
                            <Reveal variant="scaleReveal" delay={0.2} className="mt-8 flex justify-center">
                                <div className="rounded-3xl overflow-hidden bg-white shadow-card-light w-full max-w-2xl">
                                    <ImageZoom
                                        src={project.architectureImage}
                                        alt="Schéma d'architecture"
                                        width={900}
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </Reveal>
                        )}
                    </div>
                </section>
            )}

            {/* CONDITIONS — fond noir */}
            {(project.resourcesProvided || project.expectedResults) && (
                <section className="bg-black px-6 py-28 md:py-36 border-t border-white/5">
                    <div className="max-w-5xl mx-auto">
                        <Eyebrow>Conditions de réalisation</Eyebrow>
                        <SectionTitle>
                            <span className="block">Ce qui était fourni,</span>
                            <span className="block title-muted">ce qui était attendu.</span>
                        </SectionTitle>
                        <RevealStagger staggerChildren={0.15} delayChildren={0.1} amount={0.2} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.resourcesProvided && (
                                <RevealItem variant="scaleReveal" className="card-dark p-7 md:p-8">
                                    <p className="text-[12px] uppercase tracking-widest text-apple-blue mb-5">
                                        Ressources fournies
                                    </p>
                                    <ul className="space-y-3">
                                        {project.resourcesProvided.map((r) => (
                                            <li
                                                key={r}
                                                className="flex items-start gap-3 text-[15px] text-apple-gray-200"
                                            >
                                                <span className="mt-2 w-1 h-1 rounded-full bg-apple-blue flex-shrink-0" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </RevealItem>
                            )}
                            {project.expectedResults && (
                                <RevealItem variant="scaleReveal" className="card-dark p-7 md:p-8">
                                    <p className="text-[12px] uppercase tracking-widest text-apple-blue mb-5">
                                        Résultats attendus
                                    </p>
                                    <ul className="space-y-3">
                                        {project.expectedResults.map((r) => (
                                            <li
                                                key={r}
                                                className="flex items-start gap-3 text-[15px] text-apple-gray-200"
                                            >
                                                <span className="mt-2 w-1 h-1 rounded-full bg-apple-blue flex-shrink-0" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </RevealItem>
                            )}
                        </RevealStagger>
                    </div>
                </section>
            )}

            {/* FONCTIONNALITES — fond clair */}
            {project.features && project.features.length > 0 && (
                <section className="bg-apple-gray-50 text-apple-gray-700 px-6 py-28 md:py-36">
                    <div className="max-w-3xl mx-auto">
                        <Eyebrow>Fonctionnalités</Eyebrow>
                        <SectionTitle light>
                            <span className="block">Ce que fait</span>
                            <span className="block title-muted-dark">l&apos;application.</span>
                        </SectionTitle>
                        <RevealStagger staggerChildren={0.06} delayChildren={0.1} amount={0.15} className="mt-12 space-y-4">
                            {project.features.map((feature) => (
                                <RevealItem key={feature}>
                                    <div className="flex items-start gap-4 text-[17px] text-apple-gray-600 leading-relaxed">
                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-apple-blue flex-shrink-0" />
                                        {feature}
                                    </div>
                                </RevealItem>
                            ))}
                        </RevealStagger>
                    </div>
                </section>
            )}

            {/* MCD — fond noir */}
            {project.mcdImage && (
                <section className="bg-black px-6 py-28 md:py-36 border-t border-white/5">
                    <div className="max-w-5xl mx-auto">
                        <Eyebrow>Modèle de données</Eyebrow>
                        <SectionTitle>
                            <span className="block">Le MCD,</span>
                            <span className="block title-muted">cœur métier de l&apos;application.</span>
                        </SectionTitle>
                        <Reveal variant="scaleReveal" delay={0.1} amount={0.15} className="mt-12 rounded-3xl overflow-hidden border border-white/10 bg-white">
                            <ImageZoom
                                src={project.mcdImage}
                                alt="MCD de la base de données"
                                width={1200}
                                height={700}
                                className="w-full h-auto"
                            />
                        </Reveal>
                    </div>
                </section>
            )}

            {/* ECRANS — fond clair, alternance image/texte */}
            {project.screens && project.screens.length > 0 && (
                <section className="bg-apple-gray-50 text-apple-gray-700 px-6 py-28 md:py-36">
                    <div className="max-w-6xl mx-auto">
                        <Eyebrow>Écrans</Eyebrow>
                        <SectionTitle light>
                            <span className="block">Une visite,</span>
                            <span className="block title-muted-dark">écran par écran.</span>
                        </SectionTitle>

                        <div className="mt-16 space-y-24">
                            {project.screens.map((screen, i) => (
                                <div
                                    key={screen.title}
                                    className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center ${
                                        i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                                    }`}
                                >
                                    <Reveal variant="scaleReveal" amount={0.2}>
                                        {screen.image && (
                                            <div className="rounded-3xl overflow-hidden bg-white shadow-card-light max-w-sm mx-auto md:mx-0">
                                                <ImageZoom
                                                    src={screen.image}
                                                    alt={screen.title}
                                                    width={400}
                                                    height={800}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        )}
                                    </Reveal>
                                    <Reveal delay={0.1} amount={0.2}>
                                        <p className="text-[12px] uppercase tracking-widest text-apple-gray-400 mb-3">
                                            Étape {i + 1}
                                        </p>
                                        <h3
                                            className="font-semibold tracking-tight text-apple-gray-700"
                                            style={{
                                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                                lineHeight: 1.15,
                                                letterSpacing: "-0.015em",
                                            }}
                                        >
                                            {screen.title}
                                        </h3>
                                        <p className="mt-4 text-[16px] md:text-[17px] text-apple-gray-500 leading-relaxed">
                                            {screen.description}
                                        </p>
                                    </Reveal>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* COMPETENCES — fond noir */}
            {project.competences && project.competences.length > 0 && (
                <section className="bg-black px-6 py-28 md:py-36 border-t border-white/5">
                    <div className="max-w-5xl mx-auto">
                        <Eyebrow>BTS SIO</Eyebrow>
                        <SectionTitle>
                            <span className="block">Compétences travaillées,</span>
                            <span className="block title-muted">référentiel SLAM.</span>
                        </SectionTitle>
                        <RevealStagger staggerChildren={0.08} delayChildren={0.1} amount={0.2} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.competences.map((c) => (
                                <RevealItem key={c} variant="scaleReveal">
                                    <div className="card-dark p-5 md:p-6 flex items-start gap-3 text-[15px] text-apple-gray-200">
                                        <span className="text-apple-blue text-lg leading-none mt-0.5">✓</span>
                                        {c}
                                    </div>
                                </RevealItem>
                            ))}
                        </RevealStagger>
                    </div>
                </section>
            )}

            {/* TABLEAU DE SYNTHESE E5 — fond noir */}
            {project.epreuveE5 && project.epreuveE5.length > 0 && (
                <section className="bg-black px-6 py-28 md:py-36 border-t border-white/5">
                    <div className="max-w-5xl mx-auto">
                        <Eyebrow>Tableau de synthèse — Épreuve E5</Eyebrow>
                        <SectionTitle>
                            <span className="block">Compétences cochées,</span>
                            <span className="block title-muted">au tableau de synthèse.</span>
                        </SectionTitle>
                        <Reveal delay={0.1} className="mt-8 max-w-3xl text-[16px] text-apple-gray-400 leading-relaxed">
                            Ce projet est référencé dans mon tableau de synthèse des
                            réalisations professionnelles (BTS SIO option SLAM, session
                            2026) pour les compétences suivantes :
                        </Reveal>
                        <RevealStagger staggerChildren={0.1} delayChildren={0.15} amount={0.2} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.epreuveE5.map((comp) => (
                                <RevealItem key={comp.name} variant="scaleReveal" className="card-dark p-7 md:p-8">
                                    <div className="flex items-start gap-3 mb-5">
                                        <span className="text-apple-blue text-lg leading-none mt-0.5">✓</span>
                                        <p className="text-[17px] font-semibold text-white leading-snug">
                                            {comp.name}
                                        </p>
                                    </div>
                                    <ul className="space-y-3 pl-7">
                                        {comp.activities.map((a) => (
                                            <li
                                                key={a}
                                                className="flex items-start gap-3 text-[14px] text-apple-gray-300 leading-relaxed"
                                            >
                                                <span className="mt-2 w-1 h-1 rounded-full bg-apple-blue flex-shrink-0" />
                                                {a}
                                            </li>
                                        ))}
                                    </ul>
                                </RevealItem>
                            ))}
                        </RevealStagger>
                    </div>
                </section>
            )}

            {/* CTA FINAL — fond clair */}
            <section className="bg-apple-gray-50 text-apple-gray-700 px-6 py-28">
                <div className="max-w-3xl mx-auto text-center">
                    <h2
                        className="font-semibold tracking-tight"
                        style={{
                            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.015em",
                        }}
                    >
                        Envie d&apos;explorer{" "}
                        <span className="title-muted-dark">d&apos;autres projets ?</span>
                    </h2>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link href="/realisations" className="btn-pill btn-pill-primary">
                            Voir toutes les réalisations →
                        </Link>
                        <Link href="/" className="btn-pill btn-pill-outline-dark">
                            ← Retour à l&apos;accueil
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
