// Write your code here

function greet(time){
  if (parseInt(time) < 12){
    return 'Good Morning';
  }
  else if (parseInt(time) > 12 && parseInt(time) < 17) {
    return 'Good Afternoon'
  }
  else {
    return 'Good Evening'
  }
}
function show(message){
  let h1 = document.querySelector('h1#greeting');
  h1.innerText = message;
}
