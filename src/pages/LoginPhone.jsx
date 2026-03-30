import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { sendOTP } from '../api';

const LoginPhone = () => {
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!/^\d{10}$/.test(phone)) {
            setError('Please enter a valid 10-digit phone number');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await sendOTP(phone);
            console.log("DEBUG OTP RESPONSE:", response);
            if (response.debug_otp) {
                alert(`DEBUG: Your OTP is ${response.debug_otp}`);
            }
            // Store phone in session storage for the verify page
            sessionStorage.setItem('temp_phone', phone);
            navigate('/verify-otp');
        } catch (err) {
            setError(err.message || 'Failed to send OTP. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#2563EB]/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-md mx-auto relative z-10">
                <div className="text-center space-y-4 mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        Welcome <span className="text-[#2563EB]">Back</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#888888] font-medium"
                    >
                        Enter your phone number to continue.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-[#EFEFEF] border-t-4 border-t-[#2563EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm"
                            >
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <span>{error}</span>
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Phone Number</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-[#EFEFEF] pr-3 h-6">
                                    <span className="text-sm font-bold text-[#888888]">+91</span>
                                </div>
                                <input 
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                    placeholder="00000 00000"
                                    className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 pl-20 focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all font-medium tracking-wider" 
                                />
                                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2563EB]" />
                            </div>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting || phone.length !== 10}
                            className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white py-4 rounded-xl font-bold text-lg hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    Send OTP
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>

                <p className="text-center mt-8 text-xs text-[#888888] font-medium">
                    By continuing, you agree to our <span className="text-[#2563EB] cursor-pointer">Terms of Service</span> and <span className="text-[#2563EB] cursor-pointer">Privacy Policy</span>.
                </p>
            </div>
        </div>
    );
};

export default LoginPhone;
