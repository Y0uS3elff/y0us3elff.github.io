import Link from "next/link";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo, RxEnvelopeClosed } from "react-icons/rx";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-apple-gray-50 text-apple-gray-700"
        >
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-apple-gray-200">
                    <div>
                        <h3 className="text-[28px] font-semibold tracking-tight text-apple-gray-700">
                            Restons en contact.
                        </h3>
                        <p className="mt-3 text-[15px] text-apple-gray-500 leading-relaxed">
                            Étudiant BTS SIO option SLAM. Ouvert aux échanges,
                            collaborations et opportunités.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[12px] uppercase tracking-wider text-apple-gray-400 mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-[14px]">
                            <li><Link href="/#about" className="hover:text-apple-blue transition">Qui suis-je</Link></li>
                            <li><Link href="/#parcours" className="hover:text-apple-blue transition">Parcours</Link></li>
                            <li><Link href="/#skills" className="hover:text-apple-blue transition">Compétences</Link></li>
                            <li><Link href="/realisations" className="hover:text-apple-blue transition">Réalisations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[12px] uppercase tracking-wider text-apple-gray-400 mb-4">
                            Me joindre
                        </h4>
                        <ul className="space-y-2.5 text-[14px]">
                            <li>
                                <a
                                    href="mailto:clercleopro@gmail.com"
                                    className="inline-flex items-center gap-2 hover:text-apple-blue transition"
                                >
                                    <RxEnvelopeClosed size={16} />
                                    clercleopro@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Y0uS3elff"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-apple-blue transition"
                                >
                                    <RxGithubLogo size={16} />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/clerc-leo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-apple-blue transition"
                                >
                                    <RxLinkedinLogo size={16} />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-apple-gray-400">
                    <p>© 2026 Léo Clerc. Tous droits réservés.</p>
                    <p>Portfolio BTS SIO — Option SLAM</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
