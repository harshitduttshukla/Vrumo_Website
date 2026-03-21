import { motion } from 'framer-motion';
import { 
    Zap, 
    ShieldCheck, 
    Droplets, 
    ArrowRight,
    MapPin,
    Users,
    Activity,
    Smartphone,
    TrendingDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { label: "Vehicles Cleaned", value: "50k+", icon: Droplets },
    { label: "Hours Saved", value: "100k+", icon: Zap },
    { label: "Trusted Professionals", value: "500+", icon: Users },
    { label: "Cities covered", value: "24/7", icon: MapPin },
];

const About = () => {
    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-[0.03em]">Who is Vrumo?</h1>
                        <p className="text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed font-medium">
                            An all-in-one vehicle care ecosystem designed for the modern owner. We bring trust, tech, and quality doorstep convenience to your life.
                        </p>
                    </motion.div>
                </div>

                {/* Mission Section */}
                <section className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-[0.03em] section-title">Our Mission</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-[#888888] leading-relaxed font-light italic">
                                "To build the world's most trusted and simple vehicle care ecosystem where quality is standard, and convenience is guaranteed."
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Low Pricing Strategy", desc: "No middleman, no random markups. Direct-to-owner pricing for maximum value.", icon: TrendingDown },
                                    { title: "Tech Integration", desc: "Real-time health reports, digital claims, and doorstep tracking on your phone.", icon: Smartphone },
                                    { title: "Eco-Hybrid Tech", desc: "Advanced low-water foam tech that saves up to 80% water on every wash.", icon: Droplets }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start p-6 rounded-xl bg-[#F8F8F8] border border-[#EFEFEF] hover:border-[#2563EB]/30 transition-all">
                                        <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-[14px] flex items-center justify-center">
                                            <item.icon className="w-[26px] h-[26px] text-[#2563EB]" strokeWidth={1.8} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1 text-[#0A0A0A]">{item.title}</h4>
                                            <p className="text-[#888888] text-[13px] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square">
                        <div className="absolute inset-0 bg-[#2563EB]/5 rounded-2xl blur-[80px]" />
                        <div className="relative h-full rounded-2xl overflow-hidden border border-[#EFEFEF] group">
                            <img loading="lazy" src="/images/hero_main.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-80" alt="Vrumo Concept" />
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 lg:py-20 border-y border-[#EFEFEF] bg-[#F8F8F8] rounded-2xl px-6 lg:px-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center space-y-4">
                            <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center border border-[#EFEFEF]">
                                <stat.icon className="w-[26px] h-[26px] text-[#2563EB]" strokeWidth={1.8} />
                            </div>
                            <h3 className="text-5xl font-black text-[#0A0A0A]">{stat.value}</h3>
                            <p className="text-[#888888] font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="py-32 rounded-2xl bg-white text-black text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-[0.02em] px-6">Ready to Experience <br /> the Ecosystem?</h2>
                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <Link to="/booking" className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] !text-white hover:from-[#1E40AF] hover:to-[#1D4ED8] px-10 py-4 rounded-lg font-bold text-[14px] uppercase tracking-[0.1em] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all flex items-center gap-4">
                            Book Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
