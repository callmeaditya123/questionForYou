let nameQuestion = document.getElementById("nameQuestion");

// container statement all
let containerName = document.getElementById("container-name");
let containerStart = document.getElementById("container-start-statement");
let containerFinal = document.getElementById("container-final-statement");
let finalEnd = document.getElementById("final-end");

// button statement
let buttonStatement1 = document.getElementById("buttonStatement1");
let buttonStatement2 = document.getElementById("buttonStatement2");
let buttonStatement3 = document.getElementById("buttonStatement3");
let buttonStatement4 = document.getElementById("buttonStatement4");
let buttonStatement5 = document.getElementById("buttonStatement5");
let buttonStatement6 = document.getElementById("buttonStatement6");

// isi statement
let isiStatement = document.getElementById("isiStatement");
let finalStatement = document.getElementById("finalStatement");
let isiAccept = document.getElementById("accept");

// classlist css
let body = document.body;

//  question statement prompt
let question;

// display first html start
buttonStatement2.style.display = "none";
buttonStatement3.style.display = "none";
buttonStatement4.style.display = "none";
buttonStatement5.style.display = "none";
buttonStatement6.style.display = "none";

finalEnd.style.display = "none";
isiStatement.style.display = "none";
// display first html end

// statement 2 start
function myFunction1() {
  if ((question = prompt("Enter Your Name"))) {
    if (question == "Fern") {
      console.log(question);
      alert(`Hi ${question}`);
      isiStatement.textContent = `Are You Okay?`;
    } else if (question == "fern") {
      console.log(question);
      alert(`Hi ${question}`);
      isiStatement.textContent = "Do you have a problem yes or no?";
    } else if (question == "FERN") {
      console.log("The front letters are Big");
      alert("Less precies!!");
      location.reload();
    } else if (question == "fern") {
      console.log("The names are all small");
      alert("Less precies!!");
      location.reload();
    } else {
      console.log(
        "Sorry this is locked, it can only be open for a special few people"
      );
      alert("Sorry this is locked!");
      location.reload();
    }
  } else {
    location.reload();
  }

  buttonStatement1.style.display = "none";
  buttonStatement2.style.display = "block";
  buttonStatement3.style.display = "block";

  isiStatement.style.display = "block";
  isiStatement.style.fontSize = "25px";
  isiStatement.style.textAlign = "center";

  nameQuestion.textContent = `${question}`;

  body.classList.toggle("statementStart");
}

function myFunction2() {
  isiStatement.textContent = "Thank you if you are fine!!";

  buttonStatement2.style.display = "none";
  buttonStatement3.style.display = "none";
  buttonStatement4.style.display = "block";

  body.classList.toggle("statementYes");
}

function myFunction3() {
  isiStatement.textContent = "Too bad you need attention apiesss!!";
  isiStatement.style.color = "white";

  buttonStatement2.style.display = "none";
  buttonStatement3.style.display = "none";
  buttonStatement4.style.display = "block";

  body.classList.toggle("statementNo");
}
// statement 2 end

// statement 3 start
function myFunction4() {
  containerStart.style.display = "none";
  isiStatement.style.display = "none";
  finalStatement.textContent =
    "Welcome Fern I have something for you\n Click in Here";
  buttonStatement4.style.display = "none";

  body.classList.toggle("statementNext");
}
// statement 3 end

// onmouseover final statement
function isiFinal() {
  finalStatement.textContent = "loading....";
  setTimeout(() => {
    containerStart.style.display = "none";
    finalStatement.textContent = "Fern will you be my girlfriend ??";
    buttonStatement5.style.display = "block";
    buttonStatement6.style.display = "block";
  }, 3000);
}

// final all accept or reject
function buttonAccept() {
  containerStart.style.display = "none";
  containerFinal.style.display = "none";
  finalEnd.style.display = "block";

  buttonStatement5.style.display = "none";
  buttonStatement6.style.display = "none";
  alert("Whatttt, are you serious :)?");
  alert("are you serious?");

  isiAccept.textContent = question;
}
function buttonReject() {
  alert("Well, it failed :(");
  location.reload();
}
