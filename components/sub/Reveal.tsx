"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleReveal, stagger } from "@/utils/motion";

type Variant = "fadeUp" | "scaleReveal";

interface Props {
    children: React.ReactNode;
    variant?: Variant;
    delay?: number;
    amount?: number;
    className?: string;
}

const variantsMap = {
    fadeUp,
    scaleReveal,
};

export default function Reveal({
    children,
    variant = "fadeUp",
    delay = 0,
    amount = 0.25,
    className,
}: Props) {
    const v = variantsMap[variant](delay);
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount }}
            variants={v}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function RevealStagger({
    children,
    staggerChildren = 0.08,
    delayChildren = 0,
    amount = 0.2,
    className,
}: {
    children: React.ReactNode;
    staggerChildren?: number;
    delayChildren?: number;
    amount?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount }}
            variants={stagger(staggerChildren, delayChildren)}
            className={className}
        >
            {children}
        </motion.div>
    );
}
