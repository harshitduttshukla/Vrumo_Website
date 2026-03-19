import { motion } from 'framer-motion';

/**
 * CinematicBackground — Luxury White & Gold Edition
 * A fixed, full-viewport background layer that renders:
 *  - A pristine white base
 *  - Subtle diagonal line pattern for texture
 *  - Very faint gold radial glow accents
 *  - Light noise overlay for premium texture
 */
const CinematicBackground = () => {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        >
            {/* ── Base white gradient ── */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 50%, #F8F8F8 100%)',
                }}
            />

            {/* ── Subtle diagonal line pattern ── */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 60px,
                        rgba(212,175,55,0.02) 60px,
                        rgba(212,175,55,0.02) 61px
                    )`,
                }}
            />

            {/* ── Very faint gold glow top-center ── */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                    top: '-5%',
                    width: '60vw',
                    height: '40vh',
                    background:
                        'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* ── Very faint gold accent bottom-right ── */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    bottom: '-10%',
                    right: '-5%',
                    width: '40vw',
                    height: '40vw',
                    background:
                        'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 65%)',
                    filter: 'blur(100px)',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4,
                }}
            />

            {/* ── Light noise texture overlay ── */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    opacity: 0.015,
                    mixBlendMode: 'multiply',
                }}
            />
        </div>
    );
};

export default CinematicBackground;
