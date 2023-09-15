import { useEffect, useState } from 'react';
import AdsList from '../components/AdsList/AdsList';
import Filter from '../components/Filter/Filter';
import { getAdverts } from '../api/advertApi';
import ButtonLink from '../components/Buttons/ButtonLink';

const CatalogPage = () => {
	const [adverts, setAdverts] = useState([]);
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

	return (
		<section className="section">
			<Filter />
			<AdsList items={adverts} />
			<ButtonLink onClick={handleLoadMore}>Load more</ButtonLink>
		</section>
	);
};

export default CatalogPage;
