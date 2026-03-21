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
        { name: 'Founders', path: '/founders' },
        { name: 'Contact', path: '/contact' },
    ];

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
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <motion.nav
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                className={`
                    pointer-events-auto
                    relative flex items-center justify-between
                    w-full max-w-full px-6 sm:px-12 lg:px-20
                    transition-all duration-700 ease-[0.16,1,0.3,1]
                    border-b
                    ${scrolled 
                        ? 'bg-white/95 backdrop-blur-xl border-[#E5E5E5] shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-3 sm:py-4' 
                        : 'bg-white/80 backdrop-blur-md border-transparent py-5 sm:py-6'
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
                        <div className="relative z-10 text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] text-[#0A0A0A] flex items-center transition-transform duration-500 group-hover:scale-[1.02]">
                            VRUMO
                        </div>
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
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/booking"
                            className="bg-[#2563EB] text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] tracking-[-0.01em] relative overflow-hidden group border-2 border-[#2563EB] hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all duration-300"
                        >
                            <span className="relative z-10">Book Now</span>
                            <span className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:left-[150%] transition-[left] duration-500" />
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <motion.div variants={itemVariants} className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2.5 text-[#2C2C2C] hover:text-[#2563EB] transition-colors focus:outline-none relative"
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
                            className="absolute top-full left-0 right-0 mt-0 p-5 bg-white/98 backdrop-blur-3xl border-b border-[#E5E5E5] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] md:hidden pointer-events-auto"
                        >
                            <div className="flex flex-col space-y-5 items-center py-6">
                                {[...leftLinks, ...rightLinks].map((link) => (
                                    <motion.div key={link.name} variants={itemVariants}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-[17px] font-medium tracking-[-0.01em] transition-all duration-300 ${
                                                location.pathname === link.path ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A] hover:text-[#2563EB]'
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
                                        className="block w-full text-center bg-[#2563EB] text-white py-4 rounded-lg font-semibold text-[15px] tracking-[-0.01em] border-2 border-[#2563EB] active:scale-[0.98]"
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
                    relative z-10 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-500 flex items-center gap-1.5
                    ${isActive ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A] group-hover:text-[#2563EB]'}
                `}
            >
                {link.name}
                {isActive && (
                    <motion.div 
                        layoutId="navActiveDot"
                        className="w-1 h-1 bg-[#2563EB] rounded-full transition-all"
                    />
                )}
            </motion.span>
            <span className={`
                absolute bottom-0 left-0 w-full h-[2px] bg-[#2563EB] transform scale-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1] origin-left
                ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}
            `} />
        </Link>
    );
};

export default Navbar;
