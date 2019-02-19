// Write your code here
function greet(input) {

// const input = document.querySelector("input")
const x = input.split(":")
const hour = parseInt(x[0])

  if (hour < 12) {
      return "Good Morning"
    } else if (12 <= hour && hour <= 17) {
      return "Good Afternoon"
    } else {
      return "Good Evening"
  }
};
