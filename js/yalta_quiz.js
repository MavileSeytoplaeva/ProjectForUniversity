function checkAnswers() {
    var question1 = document.getElementById('option1').checked && 
                    document.getElementById('option2').checked && 
                    document.getElementById('option3').checked;
    var question2 = document.getElementById('option4').checked;
    var question3 = document.getElementById('option7').checked;
    var question4 = document.getElementById('option10').checked && 
                    document.getElementById('option11').checked &&
                    document.getElementById('option12').checked;
    var question5 = document.getElementById('option13').checked;
    var question6 = document.getElementById('option16').checked && 
                    document.getElementById('option17').checked &&
                    document.getElementById('option18').checked;
    var correctAnswers = 0;

    


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
// при желании можно отключить тест после прохождения 
function disableAnswers(event) {
    var radios = document.querySelectorAll('#quiz-form input[type="radio"]');
    var checkboxes = document.querySelectorAll('#quiz-form input[type="checkbox"]');
    for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = true;
    }
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = true;
    }
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('customSwitch1').addEventListener('change', function () {
        var checked = this.checked;
        var questionsDiv = document.getElementById('questions');

        if (checked) {
            questionsDiv.style.display = 'block';
        } else {
            questionsDiv.style.display = 'none';
        }
    });
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    checkAnswers();
    disableAnswers();

});




