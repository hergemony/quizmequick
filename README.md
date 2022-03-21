**QUIZ ME QUICK** 🕛 🐸 💋

*HELLO!*

Welcome to this week's challenge!
This is a quiz designed to test the user's ability to answer a set of question within a designated timeframe. To make the quiz more challenging, the user is penalised for incorrect responses by having time subtracted.

Questions are created by Hergemony™ and are of a variety of topics. They were compiled with the help of the following source:

https://www.quizbreaker.com/trivia-questions

The quiz application uses HTML, CSS and Javascript. The use of Javascript is emphasised in providing quiz questions, collecting user data, determining whether answers match the correct answers, displaying answer to the user, generating scores, storing user initials and scores, appending a scoreboard at the end with option to return back to the beginning and recommence quiz.

**SCREENSHOTS**

1) The user will see main page with instructions and a button to click in order to start the quiz.
![alt text](https://github.com/hergemony/quizmequick/blob/main/assets/Screen%20Shot%202022-03-14%20at%204.28.27%20pm.png?raw=true)

2) When the 'Start Quiz' button has been clicked, questions will appear with four options as answers. Timer will also appear at the top counting down from 80 seconds to zero. Once an answer has been selected, a new question will appear. User will be notified immediately with either "Correct! The answer is..." or "Wrong! The answer is..."
![alt text](https://github.com/hergemony/quizmequick/blob/main/assets/Screen%20Shot%202022-03-14%20at%204.28.43%20pm.png?raw=true)

3) Once the user has navigated through as many questions as they can in the designated time, then the screen will show 'Quiz Done!' and enable user to input initials for storage.
![alt text](https://github.com/hergemony/quizmequick/blob/main/assets/Screen%20Shot%202022-03-14%20at%204.29.00%20pm.png?raw=true)

4) The user's initials will show up along with their score on the 'Scoreboard'. The scores are sorted in ranking from highest at the top to lowest at the bottom.
![alt text](https://github.com/hergemony/quizmequick/blob/main/assets/Screen%20Shot%202022-03-14%20at%204.29.11%20pm.png?raw=true)

5) The user has the option to 'Go Back' to the main page and recommence quiz and/or 'Clear Highscores' before doing so.
![alt text](https://github.com/hergemony/quizmequick/blob/main/assets/Screen%20Shot%202022-03-14%20at%204.29.21%20pm.png?raw=true)


**Javascript features**

- A timer is created which is attached to a button with a starting value of 0. When "Start Quiz" is clicked, timer commences a reverse countdown. An event listener (onclick) function is used to generate time interval.
- Quiz questions will appear on an appended page using DOM traversal.
- Questions are contained in an variable array with objects (title, choices, answer)
- Variables are declared
- A function to render the questions, title and choices first using a For Loop to loop through the array (series of questions).
- An event listener on choices and a comparison (if/else) statement to compare correct answers to choices
- Use of textcontent, when the user selects the right answer, textcontent "Correct!" and when user selects the right answer, textcontent "Wrong!"
- Function to subtract 10 seconds per wrong response using if/else statements and penalty variable
- An appended page to show final score (seconds left) with input area for initials. This is achieved through DOM create element and appendChild.
- Initials and score captured to local storage using JSON parse and displayed through JSON stringify
- Navigation to another HTML (highscores.html) using window.location.replace which is the 'Scoreboard' page
- Sort function to rank scores from lowest to highest for user to view
- An event listener (onclick) function to allow user to navigate back to main page and restart quiz

**Github Repository Features**

- Two HTML pages:
index.html
highscores.html
- One CSS styles page:
styles.css
- Two Javascript pages which contains variables including arrays with object, event listeners, if/else statements, for loops, functions including sort function, local storage using JSON parse and JSON stringify:
questions.js
highscores.js



*Thanks for playing!  QUIZ ME QUICK  🕛 🐸 💋*

Github Profile Link => https://github.com/hergemony

Deployed Application Link => https://hergemony.github.io/quizmequick/


❤ Hergemony™ Digital Services 2022 ❤

