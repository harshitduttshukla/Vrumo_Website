import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Hand, Sparkles, Droplet, Check } from 'lucide-react';

const serviceCategories = [
    {
        title: 'Car Cleaning',
        description: 'Professional exterior and interior detailing for vehicles of all sizes.',
        services: [
            {
                name: 'Exterior Wash',
                price: '₹199',
                features: ['High-pressure foam wash', 'Tyre cleaning', 'Exterior polish'],
                icon: Droplet,
                popular: false
            },
            {
                name: 'Interior Cleaning',
                price: '₹399',
                features: ['Vacuuming', 'Dashboard polishing', 'Door trim clean'],
                icon: Hand,
                popular: false
            },
            {
                name: 'Full Deep Cleaning',
                price: '₹999',
                features: ['Complete interior Detailing', 'Exterior deep wash', 'Engine bay cleaning'],
                icon: Sparkles,
                popular: true
            },
            {
                name: 'Ceramic Coating',
                price: '₹2999',
                features: ['Premium paint protection', 'Multi-stage wash', 'Hydrophobic finish'],
                icon: Zap,
                popular: false
            },
        ],
    },
    {
        title: 'Bike Cleaning',
        description: 'Expert care for your two-wheeler including degreasing and shine.',
        services: [
            {
                name: 'Bike Wash',
                price: '₹99',
                features: ['Foam wash', 'Chain cleaning', 'Tyre shine'],
                icon: Droplet,
                popular: false
            },
            {
                name: 'Bike Polish',
                price: '₹249',
                features: ['Wax polish restoration', 'Body shine', 'Plastic trim care'],
                icon: Sparkles,
                popular: true
            },
        ],
    },
];

const Services = () => {
    return (
        <div className="bg-background min-h-screen py-24 selection:bg-primary selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold text-secondary mb-6 tracking-tight"
                    >
                        Our <span className="text-gradient">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 font-medium leading-relaxed"
                    >
                        We offer a comprehensive range of detailing services designed to restore, protect, and maintain your vehicle's appearance.
                    </motion.p>
                </div>

                {/* Categories */}
                {serviceCategories.map((category, idx) => (
                    <div key={idx} className="mb-32 relative">
                        <div className="mb-12 border-b border-gray-100 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h2 className="text-4xl font-extrabold text-secondary mb-3">{category.title}</h2>
                                <p className="text-gray-500 text-lg">{category.description}</p>
                            </div>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {category.services.map((service, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: sIdx * 0.1 }}
                                    className={`glass rounded-3xl p-8 transition-all duration-300 group relative overflow-hidden flex flex-col ${
                                        service.popular ? 'ring-2 ring-primary shadow-xl shadow-primary/10 scale-105 z-10' : 'hover:ring-1 hover:ring-primary/50 hover:shadow-2xl'
                                    }`}
                                >
                                    {service.popular && (
                                        <div className="absolute top-5 right-5 bg-gradient-to-r from-primary to-emerald-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            Popular
                                        </div>
                                    )}

                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-primary/5 transition-all duration-300 shadow-sm border border-gray-100 group-hover:border-primary/20">
                                        <service.icon className="h-8 w-8 text-secondary group-hover:text-primary transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-secondary mb-2">{service.name}</h3>
                                    <div className="text-4xl font-extrabold text-primary mb-8 tracking-tight">{service.price}</div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start text-gray-600 font-medium">
                                                <div className="bg-primary/20 p-1 rounded-full mr-3 mt-0.5">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={`/booking?service=${encodeURIComponent(service.name)}`}
                                        className={`block w-full py-4 text-center font-bold rounded-xl transition-all duration-300 ${
                                            service.popular 
                                            ? 'bg-secondary text-white hover:bg-gray-800 shadow-lg shadow-secondary/20 hover:shadow-secondary/40' 
                                            : 'bg-white text-secondary border border-gray-200 hover:border-primary hover:bg-gray-50'
                                        }`}
                                    >
                                        Select Package
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
