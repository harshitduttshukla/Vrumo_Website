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
        image: "/images/v_wash.png",
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
        image: "/images/v_maintenance.png",
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
        image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=2069",
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
        image: "/images/buy_sell_user.jpg",
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
        whileHover={{ y: -10 }}
        className={`relative overflow-hidden flex flex-col group rounded-[3rem] bg-[#0a0a0a] border border-white/5 p-10 ${
            plan.popular ? 'border-primary/50' : ''
        }`}
    >
        {plan.popular && (
            <div className="absolute top-8 right-8 bg-primary text-secondary px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                Most Popular
            </div>
        )}

        <div className="mb-10 space-y-4">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-colors">
                <Sparkles className="w-6 h-6 text-primary group-hover:text-secondary" />
            </div>
            <div>
                <h3 className="text-3xl font-black italic">{plan.name}</h3>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mt-2">{plan.subtitle}</p>
            </div>
        </div>

        <div className="flex items-baseline gap-2 mb-10">
            <span className="text-6xl font-black italic">₹{plan.price}</span>
            <span className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">{plan.unit}</span>
        </div>

        <ul className="space-y-6 mb-12 grow pt-8 border-t border-white/5">
            {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex gap-4 items-center">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-gray-400 text-sm font-medium">{feature}</span>
                </li>
            ))}
        </ul>

        <Link
            to={`/booking?service=${plan.name.toLowerCase()}`}
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-500 text-center flex items-center justify-center gap-4 ${
                plan.popular
                    ? 'bg-primary text-secondary'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
            }`}
        >
            {plan.buttonText} <ArrowRight className="w-4 h-4" />
        </Link>
    </motion.div>
);

const Pricing = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32 relative z-10">
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight italic">Ecosystem <span className="text-primary italic">Pricing</span></h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
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
                <div className="p-16 rounded-[4rem] bg-white/2 border border-white/5 text-center space-y-8 shadow-2xl">
                    <Zap className="w-12 h-12 text-primary mx-auto shadow-glow" />
                    <h2 className="text-4xl md:text-5xl font-bold italic">Need a Corporate Plan?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We offer special arrangements for fleets, office hubs, and premium residential spaces. Get a custom low-pricing quote.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-sm hover:underline">
                        Contact Sales <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
