// Hergemony Quiz
// Create a variable with array and object for questions
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
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Create a new element
var ulCreate = document.createElement("ul");

// need to add event listener for TIMER
// button needs to trigger timer and display time on screen for user

timer.addEventListener("click", function () {
    // We need to set the timer to zero at the beginning; check for this
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time: " + secondsLeft;

                if (secondsLeft <= 0) {
                    clearInterval(holdInterval);
                    allDone();
                    currentTime.textContent = "Time's Up!";
                }
            }, 1000);
    }
    render(questionIndex);
});


// Render question and choices to the page:
function render(questionIndex) {
// clear existing question and render next question
questionsDiv.innerHTML = "";
ulCreate.innerHTML = "";
// create a loop to loop through questions in the array
for (var i = 0; i < questions.length; i++) {
    // Appends question title only
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;
}
// New for each of the question choices
userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (compare));
})
}

// Create an event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is: " + questions[questionIndex].answer;

        }


    }
}


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


