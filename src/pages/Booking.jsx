import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Phone, CarFront, Zap } from 'lucide-react';

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
        <div className="bg-background min-h-screen py-20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[200px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-[150px] -z-10 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <Zap className="w-10 h-10" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                        Book Your <span className="text-primary">Service</span>
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Reserve your doorstep wash in under 2 minutes. Our experts are ready to shine your ride!
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Personal Details */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold border-b pb-2 text-secondary flex items-center">
                                <User className="w-5 h-5 mr-3 text-primary" /> Personal Details
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Doorstep Location</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                    <textarea
                                        name="location"
                                        required
                                        rows="3"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Enter your full address"
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Service Configuration */}
                        <div className="space-y-6 pt-4">
                            <h2 className="text-xl font-bold border-b pb-2 text-secondary flex items-center">
                                <CarFront className="w-5 h-5 mr-3 text-primary" /> Service Configuration
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">Vehicle Type</label>
                                    <div className="flex bg-gray-100 p-1 rounded-xl">
                                        {['Car', 'Bike'].map(type => (
                                            <button
                                                type="button"
                                                key={type}
                                                onClick={() => setFormData({ ...formData, vehicleType: type })}
                                                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${formData.vehicleType === type
                                                        ? 'bg-white shadow-sm text-secondary'
                                                        : 'text-gray-500 hover:text-gray-700'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Package</label>
                                    <select
                                        name="serviceType"
                                        required
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Choose a service</option>
                                        <option value="Basic Wash">Basic Wash (₹99)</option>
                                        <option value="Interior Cleaning">Interior Cleaning (₹199)</option>
                                        <option value="Premium Wash">Premium Wash (₹399)</option>
                                        <option value="Deep Cleaning">Deep Cleaning (₹999)</option>
                                        <option value="Ceramic Coating">Ceramic Coating (₹4999)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer relative"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time Slot</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <select
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Select Time Slot</option>
                                            <option value="09:00 AM">09:00 AM - 11:00 AM</option>
                                            <option value="11:00 AM">11:00 AM - 01:00 PM</option>
                                            <option value="02:00 PM">02:00 PM - 04:00 PM</option>
                                            <option value="04:00 PM">04:00 PM - 06:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 bg-primary text-secondary rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] transition-all flex items-center justify-center gap-3 mt-8"
                        >
                            Verify & Confirm Booking
                            <Zap className="w-5 h-5 fill-secondary" />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Booking;
