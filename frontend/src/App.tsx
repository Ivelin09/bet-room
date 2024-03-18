'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import TandC from './pages/t&c';
import PrivacyAndCookiePolicy from './pages/PrivacyAndCookiePolicy';

const Home = lazy(() => import('./pages/home'));

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
      </>
    </Router>
  );
};

export default App;