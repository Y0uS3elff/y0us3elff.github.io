import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <div className="w-full bg-transparent text-gray-200 border-t border-[#7042f88b] mt-10 py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Léo Clerc
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                        clercleopro@gmail.com
                    </p>
                </div>

                <div className="flex flex-row gap-6">
                    <a
                        href="https://github.com/Y0uS3elff"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <RxGithubLogo size={20} />
                        <span className="text-sm">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/clerc-leo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <RxLinkedinLogo size={20} />
                        <span className="text-sm">LinkedIn</span>
                    </a>
                </div>

                <div className="text-sm text-gray-500">
                    &copy; Léo Clerc 2026
                </div>
            </div>
        </div>
    );
};

export default Footer;
