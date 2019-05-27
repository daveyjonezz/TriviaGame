// This time set up was copied and edited from http://jsfiddle.net/Ankit47/6wm3eky9/
var timeLeft = 20;
var elem = document.getElementById('timeRemaining');
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    document.getElementById('submit').click();
  } else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
}

// this coded was developed with the help of my sister and tutor Isabelle
const myQuestions = [
  {
    question: "brie",
    answers: {
      a: "Brie",
      b: "Camembert",
      c: "Burrata"
    },
    correctAnswer: "a"
  },
  {
    question: "cheddar",
    answers: {
      a: "Mild Cheddar",
      b: "Sharp Cheddar",
      c: "Extra Sharp Cheddar"
    },
    correctAnswer: "c"
  },
  {
    question: "parmesan",
    answers: {
      a: "Pecorino Romano",
      b: "Parmesan",
      c: "Grana Padano",
    },
    correctAnswer: "b"
  },
  {
    question: "chucky",
    answers: {
      a: "Chuck E",
      b: "American",
      c: "Easy",
    },
    correctAnswer: "a"
  }

];

// da global variables
var cheeseArray = ["brie", "cheddar", "parmesan", "chucky"]
var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var seconds;
var spacing = '\xa0\xa0\xa0\xa0';
var spacingTwo = '\xa0';

//The scrolling code was copied and edited from https://www.w3schools.com/howto/howto_js_sticky_header.asp
// When the user scrolls the page, execute floatingTimer 
window.onscroll = function () { floatingTimer() };

// Get the header
var header = document.getElementById("timeRemaining");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function floatingTimer() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// this coded was developed with the help of my sister and tutor Isabelle
// showing the questions
function showquestions() {
  for (i = 0; i < myQuestions.length; i++) {
    $("#reset").hide();
    $("#submit").show();
    var cheeseImage = $("<img>");
    cheeseImage.addClass("cheese-image");
    cheeseImage.attr("src", "./assets/images/" + cheeseArray[i] + ".jpg");
    cheeseImage.attr("id", cheeseArray[i]);
    $("#quiz").append(cheeseImage)
    $("#quiz").append("<br />")
    for (key in myQuestions[i].answers) {
      $("#quiz").append("<input type='radio' name=" + i + " value=" + key + ">" + spacingTwo + myQuestions[i].answers[key] + "</>")
      $("#quiz").append(spacing);
    }
    $("#quiz").append("<br />")
  }
  $("#submit").on("click", function () {
    $("#submit").hide();
    $("#reset").show();
    var input = $("#quiz").children("input:checked")
    for (j = 0; j < input.length; j++) {
      var q = $(input[j]).attr("name")
      var userAnswer = $(input[j]).attr("value")
      if (userAnswer === myQuestions[q].correctAnswer) {
        correctAnswer++;
      }
      else {
        wrongAnswer++;
      }
    }
    noAnswer = myQuestions.length - correctAnswer - wrongAnswer;
    showresults();
  })
}
// show the results
function showresults() {
  $("#quiz").empty();
  clearTimeout(timerId);
  $("#results").append("<p>" + "Right Answers: <b> " + correctAnswer + "</p>")
  $("#results").append("<p>" + "Wrong Answers: <b> " + wrongAnswer + "</p>")
  $("#results").append("<p>" + "Unanswered: <b> " + noAnswer + "</p>")
}

function startGame() {
  showquestions()
}
startGame();
countdown();