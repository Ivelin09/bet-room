'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
// import TandC from './pages/t&c';
// import PrivacyAndCookiePolicy from './pages/PrivacyAndCookiePolicy';
import { ContactForm } from './components/ContactForm';
import Footer from './components/Footer';
import ContactUs from './pages/contactUs';
import AboutUs from './pages/aboutUs';

const Home = lazy(() => import('./pages/home'));
const PrivacyAndCookiePolicy = lazy(() => import('./pages/PrivacyAndCookiePolicy'));
const TandC = lazy(() => import('./pages/t&c'));


const App = () => {
    return (
        <Router>
            <>
                <NavBar />
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                        <Route
                            path='/terms-and-conditions'
                            element={<TandC />}
                        />
                        <Route
                            path='/privacy-and-cookie-policy'
                            element={<PrivacyAndCookiePolicy />}
                        />
                        <Route 
                            path='/about-us'
                            element={<AboutUs />}
                        />
                    </Routes>
                </Suspense>
                <Footer />
            </>
        </Router>
    );
};

export default App;
