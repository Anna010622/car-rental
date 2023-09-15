import Card from '../Card/Card';
import styles from './ads.module.scss';

const AdsList = ({ items }) => {
	return (
		<ul className={styles.list}>
			{items.map(item => (
				<li key={item.id}>
					<Card item={item} />
				</li>
			))}
		</ul>
	);
};

export default AdsList;
