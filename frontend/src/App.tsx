'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import TandC from './pages/t&c';

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
          </Routes>
        </Suspense>
      </>
    </Router>
  );
};

export default App;