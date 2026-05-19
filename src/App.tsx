import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import BackgroundOrb from './components/BackgroundOrb';
import GlassOrb from './components/GlassOrb';
import Loader from './components/Loader';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import LiquidTransition from './components/LiquidTransition';
import Modal from './components/Modal';
import Home from './pages/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import ProjectDetail from './pages/ProjectDetail';
import ConversionWebsites from './pages/ConversionWebsites';
import SaaSLandingPages from './pages/SaaSLandingPages';
import D2CShopify from './pages/D2CShopify';
import NotFound from './pages/NotFound/NotFound';
import Privacy from './sections/Privacy';
import Terms from './sections/Terms';
import Refund from './sections/Refund';
import CookiePolicy from './sections/CookiePolicy';
import { track } from './utils/analytics';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => { 
    track('page_view', { path: location.pathname }); 
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" onFinished={() => setIsLoading(false)} />
      ) : (
        <SmoothScroll>
          <div className="app-container">
            <ScrollProgress />
            <BackgroundOrb />
            <GlassOrb />
            <div className="noise-overlay" />
            <div className="vignette" />
            <CustomCursor />
            <LiquidTransition />
            
            <main>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/project/:id" element={<ProjectDetail />} />
                  <Route path="/services/conversion-websites" element={<ConversionWebsites />} />
                  <Route path="/services/saas-landing-pages" element={<SaaSLandingPages />} />
                  <Route path="/services/d2c-shopify" element={<D2CShopify />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms-of-service" element={<Terms />} />
                  <Route path="/refund" element={<Refund />} />
                  <Route path="/cookies" element={<CookiePolicy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>
            
            <Footer />
            <BackToTop />
          </div>
        </SmoothScroll>
      )}
      <Modal />
    </AnimatePresence>
  );
}

export default App;
