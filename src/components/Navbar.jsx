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
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'How it Works', path: '/how-it-works' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2'
                    : 'bg-white py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Left */}
                    <div className="flex-1 flex items-center justify-start">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20 transition-transform"
                            >
                                <Droplets className="h-6 w-6 text-white" />
                            </motion.div>
                            <span className="font-black text-2xl tracking-tighter text-secondary uppercase italic">
                                Vru<span className="text-primary tracking-normal">mo</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu - Center */}
                    <div className="hidden md:flex flex-2 items-center justify-center space-x-2">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-full font-bold text-[15px] tracking-tight transition-all duration-200 ${
                                        isActive
                                            ? 'text-primary'
                                            : 'text-secondary hover:text-primary hover:bg-gray-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Book Now - Right */}
                    <div className="hidden md:flex flex-1 items-center justify-end">
                        <Link
                            to="/booking"
                            className="bg-secondary text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-xl shadow-secondary/10 active:scale-95"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Right */}
                    <div className="md:hidden flex items-center justify-end flex-1">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 rounded-xl text-secondary hover:bg-gray-100 transition-colors focus:outline-none"
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
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 pt-4 pb-8 space-y-2">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-5 py-4 rounded-xl text-lg font-black tracking-tight ${
                                            isActive
                                                ? 'text-primary bg-primary/5 italic'
                                                : 'text-secondary hover:bg-gray-50'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-6">
                                <Link
                                    to="/booking"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-secondary text-white px-8 py-4.5 rounded-xl font-black uppercase tracking-widest shadow-xl"
                                >
                                    Book Now
                                </Link>
                            </div>
                            <div className="pt-8 border-t border-gray-100 flex flex-col items-center text-center">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">The Vrumo Promise</p>
                                <p className="text-xs font-bold text-secondary uppercase tracking-tighter">Premium Vehicle Care, Right at Your Doorstep.</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
