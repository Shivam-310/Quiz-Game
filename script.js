const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin"],
    answer: "Paris"
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Euro", "Dollar"],
    answer: "Yen"
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["K2", "Mount Everest", "Makalu"],
    answer: "Mount Everest"
  },
  {
    question: "What is the largest country in the world by area?",
    choices: ["Russia", "China", "USA"],
    answer: "Russia"
  }
];

const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  choicesElement.innerHTML = "";
  currentQuestion.choices.forEach(choice => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("choice");
    choiceElement.innerText = choice;
    choiceElement.addEventListener("click", () => {
      if (choice === currentQuestion.answer) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex >= quizData.length) {
        showResult();
      } else {
        showQuestion();
      }
    });
    choicesElement.appendChild(choiceElement);
  });
}

function showResult() {
  quizContainer.style.display = "none";
  resultElement.innerText = `You scored ${score} out of ${quizData.length} questions!`;
}

submitButton.addEventListener("click", showQuestion);
