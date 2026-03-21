import { motion } from 'framer-motion';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Zap, 
    ArrowRight,
    Send,
} from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 overflow-hidden relative">
            <div className="max-w-7xl mx-auto space-y-32 relative z-10">
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-[0.03em]">Contact <span className="text-[#2563EB]">Us</span></h1>
                        <p className="text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed font-medium">
                            Have a question or request? Our ecosystem is built for you. Reach out anytime.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Information */}
                    <div className="space-y-12">
                        <div className="grid gap-8">
                            {[
                                { title: "Direct Contact", desc: "+91 98765 43210", icon: Phone },
                                { title: "Email Support", desc: "support@vrumo.com", icon: Mail },
                                { title: "Headquarters", desc: "Eco-Tech Hub, Sector 45, Bengaluru", icon: MapPin },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 items-center p-8 rounded-xl bg-[#F8F8F8] border border-[#EFEFEF] hover:border-[#2563EB]/30 transition-all group">
                                    <div className="w-16 h-16 shrink-0 bg-white rounded-xl flex items-center justify-center border border-[#EFEFEF] group-hover:bg-[#2563EB] transition-colors duration-500">
                                        <item.icon className="w-[26px] h-[26px] text-[#2563EB] group-hover:text-white" strokeWidth={1.8} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-md font-bold tracking-wide text-[#888888]">{item.title}</h4>
                                        <p className="text-xl font-bold tracking-tight text-[#0A0A0A]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-12 rounded-xl bg-white text-[#0A0A0A] space-y-6">
                            <Zap className="w-12 h-12 text-[#2563EB]" />
                            <h3 className="text-3xl font-black leading-tight">Instant Response <br /> Guaranteed</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-bold uppercase tracking-widest">Typical wait time: 2 minutes.</p>
                        </div>

                        <div className="p-12 rounded-xl bg-[#2563EB]/5 border border-[#2563EB]/20 text-[#0A0A0A] space-y-6">
                            <h3 className="text-2xl font-bold">Follow Our Journey</h3>
                            <p className="text-[#555555] text-sm">Get daily vehicle care tips and ecosystem updates on Instagram.</p>
                            <a href="https://www.instagram.com/vrumo.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#2563EB] font-bold hover:underline">
                                @vrumo.in <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-12 md:p-16 rounded-xl bg-[#F8F8F8] border border-[#EFEFEF] space-y-12">
                        <div className="space-y-3">
                            <h2 className="text-4xl font-bold text-[#0A0A0A]">Quick Inquiry</h2>
                            <p className="text-[#888888] text-sm font-bold uppercase tracking-widest">No forms, no wait. Sent directly to our pro team.</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#888888] ml-4">Full Identity</label>
                                    <input type="text" placeholder="Johnathan Doe" className="w-full bg-white border border-[#EFEFEF] rounded-xl px-6 py-5 focus:outline-none focus:border-[#2563EB] transition-colors text-[#0A0A0A] font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#888888] ml-4">Direct Email</label>
                                    <input type="email" placeholder="identity@email.com" className="w-full bg-white border border-[#EFEFEF] rounded-xl px-6 py-5 focus:outline-none focus:border-[#2563EB] transition-colors text-[#0A0A0A] font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#888888] ml-4">Your Request</label>
                                    <textarea rows="4" placeholder="How can our ecosystem assist you today?" className="w-full bg-white border border-[#EFEFEF] rounded-xl px-6 py-5 focus:outline-none focus:border-[#2563EB] transition-colors text-[#0A0A0A] font-medium resize-none"></textarea>
                                </div>
                            </div>

                            <button className="w-full bg-[#2563EB] text-white py-6 rounded-md font-black text-lg border border-[#2563EB] hover:bg-[#0A0A0A] hover:text-[#2563EB] transition-all duration-300 flex items-center justify-center gap-4 group">
                                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
