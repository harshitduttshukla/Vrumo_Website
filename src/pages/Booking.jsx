import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Phone, CarFront, Zap, Sparkles, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
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

        // Auto-fill service from URL params
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
            // 1. Create/Identify User
            // Note: Since no auth is present, we try to create a user. 
            // If phone/email exists, backend currently throws 400. 
            // In a better flow we'd check existence, but for now we follow current backend routes.
            const user = await createUser({
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            });

            // 2. Create Booking
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
            
            // Redirect after delay
            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (err) {
            setBookingStatus('error');
            setErrorMessage(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen py-24 relative overflow-hidden selection:bg-primary selection:text-white">
            {/* Elegant Background Gradients */}
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full -z-10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-secondary/5 to-transparent rounded-tr-full -z-10 blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-linear-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20 transform rotate-3"
                    >
                        <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight"
                    >
                        Book Your <span className="text-primary">Service</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-xl font-body font-medium max-w-2xl mx-auto italic tracking-wide"
                    >
                        Reserve your premium doorstep detailing. Experience the Vrumo difference.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-dark rounded-[2.5rem] p-8 md:p-14 border border-white/10 shadow-luxury relative bg-white/5 backdrop-blur-2xl"
                >
                    <AnimatePresence mode="wait">
                        {bookingStatus === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10 space-y-6"
                            >
                                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto border border-primary/30">
                                    <CheckCircle2 className="w-12 h-12 text-primary" />
                                </div>
                                <h2 className="text-3xl font-heading font-bold text-white">Booking Confirmed!</h2>
                                <p className="text-slate-400 font-body">Thank you, {formData.name}. We've received your request and will contact you shortly.</p>
                                <p className="text-xs text-slate-500">Redirecting to home...</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                {bookingStatus === 'error' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-500"
                                    >
                                        <AlertCircle className="shrink-0" />
                                        <span className="text-sm font-body">{errorMessage}</span>
                                    </motion.div>
                                )}

                                {/* Personal Details */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                                        <div className="p-2 bg-primary/10 rounded-xl">
                                            <User className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-heading font-bold text-white tracking-tight">Personal Details</h2>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-[10px] font-body font-bold text-slate-500 mb-2 ml-1 uppercase tracking-widest">Full Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white outline-none transition-all shadow-sm font-body font-medium placeholder:text-slate-700"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-body font-bold text-slate-500 mb-2 ml-1 uppercase tracking-widest">Email Address</label>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white outline-none transition-all shadow-sm font-body font-medium placeholder:text-slate-700"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-[10px] font-body font-bold text-slate-500 mb-2 ml-1 uppercase tracking-widest">Phone Number</label>
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 98765 43210"
                                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white outline-none transition-all shadow-sm font-body font-medium placeholder:text-slate-700"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-body font-bold text-slate-500 mb-2 ml-1 uppercase tracking-widest">Vehicle Model</label>
                                            <div className="relative group">
                                                <CarFront className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                                <input
                                                    type="text"
                                                    name="vehicleModel"
                                                    required
                                                    value={formData.vehicleModel}
                                                    onChange={handleChange}
                                                    placeholder="BMW M4 / Honda Activa"
                                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white outline-none transition-all shadow-sm font-body font-medium placeholder:text-slate-700"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-body font-bold text-slate-500 mb-2 ml-1 uppercase tracking-widest">Doorstep Location</label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-5 text-slate-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                            <textarea
                                                name="location"
                                                required
                                                rows="3"
                                                value={formData.location}
                                                onChange={handleChange}
                                                placeholder="Enter your full address"
                                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white outline-none transition-all resize-none shadow-sm font-body font-medium placeholder:text-slate-700"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Configuration */}
                                <div className="space-y-8 pt-4">
                                    <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                                        <div className="p-2 bg-primary/10 rounded-xl">
                                            <Zap className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-heading font-bold text-white tracking-tight">Service Configuration</h2>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-[10px] font-body font-bold text-slate-500 mb-3 ml-1 uppercase tracking-widest">Vehicle Category</label>
                                            <div className="flex bg-white/5 p-1.5 rounded-2xl ring-1 ring-white/10">
                                                {['Car', 'Bike'].map(type => (
                                                    <button
                                                        type="button"
                                                        key={type}
                                                        onClick={() => setFormData({ ...formData, vehicleType: type })}
                                                        className={`flex-1 py-3 text-sm font-body font-bold rounded-xl transition-all duration-300 ${
                                                            formData.vehicleType === type
                                                                ? 'bg-primary text-secondary shadow-xl'
                                                                : 'text-slate-500 hover:text-slate-300'
                                                        }`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-body font-bold text-slate-500 mb-2 ml-1 uppercase tracking-[0.2em]">Select Package</label>
                                            <div className="relative">
                                                <select
                                                    name="serviceId"
                                                    required
                                                    value={formData.serviceId}
                                                    onChange={handleChange}
                                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white outline-none transition-all appearance-none cursor-pointer shadow-sm font-medium"
                                                >
                                                    <option value="" disabled className="text-slate-700">Choose a service</option>
                                                    {services.map(service => (
                                                        <option key={service.id} value={service.id} className="bg-slate-900 text-white">
                                                            {service.name} (₹{service.price})
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-[10px] font-body font-bold text-slate-500 mb-2 ml-1 uppercase tracking-widest">Preferred Date</label>
                                            <div className="relative group">
                                                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5 z-10 group-focus-within:text-primary transition-colors" />
                                                <input
                                                    type="date"
                                                    name="date"
                                                    required
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white outline-none transition-all cursor-pointer relative shadow-sm font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-body font-bold text-slate-500 mb-2 ml-1 uppercase tracking-widest">Preferred Time Slot</label>
                                            <div className="relative group">
                                                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5 z-10 group-focus-within:text-primary transition-colors" />
                                                <select
                                                    name="time"
                                                    required
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-10 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-white outline-none transition-all appearance-none cursor-pointer shadow-sm font-medium"
                                                >
                                                    <option value="" disabled className="text-slate-700">Select Time Slot</option>
                                                    <option value="09:00 AM">09:00 AM - 11:00 AM</option>
                                                    <option value="11:00 AM">11:00 AM - 01:00 PM</option>
                                                    <option value="02:00 PM">02:00 PM - 04:00 PM</option>
                                                    <option value="04:00 PM">04:00 PM - 06:00 PM</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ 
                                        scale: 1.01, 
                                        y: -2,
                                        boxShadow: "0 20px 40px -10px rgba(0, 210, 255, 0.4)" 
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full py-5 bg-primary text-secondary rounded-2xl font-body font-black text-lg shadow-2xl transition-all flex items-center justify-center gap-3 mt-12 relative overflow-hidden group tracking-[0.15em] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 flex items-center gap-3 group-hover:scale-105 transition-transform duration-500">
                                        {isSubmitting ? 'Confirming...' : 'Verify & Confirm Booking'}
                                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5 fill-secondary group-hover:rotate-12 transition-transform duration-500" />}
                                    </span>
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                </motion.button>
                                
                                <p className="text-center text-sm text-slate-600 font-body font-medium tracking-wide">Secured booking via 128-bit encryption.</p>
                            </form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Booking;
