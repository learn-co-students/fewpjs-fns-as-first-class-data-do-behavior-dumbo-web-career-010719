// // Write your code here
// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".
function greet(time) {
  const timeToInt = parseInt(time.split(':'));
  if (timeToInt < 12 ) {
    return 'Good Morning'
  }else if (timeToInt > 17) {
    return 'Good Evening'
  }else{
    return 'Good Afternoon'
  }
};
