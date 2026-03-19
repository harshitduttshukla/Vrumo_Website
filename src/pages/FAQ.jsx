import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Sparkles, Droplets, Shield, Clock, HelpCircle, ArrowRight, Zap, MapPin, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "What is the Vrumo Vehicle Care Ecosystem?",
        answer: "Vrumo is an all-in-one platform for your vehicle. We offer doorstep wash, professional maintenance, hassle-free insurance, and trusted buy/sell deals. Everything your car or bike needs is now in one simple place.",
        category: "The Platform",
        icon: Sparkles
    },
    {
        question: "Is the doorstep wash safe for my paint?",
        answer: "Yes. We use advanced eco-friendly foam and low-water techniques that are safer than traditional high-pressure washes. Our certified pros use clean microfiber tools to ensure a scratch-free showroom shine every time.",
        category: "Service Quality",
        icon: Droplets
    },
    {
        question: "How do maintenance bookings work?",
        answer: "Simply select 'Maintenance' on our booking page, pick a date, and shared your location. A certified mechanic will arrive at your doorstep with precision tools to handle oil changes, checkups, and minor repairs.",
        category: "Maintenance",
        icon: Wrench
    },
    {
        question: "Can I get an insurance quote instantly?",
        answer: "Yes. Our platform integrates with top insurance providers. You can upload your vehicle details and get a digital-first quote with zero paperwork. We also assist with immediate cashless claim setups.",
        category: "Insurance",
        icon: Shield
    },
    {
        question: "What areas do you currently cover?",
        answer: "We are currently active in Bengaluru and major metro hubs. We offer 24/7 support and doorstep availability in select residential and commercial sectors. Check our booking map for real-time availability in your area.",
        category: "Availability",
        icon: MapPin
    }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`overflow-hidden rounded-[2rem] border transition-all duration-500 ${isOpen ? 'border-primary/40 bg-white/5 shadow-2xl' : 'border-white/5 bg-white/2 hover:border-white/20'}`}
        >
            <button 
                onClick={toggle}
                className="w-full p-8 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary text-secondary' : 'bg-white/5 text-primary'}`}>
                        <faq.icon size={24} />
                    </div>
                    <div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2 block">{faq.category}</span>
                        <h3 className={`text-xl font-bold italic tracking-tight transition-colors duration-500 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{faq.question}</h3>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
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
                        transition={{ duration: 0.4 }}
                    >
                        <div className="px-10 pb-10 pt-2 space-y-4">
                            <div className="h-px w-full bg-white/5" />
                            <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-4xl">
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
        <div className="min-h-screen bg-[#050505] text-white pt-48 pb-24 px-6 overflow-hidden selection:bg-primary selection:text-secondary">
            <div className="max-w-5xl mx-auto space-y-24 relative z-10">
                
                {/* Header */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-primary font-black text-[10px] uppercase tracking-[0.6em]">
                        <Zap className="w-4 h-4 text-primary" />
                        Common Queries
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight italic">Knowledge <br /> <span className="text-primary italic">Base</span></h1>
                    <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
                        Plain answers to your questions about our vehicle care ecosystem.
                    </p>
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
                <div className="mt-32 p-16 md:p-24 rounded-[4rem] bg-white/2 border border-white/5 text-center relative overflow-hidden group shadow-2xl">
                    <div className="relative z-10 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-bold italic tracking-tight text-white leading-none">Still Have Questions?</h2>
                            <p className="text-gray-400 font-medium text-xl max-w-2xl mx-auto leading-relaxed">
                                Our support team is standing by to assist you with any specific requirements or fleet deals.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6 uppercase tracking-widest font-black text-xs">
                            <Link to="/contact" className="bg-primary text-secondary px-12 py-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                                Contact Support <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/booking" className="bg-white/5 text-white border border-white/10 px-12 py-6 rounded-2xl hover:bg-white/10 transition-all">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
