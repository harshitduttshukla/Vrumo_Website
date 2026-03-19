import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Droplets, 
    Shield, 
    ArrowRight, 
    Sparkles, 
    CheckCircle2, 
    Zap, 
    Leaf,
    Users,
    ArrowLeftRight,
    ShieldCheck,
    Wrench,
    Clock,
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1] 
        } 
    }
};

const buttonVariants = {
    hover: { 
        y: -4, 
        scale: 1.05,
        boxShadow: "0 20px 40px -10px rgba(0, 210, 255, 0.5)",
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    tap: { scale: 0.95 }
};

const ServiceCard = ({ service, idx }) => (
    <motion.div 
        key={idx}
        variants={itemVariants}
        whileHover={{ y: -10 }}
        className="group relative flex flex-col rounded-[2.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(0,210,255,0.15)] transition-all duration-500 overflow-hidden h-full"
    >
        {/* Animated Gradient Border Overlay */}
        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent bg-linear-to-br from-primary/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        {/* Inner Shadow Surface */}
        <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none" />

        {/* Image Section */}
        <div className="relative w-full aspect-16/10 overflow-hidden">
            <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />
            
            {/* Special Contextual Overlays */}
            {service.title === "Vehicle Insurance" && (
                <>
                    <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                        <ShieldCheck className="w-20 h-20 text-primary" />
                    </div>
                </>
            )}

            {/* Floating Icon */}
            <div className="absolute top-5 right-5">
                <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-glow"
                >
                    <service.icon className="w-5 h-5 text-primary" />
                </motion.div>
            </div>

            {/* Price/Badge */}
            <div className="absolute top-5 left-5">
                <span className="bg-primary/20 backdrop-blur-3xl text-primary px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] border border-primary/30 shadow-glow">
                    {service.badge}
                </span>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-5 grow flex flex-col justify-between">
            <div className="space-y-3">
                <h3 className="text-2xl font-heading font-black tracking-tight bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:to-white transition-all duration-700">
                    {service.title}
                </h3>
                <p className="text-slate-400 font-body text-xs font-medium tracking-wide leading-relaxed">
                    {service.description}
                </p>
            </div>

            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                <Link 
                    to="/booking" 
                    className="inline-flex items-center gap-3 bg-linear-to-r from-primary to-cyan-400 text-secondary px-6 py-3 rounded-full font-heading font-black uppercase tracking-[0.2em] text-[10px] shadow-glow group/btn"
                >
                    Explore Service 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                </Link>
            </motion.div>
        </div>

        {/* Light Reflection effect */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
    </motion.div>
);

const Home = () => {
    const services = [
        { 
            title: "Vehicle Wash", 
            description: "Advanced foam cleaning & detailing",
            badge: "From ₹999", 
            image: "/images/v_wash.png",
            icon: Droplets
        },
        { 
            title: "Vehicle Maintenance", 
            description: "Complete care & diagnostics",
            badge: "Expert Service", 
            image: "/images/v_maintenance.png",
            icon: Wrench
        },
        { 
            title: "Vehicle Insurance", 
            description: "Reliable coverage, zero hassle",
            badge: "Protected", 
            image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=2069",
            icon: ShieldCheck
        },
        { 
            title: "Buy & Sell Old Vehicles", 
            description: "Trusted deals for pre-owned vehicles",
            badge: "Verified Deals", 
            image: "/images/buy_sell_user.jpg",
            icon: ArrowLeftRight
        }
    ];

    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-secondary">

            {/* --- NEW SPLIT HERO SECTION --- */}
            <section className="relative px-6 py-20 lg:py-40">
                {/* Ambient Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                    >
                        {/* LEFT: Text Content */}
                        <div className="space-y-12">
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-3xl shadow-glow"
                            >
                                <Sparkles className="w-4 h-4 text-primary" />
                                Bespoke Detailing Protocol
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-8">
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-[-0.05em] leading-[0.85]">
                                    Elevating <br />
                                    <span className="text-gradient">Vehicle Core</span>
                                </h1>
                                <p className="text-slate-400 font-body text-xl md:text-2xl font-light leading-relaxed max-w-2xl tracking-wide">
                                    Experience the pinnacle of automotive grooming. Precise detailing, meticulously delivered to your sanctuary.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                                <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                                    <Link 
                                        to="/booking" 
                                        className="bg-primary text-secondary px-14 py-7 rounded-full font-heading font-black uppercase tracking-[0.3em] text-[11px] shadow-glow hover:shadow-[0_0_80px_rgba(0,210,255,0.4)] transition-all flex items-center gap-4 group"
                                    >
                                        Initiate Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ y: -5, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <a 
                                        href="#ritual" 
                                        className="px-14 py-7 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white font-heading font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white/10 transition-all"
                                    >
                                        The Protocol
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* RIGHT: Service Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, idx) => (
                                <ServiceCard key={idx} service={service} idx={idx} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- PREMIUM FEATURE SECTION --- */}
            <section id="ritual" className="py-48 relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center mb-40 space-y-10">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-mono text-primary font-bold uppercase tracking-[0.6em] text-[10px] bg-primary/10 px-10 py-4 rounded-full border border-primary/20 backdrop-blur-2xl shadow-glow"
                        >
                            The Excellence Manifesto
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tight leading-[0.88] max-w-6xl"
                        >
                            Orchestrating <span className="text-gradient">Automotive Perfection</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-slate-400 font-body font-light max-w-3xl text-xl md:text-2xl leading-loose"
                        >
                            A symphony of elite tools and master hands, dedicated to the absolute longevity of your investment.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            { 
                                title: "Sustainable Luxury", 
                                desc: "Precision care meets environmental responsibility. We use exclusively bio-organic, high-performance solutions for a guilt-free shine.", 
                                icon: Leaf,
                            },
                            { 
                                title: "Detailing Masters", 
                                desc: "Our technicians are rigorously trained in the art of vehicle restoration, treating every curve with surgical precision and passion.", 
                                icon: Zap,
                            },
                            { 
                                title: "Concierge Service", 
                                desc: "Luxury time is precious. Our concierge-style service brings world-class detailing directly to your sanctuary, on your schedule.", 
                                icon: Clock,
                            }
                        ].map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-700 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-700 mb-12 shadow-premium">
                                        <feature.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-500" />
                                    </div>
                                    
                                    <h3 className="text-3xl font-heading font-black text-white tracking-tight mb-6 group-hover:text-primary transition-colors duration-500">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="font-body font-light text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EVIDENCE SECTION --- */}
            <section className="py-40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-12">
                            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.5em] border border-primary/20 backdrop-blur-2xl shadow-glow">
                                <Sparkles className="w-5 h-5 text-primary" />
                                The Visual Proof
                            </div>
                            <h2 className="text-6xl md:text-8xl font-heading font-black text-white tracking-tight leading-[0.88]">The Luxury <br /><span className="text-gradient">Difference</span></h2>
                            <p className="text-slate-400 font-body font-light text-xl md:text-2xl leading-relaxed">Experience the visible transformation where precision engineering meets meticulous obsession.</p>
                            
                            <div className="space-y-10 pt-8">
                                {[
                                    { text: "Bio-Molecular Paint Restoration", icon: CheckCircle2 },
                                    { text: "Pure Nano-Ceramic Protection", icon: CheckCircle2 },
                                    { text: "Surgical Grade Precision Detailing", icon: CheckCircle2 }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-8 group">
                                        <div className="bg-primary/10 p-3 rounded-full border border-primary/20 group-hover:bg-primary/30 transition-all duration-500 shadow-glow">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="text-lg font-heading font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-500">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants} className="pt-12">
                                <Link to="/booking" className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-3xl text-white border border-white/10 px-16 py-8 rounded-[2.5rem] font-heading font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-secondary transition-all shadow-premium group text-lg">
                                    Initiate Now <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-500" />
                                </Link>
                            </motion.div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                { title: "Executive Sedan", after: "/images/sedan_after.png" },
                                { title: "Bespoke Superbike", after: "/images/bike_after.png" }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }} 
                                    whileInView={{ opacity: 1, scale: 1 }} 
                                    transition={{ delay: i * 0.2, duration: 1 }}
                                    className="space-y-8"
                                >
                                    <div className="group relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-premium border border-white/5">
                                        <div className="absolute inset-0 bg-slate-900">
                                            <img src={item.after} className="w-full h-full object-cover" alt="After" />
                                            <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-2xl text-white px-6 py-2 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] border border-white/10 shadow-glow">Vrumo Standard</div>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-heading font-black text-white tracking-tight text-center">{item.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL ACTION --- */}
            <section className="py-60 relative bg-background overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,210,255,0.1),transparent_70%)] pointer-events-none"></div>
                
                <div className="max-w-6xl mx-auto px-4 text-center space-y-24 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-12"
                    >
                        <h2 className="text-7xl md:text-[10rem] font-heading font-black text-white tracking-tighter leading-[0.88]">Your Move, <br /> <span className="text-gradient">Perfected.</span></h2>
                        <p className="text-xl md:text-2xl text-slate-400 font-body font-light max-w-3xl mx-auto leading-relaxed">Join an exclusive circle of owners who represent the very best in automotive care.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-12">
                            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                                <Link to="/booking" className="w-full sm:w-auto block bg-primary text-secondary px-16 py-8 rounded-full font-heading font-black text-[12px] uppercase tracking-[0.4em] shadow-glow hover:shadow-[0_0_80px_rgba(0,210,255,0.4)] transition-all">
                                    Book Now
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/services" className="w-full sm:w-auto block bg-white/5 backdrop-blur-3xl border border-white/10 text-white px-16 py-8 rounded-full font-heading font-black text-[12px] uppercase tracking-[0.4em] hover:bg-white/10 transition-all shadow-premium">
                                    The Catalog
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
