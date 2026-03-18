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
    Navigation, 
    Zap, 
    Leaf,
    Users,
    ChevronRight,
    MapPin,
    Trophy,
    Target,
    Settings,
    Wrench,
    Package
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
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1] 
        } 
    }
};

const buttonVariants = {
    hover: { 
        y: -4, 
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(0, 210, 255, 0.25)",
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    tap: { scale: 0.98 }
};

const ServiceCard = ({ title, badge, image, link }) => (
    <motion.div 
        variants={itemVariants}
        whileHover={{ 
            y: -10,
            boxShadow: "0 40px 100px -20px rgba(15, 23, 42, 0.08), 0 20px 50px -12px rgba(15, 23, 42, 0.03)",
        }}
        className="bg-white rounded-3xl sm:rounded-4xl p-4 sm:p-6 shadow-premium border border-gray-100 flex flex-col items-center text-center space-y-3 sm:space-y-4 group cursor-pointer transition-colors hover:border-primary/20"
    >
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-50">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                <span className="bg-white/90 backdrop-blur-md text-primary px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest border border-primary/20 shadow-sm">
                    {badge}
                </span>
            </div>
        </div>
        <div className="space-y-1">
            <h3 className="text-[13px] sm:text-[15px] font-heading font-bold text-secondary uppercase tracking-tight leading-tight px-1">{title}</h3>
            <p className="text-[9px] sm:text-[11px] font-body text-gray-400 font-medium uppercase tracking-[0.15em]">Explore Details</p>
        </div>
    </motion.div>
);

const VisualCard = ({ title, subtext, image, dark = false }) => (
    <motion.div 
        variants={itemVariants}
        whileHover={{ y: -8 }}
        className="relative rounded-3xl sm:rounded-4xl overflow-hidden group aspect-4/5 shadow-2xl transition-all duration-700"
    >
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 space-y-1.5 sm:space-y-3">
            <h4 className="text-primary font-body font-bold text-[9px] sm:text-[11px] uppercase tracking-[0.25em]">{subtext}</h4>
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-heading font-bold leading-tight tracking-tight text-white">
                {title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                ))}
            </h3>
        </div>
    </motion.div>
);

const StatCard = ({ number, label, icon: Icon }) => (
    <motion.div 
        variants={itemVariants}
        whileHover={{ y: -5, boxShadow: "0 20px 50px -12px rgba(15, 23, 42, 0.1)" }}
        className="bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-8 shadow-premium border border-gray-100 flex items-center gap-4 sm:gap-6 group transition-all"
    >
        <div className="bg-primary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-secondary tracking-tight leading-none">{number}</div>
            <div className="text-[9px] sm:text-[11px] font-body font-medium text-gray-400 uppercase tracking-[0.15em] mt-1.5">{label}</div>
        </div>
    </motion.div>
);

const Home = () => {
    return (
        <div className="bg-background min-h-screen overflow-x-hidden text-foreground selection:bg-primary/30">
            {/* Soft Ambient Lighting Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-royal/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[20%] w-[35%] h-[35%] bg-accent/5 rounded-full blur-[110px]"></div>
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Main Title Area */}
                    <div className="text-center mb-24 space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-300 text-[10px] font-body font-bold uppercase tracking-[0.3em] shadow-2xl"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="truncate sm:whitespace-normal">The New Standard in Concierge Vehicle Care</span>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-6xl sm:text-8xl md:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.95] sm:leading-[0.92]"
                        >
                            Elevating <br className="hidden md:block" />
                            <span className="text-gradient">Vehicle Care</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-slate-400 font-body font-light max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed tracking-wide"
                        >
                            Experience the pinnacle of automotive grooming. Precision detailing, meticulously delivered to your sanctuary.
                        </motion.p>
                    </div>

                    {/* Grid Layout inspired by premium SaaS */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-12 gap-6 lg:gap-8"
                    >
                        {/* LEFT: Service Grid (6 Cols) */}
                        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            {[
                                { title: "Elite Wash & Care", badge: "From ₹99", image: "/images/car_foam_wash.png" },
                                { title: "Bespoke Accessories", badge: "Premium Range", image: "/images/brand_van.png" },
                                { title: "Interior Restoration", badge: "Deep Refresh", image: "/images/car_interior.png" },
                                { title: "Ceramic Shield", badge: "Titanium Grade", image: "/images/ceramic_coating.png" }
                            ].map((service, idx) => (
                                <motion.div 
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] p-5 border border-white/10 flex flex-col items-center text-center space-y-4 group cursor-pointer transition-all duration-500 hover:border-primary/30 hover:bg-white/[0.05] shadow-2xl"
                                >
                                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-slate-900 shadow-inner">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-black/60 backdrop-blur-xl text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 shadow-xl">
                                                {service.badge}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-1 pb-2">
                                        <h3 className="text-[15px] font-heading font-bold text-white uppercase tracking-tight leading-tight">{service.title}</h3>
                                        <div className="flex items-center justify-center gap-2 text-[10px] font-body text-slate-500 font-medium uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                                            <span>Inquire</span>
                                            <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* RIGHT: Visual Ads (6 Cols) */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <VisualCard 
                                    title="Uncompromising Standards" 
                                    subtext="The Vrumo Protocol" 
                                    image="/images/hero_main.png"
                                />
                                <VisualCard 
                                    title="A Legacy of Shine" 
                                    subtext="Heritage Quality" 
                                    image="/images/bike_polishing.png"
                                />
                            </div>
                            
                            {/* Stats Integrated with Glassmorphism */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                {[
                                    { number: "2,000+", label: "Elite Members", icon: Users },
                                    { number: "90%", label: "Hydration Saved", icon: Leaf }
                                ].map((stat, i) => (
                                    <motion.div 
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                                        className="bg-white/[0.02] backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 flex items-center gap-6 group transition-all duration-500 shadow-2xl"
                                    >
                                        <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                            <stat.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-heading font-bold text-white tracking-tight leading-none">{stat.number}</div>
                                            <div className="text-[11px] font-body font-medium text-slate-500 uppercase tracking-[0.2em] mt-2 group-hover:text-slate-300 transition-colors">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick CTA Actions */}
                    <div className="mt-20 flex flex-col sm:flex-row justify-center gap-6 px-4">
                        <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                            <Link to="/booking" className="w-full sm:w-auto bg-primary text-secondary px-12 py-6 rounded-2xl font-body font-black uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_60px_rgba(0,210,255,0.5)] transition-all flex items-center justify-center gap-4 relative overflow-hidden group">
                                <span className="relative z-10">Reserve a Session</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                            <Link to="/services" className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/10 px-12 py-6 rounded-2xl font-body font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-4 shadow-2xl">
                                The Catalog
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- PREMIUM FEATURE SECTION --- */}
            <section className="py-40 relative bg-background overflow-hidden">
                {/* Refined Ambient Light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,163,255,0.05),transparent_60%)] pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center mb-32 space-y-6">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-body font-bold uppercase tracking-[0.5em] text-[10px] bg-primary/10 px-5 py-2 rounded-full border border-primary/20 backdrop-blur-md"
                        >
                            The Excellence Manifesto
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter leading-tight max-w-4xl"
                        >
                            Orchestrating <span className="text-gradient">Automotive Perfection</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 font-body font-light max-w-2xl text-xl tracking-wide leading-relaxed"
                        >
                            A symphony of elite tools and master hands, dedicated to the longevity of your investment.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            { 
                                title: "Sustainable Excellence", 
                                desc: "Precision care meets environmental responsibility. We use exclusively biodegradable, high-performance solutions for a guilt-free, showroom shine.", 
                                icon: Leaf,
                                gradient: "from-emerald-400/20 to-teal-500/20"
                            },
                            { 
                                title: "Certified Experts", 
                                desc: "Our detailing masters are rigorously trained in the art of vehicle restoration, treating every curve with surgical precision and uncompromising passion.", 
                                icon: Zap,
                                gradient: "from-amber-400/20 to-orange-500/20"
                            },
                            { 
                                title: "Effortless Service", 
                                desc: "Luxury time is precious. Our concierge-style service brings world-class detailing directly to your sanctuary, on your schedule.", 
                                icon: Clock,
                                gradient: "from-royal/20 to-indigo-600/20"
                            }
                        ].map((feature, i) => (
                            <motion.div 
                                key={i}
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -15,
                                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                                }}
                                className="group relative p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 shadow-2xl hover:shadow-primary/10 transition-all duration-700 overflow-hidden backdrop-blur-xl"
                            >
                                {/* Glass Reflection Animation */}
                                <div className="absolute -inset-full top-0 bg-linear-to-r from-transparent via-white/5 to-transparent -rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out pointer-events-none"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700 mb-10 relative overflow-hidden border border-white/10">
                                        <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                        <feature.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-500 z-10" />
                                    </div>
                                    
                                    <h3 className="text-3xl font-heading font-bold text-white tracking-tight mb-5 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-[16px] font-body text-slate-400 font-light tracking-wide leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                        {feature.desc}
                                    </p>

                                    <div className="mt-10 flex items-center gap-3 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">The Protocol</span>
                                        <ArrowRight className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- BEFORE/AFTER SHOWCASE --- */}
            <section className="py-32 relative bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-10">
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-body font-black uppercase tracking-[0.4em] border border-primary/20 backdrop-blur-md">
                                <Droplets className="w-4 h-4" />
                                The Evidence
                            </div>
                            <h2 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter leading-none">The Luxury <br /><span className="text-gradient">Delta</span></h2>
                            <p className="text-slate-400 font-body font-light max-w-lg text-xl tracking-wide leading-relaxed">Experience the visible difference where precision engineering meets meticulous craftsmanship.</p>
                            
                            <div className="space-y-8 pt-6">
                                {[
                                    { text: "90% Conservation in Hydration", icon: CheckCircle2 },
                                    { text: "Pure Bio-Molecular Solutions", icon: CheckCircle2 },
                                    { text: "Industrial Grade Precision Tools", icon: CheckCircle2 }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="bg-primary/10 p-2 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-[12px] font-body font-bold text-white uppercase tracking-[0.25em] group-hover:text-primary transition-colors">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                                <Link to="/booking" className="inline-flex items-center gap-5 bg-white/5 backdrop-blur-xl text-white border border-white/10 px-12 py-7 rounded-[2rem] font-body font-black uppercase tracking-[0.3em] hover:bg-primary hover:text-secondary transition-all shadow-2xl group">
                                    Initate Transformation <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { title: "Executive Sedan", before: "/images/sedan_before.png", after: "/images/sedan_after.png" },
                                { title: "Bespoke Superbike", before: "/images/bike_before.png", after: "/images/bike_after.png" }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }} 
                                    whileInView={{ opacity: 1, scale: 1 }} 
                                    transition={{ delay: i * 0.2 }}
                                    className="space-y-6"
                                >
                                    <div className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                                        {/* Before Image */}
                                        <div className="absolute inset-0 transition-opacity duration-1000 sm:group-hover:opacity-0 sm:z-10 bg-slate-900">
                                            <img src={item.before} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Before" />
                                            <div className="absolute top-6 left-6 bg-red-600/20 backdrop-blur-xl text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-red-500/30">Previous</div>
                                        </div>
                                        {/* After Image */}
                                        <div className="absolute inset-0 bg-slate-900">
                                            <img src={item.after} className="w-full h-full object-cover" alt="After" />
                                            <div className="absolute top-6 left-6 bg-primary/20 backdrop-blur-xl text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-primary/30">Vrumo Standard</div>
                                        </div>
                                        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
                                            <p className="text-white text-[10px] font-body font-black uppercase tracking-[0.3em] bg-black/40 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl animate-pulse">
                                                Reveal Magic
                                            </p>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-heading font-bold text-white tracking-tight text-center">{item.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-44 relative bg-background overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,210,255,0.08),transparent_70%)] pointer-events-none"></div>
                
                <div className="max-w-5xl mx-auto px-4 text-center space-y-16 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-10"
                    >
                        <h2 className="text-6xl sm:text-8xl md:text-9xl font-heading font-bold text-white tracking-tighter leading-none">Your Drive, <br /> <span className="text-gradient">Perfected.</span></h2>
                        <p className="text-xl sm:text-2xl text-slate-400 font-body font-light max-w-3xl mx-auto tracking-wide leading-relaxed">Join the exclusive circle of vehicle owners who never settle for less than extraordinary.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-10">
                            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                                <Link to="/booking" className="w-full sm:w-auto block bg-primary text-secondary px-16 py-8 rounded-[2rem] font-body font-black text-xl uppercase tracking-[0.3em] shadow-[0_0_50px_rgba(0,210,255,0.2)] hover:shadow-[0_0_80px_rgba(0,210,255,0.4)] transition-all">
                                    Secure Booking
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/contact" className="w-full sm:w-auto block bg-white/5 backdrop-blur-xl border border-white/10 text-white px-16 py-8 rounded-[2rem] font-body font-black text-xl uppercase tracking-[0.3em] hover:bg-white/10 transition-all shadow-2xl">
                                    Concierge
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 hover:opacity-100 transition-opacity duration-1000 font-black text-slate-500 uppercase tracking-[0.4em] text-[10px]">
                        <div className="hover:text-primary cursor-default transition-colors">Lucknow Metro</div>
                        <div className="hover:text-primary cursor-default transition-colors">DLF MyPad</div>
                        <div className="hover:text-primary cursor-default transition-colors">Gomti Nagar</div>
                        <div className="hover:text-primary cursor-default transition-colors">Indira Nagar</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;


