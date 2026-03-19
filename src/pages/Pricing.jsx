import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ecosystemPricing = [
    {
        name: "Vehicle Wash",
        category: "Care",
        subtitle: "Doorstep deep foam wash",
        price: "199",
        unit: "/ wash",
        features: ["Foam Wash", "Tyre Dressing", "Interior Vacuum", "Eco-Friendly"],
        popular: true,
        buttonText: "Book Wash"
    },
    {
        name: "Maintenance",
        category: "Expert",
        subtitle: "Professional diagnostics",
        price: "799",
        unit: "/ service",
        features: ["Engine Check", "Oil Change", "Brake Check", "Digital Report"],
        popular: false,
        buttonText: "Book Checkup"
    },
    {
        name: "Insurance",
        category: "Safety",
        subtitle: "Monthly protection",
        price: "499",
        unit: "/ month",
        features: ["Zero-Depreciation", "Cashless Claim", "Digital-First", "3rd Party Prot."],
        popular: false,
        buttonText: "Get Quote"
    },
    {
        name: "Buy & Sell",
        category: "Deals",
        subtitle: "Professional valuation",
        price: "0",
        unit: "Fee",
        features: ["200+ Point Inspection", "Verified History", "Instant Payout", "RC Transfer"],
        popular: false,
        buttonText: "Get Valuation"
    }
];

const PricingCard = ({ plan, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className={`relative overflow-hidden flex flex-col group rounded-2xl bg-white border p-9 transition-all ${
            plan.popular ? 'border-[#C9A84C] border-2 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(201,168,76,0.12)]' : 'border-[#EFEFEF] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)]'
        } hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)]`}
    >
        {/* Gold gradient top line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C]" />

        {plan.popular && (
            <div className="absolute top-8 right-8 bg-[#C9A84C] text-[#0A0A0A] px-6 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em]">
                Most Popular
            </div>
        )}

        <div className="mb-10 space-y-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8] rounded-[14px] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sparkles className="w-[26px] h-[26px] text-[#C9A84C]" strokeWidth={1.8} />
            </div>
            <div>
                <h3 className="text-[28px] font-bold text-[#0A0A0A]">{plan.name}</h3>
                <p className="text-[11px] font-medium text-[#888888] uppercase tracking-[0.1em] mt-2">{plan.subtitle}</p>
            </div>
        </div>

        <div className="flex items-baseline gap-2 mb-10">
            <span className="text-[56px] font-bold text-[#0A0A0A]">₹{plan.price}</span>
            <span className="text-[#888888] font-semibold uppercase text-[11px] tracking-[0.1em]">{plan.unit}</span>
        </div>

        <ul className="space-y-6 mb-12 grow pt-8 border-t border-[#EFEFEF]">
            {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex gap-4 items-center">
                    <Check className="w-4 h-4 text-[#C9A84C]" strokeWidth={1.8} />
                    <span className="text-[#555555] text-[15px] font-normal leading-[1.7]">{feature}</span>
                </li>
            ))}
        </ul>

        <Link
            to={`/booking?service=${plan.name.toLowerCase()}`}
            className={`w-full py-4 rounded-lg font-semibold tracking-[-0.01em] text-[15px] transition-all duration-300 text-center flex items-center justify-center gap-4 relative overflow-hidden group/btn ${
                plan.popular
                    ? 'bg-[#0A0A0A] text-[#C9A84C] border-2 border-[#0A0A0A] hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-[#0A0A0A] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]'
                    : 'bg-[#F8F8F8] text-[#0A0A0A] border-2 border-[#EFEFEF] hover:border-[#C9A84C] hover:text-[#C9A84C] hover:-translate-y-0.5'
            }`}
        >
            {plan.buttonText} <ArrowRight className="w-4 h-4" />
        </Link>
    </motion.div>
);

const Pricing = () => {
    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32 relative z-10">
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1>Ecosystem <span className="text-[#C9A84C]">Pricing</span></h1>
                        <p className="text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed font-normal">
                            Transparent, direct, and zero-hassle pricing for every vehicle care ritual.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ecosystemPricing.map((plan, idx) => (
                        <PricingCard key={plan.name} plan={plan} index={idx} />
                    ))}
                </div>

                {/* Info Card */}
                <div className="relative p-16 rounded-2xl bg-[#F8F8F8] border border-[#EFEFEF] text-center space-y-8 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C]" />
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8] rounded-[14px] flex items-center justify-center mx-auto">
                        <Zap className="w-[26px] h-[26px] text-[#C9A84C]" strokeWidth={1.8} />
                    </div>
                    <h2 className="text-[#0A0A0A]">Need a Corporate Plan?</h2>
                    <p className="text-[#555555] max-w-2xl mx-auto text-[15px] leading-[1.7]">
                        We offer special arrangements for fleets, office hubs, and premium residential spaces. Get a custom low-pricing quote.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-4 text-[#C9A84C] font-semibold tracking-[-0.01em] text-[15px] hover:underline">
                        Contact Sales <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
