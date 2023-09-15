import Card from '../Card/Card';
import styles from './ads.module.scss';

const AdsList = ({ items, ...otherProps }) => {
	return (
		<ul className={styles.list}>
			{items.map(item => (
				<li key={item.id}>
					<Card item={item} otherProps={otherProps} />
				</li>
			))}
		</ul>
	);
};

export default AdsList;
