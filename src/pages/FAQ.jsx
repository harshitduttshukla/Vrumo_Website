import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Sparkles, Droplets, Shield, Clock, HelpCircle, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "What exactly is VRUMO Doorstep Detailing?",
        answer: "VRUMO is an elite, on-demand vehicle care collective that brings professional-grade detailing directly to your sanctuary. We combine high-end technology, bio-molecular solutions, and surgical precision to deliver shop-quality results without you ever needing to leave your residence or office.",
        category: "The Concept",
        icon: Sparkles
    },
    {
        question: "Is doorstep detailing safe for my vehicle's finish?",
        answer: "Absolutely. We utilize professional-grade microfiber instruments, pH-neutral foaming agents, and a specialized multi-bucket decontamination method to ensure no micro-marring is ever introduced. Our scientific protocol is significantly safer than traditional automated car washes.",
        category: "Safety Protocols",
        icon: Shield
    },
    {
        question: "How do you achieve conservation in hydration?",
        answer: "Sustainability is at our core. A typical VRUMO ritual consumes 90% less water than traditional methods. We utilize high-pressure thermal vapor and bio-organic agents to encapsulate particulate matter, which is then safely lifted away with zero environmental impact.",
        category: "Sustainability",
        icon: Droplets
    },
    {
        question: "Is my presence required during the transformation?",
        answer: "Not necessarily. As long as our artisans have secure access to the vehicle and a minimal perimeter of space, we can execute the transformation while you attend to more important matters. We will provide a digital confirmation once your asset is ready.",
        category: "Concierge Convenience",
        icon: Clock
    },
    {
        question: "Which territories in Lucknow do you service?",
        answer: "We currently provide exclusive coverage to major residential and commercial hubs in Lucknow, including Gomti Nagar, Indira Nagar, Hazratganj, and the DLF MyPad enclave. Consult our real-time interface for specific availability in your territory.",
        category: "Territorial Coverage",
        icon: HelpCircle
    }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`overflow-hidden rounded-[2.5rem] border transition-all duration-700 ${isOpen ? 'border-primary/40 shadow-glow bg-white/[0.05]' : 'border-white/5 bg-white/[0.02] hover:border-white/20'}`}
        >
            <button 
                onClick={toggle}
                className="w-full p-8 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${isOpen ? 'bg-primary text-secondary scale-110 shadow-glow' : 'bg-white/5 text-primary border border-white/5'}`}>
                        <faq.icon size={24} />
                    </div>
                    <div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2 block">{faq.category}</span>
                        <h3 className={`text-xl font-heading font-bold tracking-tighter transition-colors duration-500 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{faq.question}</h3>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-primary ${isOpen ? 'opacity-100' : 'opacity-40'}`}
                >
                    <ChevronDown size={28} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="px-10 pb-10 pt-2">
                            <div className="h-px w-full bg-white/5 mb-8" />
                            <p className="text-slate-400 font-body font-light text-lg leading-relaxed max-w-4xl tracking-wide group-hover:text-slate-300 transition-colors">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-[#030612] min-h-screen relative overflow-hidden selection:bg-primary selection:text-secondary">
            {/* Cinematic Background */}
            <div className="fixed inset-0 bg-noise pointer-events-none z-50" />
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-royal/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-40 pb-32">
                
                {/* Header */}
                <div className="text-center mb-24 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-primary font-black text-[10px] uppercase tracking-[0.6em] backdrop-blur-3xl shadow-glow"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        Common Queries
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.85]"
                    >
                        The <br />
                        <span className="text-gradient">Knowledge Lexicon</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-slate-400 font-body font-light text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto tracking-wide"
                    >
                        Expert answers to your discerning inquiries regarding India's most precise automotive detailing collective.
                    </motion.p>
                </div>

                {/* FAQ List */}
                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-16 md:p-24 rounded-[4rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group shadow-premium"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,210,255,0.05),transparent_70%)] pointer-events-none" />
                    
                    <div className="relative z-10 space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-white leading-none">Further Inquiries?</h4>
                            <p className="text-slate-400 font-body font-light text-xl tracking-wide max-w-2xl mx-auto leading-relaxed">
                                Our bespoke concierge team is standing by to assist you with any specific requirements or fleet arrangements.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-secondary px-12 py-6 rounded-[2rem] font-heading font-black uppercase tracking-[0.4em] text-[11px] shadow-glow flex items-center justify-center gap-3"
                            >
                                Contact Concierge <Zap className="w-4 h-4 fill-secondary" />
                            </motion.button>
                            <Link to="/booking" className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-3xl text-white border border-white/10 px-12 py-6 rounded-[2rem] font-heading font-black uppercase tracking-[0.4em] text-[11px] hover:bg-white/10 transition-all shadow-premium group">
                                Initiate Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
