import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Sparkles, Check, Loader2, Car, Bike, ArrowRight } from 'lucide-react';
import { fetchServices } from '../api';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await fetchServices();
                setServices(data.filter(s => s.is_active));
            } catch (err) {
                console.error("Failed to fetch services:", err);
            } finally {
                setIsLoading(false);
            }
        };
        loadServices();
    }, []);

    const categories = [
        { 
            id: 'car', 
            title: 'Car Detailing', 
            icon: Car,
            description: 'Uncompromising exterior and interior rejuvenation for your automotive masterpiece.',
            items: services.filter(s => s.category === 'car') 
        },
        { 
            id: 'bike', 
            title: 'Bike Care', 
            icon: Bike,
            description: 'Precision engineering meets aesthetic perfection. Expert care for the ultimate ride.',
            items: services.filter(s => s.category === 'bike') 
        }
    ];

    if (isLoading) {
        return (
            <div className="bg-[#030612] min-h-screen flex items-center justify-center">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full border-t-2 border-primary animate-spin" />
                    <Loader2 className="w-8 h-8 text-primary absolute inset-0 m-auto animate-pulse" />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative overflow-hidden selection:bg-primary selection:text-secondary">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-32 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-4"
                    >
                        <Sparkles size={14} />
                        The Excellence Manifesto
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tighter leading-[0.9] mb-8"
                    >
                        Automotive <br />
                        <span className="text-gradient">Perfection</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-xl md:text-2xl text-slate-400 font-body font-light leading-relaxed max-w-3xl mx-auto tracking-wide"
                    >
                        Discover our curated selection of bespoke detailing services, designed for those who demand nothing less than extraordinary.
                    </motion.p>
                </div>

                {/* Service Categories */}
                {categories.map((category, catIdx) => (
                    category.items.length > 0 && (
                        <div key={category.id} className="mb-40 last:mb-20">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6">
                                        <div className="p-4 bg-primary/10 rounded-3xl border border-primary/20 backdrop-blur-xl shadow-glow">
                                            <category.icon className="w-10 h-10 text-primary" />
                                        </div>
                                        <h2 className="text-5xl md:text-6xl font-heading font-bold text-white tracking-tighter">
                                            {category.title}
                                        </h2>
                                    </div>
                                    <p className="text-slate-500 font-body text-xl max-w-2xl font-light tracking-wide leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                                <div className="hidden md:block h-px flex-1 mx-16 bg-linear-to-r from-primary/30 to-transparent self-center mb-6" />
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                {category.items.map((service, sIdx) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ 
                                            duration: 1, 
                                            ease: [0.22, 1, 0.36, 1], 
                                            delay: sIdx * 0.1 
                                        }}
                                        whileHover={{ y: -15 }}
                                        className="card-premium group relative flex flex-col overflow-hidden animate-float"
                                        style={{ animationDelay: `${sIdx * 0.4}s` }}
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden">
                                            <img 
                                                src={service.image_url || `https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800`} 
                                                alt={service.name} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-80 group-hover:opacity-100" 
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-[#030612] via-[#030612]/20 to-transparent" />
                                            
                                            <div className="absolute top-8 left-8">
                                                <div className="px-6 py-2 bg-black/60 backdrop-blur-2xl rounded-2xl border border-white/10 text-primary font-heading font-bold text-lg shadow-2xl">
                                                    ₹{service.price}
                                                </div>
                                            </div>

                                            <div className="absolute bottom-8 left-8 right-8 space-y-4">
                                                <h3 className="text-3xl font-heading font-bold text-white tracking-tighter leading-none group-hover:text-primary transition-colors duration-500">
                                                    {service.name}
                                                </h3>
                                                <p className="text-slate-400 font-body text-sm font-light line-clamp-2 leading-relaxed tracking-wide">
                                                    {service.description || 'Premium grooming for your vehicle using world-class chemicals and tools.'}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-10 pt-4 flex flex-col space-y-8 h-full">
                                            <div className="space-y-5">
                                                <div className="h-px bg-white/5 w-full" />
                                                <ul className="space-y-4">
                                                    {['Multi-stage decontamination', 'Premium synthetic sealants', 'Bespoke precision tools'].map((feat, fIdx) => (
                                                        <li key={fIdx} className="flex items-center gap-4 text-slate-400 font-body text-xs tracking-[0.1em] uppercase group/item">
                                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 transition-all duration-500 group-hover/item:bg-primary group-hover/item:border-primary">
                                                                <Check className="w-3 h-3 text-primary group-hover/item:text-secondary" />
                                                            </div>
                                                            {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Link
                                                to={`/booking?service=${encodeURIComponent(service.name)}`}
                                                className="relative w-full py-5 text-center font-heading font-black text-secondary bg-primary rounded-[2rem] transition-all duration-500 overflow-hidden group/btn hover:shadow-glow tracking-[0.3em] uppercase text-[11px]"
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-3">
                                                    Initiate Service <ArrowRight className="w-4 h-4" />
                                                </span>
                                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )
                ))}

                {/* Final CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 card-cta p-16 md:p-20 text-center group"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,255,0.05),transparent_70%)] pointer-events-none" />
                    
                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter leading-none">The VIP <span className="text-gradient">Protocol</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-body text-xl font-light leading-relaxed tracking-wide">
                        For exotic fleets, vintage restoration, or corporate concierge arrangements, our private desk is at your disposal.
                    </p>
                    <a href="tel:+919876543210" className="inline-flex items-center gap-6 px-12 py-6 bg-white text-secondary rounded-[2rem] font-heading font-black tracking-[0.3em] uppercase text-sm hover:scale-105 transition-all duration-700 shadow-premium group/tel">
                        Consult Our Detailing Masters <Zap className="w-5 h-5 fill-secondary group-hover:scale-125 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
