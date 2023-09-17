import { TiInputChecked } from 'react-icons/ti';
import advantages from '../../assets/images/advantages.jpg';
import styles from './advantages.module.scss';

const Advantages = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Our advantages</h2>
			<div className={styles.wrapper}>
				<img className={styles.img} src={advantages} alt="Client" />
				<ul className={styles.list}>
					<li className={styles.item}>
						<TiInputChecked className={styles.icon} />
						<p className={styles.text}>
							round-the-clock technical support service will always be in touch,
							wherever you are;
						</p>
					</li>
					<li className={styles.item}>
						<TiInputChecked className={styles.icon} />
						<p className={styles.text}>all vehicles are insured;</p>
					</li>
					<li className={styles.item}>
						<TiInputChecked className={styles.icon} />
						<p className={styles.text}>
							each car is fully serviceable, regularly undergoes scheduled
							inspection;
						</p>
					</li>
					<li className={styles.item}>
						<TiInputChecked className={styles.icon} />
						<p className={styles.text}>
							if necessary, you will be provided with additional equipment, such
							as a child seat or a GPS navigator;
						</p>
					</li>
					<li className={styles.item}>
						<TiInputChecked className={styles.icon} />
						<p className={styles.text}>
							a car will be delivered clean, and it is not necessary to wash it
							before return;
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Advantages;
