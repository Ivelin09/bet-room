'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import TandC from './pages/t&c';
// import PrivacyAndCookiePolicy from './pages/PrivacyAndCookiePolicy';
<<<<<<< HEAD:frontend/src/App.tsx
import { ContactForm } from './components/ContactForm';
import Footer from './components/Footer';
import ContactUs from './pages/contactUs';
import AboutUs from './pages/aboutUs';

const Home = lazy(() => import('./pages/home'));
const PrivacyAndCookiePolicy = lazy(() => import('./pages/PrivacyAndCookiePolicy'));
const TandC = lazy(() => import('./pages/t&c'));
=======
import { ContactForm } from '../components/ContactForm';
import Footer from '../components/Footer';
import { AdminPage } from './Admin.page';
>>>>>>> 9d80020ec04933c7554612816ade9556dddfc117:frontend/src/pages/App.tsx

const Home = lazy(() => import('./Home.page'));
const PrivacyAndCookiePolicy = lazy(
    () => import('./PrivacyAndCookiePolicy.page')
);
const TandC = lazy(() => import('./T&C.page'));

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
