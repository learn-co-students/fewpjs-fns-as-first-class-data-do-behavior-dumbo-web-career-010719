// Write your code here
function greet(time) {
  const greeting = document.getElementById('greeting');
  let timeInt = parseInt(time.split(":")[0]);
  console.log(timeInt);
  if (timeInt <= 12) {
    return "Good Morning";
  } else if (timeInt > 12 && timeInt < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
