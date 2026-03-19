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
        <div className="min-h-screen bg-[#050505] text-white pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight italic">Who is Vrumo?</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                            An all-in-one vehicle care ecosystem designed for the modern owner. We bring trust, tech, and quality doorstep convenience to your life.
                        </p>
                    </motion.div>
                </div>

                {/* Mission Section */}
                <section className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-6xl font-bold italic tracking-tight">Our Mission</h2>
                        <div className="space-y-8">
                            <p className="text-xl text-gray-400 leading-relaxed font-light italic">
                                "To build the world's most trusted and simple vehicle care ecosystem where quality is standard, and convenience is guaranteed."
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Low Pricing Strategy", desc: "No middleman, no random markups. Direct-to-owner pricing for maximum value.", icon: TrendingDown },
                                    { title: "Tech Integration", desc: "Real-time health reports, digital claims, and doorstep tracking on your phone.", icon: Smartphone },
                                    { title: "Eco-Hybrid Tech", desc: "Advanced low-water foam tech that saves up to 80% water on every wash.", icon: Droplets }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-primary/20 transition-all">
                                        <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-[13px] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square">
                        <div className="absolute inset-0 bg-primary/10 rounded-[4rem] blur-[120px]" />
                        <div className="relative h-full rounded-[4rem] overflow-hidden border border-white/10 group">
                            <img src="/images/hero_main.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] grayscale-[0.5] opacity-60" alt="Vrumo Concept" />
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-20 border-y border-white/5 bg-white/2 rounded-[4rem] px-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center space-y-4">
                            <div className="w-12 h-12 bg-[#050505] rounded-full mx-auto flex items-center justify-center border border-white/10">
                                <stat.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-5xl font-black italic">{stat.value}</h3>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="py-32 rounded-[5rem] bg-primary text-secondary text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight px-6">Ready to Experience <br /> the Ecosystem?</h2>
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

export default About;
