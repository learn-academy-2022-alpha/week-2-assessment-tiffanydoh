// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
console.log(cohort.split(""))

// a) Your answer: ['A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '2']
// b) Verify and explain: Output -> ['A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '2']. My answer was correct. By using . split(""), it will separate the string to make an array. By putting the "" inside the parentheses, each character in the string will be in quotes in the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student!'
// b) Verify and explain: Output -> undefined. This is because every function requires a return which is what was missing here. By having a return statment, the function returns a value. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Output -> [ 8, 10, 12, 14, 16 ]. My answer was correct because by using .map(), it is returning an array with the same length as the original array. Inside the parentheses of .map(), it is taking each value in the array and giving back the value multiplied by 2. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Output -> [ 11, 13, 15 ]. My answer is correct because with .filter(), it is taking the original array, and giving back a new array that is smaller in length. Inside the parentheses of the .filter(), it states to take the odd values of the array and put it in a new array. 


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Output -> Javascript. My answer is correct because the console log is reading it as going into the object myCodingSkills and then going to the value in the key-pair. With languages[0], it is going to log the 0 index of languages. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
// b) Verify and explain: Output -> Learn { student: 'George', cohort: 'Alpha', year: 2022 }. On line 69, a variable declaration has been made called learnStudent. That variable takes in the class Learn and inserts "George" as the name value in the class. By console logging, learnStudent, it calls on George along with all the properties/key-pair values in the class. 
