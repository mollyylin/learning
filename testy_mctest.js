//print
console.log("hello")
// fizzbuzz
// for numbers 1-100 for each number divisable by 3 print fizz for each number divisable by 5 print buzz for numbers divisable by both 3 and 5 print fizzbuzz. if the following conditions aren't met print the number
// google js for loop and how to do this. search for javascript tutorial. codeacademy? launchschool
//data analytics in python. google pandas

/*
for (let i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
		console.log("fizz")
	} else if (i % 5 ==0){
		console.log("buzz")
	} else {
		console.log(i)
	}
}
*/

for (let i = 1; i<=100; i++){
	if (i % 3 ==0 && i % 5 ==0) {
		console.log ("fizzbuzz")
	} else if (i % 3 ==0) {
		console.log("fizz")
	} else if (i % 5 ==0) {
		console.log("buzz")
	}
	else {console.log(i)}
}