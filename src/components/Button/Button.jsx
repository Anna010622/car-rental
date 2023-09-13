import styles from './button.module.scss';

const Button = ({ text, width, height }) => {
	return (
		<button
			className={styles.btn}
			style={{ width: `${width}`, height: `${height}` }}
		>
			{text}
		</button>
	);
};
export default Button;
