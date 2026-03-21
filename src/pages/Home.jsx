import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
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
        className="group relative flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden h-full"
    >
        <Link to={service.link} className="block h-full p-4">
            <div className="relative h-44 overflow-hidden rounded-xl mb-4">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
            </div>
            <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors">{service.title}</h3>
                <p className="text-[11px] text-[#555555] line-clamp-2 leading-relaxed">{service.description}</p>
            </div>
        </Link>
    </motion.div>
);

const Home = () => {
    const services = [
        { 
            title: "Vehicle Wash", 
            description: "Deep foam cleaning at your doorstep",
            image: "/images/v_wash_doorstep.png",
            link: "/services/wash"
        },
        { 
            title: "Vehicle Maintenance", 
            description: "Expert service and repairs",
            image: "/images/v_maintenance_doorstep.png",
            link: "/services/maintenance"
        },
        { 
            title: "Vehicle Insurance", 
            description: "Hassle-free coverage and claims",
            image: "/images/v_insurance_doorstep.png",
            link: "/services/insurance"
        },
        { 
            title: "Buy & Sell Vehicles", 
            description: "Best market value for your vehicle",
            image: "/images/buy_sell_doorstep_v2.png",
            link: "/services/buy-sell"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#2563EB] selection:text-white leading-relaxed">

            {/* --- 1. HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 overflow-hidden bg-blue-100/50">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2563EB]/5 rounded-l-[200px] blur-3xl -z-10" />
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
                        <div className="order-1 lg:order-2 space-y-8 relative z-10">
                            <div className="space-y-10 lg:pr-12">
                            <div className="space-y-6">
                                <motion.div 
                                    variants={itemVariants}
                                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20"
                                >
                                    <span className="text-[10px] font-bold text-[#2563EB] tracking-widest uppercase">Est. 2024 · Elite Detailing</span>
                                </motion.div>
                                <motion.h1 
                                    variants={itemVariants}
                                    className="text-6xl md:text-8xl font-bold tracking-[0.03em] text-[#0A0A0A]"
                                >
                                    All-in-One <br />
                                    <span className="text-[#2563EB] relative">
                                        Vehicle Care
                                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#2563EB]/30 rounded-full" />
                                    </span> <br />
                                    Ecosystem
                                </motion.h1>
                                <motion.p 
                                    variants={itemVariants}
                                    className="text-lg text-[#555555] max-w-xl leading-relaxed"
                                >
                                    Quality doorstep services for your car and bike. Trusted professionals, affordable pricing, and fast results guaranteed.
                                </motion.p>
                            </div>
                            </div>

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
                                className="group relative rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                            >
                                <Link to={service.link} className="block p-4 space-y-4">
                                    <div className="relative h-44 overflow-hidden rounded-xl">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-500" 
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                                    </div>
                                    <div className="text-center space-y-3">
                                        <h3 className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors">{service.title}</h3>
                                        <p className="text-[#555555] text-sm line-clamp-2">{service.description}</p>
                                        <div className="pt-2 text-[#2563EB] font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2">
                                            Details <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
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
                            
                            <div className="space-y-8">
                                {[
                                    { title: "Affordable Pricing", desc: "No hidden costs. Get direct market rates for every service." },
                                    { title: "Trusted Professionals", desc: "Our team consists of certified experts with years of experience." },
                                    { title: "Fast Doorstep Service", desc: "No more workshop waits. We bring the care to your location." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-1.5 h-12 bg-[#2563EB] rounded-full shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold mb-1 text-lg text-[#0A0A0A]">{item.title}</h4>
                                            <p className="text-[#555555] text-[15px] leading-[1.7]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square bg-[#F8F8F8] rounded-2xl overflow-hidden border border-[#EFEFEF] group">
                            <img 
                                src="/images/ecosystem_doorstep_clean.png" 
                                loading="lazy" 
                                className="w-full h-full object-cover rounded-xl" 
                                alt="Vrumo Doorstep Service" 
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. HOW IT WORKS --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 text-[#0A0A0A]"
                    >
                        3 Steps to Core Care
                    </motion.h2>
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.3 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
                    >
                        {/* Connecting Line (Desktop) */}
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                            style={{ originX: 0 }}
                            className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-0.5 bg-linear-to-r from-[#2563EB]/0 via-[#2563EB]/40 to-[#2563EB]/0" 
                        />

                        {[
                            { step: "01", title: "Select Service", desc: "Choose care for your car or bike.", img: "/images/step_select.png" },
                            { step: "02", title: "Book Instantly", desc: "Pick a date and doorstep location.", img: "/images/step_book.png" },
                            { step: "03", title: "Get Results", desc: "Relax while we care for your vehicle.", img: "/images/step_results.png" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className="space-y-6 relative z-10 text-center group"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    {/* Rotating Border Layer (Thin & Anticlockwise) */}
                                    <div className="absolute inset-[-2px] rounded-2xl overflow-hidden group-hover:inset-[-4px] transition-all duration-300">
                                        <motion.div 
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#2563EB_100%)] opacity-60"
                                        />
                                    </div>

                                    <motion.div 
                                        whileHover={{ scale: 1.05 }}
                                        className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white relative z-10 bg-white"
                                    >
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-[#2563EB]/10 group-hover:bg-transparent transition-all" />
                                    </motion.div>
                                </div>
                                <div className="space-y-2">
                                    <motion.span 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 0.3, x: 0 }}
                                        transition={{ delay: 0.8 + (i * 0.2) }}
                                        className="text-[#2563EB] font-black text-xl italic"
                                    >
                                        {item.step}
                                    </motion.span>
                                    <h4 className="font-bold text-[#0A0A0A] text-lg">{item.title}</h4>
                                    <p className="text-[#555555] text-[15px] leading-[1.7] max-w-[200px] mx-auto">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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
                            { title: "Low Pricing", desc: "Direct-to-owner service means you save up to 30% on every ritual.", img: "/images/low_pricing.png" },
                            { title: "Tech Workflow", desc: "Detailed digital health reports and real-time status updates on your phone.", img: "/images/tech_workflow.png" },
                            { title: "Hybrid Wash", desc: "Our advanced foam tech saves up to 80% water on every doorstep wash.", img: "/images/hybrid_wash.png" }
                        ].map((item, i) => (
                            <div key={i} className="group relative rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden h-full">
                                <div className="p-4 space-y-6">
                                    <div className="relative h-44 overflow-hidden rounded-xl">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-500" 
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                                    </div>
                                    <div className="space-y-4 px-2 pb-2">
                                        <h3 className="text-xl font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors">{item.title}</h3>
                                        <p className="text-[#555555] text-[15px] leading-relaxed">{item.desc}</p>
                                    </div>
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
                        {[
                            {
                                name: "Rahul Sharma",
                                role: "Premium Sedan Owner",
                                quote: "The doorstep foam wash is a game-changer. My car looks showroom-fresh without me ever leaving my living room. Extremely professional team!",
                                img: "/images/customer_rahul.png"
                            },
                            {
                                name: "Priya Patel",
                                role: "Daily Commuter",
                                quote: "Vrumo's maintenance service is so transparent. The health report they sent to my phone was detailed and easy to understand. Highly recommended!",
                                img: "/images/customer_priya.png"
                            },
                            {
                                name: "Arjun Singh",
                                role: "SUV Enthusiast",
                                quote: "Selling my old car through the Vrumo ecosystem was stress-free. I got a much better price than local dealers and the paperwork was instant.",
                                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative p-9 rounded-xl bg-white border border-gray-100 shadow-sm space-y-6 hover:shadow-xl hover:scale-[1.02] transition-all overflow-hidden group">
                                <div className="flex gap-1">
                                    <span className="text-[#2563EB] text-xl font-bold italic">Excellent Service</span>
                                </div>
                                <p className="text-[#555555] italic text-[15px] leading-[1.7]">"{item.quote}"</p>
                                <div className="flex items-center gap-4 pt-4 border-t border-[#EFEFEF]">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-50">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#0A0A0A]">{item.name}</h4>
                                        <p className="text-[10px] text-[#888888] font-medium uppercase tracking-[0.08em]">{item.role}</p>
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
                            className="bg-[#2563EB] text-white px-12 py-4 rounded-lg font-semibold text-[14px] uppercase tracking-[0.1em] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all duration-300"
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
