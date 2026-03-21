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
    Sparkles
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'ECOSYSTEM',
            links: [
                { name: 'Vehicle Wash', path: '/services/wash' },
                { name: 'Maintenance', path: '/services/maintenance' },
                { name: 'Insurance', path: '/services/insurance' },
                { name: 'Buy & Sell', path: '/services/buy-sell' },
            ]
        },
        {
            title: 'RESOURCES',
            links: [
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'Pricing Plans', path: '/pricing' },
                { name: 'Support Hub', path: '/contact' },
                { name: 'FAQ Centre', path: '/contact' },
            ]
        },
        {
            title: 'COMPANY',
            links: [
                { name: 'About Vrumo', path: '/about' },
                { name: 'Meet Founders', path: '/founders' },
                { name: 'Sustainability', path: '/about' },
                { name: 'Careers', path: '#' },
            ]
        }
    ];

    return (
        <footer className="bg-white text-[#555555] pt-32 pb-12 overflow-hidden border-t border-[#EFEFEF] relative">
            {/* Background subtle gold glow */}
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#2563EB]/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-20 lg:gap-x-20 mb-28">
                    {/* Brand Identity */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-8">
                            <Link to="/" className="inline-block">
                                <span className="text-4xl font-bold tracking-[-0.02em] text-[#0A0A0A]">
                                    VRUMO<span className="text-[#2563EB]">.</span>
                                </span>
                            </Link>
                            <p className="text-lg font-medium leading-relaxed max-w-sm italic text-[#555555]">
                                "Building the world's most trusted and simple vehicle care ecosystem where quality is standard, and convenience is guaranteed."
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/vrumo.in/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#F8F8F8] border border-[#EFEFEF] flex items-center justify-center hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-300 text-silver">
                                <Instagram size={20} />
                            </a>
                            {[Twitter, Facebook, Youtube].map((Social, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-[#F8F8F8] border border-[#EFEFEF] flex items-center justify-center hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-300 text-[#888888]">
                                    <Social size={20} />
                                </a>
                            ))}
                        </div>

                        <div className="space-y-6 pt-4">
                            {[
                                { icon: MapPin, text: 'Bengaluru, Karnataka', sub: 'Regional Distribution' },
                                { icon: Phone, text: '+91 98765 43210', sub: 'Expert Support' },
                                { icon: Mail, text: 'support@vrumo.com', sub: 'Typical Response: 2H' }
                            ].map((contact, i) => (
                                <div key={i} className="flex items-center gap-5 group">
                                    <div className="w-10 h-10 rounded-xl bg-[#F8F8F8] border border-[#EFEFEF] flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                                        <contact.icon size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-[#0A0A0A] tracking-tight">{contact.text}</span>
                                        <span className="text-[10px] uppercase font-black tracking-widest text-[#888888]">{contact.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-12">
                        {sections.map((section, idx) => (
                            <div key={idx} className="space-y-10">
                                <h4 className="text-[10px] font-black text-[#0A0A0A] uppercase tracking-[0.4em] flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                                    {section.title}
                                </h4>
                                <ul className="space-y-5">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link to={link.path} className="text-sm font-bold text-[#555555] hover:text-[#2563EB] flex items-center gap-2 transition-all group">
                                                <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2563EB]" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-[#EFEFEF] flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={20} className="text-[#2563EB]" />
                            <span className="text-[10px] font-black text-[#888888] uppercase tracking-[0.4em]">Secure Protocol</span>
                        </div>
                        <p className="text-[11px] font-black text-[#888888] uppercase tracking-[0.3em]">
                            © {currentYear} VRUMO ECOSYSTEM. ALL RIGHTS RESERVED.
                        </p>
                    </div>

                    <div className="flex items-center gap-10 text-[10px] font-black text-[#888888] uppercase tracking-[0.3em]">
                        {['Privacy', 'T&C', 'Status'].map((item) => (
                            <Link key={item} to="#" className="hover:text-[#2563EB] transition-all">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
