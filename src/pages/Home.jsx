import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Droplets, 
    Shield, 
    ArrowRight, 
    Zap, 
    ShieldCheck, 
    Wrench,
    ArrowLeftRight,
    MapPin,
    Calendar,
    MousePointer2,
    BarChart3,
    Smartphone,
    CloudRain,
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const ServiceCardHero = ({ service, idx }) => (
    <motion.div 
        key={idx}
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="group relative flex flex-col rounded-2xl bg-white border border-[#EFEFEF] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden h-full"
    >
        {/* Gold gradient top line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C]" />
        <Link to={service.link} className="block h-full">
            <div className="relative h-32 overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-[10px] bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8] flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-[#C9A84C]" strokeWidth={1.8} />
                </div>
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold text-[#0A0A0A] group-hover:text-[#C9A84C] transition-colors">{service.title}</h3>
                <p className="text-[10px] text-[#888888] line-clamp-1">{service.description}</p>
            </div>
        </Link>
    </motion.div>
);

const Home = () => {
    const services = [
        { 
            title: "Vehicle Wash", 
            description: "Deep foam cleaning at your doorstep",
            image: "/images/v_wash.png",
            icon: Droplets,
            link: "/services/wash"
        },
        { 
            title: "Vehicle Maintenance", 
            description: "Expert service and repairs",
            image: "/images/v_maintenance.png",
            icon: Wrench,
            link: "/services/maintenance"
        },
        { 
            title: "Vehicle Insurance", 
            description: "Hassle-free coverage and claims",
            image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=2069",
            icon: ShieldCheck,
            link: "/services/insurance"
        },
        { 
            title: "Buy & Sell Vehicles", 
            description: "Best market value for your vehicle",
            image: "/images/buy_sell_user.jpg",
            icon: ArrowLeftRight,
            link: "/services/buy-sell"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#C9A84C] selection:text-white leading-relaxed">

            {/* --- 1. HERO SECTION --- */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden luxury-pattern">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                    >
                        {/* LEFT: 4 Service Cards */}
                        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                            {services.map((service, idx) => (
                                <ServiceCardHero key={idx} service={service} idx={idx} />
                            ))}
                        </div>

                        {/* RIGHT: Hero Text Content */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <motion.div variants={itemVariants}>
                                <div className="premium-badge mb-6">
                                    EST. 2024 · ELITE DETAILING
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="space-y-4">
                                <h1 className="text-[#0A0A0A]">
                                    All-in-One <br />
                                    <span className="gold-underline text-[#0A0A0A]">Vehicle Care</span> Ecosystem
                                </h1>
                                <p className="text-lg md:text-xl text-[#555555] max-w-lg font-normal">
                                    Quality doorstep services for your car and bike. Trusted professionals, affordable pricing, and fast results guaranteed.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                                <Link 
                                    to="/booking" 
                                    className="btn-premium"
                                >
                                    Book Service
                                </Link>
                                <Link 
                                    to="/services" 
                                    className="btn-outline"
                                >
                                    Explore Ecosystem
                                </Link>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-[#EFEFEF]">
                                <div className="flex -space-x-2">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8]" />
                                    ))}
                                </div>
                                <p className="text-sm text-[#888888]">Join <span className="text-[#0A0A0A] font-semibold">50,000+</span> owners</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 2. SERVICES OVERVIEW --- */}
            <section id="services" className="py-24 bg-[#F8F8F8] border-y border-[#EFEFEF]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="section-title">Our Portfolio</h2>
                        <p className="text-[#555555] max-w-2xl mx-auto">Everything your vehicle needs, all on one simple platform.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -6 }}
                                className="relative p-9 rounded-2xl bg-white border border-[#EFEFEF] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-all text-center group overflow-hidden"
                            >
                                {/* Gold gradient top line */}
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C]" />
                                <div className="w-14 h-14 bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8] rounded-[14px] flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:shadow-[0_4px_16px_rgba(201,168,76,0.15)] transition-all">
                                    <service.icon className="w-[26px] h-[26px] text-[#C9A84C]" strokeWidth={1.8} />
                                </div>
                                <h3 className="font-semibold mb-3 text-[#0A0A0A]">{service.title}</h3>
                                <p className="text-[#555555] text-[15px] leading-[1.7] mb-6">{service.description}</p>
                                <Link to={service.link} className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#C9A84C] hover:underline">
                                    Explore Service
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. WHY CHOOSE US --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="section-title">Why the Ecosystem?</h2>
                            <p className="text-lg text-[#555555]">We prioritize your convenience and vehicle health through tech and trust.</p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Affordable Pricing", desc: "No hidden costs. Get direct market rates for every service.", icon: Zap },
                                    { title: "Trusted Professionals", desc: "Our team consists of certified experts with years of experience.", icon: ShieldCheck },
                                    { title: "Fast Doorstep Service", desc: "No more workshop waits. We bring the care to your location.", icon: MapPin }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="mt-1 w-14 h-14 shrink-0 bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8] rounded-[14px] flex items-center justify-center">
                                            <item.icon className="w-[26px] h-[26px] text-[#C9A84C]" strokeWidth={1.8} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#0A0A0A]">{item.title}</h4>
                                            <p className="text-[#555555] text-[15px] leading-[1.7]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square bg-[#F8F8F8] rounded-2xl overflow-hidden border border-[#EFEFEF] group">
                            <img src="/images/hero_main.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2s]" alt="Vrumo Service" />
                            <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. HOW IT WORKS --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="mb-20 text-[#0A0A0A]">3 Steps to Core Care</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-0.5 bg-[#C9A84C]/20" />

                        {[
                            { step: "01", title: "Select Service", desc: "Choose care for your car or bike.", icon: MousePointer2 },
                            { step: "02", title: "Book Instantly", desc: "Pick a date and doorstep location.", icon: Calendar },
                            { step: "03", title: "Get Results", desc: "Relax while we care for your vehicle.", icon: MapPin }
                        ].map((item, i) => (
                            <div key={i} className="space-y-6 relative z-10 text-center">
                                <div className="w-20 h-20 bg-[#C9A84C] rounded-full flex items-center justify-center mx-auto text-[#0A0A0A] shadow-[0_8px_24px_rgba(201,168,76,0.35)]">
                                    <item.icon className="w-10 h-10" strokeWidth={1.8} />
                                </div>
                                <h4 className="font-semibold text-[#0A0A0A]">{item.title}</h4>
                                <p className="text-[#555555] text-[15px] leading-[1.7] max-w-[200px] mx-auto">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. DIFFERENTIATION SECTION --- */}
            <section className="py-24 overflow-hidden bg-[#F8F8F8] border-b border-[#EFEFEF]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="section-title">Ecosystem Benchmarks</h2>
                        <p className="text-[#555555] max-w-2xl mx-auto">We use tech and sustainable rituals to better your experience.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Low Pricing", desc: "Direct-to-owner service means you save up to 30% on every ritual.", icon: BarChart3 },
                            { title: "Tech Workflow", desc: "Detailed digital health reports and real-time status updates on your phone.", icon: Smartphone },
                            { title: "Hybrid Wash", desc: "Our advanced foam tech saves up to 80% water on every doorstep wash.", icon: CloudRain }
                        ].map((item, i) => (
                            <div key={i} className="relative p-9 rounded-2xl bg-white border border-[#EFEFEF] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all space-y-8 overflow-hidden group">
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C]" />
                                <div className="w-14 h-14 bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8] rounded-[14px] flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <item.icon className="w-[26px] h-[26px] text-[#C9A84C]" strokeWidth={1.8} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[#0A0A0A]">{item.title}</h3>
                                    <p className="text-[#555555] text-[15px] leading-[1.7]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 6. TESTIMONIALS --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="section-title">Ecosystem Reviews</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="relative p-9 rounded-2xl bg-white border border-[#EFEFEF] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] space-y-6 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C]" />
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(j => <Zap key={j} className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C]" />)}
                                </div>
                                <p className="text-[#555555] italic text-[15px] leading-[1.7]">"The doorstep service is incredible. Extremely pro and my vehicle looks and runs perfectly every time."</p>
                                <div className="flex items-center gap-4 pt-4 border-t border-[#EFEFEF]">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8]" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#0A0A0A]">Customer Name</h4>
                                        <p className="text-[10px] text-[#888888] font-medium uppercase tracking-[0.08em]">Premium Owner</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 7. FINAL CTA --- */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
                    <h2 className="text-[#0A0A0A]">Join the Ecosystem <br /> Today.</h2>
                    <p className="text-xl max-w-2xl mx-auto text-[#555555] font-normal leading-relaxed">Experience why thousands of owners trust Vrumo for their car and bike care rituals.</p>
                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <Link 
                            to="/booking" 
                            className="bg-[#C9A84C] text-[#0A0A0A] px-12 py-4 rounded-lg font-semibold text-[14px] uppercase tracking-[0.1em] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)] transition-all duration-300"
                        >
                            Book Your Service
                        </Link>
                        <Link 
                            to="/services" 
                            className="btn-outline"
                        >
                            Explore Ecosystem
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
