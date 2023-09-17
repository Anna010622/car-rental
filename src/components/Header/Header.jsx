import Navigation from '../Navigation/Navigation';
import logo from '../../assets/images/logo.png';
import { CgClose, CgMenu, CgPhone } from 'react-icons/cg';

import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from '../mobileMenu/mobileMenu';

const Header = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const toggleModal = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	const closeMobileMenu = () => {
		setIsMenuOpened(false);
	};

	return (
		<>
			<header className={styles.header}>
				<div className="container">
					<div className={styles.headerWrapper}>
						<Link className={styles.logo__wrapper} to={'/'}>
							<img className={styles.logo} src={logo} alt="Logo" />
							<p className={styles.logo__text}>CarRental</p>
						</Link>
						<Navigation className="desktop" />

						<a className={styles.contact} href="tel:+380730000000">
							<CgPhone className={styles.contactIcon} /> +380730000000
						</a>

						{isMenuOpened ? (
							<CgClose className={styles.menuIcon} onClick={toggleModal} />
						) : (
							<CgMenu className={styles.menuIcon} onClick={toggleModal} />
						)}
					</div>
				</div>
			</header>
			<MobileMenu
				isMenuOpened={isMenuOpened}
				closeMobileMenu={closeMobileMenu}
			/>
		</>
	);
};

export default Header;
