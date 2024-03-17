'use strict';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/app/navBar';

const Home = lazy(() => import('./pages/home'));

const App = () => {
	return (
		<>
			<NavBar />
			<Suspense fallback={<p>Loading...</p>}>
				<Router>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
					</Routes>
				</Router>
			</Suspense>
		</>
	);
};

export default App;
