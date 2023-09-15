import Select from 'react-select';
import styles from './filter.module.scss';
import { useState } from 'react';
import { customSelectStyles, priceSelectStyles } from './customSelectStyles';
import Button from '../Buttons/Button';

const brandOptions = [
	{ value: 'Buick', label: 'Buick', id: '11' },
	{ value: 'Volvo', label: 'Volvo', id: '22' },
	{ value: 'Hummer', label: 'Hummer', id: '33' },
	{ value: 'Subaru', label: 'Subaru', id: '11' },
	{ value: 'Mitsubishi', label: 'Mitsubishi', id: '22' },
	{ value: 'Nissan', label: 'Nissan', id: '33' },
	{ value: 'Lincoln', label: 'Lincoln', id: '11' },
	{ value: 'GMC', label: 'GMC', id: '22' },
	{ value: 'Hyundai', label: 'Hyundai', id: '33' },
];
const priceOptions = [
	{ value: '$30', label: '30' },
	{ value: '$40', label: '40' },
	{ value: '$50', label: '50' },
	{ value: '$60', label: '60' },
	{ value: '$70', label: '70' },
	{ value: '$80', label: '80' },
	{ value: '$90', label: '90' },
	{ value: '$100', label: '100' },
	{ value: '$110', label: '110' },
	{ value: '$120', label: '120' },
	{ value: '$130', label: '130' },
	{ value: '$140', label: '140' },
];

const Filter = ({ submit }) => {
	const [state, setState] = useState({
		carBrand: null,
		carPrice: null,
	});

	const handleChange = (selectedOption, actionMeta) => {
		setState(prevState => ({
			...prevState,
			[actionMeta.name]: selectedOption.value,
		}));
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log('submit');
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.carBrand__wrapper}>
				<p className={styles.label}>Car brand</p>
				<Select
					name="carBrand"
					value={state.carBrand}
					onChange={handleChange}
					options={brandOptions}
					styles={customSelectStyles}
					placeholder={state.carBrand || 'Enter the text'}
				/>
			</div>

			<div className={styles.carPrice__wrapper}>
				<p className={styles.label}>Price/ 1 hour</p>
				<Select
					name="carPrice"
					value={state.carPrice}
					options={priceOptions}
					onChange={handleChange}
					styles={priceSelectStyles}
					placeholder={
						state.carPrice ? `To ${state.carPrice.replace(/\D/g, '')}$` : 'To $'
					}
				/>
			</div>

			<div className={styles.input__wrapper}>
				<p className={styles.label}>Сar mileage / km</p>
				<label className={styles.input}>
					<span className={styles.input__text}>From</span>
					<input
						className={`${styles.input__field} ${styles.input_left}`}
						type="text"
					/>
				</label>
				<label className={styles.input}>
					<span className={styles.input__text}>To</span>
					<input
						className={`${styles.input__field} ${styles.input_right}`}
						type="text"
					/>
				</label>
			</div>

			<Button height="48px" width="136px" type="submit">
				Search
			</Button>
		</form>
	);
};

export default Filter;
