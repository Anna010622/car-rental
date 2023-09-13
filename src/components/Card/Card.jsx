import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import Button from '../Button/Button';
import styles from './card.module.scss';
import { useState } from 'react';

const Card = ({ item }) => {
	const [addedToFavorites, setAddedToFavorites] = useState(false);

	const handelClickOnHeat = () => {
		setAddedToFavorites(!addedToFavorites);
	};

	return (
		<div>
			<div className={styles.photo__container}>
				<img className={styles.photo} src={item.img} alt="img" />
				<button className={styles.btn} onClick={handelClickOnHeat}>
					{!addedToFavorites ? (
						<BiHeart className={styles.btn__icon} />
					) : (
						<BiSolidHeart className={`${styles.btn__icon} solid`} />
					)}
				</button>
			</div>

			<div className={styles.title__container}>
				<p className={styles.title}>
					{`${item.make}`}
					<span className={`${styles.title} accent`}>{` ${item.model}`}</span>,
					{` ${item.year}`}
				</p>
				<p className={styles.title}>{`${item.rentalPrice}`}</p>
			</div>

			<div className={styles.text__container}>
				<div className={styles.text__list}>
					<span className={styles.text}>{`${item.address.split(',')[1]}`}</span>
					<span className={styles.text}>{`${item.address.split(',')[2]}`}</span>
					<span className={styles.text}>{`${item.rentalCompany}`}</span>
				</div>

				<div className={styles.text__list}>
					<span className={styles.text}>{`${item.type}`}</span>
					<span className={styles.text}>{`${item.make}`}</span>
					<span className={styles.text}>{`${item.accessories[0]}`}</span>
				</div>
			</div>

			<Button text="Learn more" width="100%" />
		</div>
	);
};

export default Card;
