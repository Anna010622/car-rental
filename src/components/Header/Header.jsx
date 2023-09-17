import Navigation from '../Navigation/Navigation';
import logo from '../../assets/images/logo.png';

import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.headerWrapper}>
					<Link className={styles.logo__wrapper} to={'/'}>
						<img className={styles.logo} src={logo} alt="Logo" />
						<p className={styles.logo__text}>CarRental</p>
					</Link>
					<Navigation />
					<a className={styles.contact} href="tel:+380730000000">
						+380730000000
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
