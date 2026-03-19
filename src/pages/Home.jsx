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
        whileHover={{ y: -5 }}
        className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden h-full"
    >
        <Link to={service.link} className="block h-full">
            <div className="relative h-32 overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <service.icon className="w-4 h-4 text-primary" />
                </div>
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-[10px] text-gray-400 line-clamp-1">{service.description}</p>
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
        <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-secondary font-sans leading-relaxed">

            {/* --- 1. HERO SECTION --- */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
                </div>

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
                            <motion.div variants={itemVariants} className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                                    All-in-One <br />
                                    <span className="text-primary italic">Vehicle Care</span> Ecosystem
                                </h1>
                                <p className="text-lg md:text-xl text-gray-400 max-w-lg font-medium">
                                    Quality doorstep services for your car and bike. Trusted professionals, affordable pricing, and fast results guaranteed.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                                <Link 
                                    to="/booking" 
                                    className="bg-primary text-secondary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                                >
                                    Book Service
                                </Link>
                                <Link 
                                    to="/services" 
                                    className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
                                >
                                    Explore Ecosystem
                                </Link>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-white/5">
                                <div className="flex -space-x-2">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">Join <span className="text-white font-bold">50,000+</span> owners</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 2. SERVICES OVERVIEW --- */}
            <section id="services" className="py-24 bg-white/2 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic">Our Portfolio</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything your vehicle needs, all on one simple platform.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/30 transition-all text-center group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                    <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">{service.description}</p>
                                <Link to={service.link} className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
                                    Explore Service
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. WHY CHOOSE US --- */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight italic">Why the Ecosystem?</h2>
                            <p className="text-lg text-gray-400">We prioritize your convenience and vehicle health through tech and trust.</p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Affordable Pricing", desc: "No hidden costs. Get direct market rates for every service.", icon: Zap },
                                    { title: "Trusted Professionals", desc: "Our team consists of certified experts with years of experience.", icon: ShieldCheck },
                                    { title: "Fast Doorstep Service", desc: "No more workshop waits. We bring the care to your location.", icon: MapPin }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="mt-1 w-12 h-12 shrink-0 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1 italic">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 group">
                            <img src="/images/hero_main.png" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[2s]" alt="Vrumo Service" />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. HOW IT WORKS --- */}
            <section className="py-24 bg-primary text-secondary overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-20 text-secondary">3 Steps to Core Care</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-0.5 bg-secondary/20" />

                        {[
                            { step: "01", title: "Select Service", desc: "Choose care for your car or bike.", icon: MousePointer2 },
                            { step: "02", title: "Book Instantly", desc: "Pick a date and doorstep location.", icon: Calendar },
                            { step: "03", title: "Get Results", desc: "Relax while we care for your vehicle.", icon: MapPin }
                        ].map((item, i) => (
                            <div key={i} className="space-y-6 relative z-10 text-center">
                                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto text-primary font-black text-2xl shadow-xl">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h4 className="text-xl font-bold">{item.title}</h4>
                                <p className="text-secondary/80 text-sm max-w-[200px] mx-auto">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. DIFFERENTIATION SECTION --- */}
            <section className="py-24 overflow-hidden border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight italic">Ecosystem Benchmarks</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We use tech and sustainable rituals to better your experience.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-10 rounded-3xl bg-white/2 border border-white/10 hover:border-primary/40 transition-all space-y-8">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <BarChart3 className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold italic">Low Pricing</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Direct-to-owner service means you save up to 30% on every ritual.</p>
                            </div>
                        </div>

                        <div className="p-10 rounded-3xl bg-white/2 border border-white/10 hover:border-primary/40 transition-all space-y-8">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <Smartphone className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold italic">Tech Workflow</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Detailed digital health reports and real-time status updates on your phone.</p>
                            </div>
                        </div>

                        <div className="p-10 rounded-3xl bg-white/2 border border-white/10 hover:border-primary/40 transition-all space-y-8">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <CloudRain className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold italic">Hybrid Wash</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Our advanced foam tech saves up to 80% water on every doorstep wash.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. TESTIMONIALS --- */}
            <section className="py-24 bg-white/2">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight italic">Ecosystem Reviews</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 space-y-6">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(j => <Zap key={j} className="w-4 h-4 text-primary fill-primary" />)}
                                </div>
                                <p className="text-gray-300 italic">"The doorstep service is incredible. Extremely pro and my vehicle looks and runs perfectly every time."</p>
                                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-gray-800" />
                                    <div>
                                        <h4 className="text-sm font-bold text-white italic">Customer Name</h4>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Premium Owner</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 7. FINAL CTA --- */}
            <section className="py-32 relative overflow-hidden bg-primary">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10 text-secondary">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight italic leading-tight">Join the Ecosystem <br /> Today.</h2>
                    <p className="text-xl max-w-2xl mx-auto opacity-90 font-medium leading-relaxed">Experience why thousands of owners trust Vrumo for their car and bike care rituals.</p>
                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <Link 
                            to="/booking" 
                            className="bg-secondary text-primary px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform"
                        >
                            Book Your Service
                        </Link>
                        <Link 
                            to="/services" 
                            className="bg-transparent border-2 border-secondary/20 text-secondary px-12 py-6 rounded-2xl font-black text-lg hover:bg-secondary/10 transition-colors"
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
