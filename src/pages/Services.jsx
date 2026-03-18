import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Hand, Sparkles, Droplet, Check, Loader2, Car, Bike } from 'lucide-react';
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
            description: 'Professional exterior and interior detailing for vehicles of all sizes.',
            items: services.filter(s => s.category === 'car') 
        },
        { 
            id: 'bike', 
            title: 'Bike Care', 
            icon: Bike,
            description: 'Expert care for your two-wheeler including degreasing and shine.',
            items: services.filter(s => s.category === 'bike') 
        }
    ];

    if (isLoading) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen py-24 relative overflow-hidden selection:bg-primary selection:text-white">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-linear-to-tr from-secondary/20 to-transparent rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-32 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary text-xs font-heading font-black tracking-[0.2em] uppercase mb-4"
                    >
                        <Sparkles size={14} />
                        Premium Detailing
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter leading-tight"
                    >
                        Elevate Your <br />
                        <span className="text-primary italic">Vehicle's Glory</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-slate-400 font-body font-medium leading-relaxed max-w-2xl mx-auto italic"
                    >
                        Experience the gold standard in doorstep detailing. We bring the showroom shine to your driveway with precision and passion.
                    </motion.p>
                </div>

                {/* Service Categories */}
                {categories.map((category, catIdx) => (
                    category.items.length > 0 && (
                        <div key={category.id} className="mb-40">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                                            <category.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-none">
                                            {category.title}
                                        </h2>
                                    </div>
                                    <p className="text-slate-500 font-body text-lg max-w-xl">
                                        {category.description}
                                    </p>
                                </div>
                                <div className="hidden md:block h-px flex-1 mx-12 bg-linear-to-r from-primary/30 to-transparent" />
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {category.items.map((service, sIdx) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ 
                                            duration: 0.8, 
                                            ease: [0.22, 1, 0.36, 1], 
                                            delay: sIdx * 0.1 
                                        }}
                                        whileHover={{ y: -12 }}
                                        className="glass-dark rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col group transition-all duration-500 hover:border-primary/30 hover:shadow-luxury-hover bg-white/5"
                                    >
                                        <div className="relative aspect-square overflow-hidden">
                                            <img 
                                                src={service.image_url || `https://source.unsplash.com/featured/?${service.name},car`} 
                                                alt={service.name} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-background via-black/20 to-transparent opacity-80" />
                                            
                                            <div className="absolute top-6 right-6">
                                                <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white font-heading font-bold italic shadow-2xl">
                                                    ₹{service.price}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-10 flex flex-col grow space-y-8">
                                            <div className="space-y-3">
                                                <h3 className="text-2xl font-heading font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    {service.name}
                                                </h3>
                                                <p className="text-slate-500 font-body text-sm line-clamp-2 leading-relaxed">
                                                    {service.description || 'Premium grooming for your vehicle using world-class chemicals and tools.'}
                                                </p>
                                            </div>

                                            <div className="space-y-4 grow">
                                                <div className="h-px bg-white/5 w-full" />
                                                <ul className="space-y-4">
                                                    {['Multi-stage cleaning', 'Premium chemicals', 'Doorstep service'].map((feat, fIdx) => (
                                                        <li key={fIdx} className="flex items-center gap-3 text-slate-400 font-body text-xs tracking-wide">
                                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                                                <Check className="w-3 h-3 text-primary" />
                                                            </div>
                                                            {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Link
                                                to={`/booking?service=${encodeURIComponent(service.name)}`}
                                                className="relative w-full py-4 text-center font-heading font-black text-secondary bg-primary rounded-2xl transition-all duration-500 overflow-hidden group/btn hover:shadow-luxury tracking-[0.2em] uppercase text-[10px]"
                                            >
                                                <span className="relative z-10 group-hover/btn:scale-105 transition-transform duration-500 inline-block">
                                                    Reserve Now
                                                </span>
                                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                )
            ))}

            {/* Final CTA */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="mt-20 p-16 rounded-[3rem] bg-linear-to-br from-white/5 to-white/0 border border-white/10 text-center relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -z-10 group-hover:bg-primary/30 transition-all duration-1000" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Need a Custom Quote?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
                    For commercial fleets, detailing shops, or special restoration projects, contact our VIP desk directly.
                </p>
                <a href="tel:+919876543210" className="inline-flex items-center gap-4 px-10 py-5 bg-white text-secondary rounded-2xl font-heading font-black tracking-widest uppercase text-sm hover:scale-105 transition-all duration-500 shadow-luxury">
                    Call Our Experts <Zap className="w-5 h-5 fill-secondary" />
                </a>
            </motion.div>
        </div>
    </div>
);
};

export default Services;
