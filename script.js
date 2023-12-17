

// exercise 1
// console.log("hello world!")

//exercise 2

// const num1 = parseInt(prompt('Enter first number '))
// const num2 = parseInt(prompt('Enter second number '))

// const sum = num1 + num2;

// console.log(`the sum of ${num1} and ${num2} is ${sum}`)

// exercise 3

// const num = parseInt(prompt('Enter your number to check if odd or even '))

// function verifyOdd() {
//     if (num % 2 == 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }

// verifyOdd()

// exercise 4

// function counter() {
//     for (i = 0; i < 11; i++) {
//         console.log(i)
//     }
// }

// counter()

// exercise 5
// exercise 6

// const sampleString = prompt('Enter a long nonsensical word now!')

// console.log(sampleString.length)

// exercise 7 + extra credit

// let userInput = prompt("input a word to check if it's the shit")

// function reverseString(word) {
//     let splitString = word.split("")
//     let reverseArray = splitString.reverse()
//     let rejoinedString = reverseArray.join("")
//     if (word === rejoinedString) {
//         alert("word is a PALINDROME! CONGRATS!")
//     } else {
//         alert("sorry, your word sucks")
//     }
// }

// reverseString(userInput)

// exercise 9

// let arraySample;

// arraySample = [1,2,3,4,5]

// console.log(arraySample)

// let sum = 0

// function average() {
//     for (i=0; i <arraySample.length; i++) {
//     sum += arraySample[i]
    
//     }
//     let average = (sum/arraySample.length)
//     console.log(average)
// }

// average()

// exercise 11

// let userInput = prompt("!HOAW let's reverse this sentence ")

// function reverseString(str) {
//     let splitString = str.split("")
//     let reverseArray = splitString.reverse()
//     let rejoinedString = reverseArray.join("")
//     alert(rejoinedString)
// } 

// reverseString(userInput)

// exercise 12

// let sampleArray = [1, 3, 5, 7, 9]
// console.log(sampleArray)

// function incrementArray(array) {
//     for (let i = 0; i < array.length; i++) {
//     array[i]++;
//     }
// }

// function findMax(array) {
//     let max = array[0];
//     for (i=0; i<array.length; i++) {
//         if (array[i] > max) {
//         max = array[i];
//         } 
//     }
//     return max;
// };

// incrementArray(sampleArray);
// const maxValue = findMax(sampleArray);
// console.log(maxValue);

// Problem 1

let userInput = prompt("Type your first name here!")

function greet () {
    alert(`Hello, `  + `${userInput}!`)
}

greet()

// Problem 2

let inputFahrenheit = prompt("Input temperature in fahrenheit to convert to celsius")

function convertToCelsius () {
    convertedTemp = ((inputFahrenheit - 32) * 5/9)
    alert(convertedTemp)
}

convertToCelsius()