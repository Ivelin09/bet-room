'use strict';
import { Suspense, lazy } from 'react';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AdminPage } from './pages/Admin.page';
import Home from './pages/Home.page';
import PrivacyAndCookiePolicy from './pages/PrivacyAndCookiePolicy.page';
import TandC from './pages/T&C.page';
import AboutUs from './pages/AboutUs.page';
import ContactUs from './pages/ContactUs.page';
import { ArchivePage } from './pages/Archive.page';
import NoRefundPolicy from './pages/NoRefundPolicy.page';
// import TandC from './pages/t&c';
// import PrivacyAndCookiePolicy from './pages/PrivacyAndCookiePolicy';

const App = () => {
    return (
        <Router>
            <AuthProvider
                authType={'localstorage'}
                authName={'x-authorization'}
            >
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
                            <Route path='/about-us' element={<AboutUs />} />
                            <Route path='/archive' element={<ArchivePage />} />
                            <Route path='/no-refund-policy' element={<NoRefundPolicy />} />
                            <Route path='*' element={<Home />} />

                        </Routes>
                    </Suspense>
                    <Footer />
                </>
            </AuthProvider>
        </Router>
    );
};

export default App;
