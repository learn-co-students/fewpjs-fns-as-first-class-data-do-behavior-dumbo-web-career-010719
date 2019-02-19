// Write your code here


const greet = (input) => {
    const inputValue = input.split(":")
    const parseToIntValue = parseInt(inputValue[0])

    if(parseToIntValue < 12){
        return "Good Morning";
    }else if(parseToIntValue >=12 && parseToIntValue <=17){
        return "Good Afternoon";
    }else{
        return "Good Evening";
    }
}