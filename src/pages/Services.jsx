import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ArrowRight 
} from 'lucide-react';

const Services = () => {
    const services = [
        { 
            title: "Vehicle Wash", 
            description: "Deep foam cleaning at your doorstep. Eco-friendly and fast.",
            image: "/images/v_wash_doorstep.png",
            link: "/services/wash"
        },
        { 
            title: "Vehicle Maintenance", 
            description: "Expert diagnostics and repairs by certified mechanics.",
            image: "/images/v_maintenance_doorstep.png",
            link: "/services/maintenance"
        },
        { 
            title: "Vehicle Insurance", 
            description: "Reliable coverage and digital-first claims processing.",
            image: "/images/v_insurance_doorstep.png",
            link: "/services/insurance"
        },
        { 
            title: "Buy & Sell Vehicles", 
            description: "Best market value and verified deals for cars and bikes.",
            image: "/images/buy_sell_doorstep_v2.png",
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
                            className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
                        >
                            <div className="aspect-video relative overflow-hidden rounded-t-xl">
                                <img loading="lazy" src={service.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt={service.title} />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                            </div>
                            <div className="p-10 space-y-6 flex-1 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors">{service.title}</h2>
                                    <p className="text-[#555555] text-sm leading-relaxed">{service.description}</p>
                                </div>
                                <div className="pt-6">
                                    <Link to={service.link} className="inline-flex items-center gap-3 text-[#2563EB] font-bold tracking-widest uppercase text-xs">
                                        Explore Service <ArrowRight className="w-4 h-4" />
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
