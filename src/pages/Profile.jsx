import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, 
    Mail, 
    Car, 
    Bike, 
    CheckCircle2, 
    Loader2, 
    AlertCircle,
    ArrowRight,
    Save,
    Layout
} from 'lucide-react';
import { fetchCurrentUser, updateProfile } from '../api';

const Profile = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        vehicle_type: '',
        vehicle_seats: ''
    });

    useEffect(() => {
        const loadUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login?redirect=/profile');
                return;
            }

            try {
                const user = await fetchCurrentUser();
                if (user) {
                    setFormData({
                        name: user.name || '',
                        email: user.email || '',
                        vehicle_type: user.vehicle_type || '',
                        vehicle_seats: user.vehicle_seats || ''
                    });
                }
            } catch (err) {
                setError("Failed to load profile data");
            } finally {
                setIsLoading(false);
            }
        };

        loadUserData();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setIsSubmitting(true);

        try {
            await updateProfile(formData);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError(err.message || "Failed to update profile");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-[#2563EB] animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#2563EB]/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center space-y-4 mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        My <span className="text-[#2563EB]">Profile</span>
                    </motion.h1>
                    <p className="text-neutral-500 font-medium">Manage your account and vehicle preferences</p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-[#EFEFEF] border-t-4 border-t-[#2563EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
                >
                    <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        {success && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-green-50 border border-green-100 rounded-xl flex items-center gap-3 text-green-600 text-sm"
                            >
                                <CheckCircle2 className="w-5 h-5 shrink-0" />
                                <span>Profile updated successfully!</span>
                            </motion.div>
                        )}

                        {/* Personal Info Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#F5F5F5]">
                                <User className="w-5 h-5 text-[#2563EB]" />
                                <h2 className="text-xl font-bold">Personal Information</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-2">Full Name</label>
                                    <div className="relative">
                                        <input 
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            placeholder="John Doe"
                                            className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all font-medium" 
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-2">Email Address</label>
                                    <div className="relative">
                                        <input 
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            placeholder="john@example.com"
                                            className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all font-medium text-neutral-500" 
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vehicle Section */}
                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-2 pb-2 border-b border-[#F5F5F5]">
                                <Layout className="w-5 h-5 text-[#2563EB]" />
                                <h2 className="text-xl font-bold">Vehicle Preferences</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-2">Select Primary Vehicle</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { id: '2 Wheeler', icon: Bike, label: '2 Wheeler' },
                                            { id: '4 Wheeler', icon: Car, label: '4 Wheeler' }
                                        ].map((vehicle) => (
                                            <button
                                                key={vehicle.id}
                                                type="button"
                                                onClick={() => {
                                                    setFormData({
                                                        ...formData, 
                                                        vehicle_type: vehicle.id,
                                                        vehicle_seats: vehicle.id === '2 Wheeler' ? '' : formData.vehicle_seats
                                                    });
                                                }}
                                                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 ${
                                                    formData.vehicle_type === vehicle.id
                                                    ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-lg shadow-blue-500/10'
                                                    : 'border-[#F1F1F1] bg-white text-neutral-400 hover:border-neutral-200'
                                                }`}
                                            >
                                                <vehicle.icon className={`w-8 h-8 ${formData.vehicle_type === vehicle.id ? 'text-[#2563EB]' : 'text-neutral-300'}`} />
                                                <span className="font-bold text-sm tracking-wide uppercase">{vehicle.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {formData.vehicle_type === '4 Wheeler' && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-4 overflow-hidden"
                                        >
                                            <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-2">Seating Capacity</label>
                                            <div className="grid grid-cols-2 gap-4">
                                                {['5 Seater', '7 Seater'].map((seats) => (
                                                    <button
                                                        key={seats}
                                                        type="button"
                                                        onClick={() => setFormData({...formData, vehicle_seats: seats})}
                                                        className={`py-4 rounded-xl font-bold transition-all duration-300 border-2 ${
                                                            formData.vehicle_seats === seats
                                                            ? 'border-[#2563EB] bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                                                            : 'border-[#F1F1F1] bg-[#F8F8F8] text-neutral-500 hover:border-neutral-200'
                                                        }`}
                                                    >
                                                        {seats}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col md:flex-row items-center gap-4">
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto flex-1 bg-linear-to-r from-royal to-[#2563EB] text-white py-4 rounded-xl font-bold text-lg hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : (
                                    <>
                                        <Save className="w-5 h-5" />
                                        SAVE CHANGES
                                    </>
                                )}
                            </button>
                            <button 
                                type="button"
                                onClick={() => navigate('/booking')}
                                className="w-full md:w-auto px-10 py-4 bg-[#F8F8F8] text-neutral-600 rounded-xl font-bold border border-[#EFEFEF] hover:bg-neutral-100 transition-all flex items-center justify-center gap-3"
                            >
                                GO TO BOOKING
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
