import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Loader2, AlertCircle, ArrowLeft } from 'lucide-react';
import { verifyOTP, sendOTP } from '../api';

const VerifyOTP = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const phone = sessionStorage.getItem('temp_phone');

    useEffect(() => {
        if (!phone) {
            navigate('/login');
            return;
        }

        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
        }

        return () => clearInterval(interval);
    }, [timer, phone, navigate]);

    const handleChange = (index, value) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Move to next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleResend = async () => {
        if (!canResend) return;
        
        setError(null);
        try {
            await sendOTP(phone);
            setTimer(30);
            setCanResend(false);
            setOtp(['', '', '', '', '', '']);
            inputRefs.current[0].focus();
        } catch (err) {
            setError(err.message || 'Failed to resend OTP.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpString = otp.join('');
        
        if (otpString.length !== 6) {
            setError('Please enter all 6 digits');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await verifyOTP(phone, otpString);
            // Store token and user
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('user', JSON.stringify(response.user));
            
            // Redirect to home or previous page
            navigate('/');
        } catch (err) {
            setError(err.message || 'Verification failed. Please check the OTP.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] pt-48 pb-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#2563EB]/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-md mx-auto relative z-10">
                <button 
                    onClick={() => navigate('/login')}
                    className="flex items-center gap-2 text-[#888888] hover:text-[#2563EB] mb-8 transition-colors text-sm font-bold uppercase tracking-wider"
                >
                    <ArrowLeft size={16} />
                    Back
                </button>

                <div className="text-center space-y-4 mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        Verify <span className="text-[#2563EB]">OTP</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#888888] font-medium"
                    >
                        We've sent a 6-digit code to <span className="text-[#0A0A0A] font-bold">+91 {phone}</span>
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-[#EFEFEF] border-t-4 border-t-[#2563EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
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

                        <div className="flex justify-between gap-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all"
                                />
                            ))}
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting || otp.join('').length !== 6}
                            className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white py-4 rounded-xl font-bold text-lg hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    Verify & Log In
                                    <ShieldCheck className="w-5 h-5" />
                                </>
                            )}
                        </motion.button>

                        <div className="text-center">
                            {timer > 0 ? (
                                <p className="text-sm text-[#888888] font-medium">
                                    Resend code in <span className="text-[#0A0A0A] font-bold">{timer}s</span>
                                </p>
                            ) : (
                                <button 
                                    type="button"
                                    onClick={handleResend}
                                    className="text-sm text-[#2563EB] font-bold hover:underline"
                                >
                                    Resend OTP
                                </button>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default VerifyOTP;
