import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Suspense fallback={<p>Loader...</p>}>
						<Outlet />
					</Suspense>
				</div>
			</main>
		</>
	);
};

export default Layout;
