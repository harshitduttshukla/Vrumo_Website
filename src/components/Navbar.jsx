import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCurrentUser } from '../api';

// Import logo
import vrumoLogo from '../assets/images/vrumo_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userData = await fetchCurrentUser();
                    setUser(userData);
                } catch (err) {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        };
        loadUser();
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    };

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
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
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none pt-4 px-4 sm:px-6">
            <motion.nav
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                className={`
                    pointer-events-auto
                    relative flex items-center justify-between
                    w-full max-w-5xl px-5 py-3.5 sm:px-6 sm:py-3.5
                    transition-all duration-700 ease-[0.16,1,0.3,1]
                    bg-white/95 backdrop-blur-md rounded-full border border-blue-400/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:shadow-xl mx-auto
                `}
            >
                {/* Left Logo */}
                <motion.div 
                    variants={itemVariants}
                    className="shrink-0 flex items-center"
                >
                    <Link to="/" className="relative group ml-4 lg:ml-6 flex items-center gap-3">
                        <img src={vrumoLogo} alt="VRUMO" className="h-8 w-auto transition-transform duration-500 group-hover:scale-105" />
                        <span className="relative z-10 text-2xl font-extrabold tracking-[-0.02em] text-[#0A0A0A] hidden sm:block">
                            VRUMO
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Right Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-neutral-500 mr-2 md:mr-4">
                    {links.map((link) => (
                        <motion.div key={link.name} variants={itemVariants}>
                            <NavLink link={link} isActive={location.pathname === link.path} />
                        </motion.div>
                    ))}
                    {user ? (
                        <div className="flex items-center gap-4">
                            <motion.div 
                                variants={itemVariants}
                                className="flex items-center gap-2 text-[#2563EB] font-bold px-4 py-2 rounded-full bg-[#2563EB]/5 border border-[#2563EB]/10"
                            >
                                <User size={18} />
                                <span className="max-w-[120px] truncate">{user.name.split(' ')[0]}</span>
                            </motion.div>
                            <motion.button
                                variants={itemVariants}
                                onClick={handleLogout}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                title="Logout"
                            >
                                <LogOut size={18} />
                            </motion.button>
                        </div>
                    ) : (
                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/login"
                                className="flex items-center gap-2 text-neutral-600 hover:text-[#2563EB] font-bold transition-all px-4 py-2 rounded-full border border-transparent hover:border-[#2563EB]/20 hover:bg-[#2563EB]/5"
                            >
                                <User size={18} />
                                <span>Login / Signup</span>
                            </Link>
                        </motion.div>
                    )}
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/booking"
                            className="bg-linear-to-r from-royal to-primary text-white! px-7 py-2.5 rounded-full font-bold text-[15px] tracking-wide relative overflow-hidden group hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] hover:from-[#1E40AF] hover:to-royal transition-all duration-300 ml-2"
                        >
                            <span className="relative z-10 text-white!">Book Now</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <motion.div variants={itemVariants} className="md:hidden flex items-center mr-1">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-charcoal hover:text-[#2563EB] transition-colors focus:outline-none relative"
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
                                <motion.div variants={itemVariants} className="pt-4 w-full max-w-[200px] flex flex-col gap-3">
                                    {user ? (
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-50 text-blue-600 font-bold border border-blue-100">
                                                <User size={18} />
                                                <span>{user.name}</span>
                                            </div>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center justify-center gap-2 w-full text-center border border-red-200 text-red-500 py-3 rounded-xl font-bold text-[16px] active:scale-95 transition-all"
                                            >
                                                <LogOut size={18} />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    ) : (
                                        <Link
                                            to="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-2 w-full text-center border border-[#2563EB] text-[#2563EB] py-3 rounded-xl font-bold text-[16px] active:scale-95 transition-all shadow-sm"
                                        >
                                            <User size={18} />
                                            <span>Login / Signup</span>
                                        </Link>
                                    )}
                                     <Link
                                         to="/booking"
                                         onClick={() => setIsOpen(false)}
                                         className="block w-full text-center bg-linear-to-r from-royal to-primary hover:from-[#1E40AF] hover:to-royal text-white! py-3.5 rounded-xl font-bold text-[16px] active:scale-95 transition-all shadow-md"
                                     >
                                         <span className="text-white!">Book Now</span>
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
