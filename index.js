function scuberGreetingForFeet(someValue){
 let free = 0
  if(someValue <= 400){
 free =  "This one is on me!" 
  }

else if (someValue > 400 && someValue < 2000){ free=  "That will be twenty bucks."
}
else if ( someValue > 2000 && someValue < 2500 ){
  free = "I will gladly take your thirty bucks."}
else if ( someValue > 2500)
{ free = "No can do."
}
return free

// needs 1 more either an else if or using && ||
  // Write your code here!
}
 scuberGreetingForFeet()

function ternaryCheckCity(City){
  // let city = City
 
  return City === "NYC" ? "Ok, sounds good." : "No go."
}

function ternaryCheckCity(City){
  return City === "NYC" ? "Ok, sounds good." : "No go."}
// return result 

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous" :
      return "Thank you so much."
      
      case  "not as generous" :
        return "Thank you."
      
  
    default:
      return "Bye."
      break;
  }
  // Write your code here!
}

