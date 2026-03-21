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

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
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
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none pt-4">
            <motion.nav
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                className={`
                    pointer-events-auto
                    relative flex items-center justify-between
                    w-full max-w-5xl px-5 py-3 sm:px-6 sm:py-3.5
                    transition-all duration-700 ease-[0.16,1,0.3,1]
                    bg-white md:rounded-full border border-blue-400 shadow-md md:shadow-xl mx-auto
                `}
            >
                {/* Left Logo */}
                <motion.div 
                    variants={itemVariants}
                    className="shrink-0 flex items-center"
                >
                    <Link to="/" className="relative group ml-4 lg:ml-6">
                        <div className="relative z-10 text-2xl font-extrabold tracking-[-0.02em] text-[#0A0A0A] flex items-center transition-transform duration-500 group-hover:scale-[1.02]">
                            VRUMO
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Right Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-neutral-500 mr-2 md:mr-4">
                    {links.map((link) => (
                        <motion.div key={link.name} variants={itemVariants}>
                            <NavLink link={link} isActive={location.pathname === link.path} />
                        </motion.div>
                    ))}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/booking"
                            className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] !text-white px-7 py-2.5 rounded-full font-bold text-[15px] tracking-wide relative overflow-hidden group hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] hover:from-[#1E40AF] hover:to-[#1D4ED8] transition-all duration-300 ml-2"
                        >
                            <span className="relative z-10 !text-white">Book Now</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <motion.div variants={itemVariants} className="md:hidden flex items-center mr-1">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-[#2C2C2C] hover:text-[#2563EB] transition-colors focus:outline-none relative"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isOpen ? 'close' : 'open'}
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div className="w-full max-w-[95%] mx-auto relative pointer-events-auto">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-2 left-0 right-0 p-5 bg-white rounded-2xl border border-blue-400 shadow-2xl md:hidden z-40"
                        >
                            <div className="flex flex-col items-center space-y-5 py-2 text-neutral-500">
                                {links.map((link) => (
                                    <motion.div key={link.name} variants={itemVariants}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-[17px] font-medium transition-all duration-300 ${
                                                location.pathname === link.path ? 'text-neutral-900 font-bold' : 'hover:text-neutral-800'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div variants={itemVariants} className="pt-4 w-full max-w-[200px]">
                                    <Link
                                        to="/booking"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8] !text-white py-3.5 rounded-xl font-bold text-[16px] active:scale-95 transition-all shadow-md"
                                    >
                                        <span className="!text-white">Book Now</span>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
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
                    relative z-10 text-[15.5px] font-semibold transition-colors duration-300 flex items-center gap-1.5
                    ${isActive ? 'text-neutral-900' : 'text-neutral-500 group-hover:text-neutral-900'}
                `}
            >
                {link.name}
            </motion.span>
        </Link>
    );
};

export default Navbar;
