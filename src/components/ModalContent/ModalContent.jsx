import Button from '../Buttons/Button';
import styles from './modalContent.module.scss';

const ModalContent = ({ item }) => {
	const rentalConditions = item.rentalConditions.split('\n');
	const minimumAge = rentalConditions[0].replace(/\D/g, '');
	const mileage = item.mileage;
	const formattedMileage = new Intl.NumberFormat('en-US').format(mileage);
	const price = `${item.rentalPrice.replace(/\D/g, '')}$`;

	return (
		<>
			<div className={styles.photo__container}>
				<img className={styles.photo} src={item.img} alt="img" />
			</div>

			<h2 className={styles.title}>
				{`${item.make}`}
				<span className={`${styles.title} accent`}>{` ${item.model}`}</span>,
				{` ${item.year}`}
			</h2>

			<div className={styles.text__container}>
				<div className={styles.text__list}>
					<span className={styles.text}>{`${item.address.split(',')[1]}`}</span>
					<span className={styles.text}>{`${item.address.split(',')[2]}`}</span>
					<span className={styles.text}>{`Id: ${item.id}`}</span>
					<span className={styles.text}>{`Year: ${item.year}`}</span>
					<span className={styles.text}>{`Type: ${item.type}`}</span>
				</div>

				<div className={styles.text__list}>
					<span
						className={styles.text}
					>{`Fuel Consumption: ${item.fuelConsumption}`}</span>
					<span
						className={styles.text}
					>{`Engine Size: ${item.engineSize}`}</span>
				</div>
			</div>

			<p className={styles.description}>{`${item.description}`}</p>

			<h3 className={styles.subTitle}>Accessories and functionalities:</h3>

			<div className={styles.accessories__container}>
				<div className={styles.text__list}>
					{item.accessories.map(accessory => (
						<span key={accessory} className={styles.text}>
							{accessory}
						</span>
					))}
				</div>

				<div className={styles.text__list}>
					{item.functionalities.map(accessory => (
						<span key={accessory} className={styles.text}>
							{accessory}
						</span>
					))}
				</div>
			</div>

			<h3 className={styles.subTitle}>Rental Conditions:</h3>

			<ul className={styles.rentalConditions}>
				<li>
					<p className={styles.rentalCondition}>
						Minimum age: <span className="accent">{minimumAge}</span>
					</p>
				</li>
				<li>
					<p className={styles.rentalCondition}>{`${rentalConditions[1]}`}</p>
				</li>
				<li>
					<p className={styles.rentalCondition}>{`${rentalConditions[2]}`}</p>
				</li>
				<li>
					<p className={styles.rentalCondition}>
						Mileage: <span className="accent">{formattedMileage}</span>
					</p>
				</li>
				<li>
					<p className={styles.rentalCondition}>
						Price: <span className="accent">{price}</span>
					</p>
				</li>
			</ul>

			<a className={styles.btn} href="tel:+380730000000">
				Rental car
			</a>
		</>
	);
};

export default ModalContent;
