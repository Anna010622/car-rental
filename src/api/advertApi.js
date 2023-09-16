import axios from 'axios';
const BASE_URL = 'https://64feddaaf8b9eeca9e29329a.mockapi.io/';

export const getAdverts = async page => {
	const { data } = await axios.get(`${BASE_URL}adverts?page=${page}&limit=8`);
	return data;
};

export const getAdvertsByBrand = async brand => {
	const { data } = await axios.get(`${BASE_URL}adverts?make=${brand}`);
	return data;
};

export const getAll = async () => {
	const { data } = await axios.get(`${BASE_URL}adverts`);
	return data;
};
