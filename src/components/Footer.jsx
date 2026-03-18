import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Instagram,
    Twitter,
    Facebook,
    Youtube,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    Zap,
    ShieldCheck,
    Globe,
    ChevronRight,
    Clock,
    Sparkles
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'Solutions',
            links: [
                { name: 'Ceramic Coating', path: '/services' },
                { name: 'Full Deep Detailing', path: '/services' },
                { name: 'Interior Revival', path: '/services' },
                { name: 'Signature Wash', path: '/services' },
                { name: 'Bike Precision', path: '/services' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Vehicle Care Guide', path: '#' },
                { name: 'Service Registry', path: '#' },
                { name: 'Support Hub', path: '#' },
                { name: 'Safety Standards', path: '#' },
                { name: 'FAQ Centre', path: '/faq' },
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'Our Heritage', path: '/about' },
                { name: 'The Process', path: '/how-it-works' },
                { name: 'Sustainability', path: '#' },
                { name: 'Join the Pursuit', path: '#' },
                { name: 'Contact Concierge', path: '/contact' },
            ]
        }
    ];

    // Premium Motion Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const columnVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: { 
            scaleX: 1, 
            opacity: 1,
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
        visible: { 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <footer className="relative bg-background text-silver pt-32 pb-12 overflow-hidden border-t border-white/5">
            {/* Soft Ambient Background Elements */}
            <motion.div 
                animate={{ 
                    opacity: [0.05, 0.1, 0.05],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" 
            />
            <div className="absolute bottom-[-150px] right-[-100px] w-96 h-96 bg-royal/5 rounded-full blur-[120px] pointer-events-none opacity-20" />

            {/* Top Border Reveal */}
            <motion.div 
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent origin-center"
            />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-20 lg:gap-x-12 mb-28"
                >
                    {/* Brand Identity Block */}
                    <motion.div variants={columnVariants} className="lg:col-span-4 space-y-12">
                        <div className="space-y-8">
                            <Link to="/" className="inline-block group">
                                <motion.div variants={logoVariants} className="flex items-center gap-1">
                                    <span className="text-4xl font-heading font-bold tracking-[0.05em] text-primary underline decoration-primary/0 decoration-4 underline-offset-[12px] group-hover:decoration-primary/50 transition-all duration-700">
                                        VRUMO
                                        <motion.span 
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="text-primary"
                                        >.</motion.span>
                                    </span>
                                </motion.div>
                            </Link>
                            <motion.p 
                                variants={linkVariants}
                                className="text-[15px] font-body font-light leading-[1.8] text-slate-400 max-w-sm tracking-wide italic"
                            >
                                Precision vehicle care, meticulously delivered to your doorstep. We redefine detailing through scientific excellence and luxury convenience.
                            </motion.p>
                        </div>

                        {/* Social Interaction Grid */}
                        <div className="flex flex-wrap gap-3">
                            {[Instagram, Twitter, Facebook, Youtube].map((SocialIcon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    variants={linkVariants}
                                    whileHover={{ 
                                        y: -8, 
                                        scale: 1.1,
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                                        borderColor: 'rgba(0, 210, 255, 0.3)',
                                        boxShadow: "0 20px 40px -10px rgba(0, 210, 255, 0.2)"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-11 h-11 rounded-2xl border border-white/5 bg-white/1 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-500"
                                >
                                    <SocialIcon size={18} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Contact Rows with Micro-interactions */}
                        <div className="space-y-6 pt-4">
                            {[
                                { icon: MapPin, text: 'Lucknow, Uttar Pradesh', sub: 'Regional Distribution' },
                                { icon: Phone, text: '+91 63882 93612', sub: 'Priority Concierge' },
                                { icon: Mail, text: 'concierge@vrumo.in', sub: 'Est. Response 2H' }
                            ].map((contact, i) => (
                                <motion.div 
                                    key={i} 
                                    variants={linkVariants}
                                    className="flex items-center gap-5 group cursor-pointer"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-primary/70 group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                                        <contact.icon size={15} />
                                    </div>
                                    <div className="flex flex-col space-y-0.5">
                                        <span className="text-[14px] font-body font-bold text-white/90 group-hover:text-white transition-colors tracking-wide">{contact.text}</span>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-black">{contact.sub}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Matrix */}
                    <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-8">
                        {sections.map((section, idx) => (
                            <motion.div variants={columnVariants} key={idx} className="space-y-10">
                                <h4 className="text-[11px] font-heading font-black text-white uppercase tracking-[0.3em] flex items-center gap-3">
                                    <motion.div 
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-1.5 h-1.5 rounded-full bg-primary" 
                                    />
                                    {section.title}
                                </h4>
                                <ul className="space-y-5">
                                    {section.links.map((link, lIdx) => (
                                        <motion.li key={lIdx} variants={linkVariants}>
                                            <Link
                                                to={link.path}
                                                className="group text-[14px] font-body text-slate-500 hover:text-white flex items-center gap-2 transition-all duration-300"
                                            >
                                                <ChevronRight size={12} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                                                <span className="relative overflow-hidden inline-block">
                                                    {link.name}
                                                    <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Exclusive Membership Card */}
                    <motion.div variants={columnVariants} className="lg:col-span-3">
                        <motion.div 
                            whileHover={{ 
                                y: -10, 
                                boxShadow: "0 40px 100px -20px rgba(0,0,0,0.8)",
                                borderColor: "rgba(0, 210, 255, 0.3)"
                            }}
                            className="p-8 rounded-[2rem] bg-white/1 border border-white/5 relative overflow-hidden group transition-all duration-700 backdrop-blur-md"
                        >
                            {/* Animated Ambient Shimmer */}
                            <motion.div 
                                animate={{ 
                                    left: ["-100%", "200%"],
                                }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                                className="absolute top-0 h-full w-1/2 bg-linear-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-20deg]"
                            />

                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700">
                                <Sparkles size={48} className="text-primary" />
                            </div>
                            
                            <h4 className="text-[15px] font-heading font-black text-white mb-4 flex items-center gap-3">
                                <Zap size={16} className="text-primary fill-primary/20" />
                                Private Circle
                            </h4>
                            <p className="text-[13px] font-body text-slate-500 mb-8 leading-relaxed tracking-wide">
                                Join the elite tier for priority booking slots and automotive insights in Lucknow.
                            </p>
                            
                            <div className="space-y-3">
                                <div className="relative group/input">
                                    <input 
                                        type="email" 
                                        placeholder="your@email.com" 
                                        className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm font-body text-white placeholder:text-slate-800 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-500 backdrop-blur-sm"
                                    />
                                    <motion.button 
                                        whileHover={{ scale: 1.1, x: 2, boxShadow: "0 0 20px rgba(0, 210, 255, 0.4)" }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute right-2 top-2 bottom-2 aspect-square bg-primary text-secondary rounded-xl flex items-center justify-center hover:bg-white transition-all duration-500 shadow-lg shadow-primary/20 group/btn"
                                    >
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </div>

                            <div className="mt-10 flex items-center gap-3">
                                <div className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </div>
                                <span className="text-[10px] font-heading font-black text-slate-700 uppercase tracking-[0.25em]">
                                    Lucknow Live Ops
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Bottom Signature Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                                <ShieldCheck size={18} className="text-primary/60" />
                            </div>
                            <span className="text-[11px] font-heading font-black text-slate-700 uppercase tracking-[0.3em] italic">
                                Secure Protocol
                            </span>
                        </div>
                        <p className="text-[12px] font-body text-slate-800 font-black uppercase tracking-[0.2em]">
                            © {currentYear} VRUMO PRECISION. CRAFTED FOR THE DISCERNING.
                        </p>
                    </div>

                    <div className="flex items-center gap-12 text-[11px] font-body text-slate-800 font-black uppercase tracking-[0.2em]">
                        {['Privacy', 'Engagement', 'Security'].map((item) => (
                            <Link key={item} to="#" className="hover:text-white transition-all duration-500 relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Subtle Gradient Shadow At Very Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />
        </footer>
    );
};

export default Footer;
