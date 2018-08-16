

var answers = ["c", "b", "a", "d", "c"];
var correct = 0;
var wrong = 0;
var timeLimit = 60000
var milliseconds = timeLimit;
var seconds;
var countDown
var interval

$(document).ready(function () {

    countDown = setTimeout(timesUp, timeLimit);

    interval = setInterval(myTimer, 1000);

    $("#submitBtn").click(function () {

        window.clearInterval(interval);

        window.clearTimeout(countDown);


        for (var i = 0; i <= (answers.length - 1); i++) {

            var radioValue = $("input[name='question" + i + "']:checked").val();

            console.log(radioValue);

            console.log(answers[i]);

            if ($("input[name='question" + i + "']:checked").val() == answers[i]) {
                correct++;
                console.log(correct);
            }
            else {
                wrong++;
                console.log(wrong);

            }

        }

        console.log(correct);

        alert("You got " + correct + " Questions right and " + wrong + " Questions wrong.");

        $("#restartBtn").attr("style", "visiblility: visible;");

        $(".rightAnswer").attr("style", "visiblility: visible;");


    });

    $("#restartBtn").click(function () {

        correct = 0;
        wrong = 0;

        $("#restartBtn").hide();

        $(".rightAnswer").hide();


        for (var i = 0; i <= answers.length; i++) {

            $("input[name='question" + i + "']").attr("checked", false);

        }

         milliseconds = timeLimit;

         setTimeout(timesUp, timeLimit);

         countDown = setInterval(myTimer, 1000);


    });


});

function myTimer() {

    milliseconds = milliseconds - 1000;
    seconds = milliseconds/1000;
    console.log(seconds);
    $("#timeLeft").text(seconds);
}

function timesUp()
{
    alert("You've run out of Time!");

    alert("You got " + correct + " Questions right and " + wrong + " Questions wrong.");

    $("#restartBtn").attr("style", "visiblility: visible;");

    $(".rightAnswer").attr("style", "visiblility: visible;");  

    window.clearTimeout(countDown);    
    window.clearInterval(interval);

    $("#timeLeft").text("0");

}