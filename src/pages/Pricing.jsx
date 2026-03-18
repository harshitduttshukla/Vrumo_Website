import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
    {
        name: "Exterior Wash",
        type: "Car",
        subtitle: "High-pressure foam wash",
        price: "199",
        unit: "/ wash",
        image: "/images/car_foam_wash.png",
        features: ["Foam Wash", "Tyre Cleaning", "Exterior Polish", "Quick Dry Finish"],
        popular: false,
        buttonText: "Book Now"
    },
    {
        name: "Interior Cleaning",
        type: "Car",
        subtitle: "Vacuuming and dashboard polishing",
        price: "399",
        unit: "/ wash",
        image: "/images/car_interior.png",
        features: ["Interior Vacuum", "Dashboard Polish", "Door Trim Clean", "Dust Removal"],
        popular: false,
        buttonText: "Book Now"
    },
    {
        name: "Full Deep Cleaning",
        type: "Car",
        badge: "Our Best Value",
        subtitle: "Complete interior and exterior detailing",
        price: "999",
        unit: "/ wash",
        image: "/images/hero_main.png",
        features: ["Full Exterior Wash", "Full Interior Clean", "Engine Bay Clean", "Wax Application", "Seat Deep Cleaning"],
        popular: true,
        buttonText: "Get This Service"
    },
    {
        name: "Ceramic Coating",
        type: "Car",
        subtitle: "Premium paint protection",
        price: "2999",
        unit: "/ service",
        image: "/images/ceramic_coating.png",
        features: ["Multi-stage Wash", "Paint Correction", "Ceramic Layer", "Gloss Protection"],
        popular: false,
        buttonText: "Schedule Wash"
    },
    {
        name: "Bike Foam Wash",
        type: "Bike",
        subtitle: "Standard bike cleaning",
        price: "99",
        unit: "/ wash",
        image: "/images/bike_foam_wash.png",
        features: ["Foam Wash", "Chain Lubrication", "Tyre Shine", "Chrome Polish"],
        popular: false,
        buttonText: "Book Now"
    },
    {
        name: "Bike Polish",
        type: "Bike",
        badge: "Deep Shine",
        subtitle: "Premium body restoration",
        price: "249",
        unit: "/ wash",
        image: "/images/bike_polishing.png",
        features: ["Wax Restoration", "Body Shine", "Plastic Trim Care", "Degreasing"],
        popular: true,
        buttonText: "Get Bike Polish"
    }
];

const PricingCard = ({ plan, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -15 }}
        className={`relative overflow-hidden flex flex-col group animate-float ${
            plan.popular ? 'card-featured lg:scale-105 z-10' : 'card-premium'
        }`}
        style={{ animationDelay: `${index * 0.6}s` }}
    >
        {plan.popular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-primary text-secondary px-8 py-2 rounded-b-2xl text-[10px] font-heading font-black uppercase tracking-[0.3em] shadow-glow whitespace-nowrap">
                    {plan.badge}
                </div>
            </div>
        )}

        <div className="relative aspect-[16/10] overflow-hidden">
            <img 
                src={plan.image} 
                alt={plan.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#030612] via-transparent to-transparent"></div>
        </div>

        <div className="p-8 grow flex flex-col pt-6">
            <div className="mb-8">
                <h3 className="text-3xl font-heading font-bold text-white tracking-tighter group-hover:text-primary transition-colors duration-500">{plan.name}</h3>
                <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mt-3 leading-tight">{plan.subtitle}</p>
            </div>

            <div className="flex items-baseline gap-3 mb-10">
                <span className="text-6xl font-heading font-bold text-white tracking-tighter">₹{plan.price}</span>
                <span className="text-slate-500 font-body font-black uppercase text-[10px] tracking-[0.3em]">{plan.unit}</span>
            </div>

            <ul className="space-y-4 mb-10 grow pt-6">
                <div className="card-divider mb-4" />
                {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="card-feature-item">
                        <div className="card-feature-dot" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full relative z-10">
                <Link
                    to={`/booking?plan=${encodeURIComponent(plan.name)}`}
                    className={`w-full py-6 rounded-[2rem] font-heading font-black uppercase tracking-[0.4em] text-[11px] transition-all duration-500 flex items-center justify-center gap-4 group/btn overflow-hidden ${
                        plan.popular
                            ? 'bg-primary text-secondary shadow-glow'
                            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}
                >
                    <span className="relative z-10 flex items-center gap-3">
                        {plan.buttonText} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                </Link>
            </motion.div>
        </div>
    </motion.div>
);

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredPlans = pricingPlans.filter(plan => 
        activeTab === 'All' ? true : plan.type === activeTab
    );

    return (
        <div className="min-h-screen relative overflow-hidden selection:bg-primary selection:text-secondary">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-40 pb-32">
                
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-24 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.6em] backdrop-blur-3xl shadow-glow"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        Professional Care Plans
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.85]"
                    >
                        Transparent <br />
                        <span className="text-gradient">Bespoke Pricing</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-slate-400 font-body font-light text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto tracking-wide"
                    >
                        Uncompromising quality, delivered with scientific precision. Explore our curated rituals for automotive excellence.
                    </motion.p>
                </div>

                {/* Pill Filter Tabs */}
                <div className="flex justify-center mb-24">
                    <div className="inline-flex p-2 bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] border border-white/5 shadow-premium">
                        {['All', 'Car', 'Bike'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-12 py-5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${
                                    activeTab === tab
                                        ? 'text-secondary'
                                        : 'text-slate-500 hover:text-white'
                                }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary rounded-[2rem] shadow-glow"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    <AnimatePresence mode="wait">
                        {filteredPlans.map((plan, idx) => (
                            <PricingCard key={plan.name} plan={plan} index={idx} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Final CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 card-cta p-16 md:p-20 text-center group"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,255,0.05),transparent_70%)] pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-10">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter">Need a Corporate <span className="text-gradient">Fleet Package?</span></h2>
                            <p className="text-slate-400 max-w-3xl mx-auto font-body text-xl font-light leading-relaxed tracking-wide">
                                We offer bespoke arrangements for luxury apartment complexes, premium office spaces, and private collectors.
                            </p>
                        </div>
                        <motion.div whileHover={{ y: -8, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/contact" className="inline-flex items-center gap-6 px-16 py-8 bg-white text-secondary rounded-[3rem] font-heading font-black tracking-[0.4em] uppercase text-sm hover:shadow-premium transition-all duration-700 group/concierge shadow-glow">
                                Request VIP Consultation <Zap className="w-5 h-5 fill-secondary group-hover:scale-125 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;
