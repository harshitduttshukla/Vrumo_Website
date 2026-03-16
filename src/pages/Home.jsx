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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ServiceCard = ({ title, badge, image, link }) => (
    <motion.div 
        variants={itemVariants}
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl sm:rounded-4xl p-4 sm:p-6 shadow-premium border border-gray-100 flex flex-col items-center text-center space-y-3 sm:space-y-4 group cursor-pointer"
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
            <h3 className="text-xs sm:text-sm font-heading font-extrabold text-secondary uppercase tracking-tight leading-tight px-1">{title}</h3>
            <p className="text-[8px] sm:text-[10px] font-body text-gray-400 font-bold uppercase tracking-widest">Explore Details</p>
        </div>
    </motion.div>
);

const VisualCard = ({ title, subtext, image, dark = false }) => (
    <motion.div 
        variants={itemVariants}
        className="relative rounded-3xl sm:rounded-4xl overflow-hidden group aspect-4/5 shadow-2xl"
    >
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 space-y-1 sm:space-y-2">
            <h4 className="text-primary font-heading font-black text-[8px] sm:text-xs uppercase tracking-[0.3em]">{subtext}</h4>
            <h3 className="text-lg sm:text-2xl font-heading font-extrabold leading-tight tracking-tighter text-white">
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
        className="bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-8 shadow-premium border border-gray-100 flex items-center gap-4 sm:gap-6"
    >
        <div className="bg-primary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-secondary tracking-tighter leading-none">{number}</div>
            <div className="text-[8px] sm:text-[10px] font-body font-bold text-gray-400 uppercase tracking-widest mt-1">{label}</div>
        </div>
    </motion.div>
);

const Home = () => {
    return (
        <div className="bg-[#F8F9FA] min-h-screen overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Main Title Area */}
                    <div className="text-center mb-16 space-y-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary text-white text-[10px] font-body font-bold uppercase tracking-[0.2em] shadow-lg shadow-secondary/10 max-w-[90vw]"
                        >
                            <Sparkles className="w-3 h-3 text-primary shrink-0" />
                            <span className="truncate sm:whitespace-normal">Vrumo : Premium Vehicle Care, Right at Your Doorstep.</span>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-secondary tracking-[-0.05em] uppercase italic leading-[0.95] sm:leading-[0.9]"
                        >
                            Premium Vehicle Care <br className="hidden sm:block" />
                            <span className="text-primary not-italic tracking-normal">At Your Doorstep</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#64748B] font-body font-medium max-w-2xl mx-auto italic text-sm leading-relaxed tracking-wide"
                        >
                            Experience professional washing, detailing, and deep cleaning without leaving your home or office. Precision care, meticulously delivered.
                        </motion.p>
                    </div>

                    {/* Grid Layout inspired by Hoora */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-12 gap-6 lg:gap-8"
                    >
                        {/* LEFT: Service Grid (6 Cols) */}
                        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <ServiceCard 
                                title="Car/Bike Wash & Care" 
                                badge="Starting ₹99" 
                                image="/images/car_foam_wash.png"
                                link="/booking"
                            />
                            <ServiceCard 
                                title="Premium Accessories" 
                                badge="Upgrade Your Wash" 
                                image="/images/brand_van.png"
                                link="/services"
                            />
                            <ServiceCard 
                                title="Interior Deep Cleaning" 
                                badge="Deep Refresh" 
                                image="/images/car_interior.png"
                                link="/booking"
                            />
                            <ServiceCard 
                                title="Ceramic Pro Coating" 
                                badge="Long-Lasting Shine" 
                                image="/images/ceramic_coating.png"
                                link="/booking"
                            />
                        </div>

                        {/* RIGHT: Visual Ads (6 Cols) */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                <VisualCard 
                                    title="At Your Time, At Your Place" 
                                    subtext="Doorstep Perfection" 
                                    image="/images/hero_main.png"
                                />
                                <VisualCard 
                                    title="Accessories for the Road" 
                                    subtext="Premium Care" 
                                    image="/images/bike_polishing.png"
                                />
                            </div>
                            
                            {/* Stats Integrated under Visuals */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                <StatCard number="2,000+" label="Happy Clients" icon={Users} />
                                <StatCard number="90%" label="Less Water Used" icon={Leaf} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick CTA Actions */}
                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 px-4">
                        <Link to="/booking" className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-body font-bold uppercase tracking-widest shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-3 active:scale-95">
                            Book Your Wash <ArrowRight className="w-5 h-5 text-white/50" />
                        </Link>
                        <Link to="/services" className="w-full sm:w-auto bg-white text-secondary border border-gray-100 px-10 py-5 rounded-2xl font-body font-bold uppercase tracking-widest shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 active:scale-95">
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- DETAILED SERVICE SECTION (Rest of the previous flow but optimized) --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <span className="text-primary font-body font-bold uppercase tracking-[0.3em] text-[10px]">What we do best</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary tracking-tighter leading-none italic uppercase">Professional <span className="text-primary not-italic uppercase">Detailing</span></h2>
                            <p className="text-[#64748B] font-body font-medium max-w-lg text-sm uppercase tracking-wide">We combine traditional craftsmanship with modern technology.</p>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <div className="flex -space-x-4">
                                {['Arjun', 'Priya', 'Suresh', 'Anjali'].map(name => (
                                    <div key={name} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg bg-gray-100">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=f1f5f9`} alt={name} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-xl font-heading font-black text-secondary tracking-tighter">4.9/5</div>
                                <div className="text-[10px] font-body font-bold text-gray-400 uppercase tracking-widest">Average Rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Eco-Friendly Products", desc: "Safe biodegradable products that protect both car and nature.", icon: Leaf },
                            { title: "Trained Detailers", desc: "Our team consists of rigorously trained experts with passion.", icon: Zap },
                            { title: "Convenience First", desc: "No more waiting in queues. We come to your driveway.", icon: Clock }
                        ].map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-4xl bg-gray-50 hover:bg-white hover:shadow-premium transition-all duration-500 border border-transparent hover:border-gray-100"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-500 mb-6">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-heading font-extrabold text-secondary uppercase tracking-tight mb-3">{feature.title}</h3>
                                <p className="text-sm font-body text-[#71717A] font-medium uppercase tracking-wider leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- BEFORE/AFTER SHOWCASE --- */}
            <section className="py-24 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-body font-extrabold uppercase tracking-[0.3em] border border-primary/20">
                                <Droplets className="w-3 h-3" />
                                Seeing is Believing
                            </div>
                            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-secondary tracking-tighter leading-none italic uppercase">Dramatic <br /><span className="text-primary not-italic">Transformations</span></h2>
                            <p className="text-[#64748B] font-body font-medium max-w-lg text-sm italic uppercase tracking-wide">Witness the difference professional detailing makes on everyday vehicles in Lucknow.</p>
                            
                            <div className="space-y-6 pt-4">
                                {[
                                    { text: "90% Less Water usage", icon: CheckCircle2 },
                                    { text: "Bio-Degradable Detailing Solutions", icon: CheckCircle2 },
                                    { text: "Professional Grade Equipment", icon: CheckCircle2 }
                                ].map((item, i) => (                                    <div key={i} className="flex items-center gap-4">
                                        <div className="bg-primary/20 p-1.5 rounded-full">
                                            <item.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm font-body font-bold text-secondary uppercase tracking-widest">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/booking" className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-6 rounded-4xl font-body font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl active:scale-95 group">
                                Start Transformation <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Transformation 1: Sedan */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }} 
                                whileInView={{ opacity: 1, scale: 1 }} 
                                className="space-y-4"
                            >
                                <div className="group relative aspect-video sm:aspect-3/4 rounded-4xl overflow-hidden shadow-2xl">
                                    {/* Before Image */}
                                    <div className="absolute inset-0 transition-opacity duration-700 sm:group-hover:opacity-0 sm:z-10">
                                        <img src="/images/sedan_before.png" className="w-full h-full object-cover" alt="Honda City Before" />
                                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-red-600/90 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm">Before</div>
                                    </div>
                                    {/* After Image for Mobile Stack (Optional, but let's stick to hover/tap for premium feel) */}
                                    <div className="absolute inset-0">
                                        <img src="/images/sedan_after.png" className="w-full h-full object-cover" alt="Honda City After" />
                                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-primary/90 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm">After</div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20">
                                        <p className="text-white text-[9px] sm:text-[10px] font-body font-bold uppercase tracking-widest bg-secondary/80 backdrop-blur-md px-4 py-2 rounded-xl inline-block">
                                            <span className="hidden sm:inline">Hover to See Magic</span>
                                            <span className="sm:hidden">Tap to See Magic</span>
                                        </p>
                                    </div>
                                </div>
                                <h4 className="text-base sm:text-lg font-heading font-extrabold text-secondary uppercase tracking-tight ml-2 sm:ml-4">Premium Sedan Grooming</h4>
                            </motion.div>

                            {/* Transformation 2: Bike */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }} 
                                whileInView={{ opacity: 1, scale: 1 }} 
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="group relative aspect-video sm:aspect-3/4 rounded-4xl overflow-hidden shadow-2xl">
                                    {/* Before Image */}
                                    <div className="absolute inset-0 transition-opacity duration-700 sm:group-hover:opacity-0 sm:z-10">
                                        <img src="/images/bike_before.png" className="w-full h-full object-cover" alt="Bullet Before" />
                                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-red-600/90 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm">Before</div>
                                    </div>
                                    {/* After Image */}
                                    <div className="absolute inset-0">
                                        <img src="/images/bike_after.png" className="w-full h-full object-cover" alt="Bullet After" />
                                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-primary/90 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm">After</div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20">
                                        <p className="text-white text-[9px] sm:text-[10px] font-body font-bold uppercase tracking-widest bg-secondary/80 backdrop-blur-md px-4 py-2 rounded-xl inline-block">
                                            <span className="hidden sm:inline">Hover to See Magic</span>
                                            <span className="sm:hidden">Tap to See Magic</span>
                                        </p>
                                    </div>
                                </div>
                                <h4 className="text-base sm:text-lg font-heading font-extrabold text-secondary uppercase tracking-tight ml-2 sm:ml-4">Classic Bike Detailing</h4>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 relative bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-extrabold text-secondary tracking-tighter leading-[0.9] uppercase italic px-4">Ready For The <br /> <span className="text-primary not-italic tracking-normal">Royal treatment?</span></h2>
                        <p className="text-base sm:text-xl text-[#64748B] font-body font-medium max-w-2xl mx-auto italic px-6 tracking-wide leading-relaxed">Join 2000+ happy vehicle owners in Lucknow who trust Vrumo for their doorstep care.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6 px-4">
                            <Link to="/booking" className="w-full sm:w-auto bg-secondary text-white px-12 py-6 rounded-3xl sm:rounded-4xl font-body font-bold text-lg sm:text-xl uppercase tracking-widest hover:bg-primary shadow-2xl transition-all active:scale-95 text-center">
                                Book Now
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto bg-[#F8F9FA] border-2 border-transparent px-12 py-6 rounded-3xl sm:rounded-4xl font-body font-bold text-lg sm:text-xl uppercase tracking-widest hover:bg-white hover:border-gray-100 transition-all active:scale-95 shadow-sm text-secondary text-center">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>

                    <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-20 hover:opacity-100 transition-opacity duration-700 font-black text-secondary italic uppercase tracking-tighter text-xl">
                        <div>Lucknow Metro</div>
                        <div>DLF MyPad</div>
                        <div>Gomti Nagar</div>
                        <div>Indira Nagar</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;


