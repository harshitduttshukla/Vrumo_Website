import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Car, 
    Droplets, 
    Shield, 
    Clock, 
    Star, 
    ArrowRight, 
    Sparkles, 
    CheckCircle2, 
    Zap, 
    Leaf,
    Users,
    ChevronRight,
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
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
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(0, 210, 255, 0.3)",
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    tap: { scale: 0.98 }
};

const VisualCard = ({ title, subtext, image }) => (
    <motion.div 
        variants={itemVariants}
        whileHover={{ y: -10 }}
        className="relative rounded-[3rem] overflow-hidden group aspect-[4/5] shadow-premium transition-all duration-1000 border border-white/5 hover:border-primary/20"
    >
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-80 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-linear-to-t from-[#030612] via-[#030612]/20 to-transparent"></div>
        <div className="absolute bottom-10 left-10 right-10 space-y-4">
            <h4 className="text-primary font-body font-bold text-[10px] uppercase tracking-[0.4em] mb-2">{subtext}</h4>
            <h3 className="text-3xl lg:text-4xl font-heading font-bold leading-[0.9] tracking-tighter text-white">
                {title}
            </h3>
        </div>
    </motion.div>
);

const Home = () => {
    return (
        <div className="bg-background min-h-screen overflow-x-hidden text-white selection:bg-primary selection:text-secondary">
            {/* Cinematic Noise & Background */}
            <div className="fixed inset-0 bg-noise pointer-events-none z-50" />
            
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-royal/10 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[110px]" />
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-32 space-y-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl text-primary text-[10px] font-black uppercase tracking-[0.5em] shadow-glow"
                        >
                            <Sparkles className="w-4 h-4 text-primary shrink-0" />
                            <span>The New Standard in Concierge Detailing</span>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-7xl sm:text-9xl md:text-[11rem] font-heading font-bold text-white tracking-tighter leading-[0.85]"
                        >
                            Elevating <br />
                            <span className="text-gradient">Vehicle Core</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-slate-400 font-body font-light max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed tracking-wide"
                        >
                            Experience the pinnacle of automotive grooming. Precise detailing, meticulously delivered to your sanctuary.
                        </motion.p>
                    </div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-12 gap-8 lg:gap-12"
                    >
                        {/* LEFT: Service Grid */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {[
                                { title: "Elite Wash & Decon", badge: "From ₹999", image: "/images/car_foam_wash.png" },
                                { title: "Bespoke Protection", badge: "Titanium Grade", image: "/images/ceramic_coating.png" },
                                { title: "Interior Rejuvenation", badge: "Concierge Clean", image: "/images/car_interior.png" },
                                { title: "Superbike Detailing", badge: "Precision Care", image: "/images/bike_polishing.png" }
                            ].map((service, idx) => (
                                <motion.div 
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -15 }}
                                    className="bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] p-6 border border-white/5 flex flex-col items-center text-center space-y-6 group cursor-pointer transition-all duration-700 hover:border-primary/40 hover:bg-white/[0.05] shadow-premium"
                                >
                                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-900 shadow-inner">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-black/80 backdrop-blur-2xl text-primary px-4 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-glow">
                                                {service.badge}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-4 pb-4">
                                        <h3 className="text-2xl font-heading font-bold text-white tracking-tighter leading-none">{service.title}</h3>
                                        <div className="flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-primary transition-colors duration-500">
                                            <span>Explore Ritual</span>
                                            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* RIGHT: Visual Ads & Stats */}
                        <div className="lg:col-span-5 space-y-12">
                            <VisualCard 
                                title="Uncompromising Standards" 
                                subtext="The Vrumo Protocol" 
                                image="/images/hero_main.png"
                            />
                            
                            <div className="grid grid-cols-1 gap-8">
                                {[
                                    { number: "2,500+", label: "Privileged Members", icon: Users },
                                    { number: "95%", label: "Hydration Conservation", icon: Leaf }
                                ].map((stat, i) => (
                                    <motion.div 
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                        className="bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/5 flex items-center gap-8 group transition-all duration-700 shadow-premium"
                                    >
                                        <div className="bg-primary/10 p-5 rounded-3xl group-hover:bg-primary/20 transition-all duration-500 border border-primary/10 group-hover:border-primary/30 shadow-glow">
                                            <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div>
                                            <div className="text-4xl font-heading font-bold text-white tracking-tighter leading-none">{stat.number}</div>
                                            <div className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-500 mt-3 group-hover:text-slate-300 transition-colors">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick CTA Actions */}
                    <div className="mt-24 flex flex-col sm:flex-row justify-center gap-8 px-4 relative z-20">
                        <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                            <Link to="/booking" className="w-full sm:w-auto bg-primary text-secondary px-16 py-8 rounded-[2rem] font-heading font-black uppercase tracking-[0.4em] shadow-glow hover:shadow-[0_0_60px_rgba(0,210,255,0.5)] transition-all flex items-center justify-center gap-5 relative overflow-hidden group">
                                <span className="relative z-10 text-lg">Reserve a Session</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                            <Link to="/services" className="w-full sm:w-auto bg-white/5 backdrop-blur-3xl text-white border border-white/10 px-16 py-8 rounded-[2rem] font-heading font-black uppercase tracking-[0.4em] hover:bg-white/10 transition-all flex items-center justify-center gap-5 shadow-premium text-lg">
                                The Catalog
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- PREMIUM FEATURE SECTION --- */}
            <section className="py-48 relative bg-[#030612] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center mb-40 space-y-8">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-black uppercase tracking-[0.6em] text-[11px] bg-primary/10 px-8 py-3 rounded-full border border-primary/20 backdrop-blur-2xl shadow-glow"
                        >
                            The Excellence Manifesto
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.9] max-w-5xl"
                        >
                            Orchestrating <span className="text-gradient">Automotive Perfection</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 font-body font-light max-w-4xl text-2xl tracking-wide leading-relaxed"
                        >
                            A symphony of elite tools and master hands, dedicated to the absolute longevity of your investment.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            { 
                                title: "Sustainable Luxury", 
                                desc: "Precision care meets environmental responsibility. We use exclusively bio-organic, high-performance solutions for a guilt-free, showroom shine.", 
                                icon: Leaf,
                                color: "emerald-400"
                            },
                            { 
                                title: "Detailing Masters", 
                                desc: "Our technicians are rigorously trained in the art of vehicle restoration, treating every curve with surgical precision and uncompromising passion.", 
                                icon: Zap,
                                color: "amber-400"
                            },
                            { 
                                title: "Concierge Service", 
                                desc: "Luxury time is precious. Our concierge-style service brings world-class detailing directly to your sanctuary, on your exact schedule.", 
                                icon: Clock,
                                color: "royal"
                            }
                        ].map((feature, i) => (
                            <motion.div 
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -20 }}
                                className="group relative p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 shadow-premium hover:shadow-primary/10 transition-all duration-1000 overflow-hidden backdrop-blur-3xl"
                            >
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-700 mb-12 relative overflow-hidden border border-white/10 group-hover:border-primary/20">
                                        <feature.icon className={`w-12 h-12 text-white group-hover:text-primary transition-colors duration-500 z-10`} />
                                    </div>
                                    
                                    <h3 className="text-4xl font-heading font-bold text-white tracking-tighter mb-8 group-hover:text-primary transition-colors duration-500">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-xl font-body text-slate-400 font-light tracking-wide leading-relaxed group-hover:text-slate-200 transition-colors duration-500 mb-12">
                                        {feature.desc}
                                    </p>

                                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                        <span className="text-[12px] font-black uppercase tracking-[0.4em] text-primary">The Vrumo Standard</span>
                                        <ArrowRight className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EVIDENCE SECTION --- */}
            <section className="py-40 relative bg-[#030612] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-12">
                            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.5em] border border-primary/20 backdrop-blur-2xl shadow-glow">
                                <Droplets className="w-5 h-5" />
                                The Visual Proof
                            </div>
                            <h2 className="text-7xl md:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.85]">The Luxury <br /><span className="text-gradient">Difference</span></h2>
                            <p className="text-slate-400 font-body font-light text-2xl tracking-wide leading-relaxed max-w-2xl">Experience the visible transformation where precision engineering meets meticulous obsession.</p>
                            
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
                                        <span className="text-xl font-heading font-bold text-white tracking-wide group-hover:text-primary transition-colors duration-500">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants} className="pt-12">
                                <Link to="/booking" className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-3xl text-white border border-white/10 px-16 py-8 rounded-[2.5rem] font-heading font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-secondary transition-all shadow-premium group text-lg">
                                    Initiate Transformation <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-500" />
                                </Link>
                            </motion.div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                { title: "Executive Sedan", before: "/images/sedan_before.png", after: "/images/sedan_after.png" },
                                { title: "Bespoke Superbike", before: "/images/bike_before.png", after: "/images/bike_after.png" }
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
                                            <div className="absolute top-8 left-8 bg-primary/30 backdrop-blur-2xl text-white px-6 py-2 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] border border-primary/40 shadow-glow">Vrumo Standard</div>
                                        </div>
                                        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
                                            <p className="text-white text-[11px] font-black uppercase tracking-[0.4em] bg-black/60 backdrop-blur-3xl border border-white/10 px-8 py-4 rounded-3xl shadow-glow animate-pulse">
                                                Reveal Excellence
                                            </p>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-heading font-bold text-white tracking-tighter text-center">{item.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-60 relative bg-[#030612] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,210,255,0.1),transparent_70%)] pointer-events-none"></div>
                
                <div className="max-w-6xl mx-auto px-4 text-center space-y-24 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-12"
                    >
                        <h2 className="text-8xl sm:text-9xl md:text-[11rem] font-heading font-bold text-white tracking-tighter leading-[0.85]">Your Move, <br /> <span className="text-gradient">Perfected.</span></h2>
                        <p className="text-2xl sm:text-3xl text-slate-400 font-body font-light max-w-4xl mx-auto tracking-wide leading-relaxed">Join an exclusive circle of owners who represent the very best in automotive care.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-10 pt-12">
                            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                                <Link to="/booking" className="w-full sm:w-auto block bg-primary text-secondary px-20 py-10 rounded-[3rem] font-heading font-black text-2xl uppercase tracking-[0.4em] shadow-glow hover:shadow-[0_0_80px_rgba(0,210,255,0.4)] transition-all">
                                    Secure Booking
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/services" className="w-full sm:w-auto block bg-white/5 backdrop-blur-3xl border border-white/10 text-white px-20 py-10 rounded-[3rem] font-heading font-black text-2xl uppercase tracking-[0.4em] hover:bg-white/10 transition-all shadow-premium">
                                    Concierge
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
