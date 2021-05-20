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


    const myQuestions = [{
            question: "1.Nature of graph between intensity of light coming out of Analyzer and Cos<sup>2</sup>θ is:", ///// Write the question inside double quotes
            answers: {
                a: "Straight line", ///// Write the option 1 inside double quotes
                b: "Parabolic", ///// Write the option 2 inside double quotes
                c: "hyperbolic", ///// Write the option 2 inside double quotes
                d: "Circular", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Almost no light will come out of analyzer if the angle between polarizer and analyzer is:",  ///// Write the question inside double quotes
      answers: {
        a: "0<sup>o</sup>",                  ///// Write the option 1 inside double quotes
        b: "180<sup>o</sup>",                  ///// Write the option 2 inside double quotes
        c: "90<sup>o</sup>", 
        d: "NOT", 
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
        {
      question: "3. Vibrations of the Electric vectors of the Ordinary Light wave are:",  ///// Write the question inside double quotes
      answers: {
        a: "Perpendicular to the plane of propagation in all possible directions",                  ///// Write the option 1 inside double quotes
        b: "Parallel to the plane of propagation",                  ///// Write the option 2 inside double quotes
        c: "both", 
        d: "NOT", 
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
        {
      question: "4. In the experiment of polarization the angle the intensity of light coming out of analyzer depends on:",  ///// Write the question inside double quotes
      answers: {
        a: "angle between the plane of vibration of plane polarized light and the optic axis of the analyzer",  
          ///// Write the option 1 inside double quotes
        b: "Material of analyzer ",                  ///// Write the option 2 inside double quotes
        c: "Material of polarizer", 
        d: "NOT", 
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },


        
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
