import Filter from '../components/Filter/Filter';
import AdsList from '../components/AdsList/AdsList';
import { loadFromStorage, saveToStorage } from '../helpers/local-storage';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
	const [favoriteAdverts, setFavoriteAdverts] = useState(() =>
		loadFromStorage('favoriteAdverts')
	);
	const [filteredAdverts, setFilteredAdverts] = useState(favoriteAdverts);

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

	const handleSubmit = filters => {
		const { carBrand, carPrice, minMileage, maxMileage } = filters;

		const filteredAdverts = favoriteAdverts
			.filter(item => {
				if (carBrand) {
					return item.make.toLowerCase().includes(carBrand.toLowerCase());
				}
				return item;
			})
			.filter(item => {
				if (carPrice) {
					return (
						Number(item.rentalPrice.replace(/\D/g, '')) <=
						Number(carPrice.replace(/\D/g, ''))
					);
				}
				return item;
			})
			.filter(item => {
				if (minMileage) {
					return item.mileage >= minMileage;
				}
				return item;
			})
			.filter(item => {
				if (maxMileage) {
					return item.mileage <= maxMileage;
				}
				return item;
			});

		setFilteredAdverts(filteredAdverts);
	};

	return (
		<section className="section">
			<Filter submit={handleSubmit} />
			<AdsList
				items={filteredAdverts}
				favoriteItems={favoriteAdverts}
				addToFavorite={addToFavorite}
				removeFromFavorite={removeFromFavorite}
			/>
		</section>
	);
};

export default FavoritesPage;
