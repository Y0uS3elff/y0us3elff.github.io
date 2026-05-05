"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const navLinks = [
    { href: "/#about", label: "Qui suis-je" },
    { href: "/#parcours", label: "Parcours" },
    { href: "/#skills", label: "Compétences" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/#veille", label: "Veille" },
    { href: "/#synthese", label: "Synthèse" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-apple ${
                scrolled ? "navbar-glass" : "bg-transparent"
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-[15px] font-medium tracking-tight text-white hover:text-apple-gray-200 transition"
                >
                    Léo Clerc
                </Link>

                <ul className="hidden md:flex items-center gap-7">
                    {navLinks.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className="text-[12px] text-apple-gray-200 hover:text-white transition-colors duration-300"
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex">
                    <Link
                        href="/#contact"
                        className="text-[12px] text-apple-blue hover:text-white transition-colors duration-300"
                    >
                        Me contacter →
                    </Link>
                </div>

                <button
                    aria-label="Ouvrir le menu"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden text-apple-gray-200 hover:text-white transition"
                >
                    <span className="block w-5 h-px bg-current mb-1.5" />
                    <span className="block w-5 h-px bg-current" />
                </button>
            </nav>

            {open && (
                <div className="md:hidden navbar-glass border-t border-white/5">
                    <ul className="px-6 py-4 flex flex-col gap-3">
                        {navLinks.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="block text-sm text-apple-gray-200 hover:text-white py-1"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
