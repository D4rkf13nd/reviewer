import { Quiz, quizData } from './quiz.js';

const quiz = new Quiz();
let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
const retryButton = document.getElementById('retry');

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = `${currentQuestion + 1}. ${question.question}`;
    
    answersElement.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(button);
    });
    
    submitButton.disabled = true;
}

function selectAnswer(index) {
    selectedAnswer = index;
    submitButton.disabled = false;
    
    const buttons = answersElement.getElementsByClassName('answer-btn');
    Array.from(buttons).forEach(button => button.classList.remove('selected'));
    buttons[index].classList.add('selected');
}

function submitAnswer() {
    const currentQuizQuestion = quizData[currentQuestion];
    const isCorrect = selectedAnswer === currentQuizQuestion.correct;
    
    if (isCorrect) {
        score++;
    }
    
    showAnswerFeedback(selectedAnswer, currentQuizQuestion);
}

function showAnswerFeedback(selectedIndex, question) {
    const buttons = answersElement.getElementsByClassName('answer-btn');
    const correctIndex = question.correct;
    
    // Disable submit button during feedback
    submitButton.disabled = true;
    
    // Show correct answer in green
    buttons[correctIndex].style.backgroundColor = '#2ecc71';
    buttons[correctIndex].style.color = 'white';
    
    // If selected answer is wrong, show it in red
    if (selectedIndex !== correctIndex) {
        buttons[selectedIndex].style.backgroundColor = '#e74c3c';
        buttons[selectedIndex].style.color = 'white';
    }
    
    // Disable all buttons during feedback
    Array.from(buttons).forEach(button => {
        button.disabled = true;
    });
    
    // Wait 3 seconds before moving to next question
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
            updateProgress();
            submitButton.disabled = false;
        } else {
            showResults();
        }
    }, 3000);
}

function updateProgress() {
    document.getElementById('current').textContent = currentQuestion + 1;
    document.getElementById('total').textContent = quizData.length;
}

function showResults() {
    questionElement.style.display = 'none';
    answersElement.style.display = 'none';
    submitButton.style.display = 'none';
    
    const totalQuestions = quizData.length;
    const halfScore = totalQuestions / 2;
    const messageElement = document.getElementById('message');
    
    scoreElement.textContent = `Your score: ${score} out of ${totalQuestions}`;
    
    if (score === totalQuestions) {
        messageElement.textContent = "Ang galing naman ng future baby CET na yan! 🎉";
        messageElement.style.color = "#2ecc71";
    } else if (score >= halfScore) {
        messageElement.textContent = "Kaya mo yan baby! 💪";
        messageElement.style.color = "#3498db";
    } else {
        messageElement.textContent = "Better luck next time baby! 💕";
        messageElement.style.color = "#e74c3c";
    }
    
    retryButton.style.display = 'block';
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    
    questionElement.style.display = 'block';
    answersElement.style.display = 'block';
    submitButton.style.display = 'block';
    scoreElement.textContent = '';
    retryButton.style.display = 'none';
    
    updateProgress(); // Add this line to reset progress
    loadQuestion();
}

// Start the quiz
quiz.start();
updateProgress();
loadQuestion();
submitButton.addEventListener('click', submitAnswer);
retryButton.addEventListener('click', resetQuiz);