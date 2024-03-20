'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { AdminPage } from './Admin.page';
import Home from './Home.page';
import PrivacyAndCookiePolicy from './PrivacyAndCookiePolicy.page';
import TandC from './T&C.page';
import AboutUs from './aboutUs';
import ContactUs from './contactUs';
// import TandC from './pages/t&c';
// import PrivacyAndCookiePolicy from './pages/PrivacyAndCookiePolicy';




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
                        <Route path='/admin' element={<AdminPage />} />
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
