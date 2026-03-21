import { motion } from 'framer-motion';
import { ShieldCheck, TrendingDown, Users, DollarSign } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
};

const Founders = () => {
    const stats = [
        { label: "₹1L+", desc: "Intern bounties via IIT network", icon: DollarSign },
        { label: "48%", desc: "Tier-2 vehicles, underserved", icon: Users },
        { label: "70%", desc: "Lower CAC vs metro startups", icon: TrendingDown },
        { label: "60%", desc: "Gross margin on base plan", icon: ShieldCheck }
    ];

    const founders = [
        {
            name: "[Founder Name]",
            role: "CEO & Co-Founder",
            bio: "IIT Kanpur alumni. Deep expertise in scalable backend architecture, distributed systems, and operational efficiency. Led tech teams across early-stage ventures.",
            tags: ["IIT Kanpur", "Backend Systems", "Product"]
        },
        {
            name: "[Co-Founder Name]",
            role: "COO & Co-Founder",
            bio: "IIT Kanpur alumni. Expert in B2B sales, RWA management, and on-ground deployment. Built and scaled field operations teams across Tier-2 markets.",
            tags: ["IIT Kanpur", "Operations", "B2B Sales"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFF] pt-48 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
                >
                    {/* LEFT COL: CONTENT AND FOUNDERS */}
                    <div className="lg:col-span-7 space-y-16">
                        <div className="space-y-6">
                            <motion.span 
                                variants={itemVariants}
                                className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-600 block"
                            >
                                THE TEAM
                            </motion.span>
                            <motion.h1 
                                variants={itemVariants}
                                className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A0A0A] leading-[1.1]"
                            >
                                Built by <span className="text-[#2563EB]">IIT Kanpur</span> <br />
                                <span className="italic font-normal serif-font">alumni.</span>
                            </motion.h1>
                            <motion.p 
                                variants={itemVariants}
                                className="text-xl text-[#555555] max-w-xl leading-relaxed font-light"
                            >
                                Deep tech architecture and operational precision applied to a legacy, fragmented market. We bring the same engineering rigour to a car wash that goes into building software systems.
                            </motion.p>
                        </div>

                        <div className="space-y-8">
                            {founders.map((founder, i) => (
                                <motion.div 
                                    key={i}
                                    variants={itemVariants}
                                    className="flex gap-6 p-8 rounded-2xl bg-white border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                            <Users className="w-6 h-6 text-[#2563EB]" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#0A0A0A]">{founder.name}</h3>
                                            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">{founder.role}</p>
                                        </div>
                                        <p className="text-[15px] text-[#555555] leading-relaxed">
                                            {founder.bio}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {founder.tags.map((tag, j) => (
                                                <span 
                                                    key={j} 
                                                    className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#2563EB] text-[10px] font-bold tracking-tight border border-blue-100"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COL: WHY IIT KANPUR CARD */}
                    <div className="lg:col-span-5 h-full">
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white rounded-4xl border border-blue-100 p-10 shadow-xl shadow-blue-500/5 sticky top-32"
                        >
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-xl tracking-tighter shadow-lg shadow-black/10">
                                        IIT K
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#0A0A0A] leading-tight">
                                        Why IIT Kanpur matters here
                                    </h2>
                                    <p className="text-[#555555] leading-relaxed">
                                        The vehicle aftermarket isn't a tech problem — it's an execution and trust problem. IIT Kanpur gives us the credibility to walk into RWA meetings, the network to recruit top engineering talent, and the discipline to build systems that don't break at scale.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, i) => (
                                        <div 
                                            key={i} 
                                            className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50 space-y-2 hover:bg-blue-50 transition-colors"
                                        >
                                            <div className="text-2xl font-black text-[#0A0A0A] tracking-tight">
                                                {stat.label}
                                            </div>
                                            <div className="text-[11px] font-medium text-[#555555] leading-snug">
                                                {stat.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Founders;
