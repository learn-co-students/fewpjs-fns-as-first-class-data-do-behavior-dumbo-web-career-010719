// Write your code here

function greet(hour){
    const head = document.querySelector('h1');
    let time = hour.split(':');
    time = parseInt(time[0]);
    let greeting;
    if(time < 12){
       greeting = "Good Morning";
    }
    else if(time >= 12 && time <= 17){
       greeting = "Good Afternoon";     
    }
    else if(time >= 17 && time <= 24){
       greeting = "Good Evening";
    }
    head.innerText = greeting;
    return greeting;
}
