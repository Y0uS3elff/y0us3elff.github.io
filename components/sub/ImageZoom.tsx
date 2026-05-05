"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export default function ImageZoom({ src, alt, width, height, className }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`cursor-zoom-in ${className ?? ""}`}
                onClick={() => setOpen(true)}
            />

            {open && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setOpen(false)}
                >
                    <button
                        className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                        onClick={() => setOpen(false)}
                        aria-label="Fermer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={src}
                            alt={alt}
                            width={1600}
                            height={1200}
                            className="max-h-[90vh] max-w-[90vw] w-auto h-auto rounded-xl object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
