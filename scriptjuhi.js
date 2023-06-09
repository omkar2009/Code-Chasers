const data = {
  Music: [
    {
      id: 1,
      question: "Which of the following is not a type of music notation?",
      options: [
        "Standard notation",
        "Tab notation",
        "Morse code notation",
        "Graphics notation",
      ],
      answer: "Morse code notation",
      category: "music",
    },
    {
      id: 2,
      question: "What is the most common time signature in classical music?",
      options: ["3/4", "4/4", "5/4", "6/8"],
      answer: "4/4",
      category: "music",
    },
    {
      id: 3,
      question:
        "Which of the following is not a type of instrument in a symphony orchestra?",
      options: ["Violin", "Piano", "Harp", "Theremin"],
      answer: "Theremin",
      category: "music",
    },
    {
      id: 4,
      question: "What is the most common key in pop music?",
      options: ["C Major", "G Major", "D Major", "A Major"],
      answer: "C Major",
      category: "music",
    },
    {
      id: 5,
      question: "Which of the following is not a type of chord?",
      options: ["Major", "Minor", "Diminished", "Flat"],
      answer: "Flat",
      category: "music",
    },
    {
      id: 6,
      question: "Which of the following is not a type of music genre?",
      options: ["Jazz", "Blues", "Rock", "Applesauce"],
      answer: "Applesauce",
      category: "music",
    },
    {
      id: 7,
      question: "Which of the following is not a type of music theory?",
      options: ["Harmony", "Counterpoint", "Form", "Cooking"],
      answer: "Cooking",
      category: "music",
    },
    {
      id: 8,
      question: "What is the most common tempo marking in classical music?",
      options: ["Allegro", "Andante", "Adagio", "Moderato"],
      answer: "Allegro",
      category: "music",
    },
    {
      id: 9,
      question: "Which of the following is not a type of musical form?",
      options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
      answer: "Spaghetti",
      category: "music",
    },
    {
      id: 10,
      question:
        "Which of the following is not a type of music notation software?",
      options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
      answer: "Microsoft Word",
      category: "music",
    },
  ],
  "Modern-Art": [
    {
      id: 11,
      question: "Which artist is known for coining the term 'Surrealism'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: "Salvador Dali",
      category: "modern-art",
    },
    {
      id: 12,
      question:
        "Which movement is associated with the use of abstract forms and shapes in art?",
      options: ["Impressionism", "Expressionism", "Futurism", "Cubism"],
      answer: "Cubism",
      category: "modern-art",
    },
    {
      id: 13,
      question:
        "Which artist is known for painting the work 'The Persistence of Memory'?",
      options: [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Henri Matisse",
      ],
      answer: "Salvador Dali",
      category: "modern-art",
    },
    {
      id: 14,
      question: "Which artist is known for creating the painting 'The Scream'?",
      options: [
        "Vincent van Gogh",
        "Salvador Dali",
        "Edvard Munch",
        "Claude Monet",
      ],
      answer: "Edvard Munch",
      category: "modern-art",
    },
    {
      id: 15,
      question:
        "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      options: ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
      answer: "Fauvism",
      category: "modern-art",
    },
    {
      id: 16,
      question:
        "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      options: [
        "Impressionism",
        "Futurism",
        "Surrealism",
        "Abstract Expressionism",
      ],
      answer: "Futurism",
      category: "modern-art",
    },
    {
      id: 17,
      question:
        "Which artist is known for creating the painting 'Water Lilies'?",
      options: ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
      answer: "Claude Monet",
      category: "modern-art",
    },
    {
      id: 18,
      question:
        "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      options: [
        "Henri Matisse",
        "Vincent van Gogh",
        "Salvador Dali",
        "Pablo Picasso",
      ],
      answer: "Pablo Picasso",
      category: "modern-art",
    },
    {
      id: 19,
      question: "Which artist is known for creating the painting 'Guernica'?",
      options: [
        "Claude Mone",
        "Paul Cezanne",
        "Pablo Picasso",
        "Vincent van Gogh",
      ],
      answer: "Pablo Picasso",
      category: "modern-art",
    },
    {
      id: 20,
      question:
        "Which artist is known for creating the sculpture 'The Thinker'?",
      options: ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
      answer: "Auguste Rodin",
      category: "modern-art",
    },
  ],
  Coding: [
    {
      id: 21,
      question: "What is the correct syntax for an if statement in Python?",
      options: [
        "if (condition):",
        "if condition",
        "if: condition",
        "if condition:",
      ],
      answer: "if condition:",
      category: "coding",
    },
    {
      id: 22,
      question: "Which of the following is not a data type in JavaScript?",
      options: ["String", "Number", "Boolean", "ArrayList"],
      answer: "ArrayList",
      category: "coding",
    },
    {
      id: 23,
      question: "Which of the following is used to declare a variable in Java?",
      options: ["var", "let", "const", "int"],
      answer: "int",
      category: "coding",
    },
    {
      id: 24,
      question: "What is the correct syntax for a for loop in C#?",
      options: [
        "for i = 0 to 10",
        "for (i = 0; i <= 10; i++)",
        "for (int i = 0; i <= 10)",
        "for i in range(0, 10)",
      ],
      answer: "for (i = 0; i <= 10; i++)",
      category: "coding",
    },
    {
      id: 25,
      question: "Which of the following is not a looping structure in PHP?",
      options: ["while", "for", "do-while", "foreach"],
      answer: "foreach",
      category: "coding",
    },
    {
      id: 26,
      question: "Which of the following is not a valid operator in C++?",
      options: ["+", "-", "*", "$"],
      answer: "$",
      category: "coding",
    },
    {
      id: 27,
      question:
        "In which programming language is 'print' used for displaying output?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "Python",
      category: "coding",
    },
    {
      id: 28,
      question: "What is the correct syntax for a function in Ruby?",
      options: ["function name()", "def name", "function name", "def name()"],
      answer: "def name()",
      category: "coding",
    },
    {
      id: 29,
      question: "Which of the following is not a type of variable in Swift?",
      options: ["Int", "String", "Double", "Object"],
      answer: "Object",
      category: "coding",
    },
    {
      id: 30,
      question: "In which programming language is '#' used for commenting?",
      options: ["Python", "JavaScript", "Java", "C++"],
      answer: "C++",
      category: "coding",
    },
  ],
};

// Global variables
let currentCategory = "";
let currentQuestionIndex = 0;
let selectedAnswers = {};

// DOM elements
const categoryButtonsContainer = document.getElementById("category-buttons");
const quizContainer = document.getElementById("quiz-container");
const categoryTitle = document.getElementById("category-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const boxHeaderDiv = document.getElementById("box");

// Check if results exist in localStorage
const storedResults = localStorage.getItem("quizResults");
if (storedResults) {
  selectedAnswers = JSON.parse(storedResults);
}

// Render category buttons
for (const category in data) {
  const categoryButton = document.createElement("button");
  categoryButton.classList.add("category-button");
  categoryButton.innerText = category;
  categoryButton.addEventListener("click", () => loadCategory(category));
  categoryButtonsContainer.appendChild(categoryButton);
}

// Load questions from selected category
function loadCategory(category) {
  currentCategory = category;
  currentQuestionIndex = 0;

  renderQuestion();
  updateNavigationButtons();
  categoryButtonsContainer.style.display = "none";
  quizContainer.style.display = "block";
}

// Render current question
function renderQuestion() {
  boxHeaderDiv.style.display = "none";
  nextButton.disabled = true;
  const questions = data[currentCategory];
  const currentQuestion = questions[currentQuestionIndex];

  categoryTitle.innerText = currentCategory;
  questionText.innerText =
    currentQuestionIndex + 1 + ". " + currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option-container");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "answer";
    radioInput.value = option;
    radioInput.addEventListener("change", () => {
      selectedAnswers[currentQuestion.id] = option;
      updateNavigationButtons();
      saveResults();
    });

    const optionLabel = document.createElement("label");
    optionLabel.innerText = option;

    optionContainer.appendChild(radioInput);
    optionContainer.appendChild(optionLabel);
    optionsContainer.appendChild(optionContainer);
  });
}

function updateNavigationButtons() {
  const questions = data[currentCategory];
  const currentQuestion = questions[currentQuestionIndex];

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = !selectedAnswers[currentQuestion.id];

  if (currentQuestionIndex === questions.length - 1) {
    nextButton.style.visibility = "hidden";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.visibility = "visible";
    submitButton.style.display = "none";
  }
}

// Function to handle the next button click
function handleNext() {
  if (currentQuestionIndex < data[currentCategory].length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    updateNavigationButtons();
  }
}

// Function to handle the previous button click
function handlePrevious() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
    updateNavigationButtons();
  }
}

// Function to handle the submit button click
function handleSubmit() {
  const questions = data[currentCategory];
  const totalQuestions = questions.length;
  let score = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const question = questions[i];
    if (selectedAnswers[question.id] === question.answer) {
      score++;
    }
  }

  const scoreText = `You scored ${score} out of ${totalQuestions}!`;
  displayPopup(scoreText);

  prevButton.disabled = true;
  nextButton.disabled = true;
  submitButton.style.display = "none";

  // Clear selected answers
  selectedAnswers = {};
  saveResults();
}

// Function to save results in localStorage
function saveResults() {
  localStorage.setItem("quizResults", JSON.stringify(selectedAnswers));
}

// Function to display popup
function displayPopup(scoreText) {
  const popupContainer = document.getElementById("popup-container");
  const popupContent = document.getElementById("popup-content");
  const closeBtn = document.getElementById("close-btn");

  popupContent.innerText = scoreText;
  popupContainer.style.display = "block";

  closeBtn.addEventListener("click", () => {
    popupContainer.style.display = "none";
  });
}

// Function to close popup
function closePopup() {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.style.display = "none";
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", handlePrevious);
nextButton.addEventListener("click", handleNext);
submitButton.addEventListener("click", handleSubmit);
