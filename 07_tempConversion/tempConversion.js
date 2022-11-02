const ftoc = function (temp) {
	const tempC = (temp - 32) * (5 / 9);
	if (tempC === 0) return tempC;
	else return +tempC.toFixed(1);
};

const ctof = function (temp) {
	const tempF = temp * (9 / 5) + 32;
	if (tempF === 0) return tempF;
	else return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
