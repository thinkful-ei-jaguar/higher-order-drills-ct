function repeat(fn,n) {
    for (let i = 0; i < n; i++) {
        fn(n[i], i);
    };
}
function hello() {
    console.log("Hello world!");
}
function goodbye() {
    console.log("Goodbye world!");
}
console.log(repeat(hello, 5));
console.log(repeat(goodbye, 5));

function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

console.log(filter(myNames, filteredNames));

function hazardWarningCreator(typeofWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++; 
        console.log(`DANGER! There is a ${typeofWarning} hazard at ${location}!`);
        console.log(`The ${typeofWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator("Rocks on the Road");
const hurricane = hazardWarningCreator("HURRICANE!!!");
const flyingPikachu = hazardWarningCreator("OMG PIKACHU!!!");

rocksWarning("Main St. and Juniper Ave.");
rocksWarning("Grape St. and West Ave.");
hurricane("Apple St. and Fig Ave.");
hurricane("Maple St. and Berry St.");
flyingPikachu("Kanto and Johto");
flyingPikachu("Galar and Sinnoh");

let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtleSteps.filter(([step1, step2]) => { return step1 >= 0 && step2 >= 0; });

turtleSteps.map(([step1, step2]) => {return step1 + step2});

turtleSteps.forEach(([step1, step2]) => console.log(`Movement #1: ${step1} steps Movement #2: ${step2} steps`));

let myArray = ["noggin", "oreo", "the", "moon", "time", "tele", "steed", "his", "tent", "apollo", "her", "lives", "though", "shoo", "tofu", "budapest"];

/* FIRST ATTEMPT AT "REDUCE PROBLEM"

myArray.reduce(([word]) => {
  let initialValue = "";
  for (i = 0; i < myArray.length; i++) {
   if (word.length[i] === 3) {
        return " ";
    } 
    else {
        return initialValue.toUpperCase();
    }
  }
}); 

*/

myArray.reduce((accumulator, currentValue) => {
    if (currentValue.legnth === 3) {
        return accumulator + " "; 
    }
    else {
        return currentValue.toUpperCase()
    }
}); 