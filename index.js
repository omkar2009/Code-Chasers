<!DOCTYPE html>
<html>
<head>
  <title>Quiz Pop</title>
  <style>
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }

    .options button {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      font-size: 16px;
    }

    .options button.selected {
      background-color: #4CAF50;
      color: white;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Quiz Pop</h1>
    <p>Select a topic:</p>
    <button id="musicButton">Music</button>
    <button id="artButton">Modern Art</button>
    <button id="codingButton">Coding</button>
  </div>

  <script>
    // Quiz data
    const data = {
      Music: [
        {
          question: "Who is known as the King of Pop?",
          options: ["Michael Jackson", "Elvis Presley", "Madonna", "Frank Sinatra"],
          answer: "Michael Jackson"
        },
        {
          question: "Which band performed the hit song 'Stairway to Heaven'?",
          options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
          answer: "Led Zeppelin"
        },
        {
          question: "Which singer-songwriter is known for the hit song 'Thinking Out Loud'?",
          options: ["Bruno Mars", "Ed Sheeran", "Justin Bieber", "Adele"],
          answer: "Ed Sheeran"
        }
      ],
      "Modern-Art": [
        {
          question: "Who painted the 'Mona Lisa'?",
          options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
          answer: "Leonardo da Vinci"
        },
        {
          question: "Which artist is famous for the painting 'The Persistence of Memory'?",
          options: ["Salvador Dalí", "Claude Monet", "Georgia O'Keeffe", "Andy Warhol"],
          answer: "Salvador Dalí"
        },
        {
          question: "Who is the creator of the sculpture 'The Thinker'?",
          options: ["Auguste Rodin", "Henry Moore", "Alexander Calder", "Louise Bourgeois"],
          answer: "Auguste Rodin"
        }
      ],
      Coding: [
        {
          question: "Which programming language is used to build web pages?",
          options: ["Java", "Python", "HTML", "C++"],
          answer: "HTML"
        },
        {
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
          answer: "Cascading Style Sheets"
        },
        {
          question: "What is the symbol used for single-line comments in most programming languages?",
          options: ["#", "//", "'", "--"],
          answer: "//"
        }
      ]
    };

    let currentQuestion = 0;
    let score = 0;

    // Function to load the question and options

    function loadQuestion() {
      const questionElement = document.getElementById("question");
      const optionsElement = document.getElementById("options");
      const question = data[localStorage.getItem("quizTopic")][currentQuestion].question;
      const options = data[localStorage.getItem("quizTopic")][currentQuestion].options;

      questionElement.innerHTML = question;
      optionsElement.innerHTML = "";

      for (let i = 0; i < options.length; i++) {
        const option = document.createElement("button");
        option.innerHTML = options[i];
        option.addEventListener("click", function() {
          selectOption(this);
        });
        optionsElement.appendChild(option);
      }
    }

    // Function to handle option selection
    function selectOption(option) {
      const options = document.getElementById("options").getElementsByTagName("button");

      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("selected");
      }

      option.classList.add("selected");
    }

    // Function to load the next question
    function loadNextQuestion() {
      const optionsElement = document.getElementById("options");
      const selectedOption = optionsElement.getElementsByClassName("selected")[0];
      const answer = data[localStorage.getItem("quizTopic")][currentQuestion].answer;

      // Check if selected answer is correct
      if (selectedOption.innerHTML === answer) {
        score++;
      }

      // Move to the next question
      currentQuestion++;

      // Check if the quiz is completed
      if (currentQuestion === data[localStorage.getItem("quizTopic")].length) {
        // Display final score
        const container = document.querySelector(".container");
        container.innerHTML = "<h1>Quiz Completed!</h1><p>Your Score: " + score + "</p>";

        // Store the score in localStorage
        localStorage.setItem("quizScore", score);
      } else {
        loadQuestion();
      }
    }

    // Function to load the topic selection
    function loadTopicSelection() {
      const musicButton = document.getElementById("musicButton");
      const artButton = document.getElementById("artButton");
      const codingButton = document.getElementById("codingButton");

      musicButton.addEventListener("click", function() {
        localStorage.setItem("quizTopic", "Music");
        startQuiz();
      });

      artButton.addEventListener("click", function() {
        localStorage.setItem("quizTopic", "Modern-Art");
        startQuiz();
      });

      codingButton.addEventListener("click", function() {
        localStorage.setItem("quizTopic", "Coding");
        startQuiz();
      });
    }

    // Function to start the quiz
    function startQuiz() {
      currentQuestion = 0;
      score = 0;
      loadQuestion();
    }

    // Load the topic selection
    loadTopicSelection();
    
  </script>
</body>
</html>
