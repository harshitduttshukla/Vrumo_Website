import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CinematicBackground from './components/CinematicBackground';

// Core Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Booking from './pages/Booking';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';

// Individual Service Pages
import Wash from './pages/services/Wash';
import Maintenance from './pages/services/Maintenance';
import Insurance from './pages/services/Insurance';
import BuySell from './pages/services/BuySell';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <CinematicBackground />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        
                        {/* Sub-routes for Services */}
                        <Route path="/services/wash" element={<Wash />} />
                        <Route path="/services/maintenance" element={<Maintenance />} />
                        <Route path="/services/insurance" element={<Insurance />} />
                        <Route path="/services/buy-sell" element={<BuySell />} />

                        <Route path="/how-it-works" element={<HowItWorks />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
