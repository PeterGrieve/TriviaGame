

let correctAnswers = 0;
let wrongAnswers = 0;

const questions = [

  {name: "question0", answer: "c"},
  {name: "question1", answer: "b"},  
  {name: "question2", answer: "a"},  
  {name: "question3", answer: "d"},  
  {name: "question4", answer: "c"},    

];

$(document).ready(function () {

    displayTime();

    $("#submitBtn").click(function () {

        window.clearInterval();

        questions.forEach(element => {
            console.log(element);

            let radioValue = $("input[name=" + element.name +  "]:checked").val();
            console.log(radioValue);

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

        $("#restartBtn").attr("style", "visiblility: visible;");

        $(".rightAnswer").attr("style", "visiblility: visible;");

        $("#submitBtn").hide();


    });

    $("#restartBtn").click(function () {

        correctAnswers = 0;
        wrongAnswers = 0;

        $("#restartBtn").hide();
        $(".rightAnswer").hide();
        $("#submitBtn").attr("style", "visiblility: visible;");  


        questions.forEach(element => {

            $("input[name=" + element.name + "]").attr("checked", false);

        });

        displayTime();

    });
});

function displayTime() {

    let timeLimit = 180000;

   let interval = setInterval(function(){

         timeLimit -= 1000;

         var minutes = Math.floor((timeLimit % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((timeLimit % (1000 * 60)) / 1000);

        $("#timeLeft").text(minutes + ":" + seconds);

    }, 1000);

    $("#submitBtn").click(function () {

        window.clearInterval(interval);

    });

    setTimeout(function(){
        alert("You've run out of Time!");

        alert("You got " + correctAnswers + " Questions right and " + wrongAnswers + " Questions wrong.");
    
        $("#restartBtn").attr("style", "visiblility: visible;");
    
        $(".rightAnswer").attr("style", "visiblility: visible;");  
     
        window.clearInterval(interval);
    
        $("#timeLeft").text("0:00");

    }, timeLimit);
}

