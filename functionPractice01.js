//1) Create a function named powers that takes two arguments. The function should return the first argument
//to the power of the second argument.
//For example powers(2,3) >>> 8


//2) Create a function named evens that takes in an array of numbers as an argument.
//The function should return a new array with only the even numbers.

// 3) Create a function called sum that takes in an array of numbers as an argument.
// The function should return the sum of the numbers.

//4) Create a function that takes in an array of strings and returns a new array with all the strings capitalized.


function powers(num1, num2){
  return Math.pow(num1, num2)
}
powers(2,3)

function evensOnly(inputArr) {
  var evens = []
  for (var i = 0; i < inputArr.length; i++){
        if (inputArr[i] % 2 === 0) {
            evens.push(inputArr[i])
        }
  }
  return evens
}
evensOnly([1,2,3,4])

function sum (array){
  var sum = 0
    for (var i = 0; i < array.length; i++){
      sum += array[i]
    }
    return sum
}

function capitalized(arrayinput){
  var capArray = []
  for (var i = 0; i < arrayinput.length; i++){

          capArray.push(arrayinput[i].toUpperCase())

  }
  return capArray
}
