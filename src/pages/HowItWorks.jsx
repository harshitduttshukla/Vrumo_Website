import { motion } from 'framer-motion';
import { 
    Zap, 
    CheckCircle2, 
    Droplets, 
    ArrowRight,
    MapPin,
    Smartphone,
    MousePointer2,
    Calendar,
    Activity,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight italic">How It <span className="text-primary italic">Works</span></h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                            Experience the future of vehicle care in 3 simple digital steps. From selection to doorstep completion.
                        </p>
                    </motion.div>
                </div>

                {/* Steps Section */}
                <div className="grid md:grid-cols-3 gap-16 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-px bg-white/5" />
                    
                    {[
                        { step: "01", title: "Select Service", desc: "Choose from wash, maintenance, or insurance.", icon: MousePointer2 },
                        { step: "02", title: "Book Instantly", desc: "Pick a date and shared your location.", icon: Calendar },
                        { step: "03", title: "Get Doorstep Service", desc: "Relax while we handle the work at your place.", icon: MapPin }
                    ].map((item, i) => (
                        <div key={i} className="text-center space-y-10 relative z-10 group">
                            <div className="w-24 h-24 bg-[#0a0a0a] rounded-full mx-auto flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                                <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black italic">{item.title}</h3>
                                <p className="text-gray-400 text-sm max-w-[200px] mx-auto leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Walkthrough */}
                <section className="grid lg:grid-cols-2 gap-20 items-center bg-white/2 rounded-[4rem] p-12 md:p-20 border border-white/5 shadow-2xl">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-6xl font-bold italic tracking-tight italic">The Process</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Digital Selection", desc: "Browse our ecosystem and pick the exact care your vehicle needs.", icon: Smartphone },
                                { title: "Professional Arrival", desc: "Our certified pro arrives with all necessary equipment at your location.", icon: MapPin },
                                { title: "Showroom Result", desc: "Get high-end results and a digital health report instantly.", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 items-start group">
                                    <div className="w-14 h-14 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-colors">
                                        <item.icon className="w-6 h-6 text-primary group-hover:text-secondary" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold italic">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-white/2 flex items-center justify-center group">
                        <img src="/images/hero_main.png" className="w-full h-full object-cover opacity-60 grayscale-[0.5] group-hover:scale-105 transition-transform duration-[2s]" alt="Vrumo Process" />
                        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
                    </div>
                </section>

                {/* Final CTA */}
                <div className="py-32 rounded-[5rem] bg-primary text-secondary text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight px-6 italic">Ready to Experience <br /> the Ecosystem?</h2>
                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <Link to="/booking" className="bg-secondary text-primary px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center gap-4">
                            Book Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;
