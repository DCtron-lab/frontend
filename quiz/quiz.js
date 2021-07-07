const quizDB = [{
        question: "1. SI unit of Current",
        a: "A",
        b: "J",
        c: "m",
        d: "kg",
        ans: "ans1",
    },
    {
        question: "2. SI unit of Mass",
        a: "m",
        b: "kg",
        c: "A",
        d: "J",
        ans: "ans2",
    },
    {
        question: "2. SI unit of length",
        a: "A",
        b: "m",
        c: "J",
        d: "kg",
        ans: "ans2",
    },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

loadQuestion();

const getcheckedAnswer = () => {
    let answer;
    answers.forEach((current) => {
        if (current.checked) {
            answer = current.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((current) => (current.checked = false));
};

submit.addEventListener("click", () => {
    const checkedAnswer = getcheckedAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
          <h3> You Scored ${score}/${quizDB.length} </h3>
          <button class="btn" onclick="location.reload()">Play Again</button>
          `;
        showScore.classList.remove("scoreArea");
    }
});