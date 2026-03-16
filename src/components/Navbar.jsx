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
        { name: 'How it Works', path: '/how-it-works' },
        { name: 'Contact', path: '/contact' },
    ];

    const navItemVariants = {
        hover: {
            y: -2,
            transition: { duration: 0.2, ease: "easeOut" }
        }
    };

    return (
        <header 
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 sm:pt-6"
        >
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`
                    pointer-events-auto
                    relative flex items-center justify-between
                    w-[95%] max-w-4xl px-4 sm:px-8
                    transition-all duration-500 ease-in-out
                    rounded-full border
                    ${scrolled 
                        ? 'bg-white/80 backdrop-blur-xl border-white/20 shadow-navbar py-2 sm:py-3' 
                        : 'bg-white/40 backdrop-blur-md border-white/40 shadow-glass py-4 sm:py-5'
                    }
                `}
            >
                {/* Desktop Left Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {leftLinks.map((link) => (
                        <NavLink key={link.name} link={link} isActive={location.pathname === link.path} />
                    ))}
                </div>

                {/* Center Logo */}
                <div className="flex-1 md:flex-none flex justify-center md:px-8">
                    <Link to="/" className="relative group">
                        <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl sm:text-3xl font-heading font-extrabold tracking-[-0.04em] text-secondary flex items-center"
                        >
                            VRUMO
                            <motion.span 
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-1.5 h-1.5 bg-primary rounded-full ml-1"
                            />
                        </motion.span>
                        <motion.div 
                            className="absolute -inset-x-2 -inset-y-1 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
                        />
                    </Link>
                </div>

                {/* Desktop Right Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {rightLinks.map((link) => (
                        <NavLink key={link.name} link={link} isActive={location.pathname === link.path} />
                    ))}
                    <Link
                        to="/booking"
                        className="bg-secondary text-white px-6 py-2.5 rounded-full font-body font-bold text-[14px] tracking-wide transition-all hover:bg-primary active:scale-95 shadow-lg shadow-secondary/10"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 p-4 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-premium md:hidden pointer-events-auto"
                        >
                            <div className="flex flex-col space-y-4 items-center py-4">
                                {[...leftLinks, ...rightLinks].map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`font-body text-xl font-medium tracking-tight transition-colors ${
                                            location.pathname === link.path ? 'text-primary' : 'text-secondary hover:text-primary'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-4 w-full">
                                    <Link
                                        to="/booking"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center bg-secondary text-white py-4 rounded-2xl font-body font-bold tracking-wide shadow-lg hover:bg-primary transition-all active:scale-95"
                                    >
                                        Book Now
                                    </Link>
                                </div>
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
            className="group relative"
        >
            <motion.span
                whileHover={{ y: -2 }}
                className={`
                    relative z-10 text-[14px] font-body font-medium tracking-wide transition-colors duration-300
                    ${isActive ? 'text-primary' : 'text-secondary/70 group-hover:text-secondary'}
                `}
            >
                {link.name}
                <span className={`
                    absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 rounded-full
                    ${isActive ? 'w-full !bg-primary' : 'group-hover:w-full'}
                `} />
            </motion.span>
        </Link>
    );
};

export default Navbar;
