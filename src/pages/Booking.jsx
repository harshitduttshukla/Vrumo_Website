import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Phone, CarFront, Zap, Sparkles, Mail, Loader2, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { fetchServices, createBooking, createUser } from '../api';

const Booking = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bookingStatus, setBookingStatus] = useState(null); // 'success', 'error', null
    const [errorMessage, setErrorMessage] = useState('');
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        vehicleType: 'Car',
        serviceId: '',
        vehicleModel: '',
        date: '',
        time: ''
    });

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await fetchServices();
                setServices(data.filter(s => s.is_active));
            } catch (err) {
                console.error("Failed to fetch services:", err);
            } finally {
                setIsLoading(false);
            }
        };
        loadServices();

        const searchParams = new URLSearchParams(location.search);
        const serviceFromUrl = searchParams.get('service') || searchParams.get('plan');
        if (serviceFromUrl && services.length > 0) {
            const matched = services.find(s => s.name.toLowerCase().includes(serviceFromUrl.toLowerCase()));
            if (matched) {
                setFormData(prev => ({ ...prev, serviceId: matched.id }));
            }
        }
    }, [location, services.length]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setBookingStatus(null);
        setErrorMessage('');

        try {
            const user = await createUser({
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            });

            const bookingPayload = {
                user_id: user.id,
                service_id: formData.serviceId,
                vehicle_type: formData.vehicleType,
                vehicle_model: formData.vehicleModel,
                address: formData.location,
                booking_date: formData.date,
                time_slot: formData.time
            };

            await createBooking(bookingPayload);
            setBookingStatus('success');
            
            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (err) {
            setBookingStatus('error');
            setErrorMessage(err.message || 'The reservation could not be completed. Please verify your details.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="bg-[#020617] min-h-screen flex items-center justify-center">
                <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-16 h-16 border-t-2 border-primary rounded-full shadow-[0_0_20px_rgba(0,186,227,0.4)]"
                />
            </div>
        );
    }

    return (
        <div className="bg-[#020617] min-h-screen py-24 relative overflow-hidden selection:bg-primary selection:text-white">
            
            {/* Cinematic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-cyan-400/5 rounded-full blur-[80px]" />
                
                {/* Subtle Grid Effect */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="w-24 h-24 bg-linear-to-br from-primary to-cyan-400 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-[0_20px_50px_rgba(0,186,227,0.3)] transform rotate-6 border border-white/20"
                    >
                        <Sparkles className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter leading-none"
                    >
                        Book Your <br />
                        <span className="bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Service</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-xl font-body font-medium max-w-2xl mx-auto italic tracking-wide leading-relaxed"
                    >
                        Experience elite doorstep detailing tailored to your lifestyle. <br />
                        <span className="text-slate-500 opacity-60">Reserved for the discerning enthusiast.</span>
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    {/* Glass Container Reflection Overlay */}
                    <div className="absolute -inset-0.5 bg-linear-to-br from-white/10 to-transparent rounded-[3rem] blur-sm -z-10" />
                    
                    <div className="bg-white/[0.05] backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative">
                        
                        <AnimatePresence mode="wait">
                            {bookingStatus === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20 space-y-8"
                                >
                                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20 relative">
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.3, type: "spring" }}
                                            className="absolute inset-0 bg-primary/5 rounded-full animate-ping"
                                        />
                                        <CheckCircle2 className="w-16 h-16 text-primary relative z-10" />
                                    </div>
                                    <h2 className="text-4xl font-heading font-bold text-white tracking-tight">Reservation Confirmed</h2>
                                    <p className="text-slate-400 font-body text-lg max-w-md mx-auto">Thank you, {formData.name}. Your concierge representative will contact you shortly to finalize the details.</p>
                                    <div className="flex items-center justify-center gap-3 text-slate-600 text-xs uppercase tracking-widest font-black">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Redirecting to Dashboard
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    {bookingStatus === 'error' && (
                                        <motion.div 
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-500 backdrop-blur-md"
                                        >
                                            <AlertCircle className="shrink-0" />
                                            <span className="text-sm font-body font-medium">{errorMessage}</span>
                                        </motion.div>
                                    )}

                                    {/* Section: Client Identity */}
                                    <div className="space-y-10">
                                        <div className="flex items-center gap-5">
                                            <div className="p-3 bg-linear-to-br from-primary/20 to-cyan-400/5 rounded-2xl border border-white/10">
                                                <User className="w-7 h-7 text-primary" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-heading font-bold text-white tracking-tight">Client Identity</h2>
                                                <p className="text-slate-500 text-xs font-body font-medium uppercase tracking-[0.2em]">Identification Required</p>
                                            </div>
                                            <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                                        </div>
                                        
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-3">
                                                <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.25em]">Full Name</label>
                                                <div className="relative group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Johnathan Doe"
                                                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary text-white outline-none transition-all duration-500 font-body font-medium placeholder:text-slate-700 shadow-inner group-hover:bg-white/[0.07]"
                                                    />
                                                    <User className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-primary transition-colors" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.25em]">Electronic Mail</label>
                                                <div className="relative group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="identity@vrumovip.com"
                                                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary text-white outline-none transition-all duration-500 font-body font-medium placeholder:text-slate-700 shadow-inner group-hover:bg-white/[0.07]"
                                                    />
                                                    <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-primary transition-colors" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-3">
                                                <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.25em]">Mobile Verification</label>
                                                <div className="relative group">
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91 ••••• •••••"
                                                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary text-white outline-none transition-all duration-500 font-body font-medium placeholder:text-slate-700 shadow-inner group-hover:bg-white/[0.07]"
                                                    />
                                                    <Phone className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-primary transition-colors" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.25em]">Vehicle Precision</label>
                                                <div className="relative group">
                                                    <input
                                                        type="text"
                                                        name="vehicleModel"
                                                        required
                                                        value={formData.vehicleModel}
                                                        onChange={handleChange}
                                                        placeholder="e.g. Porsche 911 GT3"
                                                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary text-white outline-none transition-all duration-500 font-body font-medium placeholder:text-slate-700 shadow-inner group-hover:bg-white/[0.07]"
                                                    />
                                                    <CarFront className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-primary transition-colors" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.25em]">Service Destination</label>
                                            <div className="relative group">
                                                <textarea
                                                    name="location"
                                                    required
                                                    rows="2"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    placeholder="Specify the exact doorstep location for detailing"
                                                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl focus:ring-4 focus:ring-primary/20 focus:border-primary text-white outline-none transition-all duration-500 font-body font-medium resize-none placeholder:text-slate-700 shadow-inner group-hover:bg-white/[0.07]"
                                                ></textarea>
                                                <MapPin className="absolute right-6 top-6 w-5 h-5 text-slate-600 group-focus-within:text-primary transition-colors" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section: Appointment Logistics */}
                                    <div className="space-y-10 pt-4">
                                        <div className="flex items-center gap-5">
                                            <div className="p-3 bg-linear-to-br from-primary/20 to-cyan-400/5 rounded-2xl border border-white/10">
                                                <Zap className="w-7 h-7 text-primary" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-heading font-bold text-white tracking-tight">Appointment Logistics</h2>
                                                <p className="text-slate-500 text-xs font-body font-medium uppercase tracking-[0.2em]">Tailor Your Experience</p>
                                            </div>
                                            <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.25em]">Vehicle Category</label>
                                                <div className="flex bg-white/5 p-1.5 rounded-full ring-1 ring-white/10 backdrop-blur-md">
                                                    {['Car', 'Bike'].map(type => (
                                                        <button
                                                            type="button"
                                                            key={type}
                                                            onClick={() => setFormData({ ...formData, vehicleType: type })}
                                                            className={`flex-1 py-3.5 text-xs font-heading font-black rounded-full transition-all duration-500 tracking-widest uppercase ${
                                                                formData.vehicleType === type
                                                                    ? 'bg-linear-to-r from-primary to-cyan-400 text-white shadow-[0_10px_20px_rgba(0,186,227,0.3)] scale-[1.02]'
                                                                    : 'text-slate-500 hover:text-slate-300'
                                                            }`}
                                                        >
                                                            {type}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.2em]">Elite Package</label>
                                                <div className="relative group">
                                                    <select
                                                        name="serviceId"
                                                        required
                                                        value={formData.serviceId}
                                                        onChange={handleChange}
                                                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary text-white outline-none transition-all duration-500 appearance-none cursor-pointer font-medium shadow-inner group-hover:bg-white/[0.07]"
                                                    >
                                                        <option value="" disabled className="text-slate-900">Choose your privilege</option>
                                                        {services.map(service => (
                                                            <option key={service.id} value={service.id} className="bg-[#020617] text-white py-4">
                                                                {service.name} — ₹{service.price.toLocaleString()}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-slate-600 group-focus-within:text-primary transition-colors">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.25em]">Reserved Date</label>
                                                <div className="relative group">
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        required
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                        className="w-full px-12 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary text-white outline-none transition-all duration-500 cursor-pointer shadow-inner group-hover:bg-white/[0.07]"
                                                    />
                                                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5 group-focus-within:text-primary transition-colors pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="block text-[10px] font-body font-bold text-slate-500 ml-1 uppercase tracking-[0.25em]">Priority Time Slot</label>
                                                <div className="relative group">
                                                    <select
                                                        name="time"
                                                        required
                                                        value={formData.time}
                                                        onChange={handleChange}
                                                        className="w-full px-12 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary text-white outline-none transition-all duration-500 appearance-none cursor-pointer font-medium shadow-inner group-hover:bg-white/[0.07]"
                                                    >
                                                        <option value="" disabled className="text-slate-900">Select Window</option>
                                                        <option value="09:00 AM">09:00 AM Premium Slot</option>
                                                        <option value="11:00 AM">11:00 AM Premium Slot</option>
                                                        <option value="02:00 PM">02:00 PM Premium Slot</option>
                                                        <option value="04:00 PM">04:00 PM Premium Slot</option>
                                                    </select>
                                                    <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5 group-focus-within:text-primary transition-colors pointer-events-none" />
                                                    <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-slate-600 group-focus-within:text-primary transition-colors">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 space-y-8">
                                        <motion.button
                                            whileHover={{ 
                                                scale: 1.02, 
                                                boxShadow: "0 0 30px rgba(0, 186, 227, 0.4)" 
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full py-6 bg-linear-to-r from-primary to-cyan-500 text-slate-900 rounded-full font-heading font-black text-xl shadow-2xl transition-all duration-500 flex items-center justify-center gap-4 relative overflow-hidden group tracking-[0.2em] uppercase disabled:opacity-50"
                                        >
                                            <span className="relative z-10 flex items-center gap-4 group-hover:scale-105 transition-transform duration-500">
                                                {isSubmitting ? 'Finalizing...' : 'Confirm Your Reservation'}
                                                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <Zap className="w-6 h-6 fill-slate-900" />}
                                            </span>
                                            
                                            {/* Advanced Glow Animation */}
                                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)]" />
                                        </motion.button>
                                        
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="flex items-center gap-2 text-slate-500">
                                                <ShieldCheck className="w-4 h-4 text-primary" />
                                                <span className="text-[10px] font-body font-bold tracking-[0.2em] uppercase">Private & Encrypted Reservation</span>
                                            </div>
                                            <div className="flex gap-6">
                                                {['MasterCard', 'Visa', 'UPI', 'Stripe'].map(method => (
                                                    <span key={method} className="text-[9px] font-black text-slate-700 uppercase tracking-widest">{method}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Booking;
