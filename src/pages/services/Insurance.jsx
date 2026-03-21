import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckCircle2, 
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Insurance = () => {
    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#2563EB] selection:text-white font-sans">
            {/* HERO SECTION */}
            <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 px-6 overflow-hidden bg-blue-100/50">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2563EB]/5 rounded-l-[200px] blur-3xl -z-10" />
                
                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-[0.03em] text-[#0A0A0A]">
                            Vehicle <span className="text-[#2563EB]">Insurance</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
                            Reliable coverage and zero-hassle claims for your precious car or bike. Protection that evolves with you.
                        </motion.p>
                        <motion.div variants={itemVariants} className="pt-8">
                            <Link to="/booking?service=insurance" className="btn-premium inline-flex items-center gap-4 transition-all hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        { title: "Paperless Logic", desc: "No more long forms. Everything from quotes to claims is 100% digital.", icon: "01" },
                        { title: "No Hidden Costs", desc: "Honest, affordable pricing with transparent terms and no entry-level traps.", icon: "02" },
                        { title: "Trusted Network", desc: "Partnerships with thousands of high-end workshops for instant cashless repair.", icon: "03" }
                    ].map((benefit, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -8 }}
                            className="p-10 rounded-2xl bg-white border border-blue-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group transition-all duration-500"
                        >
                            {/* Accent Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />
                            
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="w-1 h-12 bg-[#2563EB] rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                                    <span className="text-4xl font-black text-blue-500/10 group-hover:text-blue-500/20 transition-colors">{benefit.icon}</span>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-[#0A0A0A] tracking-tight">{benefit.title}</h3>
                                    <p className="text-[#555555] text-[15px] leading-[1.8] font-light italic">
                                        "{benefit.desc}"
                                    </p>
                                </div>
                            </div>
                            
                            {/* Bottom Border Accent */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-[#2563EB]/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 px-6 bg-[#F8F8F8] border-y border-[#EFEFEF]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-20 text-center section-title">Digital Path to Safety</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 relative">
                        {[
                            { step: "01", title: "Select Coverage", desc: "Choose the protection level for your vehicle.", img: "/images/step_select.png" },
                            { step: "02", title: "Digital Verify", desc: "Instantly upload details on our platform.", img: "/images/step_book.png" },
                            { step: "03", title: "Protected", desc: "Zero hassle. Complete safety for the road ahead.", img: "/images/step_results.png" }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 text-center space-y-6">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto shadow-lg border-4 border-white mb-6">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[#2563EB] font-black text-xl italic opacity-30">{item.step}</span>
                                    <h4 className="text-xl font-bold text-[#0A0A0A]">{item.title}</h4>
                                    <p className="text-[#555555] text-sm">{item.desc}</p>
                                </div>
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
                    <Link to="/booking" className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] !text-white hover:from-[#1E40AF] hover:to-[#1D4ED8] px-10 py-4 rounded-lg font-bold text-[14px] uppercase tracking-[0.1em] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all inline-block">
                        Get Your Policy
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Insurance;
