// Write your code here


function greet(input){
	let time = parseInt(input)
	if (time < 12) {
		return "Good Morning"
	} else if (time > 12 && time < 17) {
		return "Good Afternoon"
	} else if (time > 17){
		return "Good Evening"
	}
}
