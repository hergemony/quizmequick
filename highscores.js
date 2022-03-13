// Hergemony Quiz - Scoreboard Page
// Declare the variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");



// Add Event Listeners to clear the scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retrieve what was stored on local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
        
}
}

// Add event listener to enable user to move back to index/first page

goBack.addEventListener("click", function () { 
    window.location.replace("./index.html");
}
);


