const elHoures = document.querySelector('.houres');
const elMinutes = document.querySelector('.minutes');
const elSekunds = document.querySelector('.secundes');
setInterval(() => {
	const now = new Date();
	const houres = now.getHours();
	const minutes = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
	const sekunds = now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`;
	elHoures.textContent = `${houres}:`;
	elMinutes.textContent = `${minutes}:`;
	elSekunds.textContent = sekunds;
}, 1000);
