import Select from 'react-select';
import styles from './filter.module.scss';
import { useState } from 'react';
import { customSelectStyles, priceSelectStyles } from './customSelectStyles';
import Button from '../Buttons/Button';
import makes from './makes.json';
import prices from './prices';

const Filter = ({ submit }) => {
	const [state, setState] = useState({
		carBrand: '',
		carPrice: '',
		minMileage: '',
		maxMileage: '',
	});

	const handleSelectChange = (selectedOption, actionMeta) => {
		setState(prevState => ({
			...prevState,
			[actionMeta.name]: selectedOption?.value,
		}));
	};

	const handleInputChange = ({ target }) => {
		setState(prevState => ({
			...prevState,
			[target.name]: target.value,
		}));
	};

	const handleSubmit = event => {
		event.preventDefault();
		submit(state);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.carBrand__wrapper}>
				<p className={styles.label}>Car brand</p>
				<Select
					name="carBrand"
					defaultValue={state.carBrand}
					onChange={handleSelectChange}
					options={makes}
					styles={customSelectStyles}
					placeholder="Enter the text"
					isClearable
				/>
			</div>

			<div className={styles.carPrice__wrapper}>
				<p className={styles.label}>Price/ 1 hour</p>
				<Select
					name="carPrice"
					defaultValue={state.carPrice}
					value={state.carPrice}
					options={prices}
					onChange={handleSelectChange}
					styles={priceSelectStyles}
					placeholder={
						state.carPrice ? `To ${state.carPrice.replace(/\D/g, '')}$` : 'To $'
					}
					isClearable
				/>
			</div>

			<div className={styles.input__wrapper}>
				<p className={styles.label}>Сar mileage / km</p>
				<label className={styles.input}>
					<span className={styles.input__text}>From</span>
					<input
						className={`${styles.input__field} ${styles.input_left}`}
						type="text"
						value={state.minMileage}
						name="minMileage"
						onChange={handleInputChange}
					/>
				</label>
				<label className={styles.input}>
					<span className={styles.input__text}>To</span>
					<input
						className={`${styles.input__field} ${styles.input_right}`}
						type="text"
						name="maxMileage"
						value={state.maxMileage}
						onChange={handleInputChange}
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
