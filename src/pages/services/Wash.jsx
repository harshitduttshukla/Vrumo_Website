import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    CheckCircle2, 
    ArrowRight,
    Zap,
    ShieldCheck,
    Droplets,
    Sparkles,
    Car,
    Smartphone
} from 'lucide-react';

// Import images
import vWashImg from '../../assets/images/v_wash_doorstep.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.1 } 
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const WASH_PACKAGES = {
    instant: [
        { 
            id: 'swift', 
            name: 'Vrumo Swift Wash', 
            desc: 'Quick exterior refresh with Pressure Washer. 30-40 mins.', 
            price: 299,
            unit: '/ session',
            include: ['PH-neutral shampoo foam', 'Pressure rinse (Microfiber dry)', 'Tyre & rim wipe (dressing)', 'Windshield clean']
        },
        { 
            id: 'signature', 
            name: 'Vrumo Signature Wash', 
            desc: 'Full exterior + interior refresh with Pressure Washer.', 
            price: 549,
            unit: '/ session',
            tag: 'BESTSELLER',
            include: ['Everything in Swift Wash', 'Dashboard & console UV dressing', 'Full interior vacuum (incl. boot)', 'Odour neutraliser spray']
        },
    ],
    monthly: [
        { 
            id: 'colony_care', 
            name: 'Vrumo Colony Care', 
            desc: '4 professional washes/month. Always on schedule.', 
            price: 999,
            unit: '/ mo',
            include: ['4 High-pressure foam pre-soaks', 'Pressure rinse + Microfiber dry', 'Tyre cleaning + shine dressing', 'Before/after photo proof']
        },
        { 
            id: 'colony_elite', 
            name: 'Vrumo Colony Elite', 
            desc: '4 foam washes + full interior every visit.', 
            price: 1499,
            unit: '/ mo',
            tag: 'FEATURED',
            include: ['Everything in Colony Care', 'Full interior vacuum every visit', 'UV dressing on all panels', 'Paint wax seal (Quarterly)']
        },
    ],
    society: [
        { 
            id: 'society_shield', 
            name: 'Vrumo Society Shield', 
            desc: 'Alt-day bucket wash + weekly interior. RWA compliant.', 
            price: 2000,
            unit: '/ mo',
            include: ['13-14 Alt-day bucket washes', 'PH-neutral lab-tested chemicals', 'Weekly full interior care', 'Dedicated slot: 6:30-8:00 AM']
        },
        { 
            id: 'society_prestige', 
            name: 'Vrumo Society Prestige', 
            desc: 'Alt-day bucket + interior 4x + quarterly detail.', 
            price: 2800,
            unit: '/ mo',
            tag: 'ULTIMATE',
            include: ['13-14 Alt-day bucket washes', 'Premium nano-ceramic seal (Monthly)', 'Weekly deep interior clean', 'Quarterly mini-detail included']
        },
    ],
    deep: [
        { 
            id: 'cabin', 
            name: 'Cabin Detox', 
            desc: 'Full cabin deep clean. Like new inside.', 
            price: 1499, 
            unit: '/ session',
            include: [
                'Full vacuum (incl. under seats & boot)',
                'Dashboard, console & AC vents deep clean',
                'Interior roof lining & door panels wipe',
                'Seat fabric cleaning (Dry shampoo)',
                'Odour eliminator & cabin freshener'
            ]
        },
        { 
            id: 'paint', 
            name: 'Paint Refresh', 
            desc: 'Multi-step exterior decontamination and seal.', 
            price: 1799, 
            unit: '/ session',
            include: [
                'Snow foam pre-soak & Two-bucket wash',
                'Tar & iron decontamination spray',
                'Clay bar treatment (removes dirt)',
                'Liquid carnauba wax hand application',
                'Headlight & tail light polish'
            ]
        },
        { 
            id: 'grand', 
            name: 'Vrumo Grand Detox', 
            desc: 'Complete interior + exterior. Nothing skipped.', 
            price: 2499, 
            unit: '/ session', 
            tag: 'PREMIUM',
            include: [
                'Everything in Cabin + Paint Refresh',
                'Engine bay external wipe',
                'Windshield water-repellent (2 months)',
                'Nano ceramic spray sealant (30-day)',
                'Digital service certificate'
            ]
        },
    ],
};

const Wash = () => {
    const [segment, setSegment] = useState('instant');
    // const [vehicleType, setVehicleType] = useState('sedan');

    const segments = [
        { id: 'instant', name: 'Instant', icon: Zap, color: 'text-orange-500' },
        { id: 'monthly', name: 'Colony', icon: Droplets, color: 'text-blue-500' },
        { id: 'society', name: 'Society', icon: ShieldCheck, color: 'text-emerald-500' },
        { id: 'deep', name: 'Deep Clean', icon: Sparkles, color: 'text-purple-500' },
    ];

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#2563EB] selection:text-white font-sans overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2563EB]/5 rounded-l-[200px] blur-3xl -z-10" />
                
                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
                        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-[0.03em] text-[#0A0A0A]">
                            Premium <span className="text-[#2563EB]">Wash</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
                            Doorstep cleaning for the modern vehicle owner. From instant refreshes to quarterly detailing.
                        </motion.p>
                        <motion.div variants={itemVariants} className="pt-8 flex justify-center gap-6">
                            <Link to="/booking?service=wash" className="btn-premium inline-flex items-center gap-4 transition-all hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
                                Book Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a href="#plans" className="btn-outline inline-flex items-center gap-4">
                                View Plans
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SEGMENT SELECTOR */}
            <section id="plans" className="py-24 px-6 bg-[#F8F8F8] border-y border-[#EFEFEF]">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold section-title">Select Your Plan</h2>
                        <p className="text-gray-500">Pick the perfect wash model for your lifestyle</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {segments.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setSegment(s.id)}
                                className={`flex items-center gap-3 px-8 py-4 rounded-xl border-2 transition-all duration-300 font-bold ${
                                    segment === s.id 
                                    ? `bg-white border-[#2563EB] shadow-lg ${s.color}` 
                                    : 'bg-white/50 border-gray-200 text-gray-400 hover:border-gray-300'
                                }`}
                            >
                                <s.icon className="w-5 h-5" />
                                {s.name}
                            </button>
                        ))}
                    </div>

                    {/* Vehicle Toggle removed as per request */}

                    {/* Plans Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={segment + vehicleType}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-wrap justify-center gap-8"
                        >
                            {WASH_PACKAGES[segment].map((pkg) => {
                                const price = pkg.price;
                                return (
                                    <div key={pkg.id} className="card-premium h-full flex flex-col group">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                                                {pkg.tag && (
                                                    <span className="inline-block bg-blue-100 text-[#2563EB] text-[10px] font-black uppercase px-2 py-1 rounded">
                                                        {pkg.tag}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-3xl font-black text-[#2563EB]">₹{price}</div>
                                                <div className="text-[10px] uppercase font-bold text-gray-400">{pkg.unit}</div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                            {pkg.desc}
                                        </p>

                                        {pkg.include && (
                                            <ul className="space-y-4 mb-10 grow">
                                                {pkg.include.map((item, idx) => (
                                                    <li key={idx} className="flex gap-3 text-sm text-gray-600">
                                                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <Link to={`/booking?service=wash&pkg=${pkg.id}`} className="w-full btn-premium justify-center">
                                            Book Now
                                        </Link>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold section-title">The Vrumo Workflow</h2>
                        <div className="space-y-10">
                            {[
                                { title: "App-Connected Tracking", desc: "Live status updates and photo proofs on your phone.", icon: Smartphone },
                                { title: "Pressure Washer Tech", desc: "We use portable 120-bar washers for deep grime removal.", icon: Car },
                                { title: "RWA-Safe Methods", desc: "Eco-optimized water usage suitable for gated societies.", icon: ShieldCheck }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                        <step.icon className="w-6 h-6 text-[#2563EB]" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold">{step.title}</h4>
                                        <p className="text-gray-500 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card-luxury rounded-2xl overflow-hidden aspect-video relative group">
                        <img src={vWashImg} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vrumo Technician Cleaning" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-10">
                            <p className="text-white font-medium italic">"Precision detailing at your designated slot."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 px-6 bg-linear-to-br from-[#1D4ED8] via-[#2563EB] to-[#60A5FA] relative overflow-hidden">
                <div className="absolute inset-0 luxury-pattern opacity-20" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                
                <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">Ready for a Showcase?</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
                            Join 500+ car owners in Lucknow who trust Vrumo for their daily care. Get that showroom shine today.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/booking" className="inline-flex items-center gap-4 bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all shadow-xl active:scale-95 group">
                            Schedule First Wash 
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Wash;
