const reverseString = function (string) {
	const arr = string.split("");
	console.log(arr);
	const reversed = arr.reverse();
	console.log(reversed);
	return reversed.join("");
};
// Do not edit below this line
module.exports = reverseString;
