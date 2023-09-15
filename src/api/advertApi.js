import axios from 'axios';
const BASE_URL = 'https://64feddaaf8b9eeca9e29329a.mockapi.io/';

export const getAdverts = async page => {
	const { data } = await axios.get(`${BASE_URL}adverts?page=${page}&limit=8`);
	return data;
};

export const getAdvertsByBrand = async (page, brand) => {
	const { data } = await axios.get(
		`${BASE_URL}adverts?page=${page}&limit=8&make=${brand}`
	);
	return data;
};
