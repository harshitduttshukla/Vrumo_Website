import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Droplets, 
    CheckCircle2, 
    Zap, 
    ShieldCheck, 
    Clock, 
    ArrowRight,
    MapPin,
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Wash = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-primary font-sans">
            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tight">
                            Vehicle <span className="text-primary italic">Wash</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Deep foam cleaning and detailing delivered right to your doorstep. Get that showroom shine in minutes.
                        </motion.p>
                        <motion.div variants={itemVariants} className="pt-8">
                            <Link to="/booking?service=wash" className="bg-primary text-secondary px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform inline-flex items-center gap-4">
                                Book Now <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-24 px-6 border-b border-white/5 bg-white/2">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold italic">What's Included?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                "Complete Foam Wash",
                                "Tyre Dressing & Polish",
                                "Dashboard Cleaning",
                                "Interior Vacuuming",
                                "Window Shine",
                                "Fragrance Treatment"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center group">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden border border-white/10 aspect-video">
                        <img src="/images/v_wash.png" className="w-full h-full object-cover grayscale-[0.2]" alt="Wash Service" />
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold">Why Choose Our Wash?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "No Water Waste", desc: "Our hybrid washing tech saves up to 80% more water than traditional workshops.", icon: Droplets },
                        { title: "Zero Travel Time", desc: "Stop waiting at wash centers. We come to your garage, office, or sanctuary.", icon: Clock },
                        { title: "Eco-Friendly", desc: "We use bio-organic foam that's safe for your paint and the environment.", icon: ShieldCheck }
                    ].map((benefit, i) => (
                        <div key={i} className="p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 space-y-6">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                                <benefit.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">{benefit.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 px-6 bg-white/2 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-20 text-center">Service Process</h2>
                    <div className="grid md:grid-cols-3 gap-16 relative">
                        <div className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-px bg-white/10" />
                        {[
                            { step: "01", title: "Select Package", desc: "Choose the wash plan that fits your needs.", icon: Zap },
                            { step: "02", title: "Wait for Arrival", desc: "Our pro detailing van arrives at your location.", icon: MapPin },
                            { step: "03", title: "Showroom Shine", desc: "Your vehicle is restored in under 45 minutes.", icon: Droplets }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 text-center space-y-6">
                                <div className="w-16 h-16 bg-[#050505] rounded-full mx-auto flex items-center justify-center border border-primary/40 text-primary font-black text-xl shadow-glow">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING PREVIEW */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto border border-primary/20 bg-primary/5 rounded-[3rem] p-12 md:p-20 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Starting from <span className="text-primary italic">₹199</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Affordable pricing with zero hidden costs. Perfect for your daily car or bike care.</p>
                    <div className="pt-6">
                        <Link to="/pricing" className="text-primary font-bold hover:underline flex items-center justify-center gap-2">
                            View all plans <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-primary text-secondary">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold">Ready for a fresh look?</h2>
                    <p className="text-lg opacity-80">Book your first doorstep wash and join the ecosystem.</p>
                    <Link to="/booking" className="bg-secondary text-primary px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform inline-block">
                        Book Your Wash
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Wash;
