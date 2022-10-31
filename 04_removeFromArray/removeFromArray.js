// const removeFromArray = function (arr, ...removals) {
// 	// const removals = Array.from(arguments);
// 	console.log("arr", arr);
// 	console.log("removals", removals);
// 	console.log("removals.length", removals.length);
// 	for (let i = 0; i < removals.length; i++) {
// 		let index = removals.indexOf(removals[i]);
// 		console.log(`Removals[${i}]: ${removals[i]}. Array index, ${index}`);
// 		arr.splice(index, 1);
// 		console.log(`Array after iteration ${index}: ${arr}`);
// 	}
// 	return arr;
// };

const removeFromArray = function (arr, ...removals) {
	removals.forEach(removal => {
		if (arr.includes(removal)) {
			const index = arr.indexOf(removal);
			arr.splice(index, 1);
		} else return;
	});
	console.log(arr);
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
