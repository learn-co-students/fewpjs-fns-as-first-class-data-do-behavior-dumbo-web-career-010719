/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
  let time = string.slice(0,2)
  let greet
  if (time<12){
    greet = "Good Morning"
  }
  else if (time>12 && time<17) {
    greet = "Good Afternoon"
  }else {
    greet = "Good Evening"
  }
  return greet
}

function displayMessage(greet){
  document.querySelector("#greeting").innerHTML = greet
}
