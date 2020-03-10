function quizExec(){
    const output = [];

    questions.forEach(
        (qCurrent, qNumber) => {
            const answers = [];

            for (letter in qCurrent.answers){
                answers.push(
                    `<label>
                      <input type="radio" name="question${qNumber}" value="${letter}">
                      ${letter} :
                      ${qCurrent.answers[letter]}
                    </label>`
                  );
            } 
            // text field
            for (t in qCurrent.textfield){
                answers.push(
                    `<div class="textField">
                      <input id="txt" type="text" name="question${qNumber}" value="${t}">
                      
                    </div>`
                  );
            }
            // file upload
            for (f in qCurrent.file){
                answers.push(
                    `<div class="fileInput">
                      <input type="file" name="question${qNumber}" value="${f}">
                      
                    </div>`
                  );
            }
            output.push(
                `<div class="question"> ${qCurrent.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
              );
        }
    );
    quiz.innerHTML = output.join('');
};

function showResults(){};

function subApp(){
    var txt = document.getElementById("results");
    
    if (txt.innerHTML === "") {
        txt.innerHTML = "Thanks for answering!"
    } else {
        txt.innerHTML = ""
    }
};

const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const submitButton = document.getElementById('submit');
const questions = [
    {
        question: "1. How old are you?",
        answers: {
            a: "under 18",
            b: "18-30",
            c: "31-45",
            d: "45+"
        },
        correctAnswer: "c"
    },
    {
        question: "2. How do you spell your name?",
        textfield: {
            '': ""
        },
    },
    {
        question: "3. Please upload a video file of you doing your favorite dance.",
        file: {
            "": ""
        }
    }
]



quizExec();

submitButton.addEventListener('click', showResults);

