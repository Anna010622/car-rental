import styles from './empty.module.scss';
import imgCar from '../../assets/images/default-car.jpeg';

const Empty = ({ text }) => {
	return (
		<div>
			<p className={styles.text}>{text}</p>
			<img className={styles.img} src={imgCar} alt="Car" />
		</div>
	);
};

export default Empty;
