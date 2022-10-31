const sumAll = function (int1, int2) {
	let sum = 0;
if (int1 < int2 && int1 > 0 && int2 > 0 && typeof(int1) === 'number' && typeof(int2) === 'number') { 
	for (let i = int1; i <= int2; i++) {
		sum += i;
	}
} else if (int1 > int2 && int1 > 0 && int2 > 0 && typeof(int1) === 'number' && typeof(int2) === 'number') {
	for(let i = int2; i <= int1; i++) {
		sum += i;
	}
} else {
	return 'ERROR'
}
	return sum;
};

// 1.  add the first number to the sum
// 2. add the first number +1 to the sum
// 3.  add the result of the last operation + 1 to the sum
// 4. continue until you reach the second number

// Do not edit below this line
module.exports = sumAll;
