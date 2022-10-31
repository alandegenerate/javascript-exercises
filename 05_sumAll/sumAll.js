const sumAll = function (...ints) {
	let sum = 0;
	console.log(ints);
	for (let i = 0; i < ints.length; i++) {
		sum += ints[i];
	}
	return sum;
	console.log(sum);
};

// 1.  add the first number to the sum
// 2. add the first number +1 to the sum
// 3.  add the result of the last operation + 1 to the sum
// 4. continue until you reach the second number

// Do not edit below this line
module.exports = sumAll;
