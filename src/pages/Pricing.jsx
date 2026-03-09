import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
    {
        name: "Basic Wash",
        price: "₹99",
        type: "Car & Bike",
        description: "Perfect for regular maintenance",
        features: [
            { name: "Exterior Foam Wash", included: true },
            { name: "Tyre Dressing", included: true },
            { name: "Dashboard Polish", included: false },
            { name: "Interior Vacuum", included: false },
            { name: "Wax Coating", included: false }
        ],
        popular: false
    },
    {
        name: "Interior Cleaning",
        price: "₹199",
        type: "Car",
        description: "Deep clean for your cabin",
        features: [
            { name: "Exterior Foam Wash", included: false },
            { name: "Tyre Dressing", included: false },
            { name: "Dashboard Polish", included: true },
            { name: "Interior Vacuum", included: true },
            { name: "Wax Coating", included: false }
        ],
        popular: false
    },
    {
        name: "Premium Wash",
        price: "₹399",
        type: "Car & Bike",
        description: "Our most popular comprehensive package",
        features: [
            { name: "Exterior Foam Wash", included: true },
            { name: "Tyre Dressing", included: true },
            { name: "Dashboard Polish", included: true },
            { name: "Interior Vacuum", included: true },
            { name: "Wax Coating", included: false }
        ],
        popular: true
    },
    {
        name: "Deep Cleaning",
        price: "₹999",
        type: "Car",
        description: "Showroom-finish restoration",
        features: [
            { name: "Exterior Foam Wash", included: true },
            { name: "Tyre Dressing", included: true },
            { name: "Dashboard Polish", included: true },
            { name: "Interior Vacuum", included: true },
            { name: "Wax Coating", included: true }
        ],
        popular: false
    }
];

const Pricing = () => {
    const [vehicleType, setVehicleType] = useState('All');

    const filteredPlans = pricingPlans.filter(plan => vehicleType === 'All' || plan.type.includes(vehicleType));

    return (
        <div className="bg-background min-h-[calc(100vh-80px)] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
                        Transparent <span className="text-primary italic">Pricing</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Simple, upfront pricing. No hidden fees. Choose the package that best fits your vehicle's needs.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex bg-gray-100 rounded-full p-1 shadow-inner relative">
                        {['All', 'Car', 'Bike'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setVehicleType(type)}
                                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${vehicleType === type
                                        ? 'text-secondary shadow-md'
                                        : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {vehicleType === type && (
                                    <motion.div
                                        layoutId="pricing-bubble"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                                    />
                                )}
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredPlans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 border ${plan.popular
                                    ? 'border-primary shadow-2xl scale-105 z-10'
                                    : 'border-gray-200 shadow-xl'
                                } flex flex-col h-full`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-secondary mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-500 min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-extrabold text-secondary">{plan.price}</span>
                                <span className="text-gray-500 ml-2">/ service</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center text-sm">
                                        {feature.included ? (
                                            <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                        ) : (
                                            <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                                        )}
                                        <span className={feature.included ? 'text-gray-700 font-medium' : 'text-gray-400 line-through'}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={`/booking?plan=${encodeURIComponent(plan.name)}`}
                                className={`block w-full py-4 text-center rounded-xl font-bold transition-all ${plan.popular
                                        ? 'bg-primary text-secondary hover:bg-yellow-400 shadow-[0_0_15px_rgba(255,184,0,0.3)]'
                                        : 'bg-gray-100 text-secondary hover:bg-gray-200'
                                    }`}
                            >
                                Choose Plan
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Pricing;
