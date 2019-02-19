function greet(time) {
  let greet;
  time = parseInt(time)
  if (time < 12){
    return "Good Morning"}
  else if (time >= 12 && time <= 17){
    return "Good Afternoon"}
  else if (time > 17 && time <= 24){
    return "Good Evening"}
  else{
    return "Not a valid time"}
  end
  document.getElementById('greeting').innerText = greet
  return greet
}
