import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
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

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'How it Works', path: '/how-it-works' },
        { name: 'Pricing', path: '/pricing' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm py-2'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Left */}
                    <div className="flex-1 flex items-center justify-start">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="bg-gradient-to-br from-primary to-emerald-400 p-2 rounded-xl shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
                                <Droplets className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-wide text-secondary uppercase italic">
                                Vru<span className="text-primary">mo</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu - Center */}
                    <div className="hidden md:flex flex-1 items-center justify-center space-x-1 lg:space-x-2">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                                        isActive
                                            ? 'text-primary'
                                            : 'text-gray-600 hover:text-primary hover:bg-gray-50/50'
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Book Now - Right */}
                    <div className="hidden md:flex flex-1 items-center justify-end">
                        <Link
                            to="/booking"
                            className="bg-secondary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-secondary/20 hover:shadow-secondary/40 ring-2 ring-transparent hover:ring-gray-800/20"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Right */}
                    <div className="md:hidden flex items-center justify-end flex-1">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-2xl overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                                            isActive
                                                ? 'text-primary bg-primary/10'
                                                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 pb-2">
                                <Link
                                    to="/booking"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-secondary text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-secondary/20"
                                >
                                    Book Service
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
