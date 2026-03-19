import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Tag, 
    CheckCircle2, 
    Zap, 
    ArrowRight,
    Search,
    RefreshCw,
    ShieldCheck,
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

const BuySell = () => {
    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#C9A84C] selection:text-white font-sans">
            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden border-b border-[#EFEFEF] luxury-pattern">
                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-[0.03em]">
                            Buy & Sell <span className="text-[#C9A84C]">Vehicles</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed">
                            Trusted deals for pre-owned cars and bikes. Get the best market value or find your next dream ride with Vrumo.
                        </motion.p>
                        <motion.div variants={itemVariants} className="pt-8">
                            <Link to="/booking?service=buysell" className="btn-premium inline-flex items-center gap-4">
                                Get Valuation <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="py-24 px-6 border-b border-[#EFEFEF] bg-[#F8F8F8]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold section-title">The Vrumo Deal</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                "Expert 200+ Point Inspection",
                                "Zero-Hassle RC Transfer",
                                "Instant Valuation & Buyout",
                                "Verified Vehicle History",
                                "Refurbished to Standard",
                                "Multiple Flexible Financing"
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
                    <div className="rounded-2xl overflow-hidden border border-[#EFEFEF] aspect-video relative">
                        <img src="/images/buy_sell_user.jpg" className="w-full h-full object-cover" alt="Buy Sell Service" />
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold section-title">Safe & Transparent Deals</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Highest Market Value", desc: "No random pricing. We use tech logic to get you up to 20% more than local dealers.", icon: Tag },
                        { title: "Certified Quality", desc: "Every car/bike goes through our detailing protocol before entering the listing.", icon: ShieldCheck },
                        { title: "No Middlemen", desc: "Direct platform deals mean zero entry-level fees or hidden commission traps.", icon: Zap }
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
                    <h2 className="text-4xl font-bold mb-20 text-center section-title">Seamless Handover</h2>
                    <div className="grid md:grid-cols-3 gap-16 relative">
                        {[
                            { step: "01", title: "Free Inspection", desc: "Our expert arrives at your doorstep for a pro check.", icon: Search },
                            { step: "02", title: "Instant Quote", desc: "Accept our digital offer based on vehicle health.", icon: Zap },
                            { step: "03", title: "Get Paid", desc: "Immediate transfer and zero-hassle documentation.", icon: RefreshCw }
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
                    <h2 className="text-4xl md:text-6xl font-bold text-white">What's your car's worth?</h2>
                    <p className="text-lg text-gray-400">Get a free digital valuation in under 2 minutes.</p>
                    <Link to="/booking" className="bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 rounded-lg font-semibold text-[14px] uppercase tracking-[0.1em] hover:scale-105 transition-transform inline-block">
                        Sell Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BuySell;
