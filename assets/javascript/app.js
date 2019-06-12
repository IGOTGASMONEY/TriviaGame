// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// click start button 
// once start clicked random question with 4 optional answers apper along with timer ser for 15 secs
//if ans clicked it correct before timer runs out you will get a correct scrreen mand same happens but oposite wrong ans
// if you dont answer before time is up you will get a wrong answer screen 
// once all ?'s have been answered the score sheet will appear along with start button for new game 
var trivia = [{
        question: "What type of car did Cole drive?",
        answers: [
            "Benz",
            "Beamer",
            "Pacer",
            "Focus"
        ],
        correct: "Pacer",

        image: "assets/images/martintriv1.gif" // replace picture create image folder 
    },
    {
        question: "'Whoa...whoa...hold up. Don't be threatening us with the physical, because I can get down with the big boys.' Who did Martin say this to?",
        answers: [
            "Cole",
            "Tommy",
            "Gina",
            "Bruh Man"
        ],
        correct: "Tommy",
        image: "assets/images/martintriv2.gif"
    },
    {
        question: "Martin and Gina are rich. They have won the lottery or so they think. Martin gives gifts to all his friends. What does he give Pam?",
        answers: [
            "A $2000.00 wax job.",
            "A $2000.00 plastic surgery job.",
            "A $2000.00 pedicure.",
            "A $2000.00 hair doo."
        ],
        correct: "A $2000.00 wax job.",
        image: "assets/images/martintriv3.gif"
    },
    {
        question: " What did Gina lose and had to work for Shenehneh to get replacements?",
        answers: [
            "Whitney Houston tickets",
            "Movie tickets",
            "Pistons tickets",
            "LL Cool J tickets"
        ],
        correct: "Pistons tickets",
        image: "assets/images/martintriv4.gif"
    },
    {
        question: "Martin had a crush on a school teacher when he was younger. What was the name of the teacher?",
        answers: [
            "Ms. Frizzle",
            "Ms. Trinidad",
            "Ms. Hollingsworth",
            "Ms. Green"
        ],
        correct: "Ms. Trinidad",
        image: "assets/images/martintriv4.gif"
    },
    {
        question: "Martin, Gina, Tommy, Cole and Pam had won a four wheel drive SUV. They decided to share the truck and each person would have use of it on a certain day. Who had use of it on Wednesday, which is considered hump day?",
        answers: [
            "Gina",
            "Tommy",
            "Cole",
            "Pam"
        ],
        correct: "Pam",
        image: "assets/images/martintriv6.gif"
    }
]


// Funstions to think about 
//renQuest // ( random question to be generated along with random answer)
// variables for question and answers .
// timer fuction 
//countdown fuction 


// Tutoring Session 
// Do I have to many fuctions and variables. Confusion on if I am using the correct format for respons .  (whatever) 
// Printing to screen. 
//Syntax correct 
//. show vs .hide
//timer per page . 
//CSS question . Sizing 


// no ans function " when you run out of time "






var ansButton= trivia.answers;
var questImages;
var answersQuest;
var seconds;
var time;
var answered = 0;
var unanswered = 0;
var correct=0;
var incorrect=0;
var currentQuestion = 0;
var userSelection;
var messages = {

    Correct: " You GOT IT ",
    Incorrect: " STOP NOW ",
    Unanswered: " YOU ARE SOOO SLOW ",
    Final: " OHHHHH MAAAAAAHH GOOOOOOODNESSSS"
}


$("#startBtn").on("click", function () {
    $(this).hide(); // this will hide the start button when selected 
    newGame();
    console.log("hello");
});


// $(".answerList").on('click',function() {
//     $(this).hide();
//     onclick =rendQuest();
    
//     console.log("clicked");
// } );


function rendQuest() {
    countDown();
    showCountdown();
    renderQuestpage();
    

    $("#currentQuestion").text(trivia[currentQuestion].question);
    for (var i = 0; i < trivia[currentQuestion].answers.length; i++) {
         var button= $('<button>');
         button.addClass("ansBTNS");
         button.attr("data-ans", trivia[currentQuestion].answers[i]);
         button.text(trivia[currentQuestion].answers[i]);
         $(".answerList").append(button);
        // //  var btext=document.createTextNode(trivia[currentQuestion].answers);
        // //  ansButton.addClass ("btn-answer")
        // //  ansButton.attr()
        // $(".answerList").text(trivia[currentQuestion].answers);
        // $(".answerList").append(trivia[currentQuestion].answers);
        // // make it so its radio buttons . append  created buttons 
    }
    

    // answersQuest = trivia.answers;







}
$(".answerList").on("click",".ansBTNS" ,  function () {

    console.log(this);
    $(".questionPage").hide();
var userSelection= $(this).attr('data-ans'); // relates to info grabbed by click button created 

    if (userSelection === trivia[currentQuestion].correct) {
        correctAns();

       

    } else if (userSelection !== trivia[currentQuestion].correct) {
        messages.Incorrect;
        trivia[currentQuestion].image;
        incorrect++;
        console.log('wrongwrong');
        // $("#incorrectAnswers") ++;
        // wrongAns().show;
        // correctAns().hide;
        // noAns().show;

    }else if (userSelection !== "") {
        // messages.Unanswered;
        // trivia[currentQuestion].image;
        // unanswered ++ ;
        // noAns().show;
        // correctAns().hide;
        // wrongAns().hide;
        console.log('Answeranswer');

        renderQuestpage();
    }
    console.log("clicked");
});




function renderQuestpage() {
 
    for (var i = 0; i < trivia[currentQuestion].question.length; i++) {
        
        trivia[currentQuestion].question[i];
        // currentQuestion = trivia[currentQuestion].question;
        // $("#currentQuestion").text;

	};


}
function correctAns() {
    var correctMess = messages.Correct;
    var p= $("<p>") ;
    p.text(messages.Correct);
    $("#message").append(p);
    var i= $("<img>");
    i.attr("src" , trivia[currentQuestion].image);
    $("#gif").append(i);
    correctAns++;



    

    console.log('correctcorrect')
    // $("#correctAnswers")+
    // correctAns().show;
    // wrongAns().hide;
    // noAns().hide;






    countDown();
    showCountdown();
    // correct = $("#correctAnswers");
    // correct++;
    // $("#correctAnswers").text(correct);
    // questImages;
};

function wrongAns() {
    countDown();
    showCountdown();
    incorrect=$("#incorrectAnswers");
    incorrect ++;
    $("#incorrectAnswers").text(incorrect);
    questImages;

};

function noAns() {
    unanswered = $("#unanswered");
    unanswered++;
    $("#unanswerd").text(unanswered);
    messages = messages.unanswered;
    questImages;
    countDown();
    showCountdown();

};



function newGame() {
    $("#finalMessage").empty;
    $("#correctAnswers").empty;
    $("#incorrectAnswers").empty;
    $("#unanswered").empty;
    answered = 0;
    unanswered = 0;
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    rendQuest();

    // clear out scorboard html 
};

function countDown() {
    seconds = 15;
    $("#cSeconds").text(seconds);
    answered = true;
    time = setInterval(showCountdown, 1000)
};

function showCountdown() {
    seconds--;
    $("#cSeconds").text(seconds);
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        //    call function that gets me to ans page  
    }
};

function final() {
    countDown();
    showCountdown();
    message = messages.Final;
    trivia[currentQuestion].image;




};


setTimeout(() => {
    console.log("YOU WIN");
}, 15000);



// var counter =0;
// var timeleft=15;
// var timer =   $("#cSeconds");
// // timer.html(timeleft-counter);
// function timeIt() {
// counter++;
// cSeconds.html(timeleft-counter);

// }
// setInterval(timeit,1000);










// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

// console.log(trivia[0].answers[0])

// This array contains the questions and answers along with  the specific image displayed on the win or lose screen 