import { NavLink } from 'react-router-dom';
import navItems from './navItems.json';
import styles from './navigation.module.scss';

const Navigation = ({ onClick, className }) => {
	const fullClassName = className ? `${styles.nav} ${className}` : styles.nav;

	const elements = navItems.map(item => {
		return (
			<li key={item.id}>
				<NavLink
					className={styles.link}
					to={item.link}
					onClick={() => {
						if (onClick) onClick();
					}}
				>
					{item.title}
				</NavLink>
			</li>
		);
	});
	return (
		<nav className={fullClassName}>
			<ul className={styles.list}>{elements}</ul>
		</nav>
	);
};

export default Navigation;
