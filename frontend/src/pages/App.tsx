'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import TandC from './pages/t&c';
// import PrivacyAndCookiePolicy from './pages/PrivacyAndCookiePolicy';
import { ContactForm } from '../components/ContactForm';
import Footer from '../components/Footer';
import { AdminPage } from './Admin.page';

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
                        <Route path='/Contact' element={<ContactForm />} />
                        <Route
                            path='/terms-and-conditions'
                            element={<TandC />}
                        />
                        <Route path='/admin' element={<AdminPage />} />
                        <Route
                            path='/privacy-and-cookie-policy'
                            element={<PrivacyAndCookiePolicy />}
                        />
                    </Routes>
                </Suspense>
                <Footer />
            </>
        </Router>
    );
};

export default App;
