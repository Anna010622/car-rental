import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import Button from '../Buttons/Button';
import styles from './card.module.scss';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalContent from '../ModalContent/ModalContent';
import defaultCar from '../../assets/images/default-car.jpeg';

const Card = ({ item, otherProps }) => {
	const { favoriteItems, addToFavorite, removeFromFavorite } = otherProps;

	const [addedToFavorites, setAddedToFavorites] = useState(() =>
		favoriteItems.find(favoriteItem => favoriteItem.id === item.id)
	);
	const [isModalOpened, setIsModalOpened] = useState(false);

	const handelClickOnHeat = () => {
		setAddedToFavorites(prev => !prev);
		if (!addedToFavorites) {
			return addToFavorite(item);
		}
		return removeFromFavorite(item);
	};

	const openModal = () => {
		setIsModalOpened(true);
	};

	const closeModal = () => {
		setIsModalOpened(false);
	};

	return (
		<div className={styles.card}>
			<div className={styles.photo__container}>
				<img className={styles.photo} src={item.img || defaultCar} alt="img" />
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

			<div className={styles.btnWrapper}>
				<Button width="100%" onClick={openModal}>
					Learn more
				</Button>
			</div>

			{isModalOpened && (
				<Modal close={closeModal}>
					<ModalContent item={item} />
				</Modal>
			)}
		</div>
	);
};

export default Card;
