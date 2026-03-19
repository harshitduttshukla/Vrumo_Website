import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leftLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
    ];

    const rightLinks = [
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    // Premium Motion Variants
    const navContainerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -12 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        visible: { 
            opacity: 1, 
            scale: 1, 
            filter: 'blur(0px)',
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, scale: 0.95, y: -20, filter: 'blur(10px)' },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { 
                duration: 0.4, 
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.95, 
            y: -20, 
            filter: 'blur(10px)',
            transition: { duration: 0.3, ease: 'easeIn' }
        }
    };

    return (
        <header 
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 sm:pt-6"
        >
            <motion.nav
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                className={`
                    pointer-events-auto
                    relative flex items-center justify-between
                    w-[95%] max-w-4xl px-4 sm:px-8
                    transition-all duration-700 ease-[0.16,1,0.3,1]
                    rounded-full border
                    ${scrolled 
                        ? 'bg-background/80 backdrop-blur-2xl border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] py-2 sm:py-3' 
                        : 'bg-white/5 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] py-4 sm:py-5'
                    }
                `}
            >
                {/* Desktop Left Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {leftLinks.map((link) => (
                        <motion.div key={link.name} variants={itemVariants}>
                            <NavLink link={link} isActive={location.pathname === link.path} />
                        </motion.div>
                    ))}
                </div>

                {/* Center Logo */}
                <motion.div 
                    variants={logoVariants}
                    className="flex-1 md:flex-none flex justify-center md:px-8"
                >
                    <Link to="/" className="relative group">
                        <div className="relative z-10 text-2xl sm:text-3xl font-heading font-extrabold tracking-[-0.05em] text-primary flex items-center transition-transform duration-500 group-hover:scale-[1.02]">
                            VRUMO
                        </div>
                        <div className="absolute -inset-x-3 -inset-y-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
                    </Link>
                </motion.div>

                {/* Desktop Right Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {rightLinks.map((link) => (
                        <motion.div key={link.name} variants={itemVariants}>
                            <NavLink link={link} isActive={location.pathname === link.path} />
                        </motion.div>
                    ))}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ 
                             y: -2,
                             boxShadow: "0 20px 40px -10px rgba(0, 210, 255, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/booking"
                            className="bg-primary text-secondary px-8 py-3 rounded-full font-mono font-medium text-[11px] uppercase tracking-[0.18em] relative overflow-hidden group shadow-glow"
                        >
                            <span className="relative z-10">Book Now</span>
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <motion.div variants={itemVariants} className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2.5 text-slate-300 hover:text-primary transition-colors focus:outline-none relative"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isOpen ? 'close' : 'open'}
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {isOpen ? <X size={26} /> : <Menu size={26} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </motion.div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-0 right-0 mt-4 p-5 bg-slate-900/95 backdrop-blur-3xl rounded-4xl border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] md:hidden pointer-events-auto"
                        >
                            <div className="flex flex-col space-y-5 items-center py-6">
                                {[...leftLinks, ...rightLinks].map((link) => (
                                    <motion.div key={link.name} variants={itemVariants}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`font-body text-2xl font-semibold tracking-tight transition-all duration-300 ${
                                                location.pathname === link.path ? 'text-primary' : 'text-slate-300 hover:text-primary'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div variants={itemVariants} className="pt-6 w-full">
                                    <Link
                                        to="/booking"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center bg-primary text-secondary py-5 rounded-3xl font-body font-black text-lg tracking-wider shadow-2xl active:scale-[0.98]"
                                    >
                                        Book Now
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
};

const NavLink = ({ link, isActive }) => {
    return (
        <Link
            to={link.path}
            className="group relative inline-block overflow-hidden"
        >
            <motion.span
                whileHover={{ y: -2 }}
                className={`
                    relative z-10 text-[13px] font-heading font-semibold tracking-[-0.01em] transition-colors duration-500 flex items-center gap-1.5
                    ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-white'}
                `}
            >
                {link.name}
                {isActive && (
                    <motion.div 
                        layoutId="navActiveDot"
                        className="w-1 h-1 bg-primary rounded-full transition-all"
                    />
                )}
            </motion.span>
            <span className={`
                absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1] origin-left
                ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}
            `} />
        </Link>
    );
};

export default Navbar;
