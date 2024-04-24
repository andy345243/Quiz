//Minecraft Quiz

//EVENT LISTENER
document.getElementById("btn").addEventListener("click", Mark);

function Mark() {
  //INPUT
  let questionOne = document.getElementById("question-1").value.toLowerCase();
  let questionTwo = document.getElementById("question-2").value.toLowerCase();
  let questionThree = document.getElementById("question-3").value.toLowerCase();
  let questionFour = document.getElementById("question-4").value.toLowerCase();
  let question1 = 0;
  let question2 = 0;
  let question3 = 0;
  let question4 = 0;

  //QUESTION 1
  if (questionOne == "4" || questionOne == "four") {
    document.getElementById("question-1").style.borderColor = "rgba(0, 255, 0)";
    document.getElementById("answer-1").style.color = "rgba(0, 102, 0)";
    document.getElementById("answer-1").innerHTML = "Correct great job!";
    question1++;
  } else {
    document.getElementById("question-1").style.borderColor = "rgba(255, 0, 0)";
    document.getElementById("answer-1").style.color = "rgba(102, 0, 0)";
    document.getElementById("answer-1").innerHTML = "Wrong try again!";
  }

  //QUESTION 2
  if (questionTwo == "bedrock") {
    document.getElementById("question-2").style.borderColor = "rgba(0, 255, 0)";
    document.getElementById("answer-2").style.color = "rgba(0, 102, 0)";
    document.getElementById("answer-2").innerHTML = "Correct great job!";
    question2++;
  } else {
    document.getElementById("question-2").style.borderColor = "rgba(255, 0, 0)";
    document.getElementById("answer-2").style.color = "rgba(102, 0, 0)";
    document.getElementById("answer-2").innerHTML = "Wrong try again!";
  }

  //QUESTION 3
  if (
    questionThree == "iron pickaxe" ||
    questionThree == "iron" ||
    questionThree == "diamond" ||
    questionThree == "diamond pickaxe" ||
    questionThree == "netherite" ||
    questionThree == "netherite pickaxe"
  ) {
    document.getElementById("question-3").style.borderColor = "rgba(0, 255, 0)";
    document.getElementById("answer-3").style.color = "rgba(0, 102, 0)";
    document.getElementById("answer-3").innerHTML = "Correct great job!";
    question3++;
  } else {
    document.getElementById("question-3").style.borderColor = "rgba(255, 0, 0)";
    document.getElementById("answer-3").style.color = "rgba(102, 0, 0)";
    document.getElementById("answer-3").innerHTML = "Wrong try again!";
  }

  //QUESTION 4
  if (questionFour == "move") {
    document.getElementById("question-4").style.borderColor = "rgba(0, 255, 0)";
    document.getElementById("answer-4").style.color = "rgba(0, 102, 0)";
    document.getElementById("answer-4").innerHTML = "Correct great job!";
    question4++;
  } else {
    document.getElementById("question-4").style.borderColor = "rgba(255, 0, 0)";
    document.getElementById("answer-4").style.color = "rgba(102, 0, 0)";
    document.getElementById("answer-4").innerHTML = "Wrong try again!";
  }

  //Calculating Score
  let calculate = (document.getElementById("result").innerHTML =
    question1 + question2 + question3 + question4);

  if (calculate == 4) {
    document.getElementById("result").innerHTML =
      "You got 4/4 (100%) great job!";
  } else if (calculate == 3) {
    document.getElementById("result").innerHTML = "You got 3/4 (75%) good job!";
  } else if (calculate == 2) {
    document.getElementById("result").innerHTML = "You got 2/4 (50%).....ok.";
  } else if (calculate == 1) {
    document.getElementById("result").innerHTML =
      "You got 1/4 (25%).....You got 75% of the questions wrong.";
  } else {
    document.getElementById("result").innerHTML =
      "You got 0/4 (0%)......You got every questions wrong";
  }
}
