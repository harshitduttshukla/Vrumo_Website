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
            className={`overflow-hidden rounded-xl border transition-all duration-500 ${isOpen ? 'border-[#2563EB] bg-[#F8F8F8] shadow-[0_8px_32px_rgba(0,0,0,0.06)]' : 'border-[#EFEFEF] bg-white hover:border-[#2563EB]/30'}`}
        >
            <button 
                onClick={toggle}
                className="w-full p-8 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white hover:from-[#1E40AF] hover:to-[#1D4ED8]' : 'bg-[#2563EB]/10 text-[#2563EB]'}`}>
                        <faq.icon size={24} />
                    </div>
                    <div>
                        <span className="text-[10px] font-black text-[#888888] uppercase tracking-[0.4em] mb-2 block">{faq.category}</span>
                        <h3 className={`text-xl font-bold tracking-tight transition-colors duration-500 ${isOpen ? 'text-[#0A0A0A]' : 'text-[#2C2C2C] group-hover:text-[#0A0A0A]'}`}>{faq.question}</h3>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    className={`text-[#2563EB] ${isOpen ? 'opacity-100' : 'opacity-40'}`}
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
                            <div className="h-px w-full bg-[#E5E5E5]" />
                            <p className="text-[#888888] font-medium text-lg leading-relaxed max-w-4xl">
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
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 overflow-hidden selection:bg-[#2563EB] selection:text-white">
            <div className="max-w-5xl mx-auto space-y-24 relative z-10">
                
                {/* Header */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="premium-badge mx-auto">
                        <Zap className="w-4 h-4 text-[#2563EB]" />
                        Common Queries
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-[0.03em]">Knowledge <br /> <span className="text-[#2563EB]">Base</span></h1>
                    <p className="text-[#888888] text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
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
                <div className="mt-32 p-16 md:p-24 rounded-2xl bg-[#F8F8F8] border border-[#EFEFEF] text-center relative overflow-hidden group">
                    <div className="relative z-10 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.03em] text-[#0A0A0A] leading-none">Still Have Questions?</h2>
                            <p className="text-[#888888] font-medium text-xl max-w-2xl mx-auto leading-relaxed">
                                Our support team is standing by to assist you with any specific requirements or fleet deals.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6 uppercase tracking-widest font-black text-xs">
                            <Link to="/contact" className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] !text-white px-12 py-6 rounded-md flex items-center justify-center gap-3 border-none hover:from-[#1E40AF] hover:to-[#1D4ED8] hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                                Contact Support <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/booking" className="bg-white text-[#0A0A0A] border border-[#EFEFEF] px-12 py-6 rounded-md hover:border-[#2563EB] hover:text-[#2563EB] transition-all">
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
