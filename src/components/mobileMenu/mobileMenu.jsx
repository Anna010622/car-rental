import { useEffect } from 'react';
import styles from './mobileMenu.module.scss';
import Navigation from '../Navigation/Navigation';

const MobileMenu = ({ isMenuOpened, closeMobileMenu }) => {
	useEffect(() => {
		if (isMenuOpened) {
			document.body.classList.add('noScroll');
		} else {
			document.body.classList.remove('noScroll');
		}
	}, [isMenuOpened]);

	return (
		<div
			className={
				isMenuOpened ? `${styles.mobileMenu} active` : `${styles.mobileMenu}`
			}
		>
			<Navigation
				onClick={closeMobileMenu}
				className={isMenuOpened && 'mobileActive'}
			/>
			<a className={styles.contact} href="tel:+380730000000">
				+380730000000
			</a>
		</div>
	);
};

export default MobileMenu;
