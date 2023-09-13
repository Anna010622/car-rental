import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));

import './styles/styles.scss';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="catalog" element={<MainPage />} />
					<Route path="favorites" element={<FavoritesPage />} />
					<Route path="*" element={<HomePage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
