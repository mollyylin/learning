// given a birthday return the associated astrological sign
// given two birthdays return the associated astrological signs
// challenge: don't repeat the names of the signs more than once 
// level 2 challenge: don't use more than one if/else if statement

function astrologySign(birthdate) {
	if (birthdate >= 1.2 && birthdate <= 2.18) {
		return "Aquarius"
	} else if (birthdate >= 2.19 && birthdate <= 3.2) {
		return "Pisces"
	} else if (birthdate >= 3.21 && birthdate <= 4.19) {
		return "Aries"
	} else if (birthdate >= 4.2 && birthdate <= 5.2) {
		return "Taurus"
	} else if (birthdate >= 5.21 && birthdate <= 6.2) {
		return "Gemini"
	} else if (birthdate >= 6.21 && birthdate <= 7.22) {
		return "Cancer"
	} else if (birthdate >= 7.23 && birthdate <= 8.22) {
		return "Leo"
	} else if (birthdate >= 8.23 && birthdate <= 9.22) {
		return "Virgo"
	} else if (birthdate >= 9.23 && birthdate <= 10.22) {
		return "Libra"
	} else if (birthdate >= 10.23 && birthdate <= 11.21) {
		return "Scorpio"
	} else if (birthdate >= 11.22 && birthdate <= 12.21) {
		return "Sagittarius"
	} else {
		return "Capricorn"
	}
}

let mollyBirthday = 2.09
let mollySign = astrologySign(mollyBirthday)

console.log(mollySign)

let markBirthday = 10.01
let markSign = astrologySign(markBirthday)

console.log(markSign)