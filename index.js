// Write your code here

greet = (time) => {
  let greet;

  if (parseInt(time) < 12){
    greet = 'Good Morning';
  } else if (parseInt(time) >= 12 && parseInt(time) <= 17) {
    greet = 'Good Afternoon';
  } else {
    greet = 'Good Evening';
  }

  document.getElementById("greeting").innerHTML = greet;
 return greet;
}
