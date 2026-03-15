import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
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
    }
];

const PricingCard = ({ plan, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className={`relative bg-white rounded-[2.5rem] overflow-hidden shadow-premium border border-gray-100 flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
            plan.popular ? 'lg:scale-105 ring-2 ring-primary/20 bg-white z-10' : ''
        }`}
    >
        {plan.popular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-primary text-white px-8 py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 whitespace-nowrap">
                    {plan.badge}
                </div>
            </div>
        )}

        {/* Top Image Banner */}
        <div className="relative aspect-[16/10] overflow-hidden">
            <img 
                src={plan.image} 
                alt={plan.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="p-8 flex-grow flex flex-col pt-4">
            <div className="mb-8">
                <h3 className="text-2xl font-black text-secondary tracking-tighter uppercase italic leading-none">{plan.name}</h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2 leading-tight">{plan.subtitle}</p>
            </div>

            <div className="flex items-baseline gap-2 mb-10">
                <span className="text-5xl font-black text-secondary tracking-tighter italic">₹{plan.price}</span>
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{plan.unit}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                        <div className="bg-emerald-50 p-1 rounded-full">
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-tight">{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                to={`/booking?plan=${encodeURIComponent(plan.name)}`}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    plan.popular
                        ? 'bg-secondary text-white hover:bg-primary shadow-xl shadow-secondary/10 active:scale-95'
                        : 'bg-gray-50 text-secondary hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 active:scale-95'
                }`}
            >
                {plan.buttonText} 
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
        </div>
    </motion.div>
);

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredPlans = pricingPlans.filter(plan => 
        activeTab === 'All' ? plan.type === 'Car' : plan.type === activeTab
    );

    return (
        <div className="bg-[#F8F9FA] min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        <Sparkles className="w-3 h-3 text-primary" />
                        Professional Plans
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-secondary tracking-tighter uppercase italic leading-[0.9]"
                    >
                        Transparent <br />
                        <span className="text-primary not-italic tracking-normal">Smart Pricing</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 font-medium italic text-lg"
                    >
                        No hidden fees. Premium doorstep convenience in Lucknow.
                    </motion.p>
                </div>

                {/* Pill Filter Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex p-1.5 bg-white rounded-full shadow-premium border border-gray-100">
                        {['All', 'Car', 'Bike'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-10 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                                    activeTab === tab
                                        ? 'text-white'
                                        : 'text-secondary hover:bg-gray-50'
                                }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-secondary rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredPlans.slice(0, 4).map((plan, idx) => (
                            <PricingCard key={plan.name} plan={plan} index={idx} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Info Footer */}
                <div className="mt-20 p-10 rounded-[3rem] bg-secondary text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h4 className="text-2xl font-black tracking-tight mb-2">Need a Custom Fleet Package?</h4>
                            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Available for corporate offices and premium apartment complexes.</p>
                        </div>
                        <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 text-xs">
                            Request Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
