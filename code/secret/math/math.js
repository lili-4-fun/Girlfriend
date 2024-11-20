let operators = ["+", "-", "*"];
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-msg");
let answerValue;
let operatorQuestion;

//Random Value Generator
const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const questionGenerator = () => {
  //Two random values between 1 and 20
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];

  //For getting random operator
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];

  if (randomOperator == "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  //Solve equation
  let solution = eval(`${num1}${randomOperator}${num2}`);

  //For placing the input at random position
  //(1 for num1, 2 for num2, 3 for operator, anything else(4) for solution)
  let randomVar = randomValue(1, 5);

  if (randomVar == 1) {
    answerValue = num1;
    question.innerHTML = `<input type="number" id="inputValue" placeholder="?"\> ${randomOperator} ${num2} = ${solution}`;
  } else if (randomVar == 2) {
    answerValue = num2;
    question.innerHTML = `${num1} ${randomOperator}<input type="number" id="inputValue" placeholder="?"\> = ${solution}`;
  } else if (randomVar == 3) {
    answerValue = randomOperator;
    operatorQuestion = true;
    question.innerHTML = `${num1} <input type="text" id="inputValue" placeholder="?"\> ${num2} = ${solution}`;
  } else {
    answerValue = solution;
    question.innerHTML = `${num1} ${randomOperator} ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
  }

  //User Input Check
  submitBtn.addEventListener("click", () => {
    errorMessage.classList.add("hide");
    let userInput = document.getElementById("inputValue").value;
    //If user input is not empty
    if (userInput) {
      //If the user guessed correct answer
      if (userInput == answerValue) {
<<<<<<< HEAD:code/secret/math/math.js
        correctAnswers++;
        if (correctAnswers >= 7) {
          window.location.href = "../video/surprise.html"; // Redirect to new page
        } else {
          let equationsLeft = 7 - correctAnswers;
          stopGame(`<span>Correct</span> answer! Good job my princess <3 <br>Keep going!! Only <span>${equationsLeft} </span>more to go!`);
        }
=======
        stopGame(`Yippie!! <span>Correct</span> Answer`);
>>>>>>> parent of 8406e44 (iput):math/math.js
      }
      //If user inputs operator other than +,-,*
      else if (operatorQuestion && !operators.includes(userInput)) {
        errorMessage.classList.remove("hide");
        errorMessage.innerHTML = "Please enter a valid operator";
      }
      //If user guessed wrong answer
      else {
<<<<<<< HEAD:code/secret/math/math.js
        let equationsLeft = 7 - correctAnswers;
        stopGame(`Sorry, <span>Wrong</span> answer my love<br> keep going baby! you only have <span>${equationsLeft} </span> more to go!!`);
=======
        stopGame(`Opps!! <span>Wrong</span> Answer`);
>>>>>>> parent of 8406e44 (iput):math/math.js
      }
    }
    //If user input is empty
    else {
      errorMessage.classList.remove("hide");
      errorMessage.innerHTML = "Input Cannot Be Empty";
    }
  });
};



startBtn.addEventListener("click", () => {
  operatorQuestion = false;
  answerValue = "";
  errorMessage.innerHTML = "";
  errorMessage.classList.add("hide");
<<<<<<< HEAD:code/secret/math/math.js
  correctAnswers = 0; // Reset the counter

  // Hide the #sorry paragraph when the game starts
  document.getElementById("sorry").classList.add("hide");

=======
>>>>>>> parent of 8406e44 (iput):math/math.js
  //Controls and buttons visibility
  controls.classList.add("hide");
  startBtn.classList.add("hide");
  questionGenerator();
});

// Stop Game and display result
const stopGame = (resultText) => {
  result.innerHTML = resultText;
  startBtn.innerText = "Restart";
  controls.classList.remove("hide");
  startBtn.classList.remove("hide");
  result.classList.remove("hide");
};
