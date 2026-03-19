import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Droplets, 
    Wrench, 
    ShieldCheck, 
    ArrowLeftRight, 
    ArrowRight 
} from 'lucide-react';

const Services = () => {
    const services = [
        { 
            title: "Vehicle Wash", 
            description: "Deep foam cleaning at your doorstep. Eco-friendly and fast.",
            image: "/images/v_wash.png",
            icon: Droplets,
            link: "/services/wash"
        },
        { 
            title: "Vehicle Maintenance", 
            description: "Expert diagnostics and repairs by certified mechanics.",
            image: "/images/v_maintenance.png",
            icon: Wrench,
            link: "/services/maintenance"
        },
        { 
            title: "Vehicle Insurance", 
            description: "Reliable coverage and digital-first claims processing.",
            image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=2069",
            icon: ShieldCheck,
            link: "/services/insurance"
        },
        { 
            title: "Buy & Sell Vehicles", 
            description: "Best market value and verified deals for cars and bikes.",
            image: "/images/buy_sell_user.jpg",
            icon: ArrowLeftRight,
            link: "/services/buy-sell"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-48 pb-24 px-6">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="text-center space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight italic">Our Ecosystem</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Explore our comprehensive suite of vehicle care services. Everything you need, one platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {services.map((service, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-[3rem] bg-[#0a0a0a] border border-white/5 flex flex-col"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img src={service.image} className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[1.5s] group-hover:scale-105" alt={service.title} />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
                                <div className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-3xl flex items-center justify-center border border-white/10">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                            <div className="p-12 space-y-6 flex-1 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-bold tracking-tight">{service.title}</h2>
                                    <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                                </div>
                                <div className="pt-8">
                                    <Link to={service.link} className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em] text-sm group-hover:gap-6 transition-all duration-300">
                                        Explore Service <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
