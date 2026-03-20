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
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-[0.03em]">How It <span className="text-[#2563EB]">Works</span></h1>
                        <p className="text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed font-medium">
                            Experience the future of vehicle care in 3 simple digital steps. From selection to doorstep completion.
                        </p>
                    </motion.div>
                </div>

                {/* Steps Section */}
                <div className="grid md:grid-cols-3 gap-16 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-px bg-[#E5E5E5]" />
                    
                    {[
                        { step: "01", title: "Select Service", desc: "Choose from wash, maintenance, or insurance.", icon: MousePointer2 },
                        { step: "02", title: "Book Instantly", desc: "Pick a date and shared your location.", icon: Calendar },
                        { step: "03", title: "Get Doorstep Service", desc: "Relax while we handle the work at your place.", icon: MapPin }
                    ].map((item, i) => (
                        <div key={i} className="text-center space-y-10 relative z-10 group">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center border-2 border-[#2563EB] group-hover:bg-[#2563EB]/5 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
                                <item.icon className="w-10 h-10 text-[#2563EB] group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black text-[#0A0A0A]">{item.title}</h3>
                                <p className="text-[#888888] text-sm max-w-[200px] mx-auto leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Walkthrough */}
                <section className="grid lg:grid-cols-2 gap-20 items-center bg-[#F8F8F8] rounded-2xl p-12 md:p-20 border border-[#EFEFEF]">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-[0.03em]">The Process</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Digital Selection", desc: "Browse our ecosystem and pick the exact care your vehicle needs.", icon: Smartphone },
                                { title: "Professional Arrival", desc: "Our certified pro arrives with all necessary equipment at your location.", icon: MapPin },
                                { title: "Showroom Result", desc: "Get high-end results and a digital health report instantly.", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 items-start group">
                                    <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-[14px] flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                                        <item.icon className="w-[26px] h-[26px] text-[#2563EB] group-hover:text-white" strokeWidth={1.8} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold text-[#0A0A0A]">{item.title}</h4>
                                        <p className="text-[#888888] text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#EFEFEF] bg-white flex items-center justify-center group">
                        <img src="/images/hero_main.png" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]" alt="Vrumo Process" />
                        <div className="absolute inset-0 bg-linear-to-t from-white/50 via-transparent to-transparent" />
                    </div>
                </section>

                {/* Final CTA */}
                <div className="py-32 rounded-2xl bg-white text-[#0A0A0A] text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-[0.02em] px-6">Ready to Experience <br /> the Ecosystem?</h2>
                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <Link to="/booking" className="bg-[#2563EB] text-white px-10 py-4 rounded-lg font-semibold text-[14px] uppercase tracking-[0.1em] hover:scale-105 transition-transform flex items-center gap-4">
                            Book Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;
