import styles from './empty.module.scss';
import imgCar from '../../assets/images/default-car.jpeg';

const Empty = () => {
	return (
		<div>
			<p className={styles.text}>Your favorites list is empty</p>
			<img className={styles.img} src={imgCar} alt="Car" />
		</div>
	);
};

export default Empty;
