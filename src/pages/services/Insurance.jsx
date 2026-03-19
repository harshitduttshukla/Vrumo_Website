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
        <div className="min-h-screen bg-[#050505] text-white selection:bg-primary font-sans">
            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tight">
                            Vehicle <span className="text-primary italic">Insurance</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Reliable coverage and zero-hassle claims for your precious car or bike. Protection that evolves with you.
                        </motion.p>
                        <motion.div variants={itemVariants} className="pt-8">
                            <Link to="/booking?service=insurance" className="bg-primary text-secondary px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform inline-flex items-center gap-4">
                                Get Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-24 px-6 border-b border-white/5 bg-white/2">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold italic">Why Insurance with Vrumo?</h2>
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
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden border border-white/10 aspect-video relative">
                        <img src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=2069" className="w-full h-full object-cover grayscale-[0.2] opacity-60" alt="Insurance Service" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ShieldCheck className="w-32 h-32 text-primary opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold">Smart Protection</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Paperless Logic", desc: "No more long forms. Everything from quotes to claims is 100% digital.", icon: FileText },
                        { title: "No Hidden Costs", desc: "Honest, affordable pricing with transparent terms and no entry-level traps.", icon: Zap },
                        { title: "Trusted Network", desc: "Partnerships with thousands of high-end workshops for instant cashless repair.", icon: HandIcon }
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
                    <h2 className="text-4xl font-bold mb-20 text-center">Digital Path to Safety</h2>
                    <div className="grid md:grid-cols-3 gap-16 relative">
                        {[
                            { step: "01", title: "Select Coverage", desc: "Choose the protection level for your vehicle.", icon: Zap },
                            { step: "02", title: "Digital Verify", desc: "Instantly upload details on our platform.", icon: FileText },
                            { step: "03", title: "Protected", desc: "Zero hassle. Complete safety for the road ahead.", icon: ShieldCheck }
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

            {/* FINAL CTA */}
            <section className="py-24 bg-primary text-secondary">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold">Secure your legacy today.</h2>
                    <p className="text-lg opacity-80">Thousands of smart owners have already switched to Vrumo Protection.</p>
                    <Link to="/booking" className="bg-secondary text-primary px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform inline-block">
                        Get Your Policy Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Insurance;
