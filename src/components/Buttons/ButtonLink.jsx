import styles from './buttonLink.module.scss';

const ButtonLink = ({ onClick, children }) => {
	return (
		<button className={styles.btnLink} onClick={onClick}>
			{children}
		</button>
	);
};

export default ButtonLink;
