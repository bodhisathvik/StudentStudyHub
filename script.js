// Show a welcome message when the page loads
window.onload = function () {
    console.log("Student Study Hub Loaded Successfully!");
};

// Start Learning button
const startButton = document.querySelector("button");

if (startButton) {
    startButton.addEventListener("click", function () {
        alert("📚 Welcome to Student Study Hub!\n\nLet's start learning!");
    });
}

// Subject cards
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        const subject = card.querySelector("h3").innerText;
        alert("Opening " + subject);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        alert("This page will be added soon!");
    });
});function checkAnswer(answer) {
    if (answer === 50) {
        alert("✅ Correct!");
    } else {
        alert("❌ Wrong. Try again.");
    }
}
function checkQuiz(){

let score = 0;

let q1 = document.querySelector('input[name="q1"]:checked');
let q2 = document.querySelector('input[name="q2"]:checked');


if(q1 && q1.value === "25"){
    score++;
}

if(q2 && q2.value === "9"){
    score++;
}


document.getElementById("result").innerHTML =
"Your Score: " + score + "/2";

}
function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;


if(username === "" || password === ""){

document.getElementById("loginMessage").innerHTML =
"❌ Please enter username and password";

}

else{

document.getElementById("loginMessage").innerHTML =
"✅ Login successful!";

}

}
function sendMessage(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;


if(name === "" || email === "" || message === ""){

document.getElementById("contactResult").innerHTML =
"❌ Please fill all details";

}

else{

document.getElementById("contactResult").innerHTML =
"✅ Message sent successfully!";

}

}
function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}
function searchSubjects(){

let input = document.getElementById("searchInput").value.toLowerCase();

let cards = document.querySelectorAll(".subject-card");


cards.forEach(function(card){

let text = card.innerText.toLowerCase();


if(text.includes(input)){
    card.style.display = "block";
}
else{
    card.style.display = "none";
}

});

}
function toggleMenu(){

let menu = document.getElementById("nav-menu");

menu.classList.toggle("active");

}
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"></script>

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"></script>

<script src="firebase.js"></script>

<script src="script.js"></script>
function solveDoubt(){

let question = document.getElementById("question").value;

let answer = document.getElementById("answer");


if(question === ""){
    answer.innerHTML = "Please enter your question.";
}

else{

answer.innerHTML =
"🤖 AI is thinking...<br><br>" +
"Your question: " + question +
"<br><br>Explanation will be generated here.";

}

}
function addMaterial(){

document.getElementById("adminMessage").innerHTML =
"✅ Study material added successfully!";

}



function addQuiz(){

alert("✅ Quiz question added!");

}