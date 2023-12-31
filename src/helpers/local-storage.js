export const saveToStorage = (key, value) => {
	try {
		const serializedState = JSON.stringify(value);
		localStorage.setItem(key, serializedState);
	} catch (error) {
		console.error('Set state error: ', error.message);
	}
};

export const loadFromStorage = key => {
	try {
		const serializedState = localStorage.getItem(key);
		return serializedState === null ? [] : JSON.parse(serializedState);
	} catch (error) {
		console.error('Get state error: ', error.message);
	}
};

export const removeFromStorage = key => {
	localStorage.removeItem(key);
};
