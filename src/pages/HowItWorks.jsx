import { motion } from 'framer-motion';
import { Calendar, Droplets, MapPin, CheckCircle, Sparkles } from 'lucide-react';

const steps = [
    {
        icon: Calendar,
        title: 'Book Online',
        description: 'Choose your desired service package and pick a convenient date and time slot from our real-time calendar.',
        color: 'bg-blue-500',
        number: '1'
    },
    {
        icon: MapPin,
        title: 'We Come to You',
        description: 'Our professional, fully-equipped detailing team arrives at your specified location exactly on time.',
        color: 'bg-orange-500',
        number: '2'
    },
    {
        icon: Droplets,
        title: 'Expert Cleaning',
        description: 'We use premium products to meticulously clean, restore, and protect every surface of your vehicle.',
        color: 'bg-teal-500',
        number: '3'
    },
    {
        icon: CheckCircle,
        title: 'Enjoy Your Ride',
        description: 'Inspect the final result with our team lead. Drive away in a vehicle that looks and feels brand new.',
        color: 'bg-purple-500',
        number: '4'
    }
];

const HowItWorks = () => {
    return (
        <div className="bg-background min-h-screen py-24 relative overflow-hidden selection:bg-primary selection:text-white">
            {/* Background elements */}
            <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] -z-10"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] -z-10"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-2"
                    >
                        <Sparkles className="w-4 h-4" />
                        Simple Process
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold text-secondary tracking-tight"
                    >
                        How It <span className="text-gradient">Works</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Our seamless process is designed for your ultimate convenience. We bring the professional detailing shop directly to your driveway.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Central Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 -ml-0.5 bg-gradient-to-b from-primary/50 via-gray-200 to-transparent rounded-full" />

                    {/* Left Line (Mobile) */}
                    <div className="md:hidden absolute left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/50 via-gray-200 to-transparent rounded-full" />

                    {/* Steps */}
                    <div className="space-y-16 lg:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center md:items-start flex-col md:flex-row gap-8 lg:gap-16 group ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Center Icon */}
                                <div className={`
                                    hidden md:flex flex-col items-center justify-center w-32 flex-shrink-0 z-10
                                    ${index % 2 === 0 ? 'md:ml-auto md:-translate-x-16 lg:-translate-x-24' : 'md:mr-auto md:translate-x-16 lg:translate-x-24'}
                                `}>
                                    <div className="w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-xl bg-white border border-gray-100 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <step.icon className="w-10 h-10 text-secondary group-hover:text-primary transition-colors duration-300 relative z-10" />
                                    </div>
                                </div>

                                {/* Mobile Icon */}
                                <div className="md:hidden absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center z-10">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>

                                {/* Content Box */}
                                <div className={`
                                    w-full md:w-1/2 pl-24 md:pl-0 pt-2 md:pt-4
                                    ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}
                                `}>
                                    <div className="glass p-8 lg:p-10 rounded-[2.5rem] relative hover:ring-2 hover:ring-primary/40 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                                        <div className="absolute -top-5 -left-5 md:-top-6 md:-left-6 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-secondary to-gray-800 text-white font-black text-xl md:text-2xl rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform">
                                            {step.number}
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg font-medium">{step.description}</p>
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
