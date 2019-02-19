

let correctAnswers = 0;
let wrongAnswers = 0;

// Array of objects containing question number and answer
const questions = [

  {name: "question0", answer: "c"},
  {name: "question1", answer: "b"},  
  {name: "question2", answer: "a"},  
  {name: "question3", answer: "d"},  
  {name: "question4", answer: "c"},    

];

$(document).ready(function () {

    // Starts the timer
    displayTime();

    $("#submitBtn").click(function () {

        // Stop the timer when user submits their answers
        window.clearInterval();

        questions.forEach(element => {
            console.log(element);

            // Get the value chosen by the user for each question
            let radioValue = $("input[name=" + element.name +  "]:checked").val();
            console.log(radioValue);

            // Compare the user-chosen value of each question with its correct answer
            if (radioValue == element.answer) {
                correctAnswers++;
                console.log(correctAnswers);
            }
            else {
                wrongAnswers++;
                console.log(wrongAnswers);
            }

          });
          

        console.log(correctAnswers);

        alert("You got " + correctAnswers + " Questions right and " + wrongAnswers + " Questions wrong.");

        // Reveal the correct answers and restart button. Hide the submit button until restart is clicked
        $("#restartBtn").attr("style", "visiblility: visible;");
        $(".rightAnswer").attr("style", "visiblility: visible;");
        $("#submitBtn").hide();


    });

    $("#restartBtn").click(function () {

        // Reset the scores
        correctAnswers = 0;
        wrongAnswers = 0;

        // Hide the correct answers and restart button until the quiz is completed again
        $("#restartBtn").hide();
        $(".rightAnswer").hide();

        // Reveal the submit button so the quiz can be completed again
        $("#submitBtn").attr("style", "visiblility: visible;");  

        // Reset the checked property on the radio values for each question
        questions.forEach(element => {

            $("input[name=" + element.name + "]").attr("checked", false);

        });

        // When the quiz is restarted, so is the timer
        displayTime();

    });
});

// This function displays and tracks the amount of time left in the quiz
function displayTime() {

    // 180000 milliseconds is 3 minutes. This value is the time remaining
    let timeLimit = 180000;

    // The setInterval function triggers every 1000 milliseconds or 1 second
   let interval = setInterval(function(){

    // Take a second off the clock every second
         timeLimit -= 1000;

         // Convert the milliseconds to minutes and seconds
         var minutes = Math.floor((timeLimit % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((timeLimit % (1000 * 60)) / 1000);

         // Output the text
        $("#timeLeft").text(minutes + ":" + seconds);

    }, 1000);

    // When the user submits their answers, stop the timer
    $("#submitBtn").click(function () {

        window.clearInterval(interval);

    });

    // This functions triggers when the Timer reaches 0:00 
    setTimeout(function(){

        // Without this line of code the timer display will stay frozen at 0:01 when time runs out
        $("#timeLeft").text("0:00");

        alert("You've run out of Time!");

        // Unanswered questions are counted as incorrect
        alert("You got " + correctAnswers + " Questions right and " + wrongAnswers + " Questions wrong.");
    
        // Reveal the correct answers and restart button. Hide the submit button until restart is clicked
        $("#restartBtn").attr("style", "visiblility: visible;");
        $(".rightAnswer").attr("style", "visiblility: visible;");  
        $("#submitBtn").hide();
     
        // If you dont stop the timer at 0:00, It will start displaying negative numbers
        window.clearInterval(interval);
    
    }, timeLimit);
}

