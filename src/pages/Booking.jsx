import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Phone, CarFront, Zap, Sparkles } from 'lucide-react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        vehicleType: 'Car',
        serviceType: '',
        date: '',
        time: ''
    });

    const location = useLocation();

    useEffect(() => {
        // Auto-fill service from URL params
        const searchParams = new URLSearchParams(location.search);
        const serviceFromUrl = searchParams.get('service') || searchParams.get('plan');
        if (serviceFromUrl) {
            setFormData(prev => ({ ...prev, serviceType: serviceFromUrl }));
        }
    }, [location]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate booking process
        alert(`Booking Confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
    };

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
                        className="w-20 h-20 bg-linear-to-br from-primary to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20 transform rotate-3"
                    >
                        <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-heading font-extrabold text-secondary tracking-tight uppercase italic"
                    >
                        Book Your <span className="text-primary not-italic">Service</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#64748B] text-xl font-body font-medium max-w-2xl mx-auto italic tracking-wide"
                    >
                        Reserve your premium doorstep detailing. Experience the Vrumo difference.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass rounded-[2.5rem] p-8 md:p-14 border border-gray-100/50 shadow-2xl relative"
                >
                    <form onSubmit={handleSubmit} className="space-y-10">

                        {/* Personal Details */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                                <div className="p-2 bg-primary/10 rounded-xl">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-heading font-extrabold text-secondary uppercase tracking-tight">Personal Details</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-[10px] font-body font-bold text-[#64748B] mb-2 ml-1 uppercase tracking-widest">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white outline-none transition-all shadow-sm font-body font-medium"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-body font-bold text-[#64748B] mb-2 ml-1 uppercase tracking-widest">Phone Number</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white outline-none transition-all shadow-sm font-body font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-body font-bold text-[#64748B] mb-2 ml-1 uppercase tracking-widest">Doorstep Location</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-5 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                                    <textarea
                                        name="location"
                                        required
                                        rows="3"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Enter your full address"
                                        className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white outline-none transition-all resize-none shadow-sm font-body font-medium"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Service Configuration */}
                        <div className="space-y-8 pt-4">
                            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                                <div className="p-2 bg-primary/10 rounded-xl">
                                    <CarFront className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-heading font-extrabold text-secondary uppercase tracking-tight">Service Configuration</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-[10px] font-body font-bold text-[#64748B] mb-3 ml-1 uppercase tracking-widest">Vehicle Type</label>
                                    <div className="flex bg-gray-100/50 p-1.5 rounded-2xl ring-1 ring-gray-200">
                                        {['Car', 'Bike'].map(type => (
                                            <button
                                                type="button"
                                                key={type}
                                                onClick={() => setFormData({ ...formData, vehicleType: type })}
                                                className={`flex-1 py-3 text-sm font-body font-bold rounded-xl transition-all duration-300 ${
                                                    formData.vehicleType === type
                                                        ? 'bg-secondary text-white shadow-xl'
                                                        : 'text-gray-500 hover:text-gray-900'
                                                }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-body font-bold text-[#64748B] mb-2 ml-1 uppercase tracking-widest">Select Package</label>
                                    <div className="relative">
                                        <select
                                            name="serviceType"
                                            required
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white outline-none transition-all appearance-none cursor-pointer shadow-sm font-medium"
                                        >
                                            <option value="" disabled className="text-gray-400">Choose a service</option>
                                            <option value="Basic Wash">Basic Wash (₹99)</option>
                                            <option value="Interior Cleaning">Interior Cleaning (₹199)</option>
                                            <option value="Premium Wash">Premium Wash (₹399)</option>
                                            <option value="Deep Cleaning">Deep Cleaning (₹999)</option>
                                            <option value="Ceramic Coating">Ceramic Coating (₹4999)</option>
                                        </select>
                                        {/* Custom chevron */}
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-[10px] font-body font-bold text-[#64748B] mb-2 ml-1 uppercase tracking-widest">Preferred Date</label>
                                    <div className="relative group">
                                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white outline-none transition-all cursor-pointer relative shadow-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-body font-bold text-[#64748B] mb-2 ml-1 uppercase tracking-widest">Preferred Time Slot</label>
                                    <div className="relative group">
                                        <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 group-focus-within:text-primary transition-colors" />
                                        <select
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-10 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white outline-none transition-all appearance-none cursor-pointer shadow-sm font-medium"
                                        >
                                            <option value="" disabled>Select Time Slot</option>
                                            <option value="09:00 AM">09:00 AM - 11:00 AM</option>
                                            <option value="11:00 AM">11:00 AM - 01:00 PM</option>
                                            <option value="02:00 PM">02:00 PM - 04:00 PM</option>
                                            <option value="04:00 PM">04:00 PM - 06:00 PM</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.01, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-5 bg-secondary text-white rounded-2xl font-body font-bold text-lg shadow-xl shadow-secondary/20 border border-secondary hover:bg-gray-800 transition-all flex items-center justify-center gap-3 mt-12 relative overflow-hidden group uppercase tracking-widest"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Verify & Confirm Booking
                                <Zap className="w-5 h-5 text-primary" />
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </motion.button>
                        
                        <p className="text-center text-sm text-[#A1A1AA] font-body font-medium tracking-wide">Secured booking via 128-bit encryption.</p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Booking;
