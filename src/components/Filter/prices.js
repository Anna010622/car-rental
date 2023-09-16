const prices = [];

for (let i = 30; i <= 140; i = i + 10) {
	prices.push({ value: `$${i}`, label: i });
}

export default prices;
