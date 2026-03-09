import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Hand, Sparkles, Droplet } from 'lucide-react';

const serviceCategories = [
    {
        title: 'Car Cleaning',
        description: 'Professional exterior and interior detailing for vehicles of all sizes.',
        services: [
            {
                name: 'Basic Wash',
                price: '₹299',
                features: ['Foam wash', 'Tyre dressing', 'Dashboard Polish'],
                icon: Droplet,
            },
            {
                name: 'Interior Deep Clean',
                price: '₹699',
                features: ['Vacuum cleaning', 'Seat dry cleaning', 'AC vent cleaning'],
                icon: Hand,
            },
            {
                name: 'Full Detailing',
                price: '₹1499',
                features: ['Exterior + Interior', 'Wax polishing', 'Engine bay cleaning'],
                icon: Sparkles,
            },
            {
                name: 'Ceramic Coating',
                price: '₹4999',
                features: ['Multi-step correction', '9H ceramic layer', '2 Year durability'],
                icon: Zap,
            },
        ],
    },
    {
        title: 'Bike Cleaning',
        description: 'Expert care for your two-wheeler including degreasing and shine.',
        services: [
            {
                name: 'Bike Wash',
                price: '₹149',
                features: ['Pressure foam wash', 'Chain cleaning', 'Tyre polish'],
                icon: Droplet,
            },
            {
                name: 'Full Detailing',
                price: '₹499',
                features: ['Wash + Polish', 'Chain lubing', 'Teflon coating'],
                icon: Sparkles,
            },
        ],
    },
];

const Services = () => {
    return (
        <div className="bg-background min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-secondary mb-6"
                    >
                        Our <span className="text-primary border-b-4 border-primary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        We offer a comprehensive range of detailing services designed to restore, protect, and maintain your vehicle's appearance.
                    </motion.p>
                </div>

                {/* Categories */}
                {serviceCategories.map((category, idx) => (
                    <div key={idx} className="mb-24">
                        <div className="mb-12 border-b border-gray-200 pb-4">
                            <h2 className="text-3xl font-bold text-secondary mb-2">{category.title}</h2>
                            <p className="text-gray-500">{category.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {category.services.map((service, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: sIdx * 0.1 }}
                                    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>

                                    <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-secondary mb-2">{service.name}</h3>
                                    <div className="text-3xl font-extrabold text-primary mb-6">{service.price}</div>

                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center text-gray-600 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={`/booking?service=${encodeURIComponent(service.name)}`}
                                        className="block w-full py-3 px-4 bg-gray-50 hover:bg-primary text-secondary text-center font-bold rounded-xl transition-colors border border-gray-200 hover:border-primary group-hover:shadow-md"
                                    >
                                        Select Plan
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
