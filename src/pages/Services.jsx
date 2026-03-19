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
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="text-center space-y-6">
                    <h1>Our Ecosystem</h1>
                    <p className="text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
                        Explore our comprehensive suite of vehicle care services. Everything you need, one platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {services.map((service, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -6 }}
                            className="group relative overflow-hidden rounded-2xl bg-white border border-[#EFEFEF] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] flex flex-col hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-all"
                        >
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#C9A84C] z-10" />
                            <div className="aspect-video relative overflow-hidden">
                                <img src={service.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt={service.title} />
                                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
                                <div className="absolute top-8 right-8 w-14 h-14 rounded-[14px] bg-gradient-to-br from-[#FDF6E3] to-[#F5E6B8] flex items-center justify-center">
                                    <service.icon className="w-[26px] h-[26px] text-[#C9A84C]" strokeWidth={1.8} />
                                </div>
                            </div>
                            <div className="p-12 space-y-6 flex-1 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h2 className="text-[32px]">{service.title}</h2>
                                    <p className="text-[#555555] text-[15px] leading-[1.7]">{service.description}</p>
                                </div>
                                <div className="pt-8">
                                    <Link to={service.link} className="inline-flex items-center gap-4 text-[#C9A84C] font-semibold tracking-[-0.01em] text-[15px] group-hover:gap-6 transition-all duration-300">
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
