const quizData = [
    {
        question: "What is the capital of France?",
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Madrid",
        correct: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "b"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        a: "William Shakespeare",
        b: "Jane Austen",
        c: "Charles Dickens",
        d: "Emily Bronte",
        correct: "a"
    }
];


let index = 0;
let right = 0,
    wrong = 0;
let total = quizData.length; 
const questionBox = document.getElementById("questionBox");
const options = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(index === total){
            return endQuiz();
    }
    reset();
    const data = quizData[index]
    questionBox.innerText = `${index +1}) ${data.question}`;
    options[0].nextElementSibling.innerText = `${data.a}`;
    options[1].nextElementSibling.innerText = `${data.b}`;
    options[2].nextElementSibling.innerText = `${data.c}`;
    options[3].nextElementSibling.innerText = `${data.d}`;
}

const submitQuiz = () =>{
    const data = quizData[index]
    const ans = getAnswer();
    if(ans === data.correct) {
        right++;
    }
    else{
        wrong++;
    }
    index++
    loadQuestion();
    return;   
}

const getAnswer = () =>{
    let answer;
    options.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
}

const reset = () => {
options.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.querySelector(".box").innerHTML = `
    <div style="text-align:center">
    <h2>Thank You !!!</h2>
    <h3> ${right} / ${wrong} Correct Answers </h3>
    </div>
    `
}

loadQuestion();