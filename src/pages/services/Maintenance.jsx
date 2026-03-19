import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Wrench, 
    CheckCircle2, 
    Zap, 
    ArrowRight,
    MapPin,
    Settings,
    Activity,
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

const Maintenance = () => {
    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#C9A84C] selection:text-white font-sans">
            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden border-b border-[#EFEFEF] luxury-pattern">
                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-[0.03em]">
                            Vehicle <span className="text-[#C9A84C]">Maintenance</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed">
                            Certified mechanics and precision diagnostics delivered right to your garage. We keep your vehicle running like new.
                        </motion.p>
                        <motion.div variants={itemVariants} className="pt-8">
                            <Link to="/booking?service=maintenance" className="btn-premium inline-flex items-center gap-4">
                                Book Service <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-24 px-6 border-b border-[#EFEFEF] bg-[#F8F8F8]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold section-title">Expert Care</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                "Full Engine Checkup",
                                "Oil & Filter Changes",
                                "Brake Inspection",
                                "Battery Health Check",
                                "Chain Lubrication",
                                "Coolant Flush & Top-up"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center group">
                                    <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                                    </div>
                                    <span className="text-[#2C2C2C] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#EFEFEF] aspect-video">
                        <img src="/images/v_maintenance.png" className="w-full h-full object-cover" alt="Maintenance Service" />
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold section-title">Why Professional Maintenance?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Longevity", desc: "Regular maintenance extends the healthy life of your vehicle by up to 40%.", icon: Activity },
                        { title: "Resale Value", desc: "A detailed service history is the key to getting the best market price.", icon: Zap },
                        { title: "Peace of Mind", desc: "Our certified professionals use precision tools to ensure everything is perfect.", icon: Settings }
                    ].map((benefit, i) => (
                        <div key={i} className="p-10 rounded-2xl bg-white border border-[#EFEFEF] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] relative overflow-hidden space-y-6 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8] rounded-[14px] flex items-center justify-center">
                                <benefit.icon className="w-[26px] h-[26px] text-[#C9A84C]" strokeWidth={1.8} />
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
                    <h2 className="text-4xl font-bold mb-20 text-center section-title">Step-by-Step Flow</h2>
                    <div className="grid md:grid-cols-3 gap-16 relative">
                        {[
                            { step: "01", title: "Select Package", desc: "Choose the service level needed for your vehicle.", icon: Zap },
                            { step: "02", title: "Book Instantly", desc: "Select a date and shared your doorstep location.", icon: MapPin },
                            { step: "03", title: "Wait for Result", desc: "Relax while we handle the technical precision.", icon: Settings }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 text-center space-y-6">
                                <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center border-2 border-[#C9A84C] text-[#C9A84C] font-semibold text-xl shadow-[0_8px_24px_rgba(201,168,76,0.15)]">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-[#0A0A0A]">{item.title}</h4>
                                <p className="text-[#888888] text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-[#0A0A0A] text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">Ready for a checkup?</h2>
                    <p className="text-lg text-gray-400">Join thousands of premium owners who trust Vrumo for maintenance.</p>
                    <Link to="/booking" className="bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 rounded-lg font-semibold text-[14px] uppercase tracking-[0.1em] hover:scale-105 transition-transform inline-block">
                        Book Service Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Maintenance;
