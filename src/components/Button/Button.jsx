import styles from './button.module.scss';

const Button = ({ text, width, height, type = 'button' }) => {
	return (
		<button
			className={styles.btn}
			style={{ width: `${width}`, height: `${height}` }}
			type={type}
		>
			{text}
		</button>
	);
};
export default Button;
