import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Instagram, 
  Twitter, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Company',
            links: [
                { name: 'Services', path: '/services' },
                { name: 'How it Works', path: '/how-it-works' },
                { name: 'Pricing Plans', path: '/pricing' },
                { name: 'Book Appointment', path: '/booking' },
            ]
        },
        {
            title: 'Services',
            links: [
                { name: 'Exterior Wash', path: '/services' },
                { name: 'Full Deep Cleaning', path: '/services' },
                { name: 'Ceramic Coating', path: '/services' },
                { name: 'Bike Polish', path: '/services' },
            ]
        },
        {
            title: 'Quick Actions',
            links: [
                { name: 'Privacy Policy', path: '#' },
                { name: 'Terms of Service', path: '#' },
                { name: 'Support', path: 'mailto:support@vrumo.in' },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-secondary text-gray-400 pt-24 pb-12 border-t border-gray-800/50 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] -z-10 translate-x-1/4 translate-y-1/4"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
                        <Link to="/" className="flex items-center space-x-3 group w-max">
                            <motion.div 
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                className="bg-linear-to-br from-primary to-emerald-400 p-2.5 rounded-2xl shadow-lg shadow-primary/20 transition-transform"
                            >
                                <Droplets className="h-7 w-7 text-white" />
                            </motion.div>
                            <span className="font-extrabold text-3xl tracking-tight text-white uppercase italic">
                                Vru<span className="text-primary font-black">mo</span>
                            </span>
                        </Link>
                        
                        <p className="text-lg leading-relaxed text-gray-400 max-w-sm font-medium">
                            Vrumo : Premium Vehicle Care, Right at Your Doorstep. Professional detailing delivered to your location.
                        </p>

                        <div className="flex items-center gap-4">
                            {[
                                { icon: Instagram, href: '#' },
                                { icon: Twitter, href: '#' },
                                { icon: Facebook, href: '#' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -4, backgroundColor: 'var(--color-primary)', color: '#fff' }}
                                    className="w-11 h-11 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-400 border border-gray-700/50 transition-colors"
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Nav Sections */}
                    {footerSections.map((section, idx) => (
                        <motion.div variants={itemVariants} key={idx} className="lg:col-span-2">
                            <h3 className="text-white font-bold text-lg mb-8 tracking-wide flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/10"></span>
                                {section.title}
                            </h3>
                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link 
                                            to={link.path}
                                            className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 w-max"
                                        >
                                            <ArrowRight className="w-0 h-4 group-hover:w-4 opacity-0 group-hover:opacity-100 group-hover:mr-2 text-primary transition-all duration-300" />
                                            <span className="font-medium">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Contact Section */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-8 tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/10"></span>
                            Stay Connected
                        </h3>
                        <div className="space-y-6">
                            <a href="tel:+919876543210" className="group block">
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                                <p className="text-white group-hover:text-primary transition-colors font-semibold">+91 98765 43210</p>
                            </a>
                            <a href="mailto:support@vrumo.in" className="group block">
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email Us</p>
                                <p className="text-white group-hover:text-primary transition-colors font-semibold">support@vrumo.in</p>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pt-12 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center gap-6"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-sm font-medium">
                        <p>© {currentYear} Vrumo Services.</p>
                        <span className="hidden sm:block text-gray-600">•</span>
                        <p className="text-gray-500">All rights reserved.</p>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-gray-800/30 px-6 py-2 rounded-full border border-gray-700/30">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Operational In</span>
                        <div className="flex items-center gap-2 text-white text-sm font-bold italic">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            Lucknow, UP
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

