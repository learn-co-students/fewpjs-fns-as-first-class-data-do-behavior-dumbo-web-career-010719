// Write your code here
function greet(time) {
  let hello;
    if (parseInt(time) < 12){
      hello = "Good Morning"
    } else if ((parseInt(time) > 12) && parseInt(time) < 17) {
      hello = "Good Afternoon"
    } else {
      hello = "Good Evening"
    }
  document.querySelector("#greeting").innerHTML = hello;
  return hello;
};
