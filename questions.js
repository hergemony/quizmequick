// Hergemony Quiz
// Var with array and object for questions
var questions = [
    {
        title: "How many countries are there in the world?",
        choices: ["280, 150, 99, 195"],
        answer: "195"
    },
{
        title: "What is the name of the current president of North Korea?",
        choices: ["Kim Jong Il, Kim Il Sung, Kim Jong Un, Kim Jong Nam"],
        answer: "Kim Jong Un",

        title: "What is 95 - 8?",
        choices: ["90, 87, 83, 103"],
        answer: "87"
}
]

debugger;

// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code
// Work with declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("wrapper");

// Seconds left is 10 seconds per question

