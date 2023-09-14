import styles from './button.module.scss';

const Button = ({ text, width, height, type = 'button', onClick }) => {
	return (
		<button
			className={styles.btn}
			style={{ width: `${width}`, height: `${height}` }}
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
export default Button;
