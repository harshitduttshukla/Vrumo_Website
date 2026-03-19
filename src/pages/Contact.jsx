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
        <div className="min-h-screen bg-[#050505] text-white pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32 relative z-10">
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight italic">Contact <span className="text-primary tracking-normal">Us</span></h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
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
                                <div key={i} className="flex gap-8 items-center p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/20 transition-all group">
                                    <div className="w-16 h-16 shrink-0 bg-[#050505] rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-colors duration-500">
                                        <item.icon className="w-6 h-6 text-primary group-hover:text-secondary" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-md font-bold italic tracking-wide">{item.title}</h4>
                                        <p className="text-xl font-bold tracking-tight text-white">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-12 rounded-[3.5rem] bg-primary text-secondary space-y-6">
                            <Zap className="w-12 h-12 fill-secondary" />
                            <h3 className="text-3xl font-black leading-tight italic">Instant Response <br /> Guaranteed</h3>
                            <p className="text-sm opacity-80 leading-relaxed font-bold uppercase tracking-widest">Typical wait time: 2 minutes.</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-12 md:p-16 rounded-[4rem] bg-white/2 border border-white/5 shadow-2xl space-y-12">
                        <div className="space-y-3">
                            <h2 className="text-4xl font-bold italic">Quick Inquiry</h2>
                            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">No forms, no wait. Sent directly to our pro team.</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Full Identity</label>
                                    <input type="text" placeholder="Johnathan Doe" className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary transition-colors text-white font-medium shadow-inner" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Direct Email</label>
                                    <input type="email" placeholder="identity@email.com" className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary transition-colors text-white font-medium shadow-inner" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Your Request</label>
                                    <textarea rows="4" placeholder="How can our ecosystem assist you today?" className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary transition-colors text-white font-medium shadow-inner resize-none"></textarea>
                                </div>
                            </div>

                            <button className="w-full bg-primary text-secondary py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-4 group">
                                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background Grain */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 contrast-150 brightness-150 pointer-events-none" />
        </div>
    );
};

export default Contact;
