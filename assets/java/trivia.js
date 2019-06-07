// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// click start button 
// once start clicked random question with 4 optional answers apper along with timer ser for 15 secs
//if ans clicked it correct before timer runs out you will get a correct scrreen mand same happens but oposite wrong ans
// if you dont answer before time is up you will get a wrong answer screen 
// once all ?'s have been answered the score sheet will appear along with start button for new game 



// Funstions to think about 
//renQuest // ( random question to be generated along with random answer)
// variables for question and answers .
// timer fuction 
//countdown fuction 


// var timeLeft = 15; 
// var timer = setInterval(function() {
//     document.getElementById("timer-secs").value = 15 - timeLeft;
//     timeLeft-=1;
//     if(timeLeft <= 0)
//     clearInterval(timer);
// } , 1000)

// function rainbow() {
//     setTimeout(rainbow , 15000);
//     createImageBitmap()
//     document.getElementById("timer").html;
// }


setTimeout(()=> {
    console.log("YOU WIN");
},15000)






// //remeber to console log
// //sets milliseconds
// var milli = 1000;
// // This calculates seconds from milliseconds 
// var secs= 15 * milli; 
// var currentSeconds = 0;
// var currentMilli = 0;
// function countdown() {

//     setTimeout(Decrement() , 15);
//     // this function will set the alloted time for the timer 1 sec = 1000 milliseconds
// }
// // This function is for the decrement
// function Decrement() {

//     currentSeconds = Math.Floor(secs * 1000);
//     currentMilli = secs % 1000;
//     if(currentSeconds <= 999) currentSeconds = "0" + currentSeconds;
//     secs--;
//     document.getElementById("timer").html = currentSeconds;
//     if(secs !== -1) setTimeout(Decrement() , 15);



// }



// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

// console.log(trivia[0].answers[0])

// This array contains the questions and answers along with  the specific image displayed on the win or lose screen 

var trivia = [
    {
        question: "What type of car did Cole drive?",
        answers: [
            "Benz",
            "Beamer",
            "Pacer",
            "Focus"],
        correct: "Pacer",

        image: "assets/images/martintriv1.jpg" // replace picture create image folder 
    },
    {
        question: "'Whoa...whoa...hold up. Don't be threatening us with the physical, because I can get down with the big boys.' Who did Martin say this to?",
        answers: [
            "Cole",
            "Tommy",
            "Gina",
            "Bruh Man"],
        correct: "Tommy",
        image: "assets/images/martintriv2.gif"
    },
    {
        question: "Martin and Gina are rich. They have won the lottery or so they think. Martin gives gifts to all his friends. What does he give Pam?",
        answers: [
            "A $2000.00 wax job.",
            "A $2000.00 plastic surgery job.",
            "A $2000.00 pedicure.",
            "A $2000.00 hair doo."],
        correct: "A $2000.00 wax job.",
        image: "assets/images/martintriv3.gif"
    },
    {
        question: " What did Gina lose and had to work for Shenehneh to get replacements?",
        answers: [
            "Whitney Houston tickets",
            "Movie tickets",
            "Pistons tickets",
            "LL Cool J tickets"],
        correct: "Pistons tickets",
        image: "assets/images/martintriv4.gif"
    },
    {
        question: "Martin had a crush on a school teacher when he was younger. What was the name of the teacher?",
        answers: [
            "Ms. Frizzle",
            "Ms. Trinidad",
            "Ms. Hollingsworth",
            "Ms. Green"],
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


