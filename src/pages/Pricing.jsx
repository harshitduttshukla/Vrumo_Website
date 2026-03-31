import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Zap, Sparkles, Droplets, Wrench, ShieldCheck, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import vWashImg from '../assets/images/v_wash_doorstep.png';
import vMaintenanceImg from '../assets/images/v_maintenance_doorstep.png';
import vInsuranceImg from '../assets/images/v_insurance_doorstep.png';
import buySellImg from '../assets/images/buy_sell_doorstep_v2.png';

const WASH_PACKAGES = {
    instant: [
        { 
            id: 'swift', 
            name: 'Vrumo Swift Wash', 
            subtitle: 'Quick exterior refresh at doorstep',
            price: "299",
            unit: "/ session",
            image: vWashImg,
            features: ['PH-neutral shampoo foam', 'Pressure rinse (Microfiber dry)', 'Tyre & rim wipe (dressing)', 'Windshield clean'],
            popular: false,
            buttonText: "Book Swift"
        },
        { 
            id: 'signature', 
            name: 'Vrumo Signature Wash', 
            subtitle: 'Full exterior + interior refresh',
            price: "549",
            unit: "/ session",
            image: vWashImg,
            features: ['Everything in Swift Wash', 'Dashboard & console UV dressing', 'Full interior vacuum', 'Odour neutraliser spray'],
            popular: true,
            buttonText: "Book Signature"
        },
    ],
    monthly: [
        { 
            id: 'colony_care', 
            name: 'Vrumo Colony Care', 
            subtitle: 'Colony / Open Parking Monthly',
            price: "999",
            unit: "/ month",
            image: vWashImg,
            features: ['4 High-pressure foam washes', 'Pressure rinse + Microfiber dry', 'Tyre cleaning + shine', 'Before/after photo proof'],
            popular: false,
            buttonText: "Join Colony"
        },
    ],
    society: [
        { 
            id: 'society_shield', 
            name: 'Vrumo Society Shield', 
            subtitle: 'Gated Society Monthly',
            price: "2000",
            unit: "/ month",
            image: vWashImg,
            features: ['13-14 Alt-day bucket washes', 'PH-neutral lab-tested chemicals', 'Weekly full interior care', 'Dedicated RWA slot'],
            popular: true,
            buttonText: "Join Society"
        },
        { 
            id: 'society_prestige', 
            name: 'Vrumo Society Prestige', 
            subtitle: 'Premium Gated Monthly',
            price: "2800",
            unit: "/ month",
            image: vWashImg,
            features: ['13-14 Alt-day bucket washes', 'Premium nano-ceramic seal', 'Weekly deep interior clean', 'Quarterly mini-detail'],
            popular: false,
            buttonText: "Join Prestige"
        },
    ],
    deep: [
        { 
            id: 'cabin', 
            name: 'Cabin Detox', 
            subtitle: 'Interior-only deep detailing',
            price: "1499",
            unit: "/ session",
            image: vWashImg,
            features: [
                'Full interior vacuum (incl. under seats & boot)',
                'Dashboard, console & AC vents deep clean',
                'Interior roof lining & door panels wipe',
                'Seat fabric cleaning (Dry shampoo)',
                'Odour eliminator & cabin freshener'
            ],
            popular: false,
            buttonText: "Book Cabin"
        },
        { 
            id: 'paint', 
            name: 'Paint Refresh', 
            subtitle: 'Exterior decontamination + seal',
            price: "1799",
            unit: "/ session",
            image: vWashImg,
            features: [
                'Snow foam pre-soak & Two-bucket wash',
                'Tar & iron decontamination spray',
                'Clay bar treatment (removes dirt)',
                'Liquid carnauba wax hand application',
                'Headlight & tail light polish'
            ],
            popular: false,
            buttonText: "Book Paint"
        },
        { 
            id: 'grand', 
            name: 'Vrumo Grand Detox', 
            subtitle: 'Complete interior + exterior details',
            price: "2499",
            unit: "/ session",
            image: vWashImg,
            features: [
                'Everything in Cabin + Paint Refresh',
                'Engine bay external wipe',
                'Windshield water-repellent (2 months)',
                'Nano ceramic spray sealant (30-day)',
                'Digital service certificate'
            ],
            popular: true,
            buttonText: "Book Grand"
        },
    ],
};

const VALUE_SERVICES = [
    {
        name: "Maintenance",
        subtitle: "Professional diagnostics",
        price: "799",
        unit: "/ service",
        image: vMaintenanceImg,
        icon: Wrench,
        features: ["Engine Check", "Oil Change", "Brake Check", "Digital Report"],
        buttonText: "Book Checkup"
    },
    {
        name: "Insurance",
        subtitle: "Monthly protection",
        price: "499",
        unit: "/ month",
        image: vInsuranceImg,
        icon: ShieldCheck,
        features: ["Zero-Depreciation", "Cashless Claim", "Digital-First", "3rd Party Prot."],
        buttonText: "Get Quote"
    },
    {
        name: "Buy & Sell",
        subtitle: "Professional valuation",
        price: "0",
        unit: "Fee",
        image: buySellImg,
        icon: ArrowLeftRight,
        features: ["200+ Point Inspection", "Verified History", "Instant Payout", "RC Transfer"],
        buttonText: "Get Valuation"
    }
];

const PricingCard = ({ plan, index, isSmall = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className={`relative overflow-hidden flex flex-col group rounded-2xl bg-white border p-6 transition-all ${
            plan.popular ? 'border-[#2563EB] border-2 shadow-2xl' : 'border-[#EFEFEF] shadow-sm'
        } hover:shadow-2xl`}
    >
        {plan.popular && (
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#93C5FD] to-[#2563EB]" />
        )}

        <div className={`relative -mx-6 -mt-6 mb-8 overflow-hidden ${isSmall ? 'h-32' : 'h-48'}`}>
            <img 
                src={plan.image} 
                alt={plan.name} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
            {plan.popular && (
                <div className="absolute top-3 left-3 bg-[#2563EB] text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                    Popular Choice
                </div>
            )}
        </div>

        <div className="mb-4">
            <h3 className={`${isSmall ? 'text-xl' : 'text-2xl'} font-bold text-[#0A0A0A]`}>{plan.name}</h3>
            <p className="text-[10px] font-bold text-[#888888] uppercase tracking-[0.15em] mt-1">{plan.subtitle}</p>
        </div>

        <div className="flex items-baseline gap-2 mb-8">
            <span className={`${isSmall ? 'text-3xl' : 'text-4xl'} font-black text-[#0A0A0A]`}>₹{plan.price}</span>
            <span className="text-[#888888] font-bold uppercase text-[10px] tracking-widest">{plan.unit}</span>
        </div>

        <ul className="space-y-4 mb-8 grow border-t border-[#EFEFEF] pt-6">
            {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[#555555] text-sm leading-snug">{feature}</span>
                </li>
            ))}
        </ul>

        <Link
            to={`/booking?service=${plan.name.toLowerCase()}`}
            className={`w-full py-4 rounded-xl font-bold tracking-tight text-sm transition-all duration-300 text-center flex items-center justify-center gap-3 active:scale-[0.98] ${
                plan.popular
                    ? 'bg-[#2563EB] text-white hover:bg-royal hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)]'
                    : 'bg-[#F8F8F8] text-[#0A0A0A] border-2 border-[#EFEFEF] hover:border-[#2563EB] hover:text-[#2563EB]'
            }`}
        >
            {plan.buttonText} <ArrowRight className="w-4 h-4" />
        </Link>
    </motion.div>
);

const Pricing = () => {
    const [segment, setSegment] = useState('instant');

    const segments = [
        { id: 'instant', name: 'Instant', icon: Zap },
        { id: 'monthly', name: 'Colony', icon: Droplets },
        { id: 'society', name: 'Society', icon: ShieldCheck },
        { id: 'deep', name: 'Deep Clean', icon: Sparkles },
    ];

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="text-center space-y-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Pricing 2025</span>
                        <h1 className="text-5xl md:text-7xl">Transparent <span className="text-[#2563EB]">Pricing</span></h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            No hidden fees. No bucket-washer scams. Just pure, tech-enabled vehicle care at Lucknow's most competitive rates.
                        </p>
                    </motion.div>

                    {/* Wash Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 bg-[#F8F8F8] p-2 rounded-2xl max-w-fit mx-auto border border-[#EFEFEF]">
                        {segments.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setSegment(s.id)}
                                className={`flex items-center gap-3 px-8 py-3.5 rounded-xl transition-all font-bold text-sm ${
                                    segment === s.id 
                                    ? 'bg-white text-[#2563EB] shadow-md border border-[#EFEFEF]' 
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                <s.icon className="w-4 h-4" />
                                {s.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Wash Plans Grid */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={segment}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    >
                        {WASH_PACKAGES[segment].map((plan, idx) => (
                            <PricingCard key={plan.id} plan={plan} index={idx} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* --- VALUE SERVICES (SECONDARY) --- */}
                <div className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold">Ecosystem Pillars</h2>
                        <p className="text-gray-500">Beyond detailing. Complete life-cycle management.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {VALUE_SERVICES.map((plan, idx) => (
                            <PricingCard key={plan.name} plan={plan} index={idx} isSmall={true} />
                        ))}
                    </div>
                </div>

                {/* --- FINAL CTA --- */}
                <div className="relative p-16 rounded-3xl bg-[#2563EB] text-center space-y-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 luxury-pattern" />
                    <div className="relative z-10 space-y-8 text-white">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[24px] flex items-center justify-center mx-auto border border-white/20">
                            <ArrowLeftRight className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-white text-4xl md:text-5xl">Corporate & Fleet Plans</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
                            Managing 10+ vehicles? Get a dedicated technician and custom low-pricing for your society or office hub.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-[#2563EB] px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl">
                            Request Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
