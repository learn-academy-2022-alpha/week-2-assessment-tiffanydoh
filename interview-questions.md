# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter in a function is the name/variable that is defined in a function. Meanwhile arguments in a function are the actual values or variables that are being passed into the function. For example, a number could be passed in an argument if the prompt were to say create a function that determines whether the number is an odd or even. 

  Researched answer: In the function declaration, parameters are used to define the variables listed. Whereas the argument are the values that are passed through the function when it is being called on. 



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: .map() takes in 3 predefined parameters which are value, index, and array. You can name those parameters anything, but in terms of the order, it is in the order of first: the value, second: index, and third: array. The required parameter is value, but .map() also has the option of taking two or three (the index and array are optional).

  Researched answer: .map() have 3 built-in parameters, which is the value, index, and array. Higher-order functions are required to take in a value, but the index and array becomes optional. When using the parameters, the order stays the same. 



3. What is the difference between map and filter?

  Your answer: Map iterates through an array and spits out a new array of the same length. Meanwhile filter loops through an array and spits back a new array that is smaller in length. Filter is a smaller length because it is only giving back values that meet the conditions. 

  Researched answer: Filter is a built in method for Javascript. It allows you to filter thorugh the array and create a new filtered array. Map is another javascript built-in method. Maps takes a callback and runs it over each element of the original array, and then it will create a new array based on the existing array adn share its length. Map method is basically used to covert each element in the array, while the filter method selects certain elements of the original array.



4. What is the difference between a function and a method?

  Your answer: A function can be considered a tiny machine that takes a code and performs a specific set of tasks. A method are actions that are performed on functions. 

  Researched answer: Javascript functions perform tasks using block of code. To execute a function, the funcion would need to be invoked. Functions contain paramters that are listed after the name of the function in parenthesis. The function then takes in an argument that are values. Functions have return statements that will allow the function to stop being executed and return a value. Javascript methods is a property of an object. They are essentially functions stored as object properties. Method will operate the data in a class while function can use the data that is operated and return the data. Function is its own entity while the method is associated with object property. 



5. What is object destructuring?

  Your answer: Object destructuring is a way to assign variables. It will break down an object in order to make it into new variables. 

  Researched answer: Object destructuring allows us to take an array or object and turn it into individual variables. This is a way of assigning variables. And essentially you are taking the properties of an object and breaking them so they are recallable and individualized variables. The way it works is: you satrt with a variable keyword, list the variable names in curly brackets (making sure it connects to the properties in objects), and then uses the assingment operatot to assign the object deconstructed. 



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I believe hoisting is the ability to use functions and variables before they're executed. 

  Researched answer: Hositing refers to the process where a variable can be used before it has been declared. It moves declarations to the top of their scope.  



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: A class inheritance will take another class and inherit all of its methods and properties. It uses the keywork 'extends' to create a class inheritance. Very useful in code reusability.

2. React: React is a Javascript library that is used to build user interfaces. It is a free and open sourced front end library specifically used for single page applications as well as mobile apps.

3. React state: State is simply a javscript onject. It is used by React to hold information/data about React class components current situation. State can be updated with class methods and can constantly change. 

4. React lifecycle methods: Each React compenent has a lifecycle where you can montior and change it during its 3 main phases. Thesse main phases consists of mounting, updating, and unmounting. Mounting is to put elements into the DOM, Updating is updating the component when there is a change in it's state or properties, unmounting is removing the component from DOM. Methods of mounting: constuctor(), getDerivedStateFromProps(), render(), componentDidMount(). Methods of updating: getDerivedStateFromProps(), shouldCompenentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate(). Method for unmounting: componentWillUnmount().

5. DOM: DOM stands for Document Object Model. Javascript is able to access and change all elments of an HTML document using HTML DOM. It represents the page so that the programming interface can change the document content, style, and structure. 
