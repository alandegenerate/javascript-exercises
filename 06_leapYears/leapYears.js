const leapYears = function (year) {
	if (year % 4 == 0 && year % 100 != 0) return true;
	else if (year % 400 == 0) return true;
	else return false;
};

// 1. if year is divisble by 4, it's a leap year - year % 4 = 0
// 2. EXCEPT when the year is divisible by 100 - year % 100 != 0
// 3. UNLESS that year is also divisible by 400 - year % 400 = 0

// Do not edit below this line
module.exports = leapYears;
