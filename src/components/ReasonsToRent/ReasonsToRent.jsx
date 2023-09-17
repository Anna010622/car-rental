import {
	FaHandshake,
	FaHandHoldingUsd,
	FaRegSun,
	FaHeadset,
} from 'react-icons/fa';
import styles from './reasonsToRent.module.scss';

const ReasonsToRent = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Get the most out of your car rental</h2>
			<ul className={styles.list}>
				<li className={styles.item}>
					<FaHeadset className={styles.icon} />
					<p className={styles.text}>Manager&#39;s help</p>
				</li>
				<li className={styles.item}>
					<FaHandshake className={styles.icon} />
					<p className={styles.text}>Free delivery to the customer</p>
				</li>
				<li className={styles.item}>
					<FaRegSun className={styles.icon} />
					<p className={styles.text}>All cars are in good condition</p>
				</li>
				<li className={styles.item}>
					<FaHandHoldingUsd className={styles.icon} />
					<p className={styles.text}>Affordable prices</p>
				</li>
			</ul>
		</section>
	);
};

export default ReasonsToRent;
