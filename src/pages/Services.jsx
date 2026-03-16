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
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-secondary mb-8 tracking-tight"
                    >
                        Our <span className="text-primary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 font-body font-medium leading-relaxed tracking-wide"
                    >
                        We offer a comprehensive range of detailing services designed to restore, protect, and maintain your vehicle's appearance.
                    </motion.p>
                </div>

                {/* Categories */}
                {serviceCategories.map((category, idx) => (
                    <div key={idx} className="mb-32 relative">
                        <div className="mb-12 border-b border-gray-100 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4 tracking-tight">{category.title}</h2>
                                <p className="text-[#64748B] font-body font-normal text-lg max-w-2xl">{category.description}</p>
                            </div>
                            <div className="w-24 h-1 bg-linear-to-r from-primary to-transparent rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {category.services.map((service, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: sIdx * 0.1 }}
                                    whileHover={{ 
                                        y: service.popular ? -4 : -10,
                                        boxShadow: service.popular 
                                            ? "0 40px 100px -20px rgba(0, 210, 255, 0.15), 0 20px 50px -12px rgba(0, 210, 255, 0.1)"
                                            : "0 40px 100px -20px rgba(15, 23, 42, 0.08), 0 20px 50px -12px rgba(15, 23, 42, 0.03)"
                                    }}
                                    className={`glass rounded-3xl p-8 transition-all duration-300 group relative overflow-hidden flex flex-col ${
                                        service.popular 
                                        ? 'ring-2 ring-primary shadow-xl scale-105 z-10 bg-white' 
                                        : 'hover:ring-1 hover:ring-primary/20 bg-white/50'
                                    }`}
                                >
                                    {service.popular && (
                                        <div className="absolute top-5 right-5 bg-linear-to-r from-primary to-accent text-white text-[10px] font-heading font-extrabold px-4 py-1.5 rounded-full shadow-sm uppercase tracking-widest z-20">
                                            Popular
                                        </div>
                                    )}

                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-700"></div>

                                    <div className="w-16 h-16 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-transparent">
                                        <service.icon className="h-8 w-8 text-secondary group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-secondary mb-2 tracking-tight">{service.name}</h3>
                                    <div className="text-4xl font-heading font-bold text-primary mb-10 tracking-tight italic">{service.price}</div>

                                    <ul className="space-y-4 mb-10 grow">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start text-[#64748B] font-body font-normal text-[14px] tracking-wide">
                                                <div className="bg-primary/20 p-1 rounded-full mr-3 mt-0.5">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            to={`/booking?service=${encodeURIComponent(service.name)}`}
                                            className={`block w-full py-4 text-center font-body font-bold rounded-xl transition-all duration-300 tracking-widest uppercase text-xs ${
                                                service.popular 
                                                ? 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-gray-800' 
                                                : 'bg-white text-secondary border border-gray-200 hover:border-primary hover:bg-gray-50'
                                            }`}
                                        >
                                            Select Package
                                        </Link>
                                    </motion.div>
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
