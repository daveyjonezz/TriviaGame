var timeLeft = 5;
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
        c: "Extra Charp Cheddar"
      },
      correctAnswer: "c"
    },
    {
        question: "chucky",
      answers: {
        a: "Chuck E",
        b: "American",
        c: "Blue",
      },
      correctAnswer: "a"
    }
  ];

var cheeseArray = ["brie","cheddar","chucky"]

// my global variables
var rightA = 0;
var wrongA = 0;
var noA = 0;
var seconds;
var spacing = '\xa0\xa0\xa0\xa0';
var spacingTwo = '\xa0';
// showing the questions
function showquestions() {
  for (i = 0; i < myQuestions.length; i++) {
    var cheeseImage = $("<img>");
    cheeseImage.addClass("cheese-image");
    cheeseImage.attr("src","./assets/images/"+cheeseArray[i]+".jpg");
    cheeseImage.attr("id",cheeseArray[i]);
    $("#quiz").append(cheeseImage)
    $("#quiz").append("<br />")
    for (key in myQuestions[i].answers) {
      $("#quiz").append("<input type='radio' name=" + i + " value=" + key + ">" + spacingTwo + myQuestions[i].answers[key]  + "</>")
      $("#quiz").append(spacing);
    }
    $("#quiz").append("<br />")
  }
  $("#submit").on("click", function () {
    var input = $("#quiz").children("input:checked")
    console.log(input)
    for (j = 0; j < input.length; j++) {
      var q = $(input[j]).attr("name")
      var userA = $(input[j]).attr("value")
      console.log(q, userA)
      if (userA === myQuestions[q].correctAnswer) {
        rightA++;
      }
      else {
        wrongA++;
      }
    }
    noA = myQuestions.length - rightA - wrongA;
    showresults();
  })
}
// show the results
function showresults() {
  $("#quiz").empty();
//   $("#quiz").append('<img src="./assets/images/jerry.jpg" />')
  clearTimeout(timerId);
  $("#results").append("<p>" + "Right Answers: <b> " + rightA + "</p>")
  $("#results").append("<p>" + "Wrong Answers: <b> " + wrongA + "</p>")
  $("#results").append("<p>" + "Unanswered: <b> " + noA + "</p>")
}
/* I copied and heavily tweaked this countdown code below from: https://codepen.io/mattlitzinger/pen/ysowF */
function startGame() {
  showquestions()
}
startGame();
countdown();