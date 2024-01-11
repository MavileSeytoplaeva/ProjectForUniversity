function checkAnswers() {
    var question1 = document.getElementById('option1').checked && 
                    document.getElementById('option2').checked;
    var question2 = document.getElementById('option6').checked;
    var question3 = document.getElementById('option8').checked;
    var question4 = document.getElementById('option10').checked && 
                    document.getElementById('option11').checked;
    var question5 = document.getElementById('option13').checked;
    var question6 = document.getElementById('option16').checked && 
                    document.getElementById('option17').checked;
    var correctAnswers = 0;

    if (document.getElementById('option3').checked){
        question1 = false;
    }
    if (document.getElementById('option12').checked){
        question4 = false;
    }
    if (document.getElementById('option18').checked){
        question6 = false;
    }


    var listOfQuestions = [question1, question2, question3, question4, question5, question6];

    for (var currentQuestion of listOfQuestions){
        if (currentQuestion) {
        correctAnswers = correctAnswers + 1;
        }
    }

    if (correctAnswers == listOfQuestions.length){
        document.getElementById("testResult").innerHTML = '<div class="alert alert-success" role="alert">Congratulations! You\'ve answered all the questions correctly.</div>';
    } else {
        var IncorrectAnswers = listOfQuestions.length - correctAnswers;
        document.getElementById("testResult").innerHTML = '<div class="alert alert-danger" role="alert">' + IncorrectAnswers + " Incorrect answers. Please try again.</div>";
    }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    checkAnswers();
});

