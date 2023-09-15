import { useEffect, useState } from 'react';
import AdsList from '../components/AdsList/AdsList';
import Filter from '../components/Filter/Filter';
import { getAdverts } from '../api/advertApi';
import ButtonLink from '../components/Buttons/ButtonLink';
import { loadFromStorage, saveToStorage } from '../helpers/local-storage';

const CatalogPage = () => {
	const [adverts, setAdverts] = useState([]);
	const [favoriteAdverts, setFavoriteAdverts] = useState(() =>
		loadFromStorage('favoriteAdverts')
	);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			const data = await getAdverts(page);
			setAdverts(prevState => [...prevState, ...data]);
		})();
	}, [page]);

	const handleLoadMore = () => {
		setPage(prev => prev + 1);
	};

	useEffect(() => {
		saveToStorage('favoriteAdverts', favoriteAdverts);
	}, [favoriteAdverts]);

	const addToFavorite = advert => {
		setFavoriteAdverts(prevState => [...prevState, advert]);
	};

	const removeFromFavorite = advert => {
		setFavoriteAdverts(prevState =>
			prevState.filter(item => item.id !== advert.id)
		);
	};

	return (
		<section className="section">
			<Filter />
			<AdsList
				items={adverts}
				favoriteItems={favoriteAdverts}
				addToFavorite={addToFavorite}
				removeFromFavorite={removeFromFavorite}
			/>
			<ButtonLink onClick={handleLoadMore}>Load more</ButtonLink>
		</section>
	);
};

export default CatalogPage;
