import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Calendar, 
    Clock, 
    MapPin, 
    User, 
    Phone, 
    CarFront, 
    Zap, 
    CheckCircle2, 
    ArrowRight,
    ArrowLeft,
    Loader2,
    AlertCircle,
    UserCircle
} from 'lucide-react';
import { fetchServices, createBooking, fetchCurrentUser } from '../api';

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoadingUser, setIsLoadingUser] = useState(true);

    const [formData, setFormData] = useState({
        vehicleType: 'Car',
        serviceType: '',
        date: '',
        time: '',
        address: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login-phone?redirect=/booking');
                return;
            }

            try {
                const userData = await fetchCurrentUser();
                if (!userData) {
                    navigate('/login-phone?redirect=/booking');
                    return;
                }
                setUser(userData);
            } catch (err) {
                navigate('/login-phone?redirect=/booking');
            } finally {
                setIsLoadingUser(false);
            }
        };

        checkAuth();

        const query = new URLSearchParams(location.search);
        const serviceParam = query.get('service');
        if (serviceParam) {
            setFormData(prev => ({ ...prev, serviceType: serviceParam }));
        }
    }, [location, navigate]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
        if (!formData.date) newErrors.date = 'Date is required';
        if (!formData.time) newErrors.time = 'Time is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            await createBooking(formData);
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const serviceOptions = [
        "Full Interior & Exterior Detail",
        "Exterior Wash & Wax",
        "Engine Bay Cleaning",
        "Ceramic Coating",
        "Deep Interior Cleaning",
        "Periodic Maintenance"
    ];

    if (isLoadingUser) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-[#2563EB] animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#2563EB]/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight"
                    >
                        Quick <span className="text-[#2563EB]">Booking</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-silver font-medium text-lg"
                    >
                        Schedule your premium vehicle service in seconds.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-[#EFEFEF] border-t-4 border-t-[#2563EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-16 text-center space-y-8"
                            >
                                <div className="w-24 h-24 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto relative">
                                    <div className="absolute inset-0 bg-[#2563EB]/5 rounded-full animate-ping" />
                                    <CheckCircle2 className="w-12 h-12 text-[#2563EB] relative z-10" />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-bold">Booking Confirmed!</h2>
                                    <p className="text-silver text-lg max-w-md mx-auto">
                                        Thank you, {formData.name}. We've received your request for {formData.serviceType}. Our team will contact you shortly.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => window.location.href = "/"} 
                                    className="bg-linear-to-r from-royal to-[#2563EB] text-white hover:from-[#1E40AF] hover:to-royal px-12 py-4 rounded-xl font-bold hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Return Home
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                                {error && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm mb-6"
                                    >
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <span>{error}</span>
                                    </motion.div>
                                )}

                                {/* User Banner */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <UserCircle className="w-8 h-8" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-bold text-gray-900">Booking for {user?.name} 👋</h3>
                                            <p className="text-sm text-gray-500 font-medium">{user?.phone || user?.email}</p>
                                        </div>
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={() => {
                                            localStorage.removeItem('token');
                                            navigate('/login-phone?redirect=/booking');
                                        }}
                                        className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 bg-white px-4 py-2 rounded-lg border border-blue-100 transition-all"
                                    >
                                        Switch Account
                                    </button>
                                </motion.div>

                                {/* Vehicle Type Toggle */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#F5F5F5]">
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-bold">Service Details</h2>
                                        <p className="text-sm text-silver">Tell us what your vehicle needs</p>
                                    </div>
                                    <div className="flex bg-[#F8F8F8] p-1.5 rounded-full border border-[#EFEFEF] w-fit">
                                        {['Car', 'Bike'].map(type => (
                                            <button 
                                                key={type}
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, vehicleType: type }))}
                                                className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                                                    formData.vehicleType === type 
                                                    ? 'bg-linear-to-r from-royal to-[#2563EB] text-white hover:from-[#1E40AF] hover:to-royal shadow-lg' 
                                                    : 'text-silver hover:text-[#0A0A0A]'
                                                }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Service Details Grid */}
                                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-silver ml-2">Select Service</label>
                                            <select 
                                                name="serviceType"
                                                value={formData.serviceType}
                                                onChange={handleChange}
                                                className={`w-full bg-[#F8F8F8] border ${errors.serviceType ? 'border-red-300' : 'border-[#EFEFEF]'} rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all appearance-none cursor-pointer`}
                                            >
                                                <option value="" disabled>Choose a service</option>
                                                {serviceOptions.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                            {errors.serviceType && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase tracking-wide">{errors.serviceType}</p>}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-silver ml-2">Preferred Date</label>
                                                <input 
                                                    name="date"
                                                    type="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    className={`w-full bg-[#F8F8F8] border ${errors.date ? 'border-red-300' : 'border-[#EFEFEF]'} rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all`} 
                                                />
                                                {errors.date && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase tracking-wide">{errors.date}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center px-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-silver">Time Slot</label>
                                                    <div className="flex items-center gap-2 text-silver/60">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider">Scroll</span>
                                                        <ArrowRight className="w-3 h-3" />
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
                                                    {['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'].map(slot => (
                                                        <button 
                                                            key={slot}
                                                            type="button"
                                                            onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                                                            className={`whitespace-nowrap px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 border ${
                                                                formData.time === slot 
                                                                ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md' 
                                                                : 'bg-[#F8F8F8] text-[#555555] border-[#EFEFEF] hover:border-[#2563EB]/30'
                                                            }`}
                                                        >
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                                {errors.time && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase tracking-wide">{errors.time}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-silver ml-2">Address</label>
                                            <div className="relative">
                                                <input 
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full address"
                                                    className={`w-full bg-[#F8F8F8] border ${errors.address ? 'border-red-300' : 'border-[#EFEFEF]'} rounded-xl px-6 py-4 pl-12 focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all`} 
                                                />
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2563EB]" />
                                            </div>
                                        </div>
                                    </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className="w-full bg-linear-to-r from-royal to-[#2563EB] text-white! hover:from-[#1E40AF] hover:to-royal py-6 rounded-md font-black text-lg border-none hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-4 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-blue-500/5 mt-4"
                                >
                                    {isSubmitting ? (
                                        <>
                                            Booking...
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Book Now
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-silver">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                        <span>Private & Encrypted</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                        <span>Instant Pro Assignment</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
