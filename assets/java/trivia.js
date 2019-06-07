// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// click start button 
// once start clicked random question with 4 optional answers apper along with timer ser for 15 secs
//if ans clicked it correct before timer runs out you will get a correct scrreen mand same happens but oposite wrong ans
// if you dont answer before time is up you will get a wrong answer screen 
// once all ?'s have been answered the score sheet will appear along with start button for new game 



// Funstions to think about 
renQuest // ( random question to be generated along with random answer)
// variables for question and answers .
// timer fuction 
//countdown fuction 

//remeber to console log 




// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

console.log(trivia[0].answers[0])

var trivia = [
    {
        question: "What is the name of Jon Snow’s direwolf?",
        answers: [
            "Ghost",
            "Lady",
            "ShaggyDog",
            "Nymeria"],
        correct: "Ghost",

        image: "assets/images/Ghost.jpg" // replace picture create image folder 
    },
    {
        question: 'Who said “That’s what I do, I drink and I know things."?',
        answers: [
            "Tyrion Lannister",
            "Aria Stark",
            "Robert Baratheon",
            "Jon Snow"],
        correct: "Tyrion Lannister",
        image: "assets/images/Tyrion.jpg"
    },
    {
        question: "Who is the King of Westeros when the series begins?",
        answers: [
            "Robert Baratheon",
            "Ned Stark",
            "Rob Stark",
            "Jaime Lannister"],
        correct: "Robert Baratheon",
        image: "assets/images/robert.jpg"
    },
    {
        question: "What are the words of the House of Stark",
        answers: [
            "Winter is coming",
            "First in Battle",
            "Growing Strong",
            "Ours is the Fury"],
        correct: "Winter is coming",
        image: "assets/images/winter.gif"
    },
    {
        question: "Who is the eldest stark child?",
        answers: [
            "Robb Stark",
            "Jon Snow",
            "Sanza Stark",
            "Bran Stark"],
        correct: "Robb Stark",
        image: "assets/images/rob.jpg"
    },
    {
        question: "Which of the following is NOT one of Daenarys' Dragons?",
        answers: [
            "Drogon",
            "Rhaegal",
            "Viserion",
            "Daarion"
        ],
        correct: "Daarion",
        image: "assets/images/dragons.gif"
    }
]


