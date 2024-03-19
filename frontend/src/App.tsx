'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/home'));
const PrivacyAndCookiePolicy = lazy(() => import('./pages/PrivacyAndCookiePolicy'));
const TandC = lazy(() => import('./pages/t&c'));


const App = () => {
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
};

export default App;