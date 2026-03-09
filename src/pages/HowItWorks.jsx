import { motion } from 'framer-motion';
import { Calendar, Droplets, MapPin, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: Calendar,
        title: 'Book Online',
        description: 'Choose your desired service package and pick a convenient date and time slot from our real-time calendar.',
        color: 'bg-blue-100 text-blue-600',
        number: '1'
    },
    {
        icon: MapPin,
        title: 'We Come to You',
        description: 'Our professional, fully-equipped detailing team arrives at your specified location exactly on time.',
        color: 'bg-yellow-100 text-yellow-600',
        number: '2'
    },
    {
        icon: Droplets,
        title: 'Expert Cleaning',
        description: 'We use premium products to meticulously clean, restore, and protect every surface of your vehicle.',
        color: 'bg-green-100 text-green-600',
        number: '3'
    },
    {
        icon: CheckCircle,
        title: 'Enjoy Your Ride',
        description: 'Inspect the final result with our team lead. Drive away in a vehicle that looks and feels brand new.',
        color: 'bg-purple-100 text-purple-600',
        number: '4'
    }
];

const HowItWorks = () => {
    return (
        <div className="bg-background min-h-[calc(100vh-80px)] py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
                        How It <span className="text-primary italic">Works</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our seamless process is designed for your ultimate convenience. We bring the professional detailing shop directly to your driveway.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-primary/30 to-primary/0 md:left-1/2 md:-ml-0.5 rounded-full" />

                    {/* Steps */}
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center md:items-start flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Visual Number & Icon Box */}
                                <div className={`
                  hidden md:flex flex-col items-center justify-center w-32 h-32 flex-shrink-0 z-10
                  ${index % 2 === 0 ? 'md:ml-auto md:mr-16 md:-translate-x-1/2' : 'md:mr-auto md:ml-16 md:translate-x-1/2'}
                `}>
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg bg-white border-2 border-primary rotate-3 transition-transform hover:rotate-0`}>
                                        <step.icon className="w-10 h-10 text-secondary" />
                                    </div>
                                </div>

                                {/* Mobile Icon Box (Absolute center line replacement) */}
                                <div className="md:hidden absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white border border-primary flex items-center justify-center z-10">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>

                                {/* Content */}
                                <div className={`
                  w-full md:w-1/2 pl-24 md:pl-0 pt-2 md:pt-6
                  ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}
                `}>
                                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative group hover:border-primary/30 hover:shadow-xl transition-all">
                                        <span className="absolute -top-4 -left-4 w-10 h-10 bg-secondary text-primary font-bold text-lg rounded-xl flex items-center justify-center shadow-md">
                                            {step.number}
                                        </span>
                                        <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
