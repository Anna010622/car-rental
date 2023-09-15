import Filter from '../components/Filter/Filter';
import AdsList from '../components/AdsList/AdsList';
import { loadFromStorage, saveToStorage } from '../helpers/local-storage';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
	const [favoriteAdverts, setFavoriteAdverts] = useState(() =>
		loadFromStorage('favoriteAdverts')
	);
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
				items={favoriteAdverts}
				favoriteItems={favoriteAdverts}
				addToFavorite={addToFavorite}
				removeFromFavorite={removeFromFavorite}
			/>
		</section>
	);
};

export default FavoritesPage;
