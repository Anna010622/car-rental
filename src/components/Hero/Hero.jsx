import styles from './hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.hero__wrapper}>
			<h1 className={styles.hero__title}>CarRental</h1>
			<p className={styles.hero__subTitle}>Search, compare and save</p>
		</div>
	);
};

export default Hero;
