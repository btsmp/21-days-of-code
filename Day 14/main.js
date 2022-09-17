const questions = [
  {
    title: "Quanto é 2x4?",
    answers: [ "8", "16", "28", "4" ],
    correct: 0
  },
  {
    title: "Qual o resto da divisão de 16 por 7?",
    answers: [ "5", "1", "3", "2" ],
    correct: 3
  },
  {
    title: "Quanto é 3 elevado a quarta potência?",
    answers: [ "9", "81", "38", "16" ],
    correct: 1
  }
];

const app = {
  start: function () {
    this.questionCurrent = 0;
    this.totalPoints = 0;
    const alts = document.querySelectorAll(".answer");

    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.checkAnswer(index);
      });
    });
    app.updatePoints();
    this.showQuestion(questions[ this.questionCurrent ]);
  },

  showQuestion: function (question) {
    this.question = question;
    const title = document.getElementById("question");
    title.textContent = question.title;

    const alts = document.querySelectorAll(".answer");
    alts.forEach(function (element, index) {
      element.textContent = question.answers[ index ];
    });
  },

  nextQuestion: function () {
    this.questionCurrent++;
    if (this.questionCurrent == questions.length) {
      this.questionCurrent = 0;
    }
  },

  checkAnswer: function (user) {
    if (this.question.correct == user) {
      console.log("Correta");
      this.totalPoints++;
      this.showAnswer(true);
    } else {
      console.log("Errada");
      this.showAnswer(false);
    }
    this.updatePoints();
    this.nextQuestion();
    this.showQuestion(questions[ this.questionCurrent ]);
  },

  updatePoints: function () {
    const pointsDiv = document.querySelector("#points");

    pointsDiv.textContent = `Sua pontuação é : ${ this.totalPoints }`;
  },

  showAnswer: function (correctQuestion) {
    const resultDiv = document.querySelector("#result");
    let result = "";
    if (correctQuestion == true) {
      result = "Responsta Correta";
    } else {
      let question = questions[ this.questionCurrent ];
      let correctIndex = question.correct;
      let answerText = question.answers[ correctIndex ];

      result = `Incorreto! A resposta correta é : ${ answerText }`;
    }

    resultDiv.textContent = result;
  }
};

app.start();