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
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#2563EB] selection:text-white font-sans">
            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden border-b border-[#EFEFEF] luxury-pattern">
                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-[0.03em]">
                            Vehicle <span className="text-[#2563EB]">Wash</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed">
                            Deep foam cleaning and detailing delivered right to your doorstep. Get that showroom shine in minutes.
                        </motion.p>
                        <motion.div variants={itemVariants} className="pt-8">
                            <Link to="/booking?service=wash" className="btn-premium inline-flex items-center gap-4">
                                Book Now <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-24 px-6 border-b border-[#EFEFEF] bg-[#F8F8F8]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold section-title">What's Included?</h2>
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
                                    <div className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                                    </div>
                                    <span className="text-[#2C2C2C] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#EFEFEF] aspect-video">
                        <img src="/images/v_wash.png" className="w-full h-full object-cover" alt="Wash Service" />
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold section-title">Why Choose Our Wash?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "No Water Waste", desc: "Our hybrid washing tech saves up to 80% more water than traditional workshops.", icon: Droplets },
                        { title: "Zero Travel Time", desc: "Stop waiting at wash centers. We come to your garage, office, or sanctuary.", icon: Clock },
                        { title: "Eco-Friendly", desc: "We use bio-organic foam that's safe for your paint and the environment.", icon: ShieldCheck }
                    ].map((benefit, i) => (
                        <div key={i} className="p-10 rounded-2xl bg-white border border-[#EFEFEF] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] relative overflow-hidden space-y-6 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-[14px] flex items-center justify-center">
                                <benefit.icon className="w-[26px] h-[26px] text-[#2563EB]" strokeWidth={1.8} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0A0A0A]">{benefit.title}</h3>
                            <p className="text-[#888888] text-[15px] leading-[1.7]">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 px-6 bg-[#F8F8F8] border-y border-[#EFEFEF]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-20 text-center section-title">Service Process</h2>
                    <div className="grid md:grid-cols-3 gap-16 relative">
                        <div className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-px bg-[#E5E5E5]" />
                        {[
                            { step: "01", title: "Select Package", desc: "Choose the wash plan that fits your needs.", icon: Zap },
                            { step: "02", title: "Wait for Arrival", desc: "Our pro detailing van arrives at your location.", icon: MapPin },
                            { step: "03", title: "Showroom Shine", desc: "Your vehicle is restored in under 45 minutes.", icon: Droplets }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 text-center space-y-6">
                                <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center border-2 border-[#2563EB] text-[#2563EB] font-semibold text-xl shadow-[0_8px_24px_rgba(37,99,235,0.15)]">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-[#0A0A0A]">{item.title}</h4>
                                <p className="text-[#888888] text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING PREVIEW */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto border-2 border-[#2563EB]/30 bg-[#2563EB]/5 rounded-2xl p-12 md:p-20 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A0A]">Starting from <span className="text-[#2563EB]">₹199</span></h2>
                    <p className="text-[#888888] max-w-xl mx-auto">Affordable pricing with zero hidden costs. Perfect for your daily car or bike care.</p>
                    <div className="pt-6">
                        <Link to="/pricing" className="text-[#2563EB] font-bold hover:underline flex items-center justify-center gap-2">
                            View all plans <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-[#0A0A0A] text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">Ready for a fresh look?</h2>
                    <p className="text-lg text-gray-400">Book your first doorstep wash and join the ecosystem.</p>
                    <Link to="/booking" className="bg-[#2563EB] text-white px-10 py-4 rounded-lg font-semibold text-[14px] uppercase tracking-[0.1em] hover:scale-105 transition-transform inline-block">
                        Book Your Wash
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Wash;
