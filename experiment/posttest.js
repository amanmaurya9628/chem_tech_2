/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "What is the effect of increasing the amount of cyclohexanol in the simulator while keeping others constant?",  ///// Write the question inside double quotes
      answers: {
        a: "  Decreases the yield",                  ///// Write the option 1 inside double quotes
        b: "No effect",                  ///// Write the option 2 inside double quotes
        c: "Increases the yield (up to a point)",                  ///// Write the option 3 inside double quotes
        d: "Converts into nitric acid"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "In the simulation, which component is assumed to be in excess?",  ///// Write the question inside double quotes
      answers: {
        a: " Cyclohexanol",                  ///// Write the option 1 inside double quotes
        b: "Cyclohexanone",                  ///// Write the option 2 inside double quotes
        c: " Nitric Acid",                  ///// Write the option 3 inside double quotes
        d: "Adipic Acid"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    	   {
      question: "The visual height of liquid in each beaker in the simulator represents:",  ///// Write the question inside double quotes
      answers: {
        a: "Temperature",                  ///// Write the option 1 inside double quotes
        b: "pH level",                  ///// Write the option 2 inside double quotes
        c: "Volume or mass of the substance",                  ///// Write the option 3 inside double quotes
        d: " Pressure"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    	   {
      question: "Which of the following best describes the output displayed in the simulation?",  ///// Write the question inside double quotes
      answers: {
        a: " Molecular weight of adipic acid",                  ///// Write the option 1 inside double quotes
        b: " Boiling point of reactants",                  ///// Write the option 2 inside double quotes
        c: "Estimated yield in mL",                  ///// Write the option 3 inside double quotes
        d: "Molarity of nitric acid"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    	   {
      question: "Why is it important to simulate chemical synthesis before real experimentation?",  ///// Write the question inside double quotes
      answers: {
        a: "To avoid manual calculations",                  ///// Write the option 1 inside double quotes
        b: "To learn software programming",                  ///// Write the option 2 inside double quotes
        c: "For safety and better understanding",                  ///// Write the option 3 inside double quotes
        d: " To create random data"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
