// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

//Psuedo-Code for Jest Test:
    // A describe method that lists the name of the function OR naming of the particular test.
    // A test/it method, nested within the describe block, that in plain words, describe what the function does.
    // An expect method, nested within the test block, calling on the multThree() function, followed by the toEqual() matcher that checks the expected output of the function return.
describe("multThree", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    const numbersArray2 = [24, 27, 30, 33, 36]
    it("take in an array of numbers and returns an arry with all the numbers nultiplied by 3", () => {
    expect(multThree(numbersArray1)).toEqual( [18, 21, 24, 27, 30])
    expect(multThree(numbersArray2)).toEqual( [72, 81, 90, 99, 108])
    })
})

// b) Create the function that makes the test pass.
    //Pseudo-Code for Function:
        // Create a function caled multThree
        // Take in an array of numbers 
        // Set up return
        // Map through the array or loop through the array
        // Map can take three arguments, first one is value
        // Map needs a return statement with the value multipled by 3
        // Return the array of numbers multipled by 3. 

const multThree = (array) => {
    let mappedArray = array.map(value => value * 3)
    return mappedArray
}


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.


// a) Create a test with expect statements for each of the variables provided.

// const num1 = 15
// // Expected output: "15 is divisible by three"
// const num2 = 0
// // Expected output: "0 is divisible by three"
// const num3 = -7
// // Expected output: "-7 is not divisible by three"

//Psuedo-Code for Jest Test:
    // A describe method that lists the name of the function OR naming of the particular test.
    // A test/it method, nested within the describe block, that in plain words, describe what the function does.
    // An expect method, nested within the test block, calling on the divisibleOrNot() function, followed by the toEqual() matcher that checks the expected output of the function return.
    // Make 3 expects for the 3 const varaibles procided. 
describe("divisibleOrNot", () => {
    const num1 = 15
    const num2 = 0
    const num3 = -7
    it("returns whether the number is evenly divisible by three or not", () => {
        expect(divisibleOrNot(num1)).toEqual("15 is divisble by three")
        expect(divisibleOrNot(num2)).toEqual("0 is divisble by three")
        expect(divisibleOrNot(num3)).toEqual("-7 is not divisble by three")
    })
})


// b) Create the function that makes the test pass.
    //Pseudo-Code for Function:
        // Function Signature:
            //Input: a number
            // Output: Returns a string stating Whether the number is evenly divisble by 3 or not. 
        //Process:
            // Create a function called divisibleOrNot taking in a number as an argument, call the parameter number1.
            // Use a conditional statement (if/else) and return whether the number is divisible by 3 or not. 
            // Will have to use modules in order to find the divisibility.
const divisibleOrNot = (number1) => {
    if(number1 % 3 === 0) {
        return `${number1} is divisble by three`
    } else {
        return `${number1} is not divisble by three`
    }
}



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Psuedo-Code for Jest Test:
    // A describe method that lists the name of the function OR naming of the particular test.
    // A test/it method, nested within the describe block, that in plain words, describe what the function does.
    // An expect method, nested within the test block, calling on the firstLetterCaps() function, followed by the toEqual() matcher that checks the expected output of the function return.
    // Make 2 expects for each of the const variables provided. 

describe("firstLetterCaps", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    it("returns the first letter of every word in caps", () => {
        expect(firstLetterCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(firstLetterCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.
    //Psuedo-Code for Function:
        //Function Signature:
            //input: an array with strings
            //output: the first letter of each value is going to be caps
        //Process: 
            // Create a function called firstLetterCaps that takes in parameter called array.
            // Create a let/local variable called eachWord where it uses the built-in method .map in order to map through the array. 
            //.map will return a new array with the same length as the original
            //What we want is the value of the array so we specially use value and its first index(0) to captilize the letter
            //return the local variable

const firstLetterCaps = (array) => {
    let eachWord = array.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    }) 
    return eachWord
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// Expected output: 1
// const vowelTester2 = "academy"
// Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

//Psuedo-Code for Jest Test:
    // A describe method that lists the name of the function OR naming of the particular test.
    // A test/it method, nested within the describe block, that in plain words, describe what the function does.
    // An expect method, nested within the test block, calling on the indexFirstVowel() function, followed by the toEqual() matcher that checks the expected output of the function return.
    // Make 3 expects for each of the const variables provided.

describe("indexFirstVowel", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    it("returns the index of the first vowel", () => {
        expect(indexFirstVowel(vowelTester1)).toEqual(1)
        expect(indexFirstVowel(vowelTester2)).toEqual(0)
        expect(indexFirstVowel(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.
    // Pseudo-Code for Function:
        //Input: string
        //Output: the index of the first vowel that appears on the string. 
        //Process: 
            // Create a function called indexFirstVowel znd take in a string as a parameter. 
            // Create a for loop where the starting condition starts at 0, and keeps running the loop until string.length, and use i++. 
            // Inside the curly brackets of the function create an if statement where the conditional statement says if string[i] === all the vowels (aeiou). 
            // Make a return statement where it take the indexOf the string[i]

    const indexFirstVowel = (string) => {
        for(let i = 0; i < string.length; i++) {
            if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
                return string.indexOf(string[i])
            }
        } 
    }     
    


