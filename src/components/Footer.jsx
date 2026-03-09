import { Link } from 'react-router-dom';
import { Droplets, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-300 pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="bg-primary p-2 rounded-lg inline-block">
                                <Droplets className="h-6 w-6 text-black" />
                            </div>
                            <span className="font-bold text-2xl tracking-wide text-white">drive<span className="text-primary">Glow</span></span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Professional doorstep car and bike cleaning services. We bring the shine right to your driveway.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
                            <li><Link to="/booking" className="hover:text-primary transition-colors">Book Now</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Popular Services</h3>
                        <ul className="space-y-3">
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Car Deep Cleaning</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Ceramic Coating</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Bike Polishing</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Premium Wash</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                                <span>123 Glow Avenue, Tech Park Phase 2, City 400001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                                <span>support@driveglow.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-sm text-center">
                    <p>© {new Date().getFullYear()} driveGlow Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
