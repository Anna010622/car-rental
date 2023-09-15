import styles from './button.module.scss';

const Button = ({ children, width, height, type = 'button', onClick }) => {
	return (
		<button
			className={styles.btn}
			style={{ width: `${width}`, height: `${height}` }}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
export default Button;
