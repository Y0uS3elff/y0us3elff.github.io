"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    detailedDescription: string;
    src: string;
    technologies?: string[];
}

const ProjectModal = ({ isOpen, onClose, title, description, detailedDescription, src, technologies }: Props) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={onClose}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0300145e] backdrop-blur-md border border-[#7042f88b] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            {/* Image */}
                            <div className="relative w-full h-64 md:h-96">
                                <Image
                                    src={src}
                                    alt={title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                                    {title}
                                </h2>

                                <p className="text-gray-300 mb-6 text-lg">
                                    {description}
                                </p>

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">Description détaillée</h3>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {detailedDescription}
                                    </p>
                                </div>

                                {technologies && technologies.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-white mb-3">Technologies utilisées</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm text-purple-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Close button */}
                                <button
                                    onClick={onClose}
                                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;