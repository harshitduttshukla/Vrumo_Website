import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { login, googleLogin } from '../api';

const Login = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize Google Identity Services
        /* global google */
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "537687676792-pl8stmbm5mupsn5emb2dm6f4j5bvc4vv.apps.googleusercontent.com",
                callback: handleGoogleResponse
            });
            window.google.accounts.id.renderButton(
                document.getElementById("googleSignInDiv"),
                { theme: "outline", size: "large", width: "100%", text: "continue_with" }
            );
        }
    }, []);

    const handleGoogleResponse = async (response) => {
        setIsSubmitting(true);
        setError(null);
        try {
            const res = await googleLogin(response.credential);
            localStorage.setItem('token', res.access_token);
            localStorage.setItem('user', JSON.stringify(res.user));
            navigate('/');
        } catch (err) {
            setError(err.message || 'Google login failed');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            const response = await login(emailOrPhone, password);
            localStorage.setItem('token', response.access_token);
            localStorage.setItem('user', JSON.stringify(response.user));
            navigate('/');
        } catch (err) {
            setError(err.message || 'Login failed');
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
                    <p className="text-[#888888] font-medium">Log in to your Vrumo account</p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-[#EFEFEF] border-t-4 border-t-[#2563EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Email / Phone</label>
                            <div className="relative">
                                <input 
                                    type="text"
                                    value={emailOrPhone}
                                    onChange={(e) => setEmailOrPhone(e.target.value)}
                                    placeholder="Enter your email or phone"
                                    className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all font-medium" 
                                />
                                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2563EB]" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-[#888888] ml-2">Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-[#F8F8F8] border border-[#EFEFEF] rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none transition-all font-medium" 
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888]"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="text-xs font-bold text-[#2563EB] hover:underline">Forgot password?</button>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white py-4 rounded-xl font-bold text-lg hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'LOG IN'}
                        </button>

                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#EFEFEF]"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-4 text-[#888888] font-bold">Or continue with</span>
                            </div>
                        </div>

                        <div id="googleSignInDiv" className="w-full"></div>

                        <div className="text-center mt-8">
                            <p className="text-sm text-[#888888] font-medium">
                                New User? <Link to="/register" className="text-[#2563EB] font-bold hover:underline">Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
