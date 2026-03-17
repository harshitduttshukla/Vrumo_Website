import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Sparkles, Droplets, Shield, Clock, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What exactly is VRUMO Doorstep Detailing?",
        answer: "VRUMO is a premium on-demand vehicle care service that brings professional-grade detailing directly to your driveway. We combine high-end technology, eco-friendly solutions, and expert craftsmanship to deliver shop-quality results without you ever needing to leave your home or office.",
        category: "General",
        icon: Sparkles
    },
    {
        question: "Is doorstep detailing safe for my vehicle's paint?",
        answer: "Absolutely. We use professional-grade microfiber towels, pH-neutral foaming agents, and a specialized multi-bucket method to ensure no scratch or swirl is ever introduced. Our scientific approach is actually safer than most traditional automated car washes.",
        category: "Safety",
        icon: Shield
    },
    {
        question: "How much water does a VRUMO wash consume?",
        answer: "Sustainability is at our core. A typical VRUMO wash uses 90% less water than traditional hose washes. We use high-pressure steam and eco-friendly foaming agents to encapsulate dirt, which is then safely lifted away with minimal waste.",
        category: "Eco-Friendly",
        icon: Droplets
    },
    {
        question: "Do I need to be present during the service?",
        answer: "Not necessarily. As long as we have access to the vehicle and a small perimeter of space, we can perform the service while you go about your day. We'll send you a confirmation message once your vehicle has been transformed.",
        category: "Convenience",
        icon: Clock
    },
    {
        question: "What areas in Lucknow do you cover?",
        answer: "We currently cover major residential and commercial hubs in Lucknow, including Gomti Nagar, Indira Nagar, Hazratganj, and DLF MyPad. Check our booking section for real-time availability in your specific pin code.",
        category: "General",
        icon: HelpCircle
    }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`glass overflow-hidden rounded-4xl border transition-all duration-500 ${isOpen ? 'border-primary/40 shadow-2xl shadow-primary/10 bg-white' : 'border-gray-100 hover:border-gray-200'}`}
        >
            <button 
                onClick={toggle}
                className="w-full p-8 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-gray-50 text-secondary'}`}>
                        <faq.icon size={20} />
                    </div>
                    <div>
                        <span className="text-[10px] font-body font-bold text-gray-400 uppercase tracking-[0.2em] mb-1 block">{faq.category}</span>
                        <h3 className={`text-lg sm:text-xl font-heading font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-secondary' : 'text-secondary/80 group-hover:text-secondary'}`}>{faq.question}</h3>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-primary ${isOpen ? 'opacity-100' : 'opacity-40'}`}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="px-8 pb-8 pt-2">
                            <div className="h-px w-full bg-gray-100 mb-6" />
                            <p className="text-[#64748B] font-body font-normal text-base sm:text-lg leading-relaxed max-w-3xl">
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
        <div className="bg-[#F8F9FA] min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary text-white text-[10px] font-body font-bold uppercase tracking-[0.25em]"
                    >
                        <Sparkles className="w-3 h-3 text-primary" />
                        Common Queries
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-secondary tracking-tight leading-[1.05]"
                    >
                        FAQ <br />
                        <span className="text-primary">Centre</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 1, opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#64748B] font-body font-normal text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        Expert answers for your discerning questions about India's most precise doorstep detailing service.
                    </motion.p>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 rounded-[3rem] bg-secondary text-white relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
                    <div className="relative z-10 space-y-8">
                        <div>
                            <h4 className="text-2xl md:text-4xl font-heading font-bold tracking-tight mb-4 text-white">Still have questions?</h4>
                            <p className="text-white/60 font-body font-normal text-lg tracking-wide max-w-lg mx-auto">
                                Our concierge team is available to assist you with any specific detailing requirements.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-secondary px-10 py-5 rounded-2xl font-body font-bold uppercase tracking-widest text-xs shadow-xl shadow-primary/20"
                            >
                                Contact Concierge
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-body font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all"
                            >
                                Email Support
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
