import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Suspense fallback={<Spinner />}>
						<Outlet />
					</Suspense>
				</div>
			</main>
		</>
	);
};

export default Layout;
