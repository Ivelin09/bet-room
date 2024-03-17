'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

const Home = lazy(() => import('./pages/home'));

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Suspense fallback={<p>Loading...</p>} >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </>
    </Router>
  );
};

export default App;