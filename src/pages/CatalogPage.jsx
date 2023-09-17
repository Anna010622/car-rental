import { useEffect, useState } from 'react';
import AdsList from '../components/AdsList/AdsList';
import Filter from '../components/Filter/Filter';
import { getAdverts, getAdvertsByBrand, getAll } from '../api/advertApi';
import ButtonLink from '../components/Buttons/ButtonLink';
import { loadFromStorage, saveToStorage } from '../helpers/local-storage';
import Spinner from '../components/Spinner/Spinner';

const CatalogPage = () => {
	const [adverts, setAdverts] = useState([]);
	const [isBtnLoadMoreVisible, setIsBtnLoadMoreVisible] = useState(true);
	const [favoriteAdverts, setFavoriteAdverts] = useState(() =>
		loadFromStorage('favoriteAdverts')
	);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const data = await getAdverts(page);
			setAdverts(prevState => [...prevState, ...data]);
			if (data.length < 8) setIsBtnLoadMoreVisible(false);
			setIsLoading(false);
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

	const handleSearch = async filters => {
		const { carBrand, carPrice, minMileage, maxMileage } = filters;

		if (!carBrand && !carPrice && !minMileage && !maxMileage) {
			setIsLoading(true);
			setPage(1);
			const filteredAdverts = await getAdverts(page);
			setIsBtnLoadMoreVisible(true);
			setIsLoading(false);
			return setAdverts(filteredAdverts);
		}

		setIsBtnLoadMoreVisible(false);

		if (carBrand && !carPrice && !minMileage && !maxMileage) {
			setIsLoading(true);
			const filteredAdverts = await getAdvertsByBrand(carBrand);
			setIsLoading(false);
			return setAdverts(filteredAdverts);
		}

		if (carBrand) {
			setIsLoading(true);
			const adverts = await getAdvertsByBrand(carBrand);
			const filteredAdverts = adverts
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
			setIsLoading(false);
			return setAdverts(filteredAdverts);
		}

		setIsLoading(true);
		const allAdverts = await getAll();

		const filteredAdverts = allAdverts
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
		setAdverts(filteredAdverts);
		setIsLoading(false);
	};

	return (
		<section className="section">
			<Filter submit={handleSearch} isLoading={isLoading} />
			<AdsList
				items={adverts}
				favoriteItems={favoriteAdverts}
				addToFavorite={addToFavorite}
				removeFromFavorite={removeFromFavorite}
			/>
			{isBtnLoadMoreVisible && !isLoading && (
				<ButtonLink onClick={handleLoadMore}>
					{isLoading ? <Spinner width="60" /> : 'Load more'}
				</ButtonLink>
			)}
		</section>
	);
};

export default CatalogPage;
