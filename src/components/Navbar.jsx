import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'How it Works', path: '/how-it-works' },
        { name: 'Pricing', path: '/pricing' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo - Left */}
                    <div className="flex-1 flex items-center justify-start">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
                                <Droplets className="h-6 w-6 text-black" />
                            </div>
                            <span className="font-bold text-2xl tracking-wide text-secondary">
                                drive<span className="text-primary">Glow</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu - Center */}
                    <div className="hidden md:flex flex-1 items-center justify-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Book Now - Right */}
                    <div className="hidden md:flex flex-1 items-center justify-end">
                        <Link
                            to="/booking"
                            className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Right (only active on mobile) */}
                    <div className="md:hidden flex items-center justify-end flex-1">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-secondary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-primary bg-primary/5'
                                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/booking"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-6 bg-primary text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/20"
                        >
                            Book Service
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
