// Write your code here
const input = document.querySelector('input#time');

function greet(val) {
  const hr = parseInt(val.split(":")[0])

  if (hr < 12 ) {
    return "Good Morning";
  } else if (hr > 12 && hr < 17)
    return "Good Afternoon";
  else {
    return "Good Evening";
  }
}
