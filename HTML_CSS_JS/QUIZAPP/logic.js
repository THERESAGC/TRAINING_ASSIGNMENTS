var finalscore = 0;

function timer() {
    // Set the date we're counting down to
    const now = new Date().getTime();
    const countDownDate = now + 15 * 60 * 1000;  // 15 mins timer

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timecomponent"
        document.getElementById("timecomponent").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timecomponent").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function getdetails(event) {
    event.preventDefault(); // Prevent the default form submission
    const fname = document.getElementById('validationCustom01').value;
    const lname = document.getElementById('validationCustom02').value;
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    window.location.href = "testpage.html";
}

window.addEventListener('load', () => {
    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    document.getElementById('displayFname').innerText = fname;
    document.getElementById('displayLname').innerText = lname;
});

const questions = [
  {
      question: "What is the size of int in Java?",
      options: ["16 bits", "32 bits", "64 bits", "128 bits"],
      answer: "32 bits"
  },
  {
      question: "Which of the following is not a Java feature?",
      options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic"],
      answer: "Use of pointers"
  },
  {
      question: "Which of these cannot be used for a variable name in Java?",
      options: ["identifier", "keyword", "variable", "none of the mentioned"],
      answer: "keyword"
  },
  {
      question: "What is the extension of Java code files?",
      options: [".js", ".txt", ".class", ".java"],
      answer: ".java"
  },
  {
      question: "Which of the following is a reserved keyword in Java?",
      options: ["object", "strictfp", "main", "system"],
      answer: "strictfp"
  }
];

let currentQuestionIndex = 0;
let score = 0;

window.addEventListener('load', () => {
  const fname = localStorage.getItem('fname');
  document.getElementById('displayFname').innerText = fname;
  showQuestion();
  updateProgressBar();
});

function showQuestion() {
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.innerHTML = '';
  const questionData = questions[currentQuestionIndex];
  const questionElement = document.createElement('div');
  questionElement.classList.add('question', 'active');
  questionElement.innerHTML = `
      <h2>${questionData.question}</h2>
      ${questionData.options.map((option, index) => `
          <div class="form-check">
              <input class="form-check-input" type="radio" name="question${currentQuestionIndex}" id="option${index}" value="${option}">
              <label class="form-check-label" for="option${index}">
                  ${option}
              </label>
          </div>
      `).join('')}
  `;
  quizContainer.appendChild(questionElement);
}

function nextQuestion() {
  const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
  if (selectedOption) {
      if (selectedOption.value === questions[currentQuestionIndex].answer) {
          score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          showQuestion();
          updateProgressBar();
      } else {
          document.getElementById('nextButton').style.display = 'none';
          document.getElementById('submitButton').style.display = 'block';
      }
  } else {
      alert('Please select an option before proceeding.');
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function submitQuiz() {
  const fname = localStorage.getItem('fname');
  const percentage = (score / questions.length) * 100;
  document.getElementById('quizContainer').style.display = 'none';
  document.getElementById('nextButton').style.display = 'none';
  document.getElementById('submitButton').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('resultMessage').innerText = `Dear ${fname}, you have scored:`;
  document.getElementById('resultScore').innerText = `${score} out of ${questions.length} (${percentage.toFixed(2)}%)`;
}

function timer() {
  const now = new Date().getTime();
  const countDownDate = now + 15 * 60 * 1000;  // 15 mins timer

  const x = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timecomponent").innerHTML = minutes + "m " + seconds + "s ";

      if (distance < 0) {
          clearInterval(x);
          document.getElementById("timecomponent").innerHTML = "EXPIRED";
      }
  }, 1000);
}