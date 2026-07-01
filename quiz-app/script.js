const questions = [
  {
    question: "What is an array?",
    answers: [
      { text: "A data structure that can hold multiple values", correct: true },
      { text: "A single value", correct: false },
      { text: "A block of code that performs a specific task", correct: false },
      { text: "An unordered collection of key-value pairs", correct: false },
    ],
  },
  {
    question: "What is a function?",
    answers: [
      { text: "A block of code that performs a specific task", correct: true },
      {
        text: "A data structure that can hold multiple values",
        correct: false,
      },
      { text: "A single value", correct: false },
      { text: "An object", correct: false },
    ],
  },
  {
    question: "What is an object?",
    answers: [
      {
        text: "A data structure that can hold multiple values",
        correct: false,
      },
      { text: "A single value", correct: false },
      { text: "A function", correct: false },
      { text: "An unordered collection of key-value pairs", correct: true },
    ],
  },
  {
    question: "What is a variable?",
    answers: [
      { text: "A named storage for data that can change", correct: true },
      { text: "A block of code that performs a specific task", correct: false },
      {
        text: "A data structure that can hold multiple values",
        correct: false,
      },
      { text: "An unordered collection of key-value pairs", correct: false },
    ],
  },
  {
    question: "What is a loop?",
    answers: [
      {
        text: "A control structure that repeats a block of code",
        correct: true,
      },
      { text: "A named storage for data that can change", correct: false },
      { text: "A block of code that performs a specific task", correct: false },
      { text: "An unordered collection of key-value pairs", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtonsElement.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
