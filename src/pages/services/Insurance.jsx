import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ShieldCheck, 
    CheckCircle2, 
    Zap, 
    ArrowRight,
    HandIcon,
    FileText,
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

const Insurance = () => {
    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#2563EB] selection:text-white font-sans">
            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden border-b border-[#EFEFEF] luxury-pattern">
                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-[0.03em]">
                            Vehicle <span className="text-[#2563EB]">Insurance</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed">
                            Reliable coverage and zero-hassle claims for your precious car or bike. Protection that evolves with you.
                        </motion.p>
                        <motion.div variants={itemVariants} className="pt-8">
                            <Link to="/booking?service=insurance" className="btn-premium inline-flex items-center gap-4">
                                Get Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-24 px-6 border-b border-[#EFEFEF] bg-[#F8F8F8]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold section-title">Why Insurance with Vrumo?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                "Third-Party Protection",
                                "Zero-Depreciation Add-on",
                                "Cashless Repairs",
                                "Paperless Digital Workflow",
                                "Immediate Claim Setup",
                                "Multi-Vehicle Discount"
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
                    <div className="rounded-2xl overflow-hidden border border-[#EFEFEF] aspect-video relative">
                        <img src="/images/v_insurance_doorstep.png" loading="lazy" className="w-full h-full object-cover" alt="Doorstep Insurance Inspection" />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold section-title">Smart Protection</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Paperless Logic", desc: "No more long forms. Everything from quotes to claims is 100% digital.", icon: FileText },
                        { title: "No Hidden Costs", desc: "Honest, affordable pricing with transparent terms and no entry-level traps.", icon: Zap },
                        { title: "Trusted Network", desc: "Partnerships with thousands of high-end workshops for instant cashless repair.", icon: HandIcon }
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
                    <h2 className="text-4xl font-bold mb-20 text-center section-title">Digital Path to Safety</h2>
                    <div className="grid md:grid-cols-3 gap-16 relative">
                        {[
                            { step: "01", title: "Select Coverage", desc: "Choose the protection level for your vehicle.", icon: Zap },
                            { step: "02", title: "Digital Verify", desc: "Instantly upload details on our platform.", icon: FileText },
                            { step: "03", title: "Protected", desc: "Zero hassle. Complete safety for the road ahead.", icon: ShieldCheck }
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

            {/* FINAL CTA */}
            <section className="py-24 bg-white text-black">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-black">Secure your legacy today.</h2>
                    <p className="text-lg text-gray-400">Thousands of smart owners have already switched to Vrumo Protection.</p>
                    <Link to="/booking" className="bg-[#2563EB] text-white px-10 py-4 rounded-lg font-semibold text-[14px] uppercase tracking-[0.1em] hover:scale-105 transition-transform inline-block">
                        Get Your Policy Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Insurance;
