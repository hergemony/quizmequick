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
},
{
        title: "What is 95 - 8?",
        choices: ["90, 87, 83, 103"],
        answer: "87"
},
{
        title: "What is 7 * 8?",
        choices: ["64, 58, 42, 56"],
        answer: "56"

},
{
    title: "What is cynophobia?",
    choices: ["Fear of cats, Fear of Dogs, Fear of Birds, Fear of Snakes"],
    answer: "Fear of Dogs"
},
{
    title: "Which animal can be seen on the Porsche logo?",
    choices: ["Tiger, Eagle, Horse, Elephant"],
    answer: "Horse"
},
{
    title: "What is the name of the largest ocean on Earth?",
    choices: ["Pacific Ocean, Atlantic Ocean, Artic Ocean, Indian Ocean"],
    answer: "Pacific"
},
];



debugger;

// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code
// Work with declared variables
// Using DOM query selectors to add timer

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("wrapper");

// Seconds left is 10 seconds per question


var secondsLeft = 76

// need to add event listener for timer
// button needs to trigger timer and display time on screen for user

timer.addEventListener("click", function () {
    // We need to set the timer to zero at the beginning; check for this
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
    }
});

// Render question and choices to the page


// clear existing question and render next question

// create a loop to loop through questions in the array

// NOTE we can only append question title only

// then have answer appear after user has selected a response

// Create an event to compare the user's response with the correct answer

// Use if else statements to deduct time

// Include a tally of questions answered?

// Append last page


// Event listener for user to enter initials to be entered into local storage
// Local Storage to contain initials and score


// Navigate user back to main page

// QUIZ COMPLETE


