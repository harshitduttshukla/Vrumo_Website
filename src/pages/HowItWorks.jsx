import { motion } from 'framer-motion';
import { Calendar, Droplets, MapPin, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    {
        icon: Calendar,
        title: 'Bespoke Reservation',
        description: 'Select your desired ritual and secure a window in our master artisans\' calendar with our seamless digital interface.',
        number: '01'
    },
    {
        icon: MapPin,
        title: 'Concierge Arrival',
        description: 'Our fully-equipped mobile laboratory arrives at your sanctuary precisely at the appointed hour, ready for transformation.',
        number: '02'
    },
    {
        icon: Droplets,
        title: 'The Ritual of Care',
        description: 'Utilizing world-class bio-molecular solutions and surgical precision, we restore every micron of your vehicle\'s glory.',
        number: '03'
    },
    {
        icon: CheckCircle,
        title: 'Final Handover',
        description: 'A comprehensive briefing and inspection. We return your transformed asset, ready for the most demanding roads.',
        number: '04'
    }
];

const HowItWorks = () => {
    return (
        <div className="min-h-screen relative overflow-hidden selection:bg-primary selection:text-secondary">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-40 pb-32">
                
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-32 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-primary font-black text-[11px] uppercase tracking-[0.5em] backdrop-blur-3xl shadow-glow"
                    >
                        <Sparkles className="w-4 h-4" />
                        The Excellence Protocol
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.85]"
                    >
                        Seamless <br />
                        <span className="text-gradient">Transformation</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-slate-400 font-body font-light text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto tracking-wide"
                    >
                        Our meticulously engineered workflow ensures an effortless experience. We bring the elite detailing laboratory directly to your sanctuary.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/30 via-white/10 to-transparent hidden md:block" />

                    {/* Steps Implementation */}
                    <div className="space-y-24 md:space-y-40">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative flex items-center md:items-start flex-col md:flex-row gap-12 group ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Central Indicator */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-4 hidden md:flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-primary shadow-glow group-hover:scale-150 transition-transform duration-500" />
                                </div>

                                {/* Step Number Overlay for Mobile */}
                                <div className="md:hidden w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-heading font-black text-primary text-xl shadow-glow">
                                    {step.number}
                                </div>

                                {/* Content Box */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'}`}>
                                    <motion.div 
                                        whileHover={{ y: -15 }}
                                        className={`card-premium p-10 relative ${
                                            index % 2 === 0 ? 'text-left' : 'md:text-right'
                                        }`}
                                    >
                                        <div className="mb-8 flex items-center gap-6 group-hover:gap-8 transition-all duration-500">
                                            <div className="card-icon w-16 h-16 rounded-2xl ml-0 mr-auto md:mx-0">
                                                <step.icon className="w-8 h-8 text-primary" />
                                            </div>
                                            <span className="hidden md:block font-heading font-black text-5xl text-white/5 group-hover:text-primary/10 transition-all duration-700">
                                                {step.number}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 group-hover:text-primary transition-colors duration-500 tracking-tighter leading-none">{step.title}</h3>
                                        <p className="text-slate-400 font-body font-light leading-relaxed text-lg tracking-wide group-hover:text-slate-200 transition-colors duration-500">{step.description}</p>
                                    </motion.div>
                                </div>
                                
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center space-y-12"
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter leading-none">Ready for the <span className="text-gradient">Transformation?</span></h2>
                    <motion.div whileHover={{ y: -5, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/booking" className="inline-flex items-center gap-6 px-20 py-10 bg-primary text-secondary rounded-[3rem] font-heading font-black tracking-[0.4em] uppercase text-xl shadow-glow hover:shadow-[0_0_80px_rgba(0,210,255,0.4)] transition-all">
                            Initiate Protocol <ArrowRight className="w-8 h-8" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HowItWorks;
