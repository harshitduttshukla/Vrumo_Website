import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, CheckCircle, Shield, Clock, Star, ArrowRight, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="glass p-8 rounded-3xl relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500"></div>
        <div className="bg-gradient-to-br from-primary/20 to-emerald-300/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
            <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="bg-background min-h-screen selection:bg-primary selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Premium Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
                    <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-500/5 blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
                                <Sparkles className="w-4 h-4 text-primary" />
                                Premium Doorstep Detailers by Vrumo
                            </div>
                            
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-secondary">
                                Redefining <br />
                                <span className="text-gradient">Vehicle Care</span> <br />
                                At Your Door
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                                Experience professional detailing without leaving your home. Vrumo brings premium care directly to your doorstep.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/booking" className="group relative inline-flex items-center justify-center bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 overflow-hidden shadow-2xl shadow-secondary/30 hover:shadow-secondary/50">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book Your Wash <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                                <Link to="/services" className="inline-flex items-center justify-center bg-white border border-gray-200 text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm">
                                    Explore Services
                                </Link>
                            </div>

                            <div className="flex items-center gap-6 pt-10 border-t border-gray-200 mt-10">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex justify-center items-center overflow-hidden shadow-sm">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=e2e8f0`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-xs font-bold text-white shadow-sm">
                                        +2k
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <div className="flex text-primary gap-0.5">
                                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-gray-600 mt-1 block font-medium">Trusted by 2000+ happy clients</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-[3rem] -z-10 transform rotate-6"></div>
                            
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
                                    alt="Professional car detailing"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
                                
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="glass-dark p-6 rounded-2xl flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary backdrop-blur-md">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">Eco-Friendly Wash</p>
                                            <p className="text-gray-300">Using 90% less water</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 relative z-10">
                <div className="absolute inset-0 bg-gray-50/50 -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">The Vrumo Standard</h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">Uncompromising Quality</h3>
                            <p className="text-gray-600 text-lg">We combine premium products with expert techniques to deliver a showroom finish that lasts.</p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Clock}
                            title="Ultimate Convenience"
                            description="Your time is valuable. We bring our fully-equipped detailing setup to your home or office."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Certified Detailers"
                            description="Our team consists of rigorously trained, passion-driven detailers who treat your car like their own."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={Car}
                            title="Premium Products"
                            description="We exclusively use pH-neutral, high-end ceramics and sealants safe for all paint finishes."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary"></div>
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
                
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Give Your Vehicle The <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Royal Treatment</span></h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers. Book your slot today and experience detailing perfection at your doorstep.</p>
                        <Link to="/booking" className="inline-flex items-center gap-2 bg-primary text-secondary px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:shadow-[0_0_40px_rgba(255,184,0,0.5)] transform hover:-translate-y-1">
                            Schedule Appointment <ArrowRight className="w-6 h-6" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
