import { Link } from 'react-router-dom';
import { Droplets, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0b1426] text-gray-400 pt-20 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative">
                    {/* Brand - Span 4 */}
                    <div className="space-y-6 md:col-span-4 lg:col-span-5 pr-4">
                        <Link to="/" className="flex items-center space-x-2 group w-max">
                            <div className="bg-gradient-to-br from-primary to-emerald-400 p-2.5 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                                <Droplets className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-wide text-white uppercase italic">
                                Vru<span className="text-primary">mo</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-loose max-w-sm text-gray-400 font-medium pt-2">
                            Elevating vehicle care with professional doorstep detailing. We bring the showroom shine right to your driveway using premium echo-friendly products.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Span 2 */}
                    <div className="md:col-span-3 lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Company</h3>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="hover:text-primary transition-colors font-medium">Services</Link></li>
                            <li><Link to="/how-it-works" className="hover:text-primary transition-colors font-medium">How it Works</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors font-medium">Pricing Plans</Link></li>
                            <li><Link to="/booking" className="hover:text-primary transition-colors font-medium">Book Appointment</Link></li>
                        </ul>
                    </div>

                    {/* Services - Span 3 */}
                    <div className="md:col-span-5 lg:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Popular Services</h3>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="hover:text-primary transition-colors font-medium cursor-pointer">Car Deep Cleaning</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors font-medium cursor-pointer">Ceramic Coating</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors font-medium cursor-pointer">Bike Polishing</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors font-medium cursor-pointer">Premium Wash</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Span 3 */}
                    <div className="col-span-1 md:col-span-12 lg:col-span-3 lg:pl-4">
                        <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-primary mr-4 mt-0.5 shrink-0" />
                                <span className="font-medium">123 Glow Avenue, Tech Park Phase 2, City 400001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-primary mr-4 shrink-0" />
                                <span className="font-medium">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-primary mr-4 shrink-0" />
                                <span>support@vrumo.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
                    <p>© {new Date().getFullYear()} Vrumo Services. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
