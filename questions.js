// Hergemony Quiz 
// First state all the variables involved in quiz
// We will need a variable for the questions (array and object for questions)(set 10 questions) 
var questions = [
{
    title: "How many countries are there in the world?",
    choices: ["280", "150", "99", "195"],
    answer: "195"
},
{
    title: "What is the name of the current president of North Korea?",
    choices: ["Kim Jong Il", "Kim Il Sung", "Kim Jong Un", "Kim Jong Nam"],
    answer: "Kim Jong Un",
},
{
    title: "What is 95 - 8?",
    choices: ["90", "87", "83", "103"],
    answer: "87"
},
{
    title: "What is 7 * 8?",
    choices: ["64", "58", "42", "56"],
    answer: "56"
},
{
title: "What is cynophobia?",
choices: ["Fear of Cats", "Fear of Dogs", "Fear of Birds", "Fear of Snakes"],
answer: "Fear of Dogs"
},
{
title: "Which animal can be seen on the Porsche logo?",
choices: ["Tiger", "Eagle", "Horse", "Elephant"],
answer: "Horse"
},
{
title: "What is the name of the largest ocean on Earth?",
choices: ["Pacific Ocean", "Atlantic Ocean", "Artic Ocean", "Indian Ocean"],
answer: "Pacific"
},

{
    title: "What is the most consumed manufactured drink in the world?",
    choices: ["Beer", "Coffee", "Wine", "Tea"],
    answer: "Tea"
},
{
    title: "From which country does Gouda cheese originate?",
    choices: ["Portugal", "France", "Netherlands", "Belgium"],
    answer: "Netherlands"
},
{
    title: "How many teeth does an adult human have?",
    choices: ["28","20", "32", "30"],
    answer: "32"
},

];

// We will then need the following variables, score to start from zero and no questions to begin with
var score = 0;
var questionIndex = 0;

// Traverse the DOM and use querySelector to select specific id's (NB these id's have been set in the index.html)
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Set a variable for length of the quiz, in this case 80 seconds is chosen
var secondsLeft = 80;
// Set interval time
var holdInterval = 0;
// Holds penalty time (subtract 10 seconds per incorrect answer)
var penalty = 10;
// Create a new element to initiate quiz questions in the form of an unordered list...
var ulCreate = document.createElement("ul");

// We need to trigger the timer when the user clicks "Start Quiz" button and display timer on screen for user 
timer.addEventListener("click", function () {
    // We are checking zero because timer is originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Timer: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // Create For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only followed by choices (answer concealed)
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // Create new For loop for upcoming question choices
    // Tutor assistance in adding small image from to list/bullet point style
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        var img = document.createElement('img');
        img.src = 'assets/frogsmall.png';
        img.setAttribute('height', '30px');

        listItem.append(img);
        var span = document.createElement('span');
        span.textContent = newItem;
        listItem.append(span)
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Create an event to compare choices with answer, answer will appear after user clicks
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -10 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // Quiz done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// Quiz done will append last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Quiz Done!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time remaining (secondsLeft) which is then used as the score
    if (secondsLeft >= 0) {
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + secondsLeft;

        questionsDiv.appendChild(createP2);
    }

    // Create Label where user will enter initials
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // Create input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // Create submit button for the initials
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Add an Event listener to capture initials
    // Then create local storage for initials and score (check using Inspect and Application on browser)
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            
            var finalScore = {
                initials: initials,
                score: secondsLeft,
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);


            // Navigate user back to the main page
            window.location.replace("./HighScores.html");
        }
    });

}


// QUIZ COMPLETE


