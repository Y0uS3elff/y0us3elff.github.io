// Apple ease curve
export const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp = (delay: number = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.7, ease: APPLE_EASE },
    },
});

export const fadeIn = (delay: number = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay, duration: 0.6, ease: APPLE_EASE },
    },
});

export const scaleReveal = (delay: number = 0) => ({
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay, duration: 0.8, ease: APPLE_EASE },
    },
});

export const stagger = (staggerChildren: number = 0.08, delayChildren: number = 0) => ({
    visible: {
        transition: { staggerChildren, delayChildren },
    },
});

export function slideInFromLeft(delay: number) {
    return {
        hidden: { x: -60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay, duration: 0.9, ease: APPLE_EASE },
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { x: 60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay, duration: 0.9, ease: APPLE_EASE },
        },
    };
}

export const slideInFromTop = {
    hidden: { y: -40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: APPLE_EASE },
    },
};

export const slideInFromBottom = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: APPLE_EASE },
    },
};
