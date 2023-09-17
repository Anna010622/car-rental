import brands from './brans';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import styles from './brandSwiper.module.scss';

const BrandSwiper = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>
				CarRental gives you the opportunity to rent your favorite car brands
			</h2>

			<Swiper
				modules={[Scrollbar, A11y]}
				spaceBetween={20}
				slidesPerView={5}
				scrollbar={{ draggable: true }}
			>
				{brands.map(brand => (
					<SwiperSlide key={brand}>
						<img className={styles.brandIcon} src={brand} alt={brand} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default BrandSwiper;
