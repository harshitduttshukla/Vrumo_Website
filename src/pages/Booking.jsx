import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    AlertCircle
} from 'lucide-react';
import { fetchServices, createBooking, createUser } from '../api';

const Booking = () => {
    const location = useLocation();
    const [step, setStep] = useState(1);
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        service: null,
        date: '',
        time: '',
        location: '',
        name: '',
        phone: '',
        email: '',
        vehicle: '',
        vehicleType: 'Car'
    });

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await fetchServices();
                const activeServices = data.filter(s => s.is_active);
                setServices(activeServices);

                const query = new URLSearchParams(location.search);
                const serviceParam = query.get('service');
                if (serviceParam) {
                    const selected = activeServices.find(s => 
                        s.name.toLowerCase().includes(serviceParam.toLowerCase())
                    );
                    if (selected) {
                        setFormData(prev => ({ ...prev, service: selected }));
                        setStep(2);
                    }
                }
            } catch (err) {
                console.error("Failed to load services", err);
            } finally {
                setIsLoading(false);
            }
        };
        loadServices();
    }, [location]);

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const user = await createUser({
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            });

            const bookingPayload = {
                user_id: user.id,
                service_id: formData.service.id,
                vehicle_type: formData.vehicleType,
                vehicle_model: formData.vehicle,
                address: formData.location,
                booking_date: formData.date,
                time_slot: formData.time
            };

            await createBooking(bookingPayload);
            setIsSuccess(true);
        } catch (err) {
            setError(err.message || "Failed to create reservation.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        { id: 1, title: "Select Service", icon: Zap },
        { id: 2, title: "Schedule", icon: Calendar },
        { id: 3, title: "Your Details", icon: User }
    ];

    if (isLoading) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-[#C9A84C] animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#C9A84C]/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-[0.03em]">Quick <span className="text-[#C9A84C]">Booking</span></h1>
                    <p className="text-[#888888] font-medium">Get your vehicle care started in under 60 seconds.</p>
                </div>

                {/* Progress Bar */}
                <div className="flex justify-between items-center bg-[#F8F8F8] p-4 rounded-xl border border-[#EFEFEF]">
                    {steps.map((s, i) => (
                        <div key={s.id} className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all ${
                                step >= s.id ? 'bg-[#C9A84C] text-white' : 'bg-white text-[#888888] border border-[#EFEFEF]'
                            }`}>
                                {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
                            </div>
                            <span className={`hidden sm:block text-[10px] font-black uppercase tracking-widest ${
                                step >= s.id ? 'text-[#0A0A0A]' : 'text-[#888888]'
                            }`}>{s.title}</span>
                            {i < steps.length - 1 && <div className="hidden sm:block w-8 h-px bg-[#E5E5E5] mx-2" />}
                        </div>
                    ))}
                </div>

                {/* Main Card */}
                <div className="bg-white border border-[#EFEFEF] border-t-[3px] border-t-[#C9A84C] rounded-xl p-10 md:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.07)] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-8 py-10"
                            >
                                <div className="w-24 h-24 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto border border-[#C9A84C]/20 relative">
                                    <div className="absolute inset-0 bg-[#C9A84C]/5 rounded-full animate-ping" />
                                    <CheckCircle2 className="w-12 h-12 text-[#C9A84C] relative z-10" />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-bold text-[#0A0A0A]">Booking Confirmed!</h2>
                                    <p className="text-[#888888]">Thank you, {formData.name}. Our pro team will call you within 5 minutes to confirm details.</p>
                                </div>
                                <button onClick={() => window.location.href = "/"} className="bg-[#0A0A0A] text-[#C9A84C] px-10 py-4 rounded-md font-black border border-[#C9A84C]/30 hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300">
                                    Return Home
                                </button>
                            </motion.div>
                        ) : (
                            <div key="form">
                                {error && (
                                    <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-4 text-red-600 text-sm">
                                        <AlertCircle className="shrink-0" />
                                        <span>{error}</span>
                                    </div>
                                )}

                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                                        <div className="flex justify-between items-end">
                                            <h2 className="text-3xl font-bold text-[#0A0A0A]">What do you need?</h2>
                                            <div className="flex bg-[#F8F8F8] p-1 rounded-full border border-[#EFEFEF]">
                                                {['Car', 'Bike'].map(type => (
                                                    <button 
                                                        key={type} 
                                                        onClick={() => setFormData({...formData, vehicleType: type})}
                                                        className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                                                            formData.vehicleType === type ? 'bg-[#C9A84C] text-white shadow-[0_2px_10px_rgba(212,175,55,0.3)]' : 'text-[#888888] hover:text-[#0A0A0A]'
                                                        }`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {services.map(s => (
                                                <button 
                                                    key={s.id}
                                                    onClick={() => { setFormData({...formData, service: s}); nextStep(); }}
                                                    className={`p-8 rounded-xl border transition-all text-left group ${
                                                        formData.service?.id === s.id ? 'border-[#C9A84C] bg-[#C9A84C]/5' : 'border-[#EFEFEF] bg-[#F8F8F8] hover:border-[#C9A84C]/30'
                                                    }`}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <span className="font-bold text-xl text-[#0A0A0A]">{s.name}</span>
                                                        <Zap className={`w-5 h-5 ${formData.service?.id === s.id ? 'text-[#C9A84C]' : 'text-[#888888] group-hover:text-[#C9A84C]'}`} />
                                                    </div>
                                                    <p className="text-[10px] text-[#888888] font-bold uppercase tracking-widest">₹{s.price.toLocaleString()} Starting</p>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                                        <h2 className="text-3xl font-bold text-[#0A0A0A]">When & Where?</h2>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Reserved Date</label>
                                                    <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 focus:border-[#C9A84C] transition-colors text-[#0A0A0A] hover:bg-white" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Time Slot</label>
                                                    <select value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 focus:border-[#C9A84C] transition-colors appearance-none cursor-pointer text-[#0A0A0A]">
                                                        <option value="" disabled>Select Window</option>
                                                        <option value="09:00 AM">09:00 AM Slot</option>
                                                        <option value="12:00 PM">12:00 PM Slot</option>
                                                        <option value="03:00 PM">03:00 PM Slot</option>
                                                        <option value="06:00 PM">06:00 PM Slot</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Service Destination</label>
                                                <div className="relative">
                                                    <input type="text" placeholder="Specify your exact doorstep location" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 pl-14 focus:border-[#C9A84C] transition-colors text-[#0A0A0A]" />
                                                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A84C]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between pt-6">
                                            <button onClick={prevStep} className="flex items-center gap-2 text-[#888888] hover:text-[#0A0A0A] transition-colors font-bold uppercase tracking-widest text-[11px]">
                                                <ArrowLeft className="w-4 h-4" /> Back
                                            </button>
                                            <button onClick={nextStep} disabled={!formData.date || !formData.time || !formData.location} className="bg-[#0A0A0A] text-[#C9A84C] px-10 py-4 rounded-md font-black border border-[#C9A84C]/30 hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 disabled:opacity-50">
                                                Continue
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                                        <h2 className="text-3xl font-bold text-[#0A0A0A]">Final Identity</h2>
                                        <div className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Full Name</label>
                                                    <div className="relative">
                                                        <input type="text" placeholder="Johnathan Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 pl-14 focus:border-[#C9A84C] transition-colors text-[#0A0A0A]" />
                                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A84C]" />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Personal Email</label>
                                                    <div className="relative">
                                                        <input type="email" placeholder="identity@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 pl-14 focus:border-[#C9A84C] transition-colors text-[#0A0A0A]" />
                                                        <Zap className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A84C]" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Mobile Verification</label>
                                                    <div className="relative">
                                                        <input type="tel" placeholder="+91 00000 00000" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 pl-14 focus:border-[#C9A84C] transition-colors text-[#0A0A0A]" />
                                                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A84C]" />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Vehicle Model</label>
                                                    <div className="relative">
                                                        <input type="text" placeholder="e.g. BMW M4 GT" value={formData.vehicle} onChange={(e) => setFormData({...formData, vehicle: e.target.value})} className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 pl-14 focus:border-[#C9A84C] transition-colors text-[#0A0A0A]" />
                                                        <CarFront className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A84C]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between pt-6">
                                            <button onClick={prevStep} className="flex items-center gap-2 text-[#888888] hover:text-[#0A0A0A] transition-colors font-bold uppercase tracking-widest text-[11px]">
                                                <ArrowLeft className="w-4 h-4" /> Back
                                            </button>
                                            <button 
                                                onClick={handleSubmit} 
                                                disabled={isSubmitting || !formData.name || !formData.phone || !formData.vehicle || !formData.email} 
                                                className="bg-[#0A0A0A] text-[#C9A84C] px-12 py-5 rounded-md font-black text-lg border border-[#C9A84C]/30 hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 disabled:opacity-50 group flex items-center gap-4 relative overflow-hidden"
                                            >
                                                {isSubmitting ? "Finalizing Plan..." : "Confirm Reservation"}
                                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-[#888888]">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                        <span>Private & Encrypted</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                        <span>Instant Pro Assignment</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
