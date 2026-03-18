import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * CinematicBackground
 * A fixed, full-viewport background layer that renders:
 *  - A rich dark gradient base (navy → midnight black)
 *  - Animated soft radial glow centered behind content
 *  - Orbiting blurred gradient orbs for depth
 *  - A subtle film-grain noise overlay for texture
 *
 * Place this as the first child inside the root <div> in App.jsx
 * so it sits beneath all page content without affecting layout.
 */
const CinematicBackground = () => {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        >
            {/* ── Base gradient ── */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse 120% 80% at 50% -10%, #0d1a3a 0%, #030612 55%, #000005 100%)',
                }}
            />

            {/* ── Central soft radial hero glow ── */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                    top: '5%',
                    width: '70vw',
                    height: '55vh',
                    background:
                        'radial-gradient(ellipse at 50% 50%, rgba(0,180,255,0.10) 0%, rgba(0,120,255,0.05) 40%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* ── Orb 1: top-left cool blue ── */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    top: '-15%',
                    left: '-10%',
                    width: '55vw',
                    height: '55vw',
                    background:
                        'radial-gradient(circle, rgba(0,150,255,0.12) 0%, transparent 65%)',
                    filter: 'blur(90px)',
                }}
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, 30, 10, 0],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* ── Orb 2: top-right deep indigo ── */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    top: '-10%',
                    right: '-15%',
                    width: '50vw',
                    height: '50vw',
                    background:
                        'radial-gradient(circle, rgba(60,30,180,0.12) 0%, transparent 65%)',
                    filter: 'blur(100px)',
                }}
                animate={{
                    x: [0, -50, 20, 0],
                    y: [0, 40, -10, 0],
                    opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 3,
                }}
            />

            {/* ── Orb 3: bottom-center cyan accent ── */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    bottom: '-20%',
                    left: '20%',
                    width: '60vw',
                    height: '60vw',
                    background:
                        'radial-gradient(circle, rgba(0,210,255,0.07) 0%, transparent 65%)',
                    filter: 'blur(120px)',
                }}
                animate={{
                    x: [0, 60, -30, 0],
                    y: [0, -40, 20, 0],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 6,
                }}
            />

            {/* ── Orb 4: mid-right royal blue ── */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    top: '40%',
                    right: '-10%',
                    width: '40vw',
                    height: '40vw',
                    background:
                        'radial-gradient(circle, rgba(30,64,175,0.10) 0%, transparent 65%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    x: [0, -30, 10, 0],
                    y: [0, -50, 30, 0],
                    opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 9,
                }}
            />

            {/* ── Film-grain noise overlay ── */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    opacity: 0.028,
                    mixBlendMode: 'overlay',
                }}
            />

            {/* ── Bottom vignette fade ── */}
            <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                    height: '30vh',
                    background:
                        'linear-gradient(to top, #000005 0%, transparent 100%)',
                }}
            />
        </div>
    );
};

export default CinematicBackground;
