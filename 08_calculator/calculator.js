const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (nums) {
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		total += nums[i];
	}
	return total;
};

const multiply = function (nums) {
	let total = 1;
	for (let i = 0; i < nums.length; i++) {
		total *= nums[i];
	}
	return total;
};

const power = function (num1, exponent) {
	return num1 ** exponent;
};

const factorial = function (num) {
	let result = 1;
	for (let i = num; i > 1; i--) {
		result *= i;
		console.log(`Current result: ${result}`);
		console.log(`Current iteration: ${i}`);
	}
	return result;
};

// factorial(5);

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
