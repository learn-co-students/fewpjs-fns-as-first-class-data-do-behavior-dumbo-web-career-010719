function greet (time) {
	let timeInt = parseInt(time.split(':')[0])

	if(timeInt > 12){
		return 'Good Morning'
	} else if (timeInt < 5){
		return 'Good Evening'
	} else {
		return 'Good Afternoon'
	}
}// Write your code here
