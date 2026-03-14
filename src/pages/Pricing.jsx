import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
    {
        name: "Exterior Wash",
        price: "199",
        type: "Car",
        description: "High-pressure foam wash",
        features: [
            { name: "Foam Wash", included: true },
            { name: "Tyre Cleaning", included: true },
            { name: "Exterior Polish", included: true },
            { name: "Interior Vacuum", included: false }
        ],
        popular: false
    },
    {
        name: "Interior Cleaning",
        price: "399",
        type: "Car",
        description: "Vacuuming and dashboard polishing",
        features: [
            { name: "Interior Vacuum", included: true },
            { name: "Dashboard Polish", included: true },
            { name: "Door Trim Clean", included: true },
            { name: "Upholstery Brush", included: true }
        ],
        popular: false
    },
    {
        name: "Full Deep Cleaning",
        price: "999",
        type: "Car",
        description: "Complete interior and exterior detailing",
        features: [
            { name: "Full Exterior Wash", included: true },
            { name: "Full Interior Clean", included: true },
            { name: "Engine Bay Clean", included: true },
            { name: "Wax Application", included: true }
        ],
        popular: true
    },
    {
        name: "Ceramic Coating",
        price: "2999",
        type: "Car",
        description: "Premium paint protection",
        features: [
            { name: "Multi-stage Wash", included: true },
            { name: "Paint Correction", included: true },
            { name: "Ceramic Layer", included: true },
            { name: "Hydrophobic Finish", included: true }
        ],
        popular: false
    },
    {
        name: "Bike Wash",
        price: "99",
        type: "Bike",
        description: "Foam wash for bikes",
        features: [
            { name: "Pressure Foam", included: true },
            { name: "Chain Clean", included: true },
            { name: "Tyre Shine", included: true }
        ],
        popular: false
    }
];

const Pricing = () => {
    const [vehicleType, setVehicleType] = useState('All');

    const filteredPlans = pricingPlans.filter(plan => vehicleType === 'All' || plan.type.includes(vehicleType));

    return (
        <div className="bg-background min-h-[calc(100vh-80px)] py-20 relative selection:bg-primary selection:text-white">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full blur-[100px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold text-secondary mb-6 tracking-tight"
                    >
                        Transparent <span className="text-gradient">Pricing</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 mb-10 font-medium"
                    >
                        No hidden fees. Just brilliant results. Choose the package that best fits your vehicle's needs.
                    </motion.p>

                    {/* Toggle */}
                    <div className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-full p-1.5 shadow-inner relative ring-1 ring-gray-200/50">
                        {['All', 'Car', 'Bike'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setVehicleType(type)}
                                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                                    vehicleType === type
                                        ? 'text-white'
                                        : 'text-gray-500 hover:text-secondary'
                                }`}
                            >
                                {vehicleType === type && (
                                    <motion.div
                                        layoutId="pricing-bubble"
                                        className="absolute inset-0 bg-secondary rounded-full shadow-md -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                    {filteredPlans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`glass rounded-[2rem] p-8 transition-all duration-300 flex flex-col h-full group ${
                                plan.popular
                                    ? 'ring-2 ring-primary shadow-2xl lg:-translate-y-4 scale-105 z-10 bg-white/90'
                                    : 'hover:ring-1 hover:ring-primary/40 hover:shadow-2xl'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-emerald-400 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Our Best Value
                                </div>
                            )}

                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full blur-2xl -z-10 group-hover:bg-primary/10 transition-colors"></div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{plan.name}</h3>
                                <p className="text-sm text-gray-500 font-medium min-h-[40px] leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline">
                                <span className="text-5xl font-extrabold text-secondary tracking-tight">{plan.price}</span>
                                <span className="text-gray-500 ml-2 font-medium">/ wash</span>
                            </div>

                            <ul className="space-y-5 mb-10 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center text-sm font-medium">
                                        {feature.included ? (
                                            <div className="bg-primary/20 p-1 rounded-full mr-4 flex-shrink-0">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                        ) : (
                                            <div className="bg-gray-100 p-1 rounded-full mr-4 flex-shrink-0">
                                                <X className="h-4 w-4 text-gray-400" />
                                            </div>
                                        )}
                                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through decoration-gray-300'}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={`/booking?plan=${encodeURIComponent(plan.name)}`}
                                className={`block w-full py-4 text-center rounded-xl font-bold transition-all duration-300 shadow-sm ${
                                    plan.popular
                                        ? 'bg-secondary text-white hover:bg-gray-800 shadow-xl shadow-secondary/20'
                                        : 'bg-white text-secondary border border-gray-200 hover:border-primary hover:bg-gray-50'
                                }`}
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Pricing;
