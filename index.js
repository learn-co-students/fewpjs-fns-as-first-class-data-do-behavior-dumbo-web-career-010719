// Write your code here
function greet(time) {
  let greet;
  // let newTime = parseInt(time.split(':')[0]);
  // const newTime = parseInt(time);
  if (parseInt(time) < 12) {
    greet = 'Good Morning';
  } else if (parseInt(time) >=12 && parseInt(time) <= 17) {
    greet = 'Good Afternoon';
  } else {
    greet = 'Good Evening';
  }
  document.querySelector('#greeting').innerHTML = greet;
  return greet;
}
