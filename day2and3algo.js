for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; // adds 3 to i 
}
    // 0,4,8, outsideof the loop 12
console.log("outside of the loop " + i);

function getTotal(arrayOfNumbers) { //Function that takes an array
    
    var sum = arrayOfNumbers[0]; //array
      
    for(var i=0; i<arrayOfNumbers.length; i++) { //function that compares i to array length then adds 1 to i
      sum += arrayOfNumbers[i]; //add and sum the sum to the array
      console.log("the current sum is: " + sum);  // prints current sum is sum
    }
      
    console.log("the total is: " + sum); // prints total is sum at the end of function
      
  }
      
  getTotal([1, 3, 5]);
  
  var isSunny = true; //setting that its sunny
  var temperature = 45; // let's assume degrees Fahrenheit
  var isRaining = false; // setting that its not raining
  var whatToBring = "I should bring: "; //states i should bring
      
  if(isSunny) {
    whatToBring += "sunglasses, "; // if its sunny, bring sunglasses
  }
  if(temperature < 50) {
    whatToBring += "a coat, "; // if its below 50, bring a coat
  }
  if(isRaining) {
    whatToBring += "an umbrella, "; // if its raining, bring an umbrella
  }
  whatToBring += "and a smile!"; // and bring a smile
      
  console.log(whatToBring); // it'll say sunglasses, a coat, and a smile

  
  for(var i=10; i>0; i--) { //sets var to 10, while its not 0, deduct 1
    if(i != 2) { // if it equals 2 log
      console.log(i);
    } else {
      console.log("ignition!"); // states ignition
    }
  }
      
  console.log("liftoff!"); // states liftoff
  
var countPositives = 0; // count positives value is 0
var numbers = [3, 4, -2, 7, 16, -8, 0];
    for (var i = 0; i < numbers.length; i++){
if (numbers[i] > 0) {
    countPositives++;
    }
    }
console.log("there are " + countPositives + " positive values");
