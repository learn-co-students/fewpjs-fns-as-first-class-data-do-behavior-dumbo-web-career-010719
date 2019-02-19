// Write your code here

// const greet = (time) => {
//   if (time < 12) {
//     return 'Good Morning'
//   }
// }


function greet(time) {
  let greet;
  time = parseInt(time)
  if (time < 12) {
      return'Good Morning';
  } else if (time >= 12 && time <= 17) {
      return 'Good Afternoon';
  } else if (time >= 17 && time <= 24) {
      return 'Good Evening';
  } else {

  }
  document.getElementById("greeting").innerHTML = greet;
  return greet;
}
