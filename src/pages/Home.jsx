import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, CheckCircle, Shield, Clock, Star } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
    >
        <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-secondary skew-y-3 origin-top-left -z-10 transform -translate-y-24 rounded-bl-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white space-y-8"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                                Doorstep Car & Bike <br />
                                <span className="text-primary mt-2 block">Cleaning Service</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
                                Book professional vehicle cleaning at your home in minutes. Premium service, affordable prices.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/booking" className="bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all text-center shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] transform hover:scale-105">
                                    Book Now
                                </Link>
                                <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center">
                                    View Services
                                </Link>
                            </div>

                            <div className="flex items-center gap-6 pt-8 border-t border-white/10 mt-8">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-gray-300 flex justify-center items-center overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-secondary bg-primary flex items-center justify-center text-xs font-bold text-secondary">
                                        +2k
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <div className="flex text-primary">
                                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-gray-300 mt-1 block">Trusted by 2000+ customers</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                            {/* Note: In a real app we would use an actual image of a car being washed */}
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000"
                                    alt="Professional car wash"
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Eco-Friendly</p>
                                    <p className="text-sm text-gray-500">Waterless wash available</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6">The Best Care For Your Vehicle</h3>
                        <p className="text-gray-600 text-lg">We use premium products and trained professionals to give your vehicle the showroom shine it deserves.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Clock}
                            title="Time-Saving"
                            description="No more waiting in queues. We come to your location at your preferred time slot."
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Trusted Professionals"
                            description="Our team is background-verified and highly trained in modern detailing techniques."
                        />
                        <FeatureCard
                            icon={Car}
                            title="Premium Products"
                            description="We use standard, pH-neutral balanced chemicals that are tough on dirt but safe for paint."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-secondary">
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to make your vehicle shine?</h2>
                    <p className="text-xl text-gray-300 mb-10">Book your slot today and experience premium detailing at your doorstep.</p>
                    <Link to="/booking" className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold text-xl hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] transform hover:-translate-y-1">
                        Book Your Wash Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
