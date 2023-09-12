import Navigation from '../Navigation/Navigation';

import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.headerWrapper}>
					<Navigation />
				</div>
			</div>
		</header>
	);
};

export default Header;
