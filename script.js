const questions = [
  {
    question: "Which is largest animal in the world ? ",
    answers: [
      {text: "Shark", correct: false},
      {text: "Blue whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
    ]
  },
  {
    question: "What is capital of India ?",
    answers: [
      {text: "Mumbai", correct: false},
      {text: "Chennai", correct: false},
      {text: "Delhi", correct: true},
      {text: "Kolkata", correct: false},
    ]
  },
  {
    question: "Which is the national animal of India ?",
    answers: [
      {text: "Elephant", correct: false},
      {text: "Lion", correct: false},
      {text: "leopard", correct: false},
      {text: "Tiger", correct: true},
    ]
  },
  {
    question: "Which is the smallest contient in the world ",
    answers: [
      {text: "Asia", correct: false},
      {text: "Australia", correct: true},
      {text: "Arctic", correct: false},
      {text: "Africa", correct: false},
    ]
  },
  {
    question: "Who is the Prime Minister of India ?",
    answers: [
      {text: "Narendra Modi", correct: true},
      {text: "Rahul Gandhi", correct: false},
      {text: "Aaditya Yoginath", correct: false},
      {text: "Amit Shah", correct: false},
    ]
  },
  {
    question: "Which is the largest stadium in the world ?",
    answers: [
      {text: "Eden Gardens", correct: false},
      {text: "Lord", correct: false},
      {text: "Melbourne", correct: false},
      {text: "Narendra Modi stadium", correct: true},
    ]
  },
  {
    question: "Which is the largest Desert in the world ?",
    answers: [
      {text: "Kalahari", correct: false},
      {text: "Gobi", correct: false},
      {text: "Sahara", correct: false},
      {text: "Antartica", correct: true},
    ]
  },
  {
    question: "Which is largest country in the world? ",
    answers: [
      {text: "America", correct: false},
      {text: "Russia", correct: true},
      {text: "Africa", correct: false},
      {text: "China", correct: false},
    ]
  },
  {
    question: "Which is largest city in the world? ",
    answers: [
      {text: "New Yark", correct: false},
      {text: "Delhi", correct: false},
      {text: "Tokyo", correct: true},
      {text: "Mexico", correct: false},
    ]
  },
  {
    question: "Which country has the highest population ",
    answers: [
      {text: "India", correct: false},
      {text: "China", correct: true},
      {text: "America", correct: false},
      {text: "Russia", correct: false},
    ]
  }
];

const  questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
   currentQuestionIndex = 0;
   score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}
function  showQuestion(){
  resetState();
  // question will be shown here
// console.log(currentQuestionIndex);
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. '+currentQuestion.question;

  //option will be shown here

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if(answer.correct){    
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
  });
}
function resetState(){
  nextBtn.style.display = "none"
  while(answerBtn.firstChild)
  {
   answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach((button)=>{
    if(button.dataset.correct === 'true'){
      button.classList.add("correct");
    }
    button.disabled = true;
    nextBtn.style.display = "block";
  })
}
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML =  'Play Again';
  nextBtn.style.display = "block";

}
function  handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length)
  {
    showQuestion();
  }
  else{
    showScore();
  }
}

nextBtn.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length)
  {
    handleNextButton();
  }
  else{
    startQuiz();
  }
})
startQuiz();