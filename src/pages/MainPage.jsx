import AdsList from '../components/AdsList/AdsList';
import Filter from '../components/Filter/Filter';

const MainPage = () => {
	return (
		<section className="section">
			<Filter />
			<AdsList />
		</section>
	);
};

export default MainPage;
