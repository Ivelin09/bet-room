'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
<<<<<<< Updated upstream
import Footer from './components/Footer';
=======
import TandC from './pages/t&c';
import PrivacyAndCookiePolicy from './pages/PrivacyAndCookiePolicy';
import { ContactForm } from './components/ContactForm';
>>>>>>> Stashed changes

const Home = lazy(() => import('./pages/home'));
const PrivacyAndCookiePolicy = lazy(() => import('./pages/PrivacyAndCookiePolicy'));
const TandC = lazy(() => import('./pages/t&c'));


const App = () => {
<<<<<<< Updated upstream
  return (
    <Router>
      <>
        <NavBar />
        <Suspense fallback={<p>Loading...</p>} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/terms-and-conditions' element={<TandC />} />
            <Route path='/privacy-and-cookie-policy' element={<PrivacyAndCookiePolicy />} />
          </Routes>
        </Suspense>
        <Footer />
      </>
    </Router>
  );
=======
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
                        <Route
                            path='/privacy-and-cookie-policy'
                            element={<PrivacyAndCookiePolicy />}
                        />
                    </Routes>
                </Suspense>
            </>
        </Router>
    );
>>>>>>> Stashed changes
};

export default App;
