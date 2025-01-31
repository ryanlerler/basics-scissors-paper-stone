// initialized global variables
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSEDSCISSORS = "reversed scissors";
var REVERSEDPAPER = "reversed paper";
var REVERSEDSTONE = "reversed stone";
var myOutputValue = "";
var playerWinCount = 0;
var pcWinCount = 0;
var drawCount = 0;
var gameCount = 0;
var gameMode = "";
var userName = "";

var getPcChoice = function () {
  var randomInteger = Math.floor(Math.random() * 3) + 1;
  if (randomInteger == 1) {
    return SCISSORS;
  } else if (randomInteger == 2) {
    return PAPER;
  } else {
    return STONE;
  }
};

// including emoji in the options' string variables names will not work as the user will have to input the choice with emoji too
// including emoji in the output message will not work too. For eg under winning conditions, the computer may choose paper or stone or scissors, where each choice has a different emoji
var getEmoji = function (choice) {
  if (choice == SCISSORS || choice == REVERSEDSCISSORS) {
    return "✂️";
  } else if (choice == PAPER || choice == REVERSEDPAPER) {
    return "🗒";
  } else if (choice == STONE || choice == REVERSEDSTONE) {
    return "🪨";
  }
};

var playNormalSps = function (playerChoice) {
  var pcChoice = getPcChoice();
  var playerEmoji = getEmoji(playerChoice);
  var pcEmoji = getEmoji(pcChoice);
  // draw condition
  if (playerChoice == pcChoice) {
    gameCount += 1;
    drawCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  It's a draw!<br>
  You have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br>
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  } else if (
    // winning conditions
    (playerChoice == SCISSORS && pcChoice == PAPER) ||
    (playerChoice == PAPER && pcChoice == STONE) ||
    (playerChoice == STONE && pcChoice == SCISSORS)
  ) {
    gameCount += 1;
    playerWinCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You win! Woo hoo...<br>
  You have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br>
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  } else if (
    // losing conditions
    (playerChoice == SCISSORS && pcChoice == STONE) ||
    (playerChoice == PAPER && pcChoice == SCISSORS) ||
    (playerChoice == STONE && pcChoice == PAPER)
  ) {
    gameCount += 1;
    pcWinCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You lose! Bummer.<br>
  You have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br>
  Now you can type "scissors" "paper" or "stone" to play another round! `;
  }
  return myOutputValue;
};

var playReversedSps = function (playerChoice) {
  var pcChoice = getPcChoice();
  var playerEmoji = getEmoji(playerChoice);
  var pcEmoji = getEmoji(pcChoice);
  // draw condition
  if (
    (playerChoice == REVERSEDSCISSORS && pcChoice == SCISSORS) ||
    (playerChoice == REVERSEDPAPER && pcChoice == PAPER) ||
    (playerChoice == REVERSEDSTONE && pcChoice == STONE)
  ) {
    gameCount += 1;
    drawCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  It's a draw!<br>
  You have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br>
  Now you can type "reversed scissors" "reversed paper" or "reversed stone" to play another round! `;
  } else if (
    // winning conditions
    (playerChoice == REVERSEDSCISSORS && pcChoice == STONE) ||
    (playerChoice == REVERSEDPAPER && pcChoice == SCISSORS) ||
    (playerChoice == REVERSEDSTONE && pcChoice == PAPER)
  ) {
    gameCount += 1;
    playerWinCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You win! Woo hoo...<br>
  You have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br>
  Now you can type "reversed scissors" "reversed paper" or "reversed stone" to play another round! `;
  } else if (
    // losing conditions
    (playerChoice == REVERSEDSCISSORS && pcChoice == PAPER) ||
    (playerChoice == REVERSEDPAPER && pcChoice == STONE) ||
    (playerChoice == REVERSEDSTONE && pcChoice == SCISSORS)
  ) {
    gameCount += 1;
    pcWinCount += 1;
    myOutputValue = `The computer chose ${pcChoice} ${pcEmoji}. <br>
  You chose ${playerChoice} ${playerEmoji}.<br>
  You lose! Bummer.<br>
  You have won ${playerWinCount} rounds and have a draw of ${drawCount} rounds out of the ${gameCount} rounds played. <br>
  Now you can type "reversed scissors" "reversed paper" or "reversed stone" to play another round! `;
  }
  return myOutputValue;
};

var playWordGuessing = function (input) {
  // Set a default value for myOutputValue
  myOutputValue = "hello world";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  }
  // return myOutputValue as output
  return myOutputValue;
};

var main = function (input) {
  // if the username is not set
  if (!userName) {
    //prompt the user for username
    if (!input) {
      return (myOutputValue = "Please enter your username.");
    }
    // set the username and prompt the user for game mode
    else {
      userName = input;
      return (myOutputValue = `Hi, ${userName}. Please choose a game mode: normal or reverse?`);
    }
  }
  // the codes below will only run if user has typed the username
  // if game mode is still not set
  if (!gameMode) {
    // prompt the user for game mode
    if (!input) {
      return (myOutputValue = `You have to enter either normal or reverse to continue.`);
    }
    // set the game mode
    else {
      gameMode = input;
    }
  }
  // the codes below will only run if user has typed the username and chosen the mode
  // reassign input to represent player's choice
  var playerChoice = input;
  if (gameMode == "normal") {
    if (
      playerChoice == SCISSORS ||
      playerChoice == PAPER ||
      playerChoice == STONE
    ) {
      myOutputValue = playNormalSps(playerChoice);
    } else {
      myOutputValue = `There are only 3 input options: please enter either "scissors", "paper", "stone" for <b> normal </b> mode.`;
    }
  } else if (gameMode == "reverse") {
    if (
      playerChoice == REVERSEDSCISSORS ||
      playerChoice == REVERSEDPAPER ||
      playerChoice == REVERSEDSTONE
    ) {
      myOutputValue = playReversedSps(playerChoice);
    } else {
      myOutputValue = `There are only 3 input options: please enter either "reversed scissors", "reversed paper", "reversed stone" for <b> reverse </b> mode.`;
    }
  } else if (gameMode == "word") {
    myOutputValue = playWordGuessing(playerChoice);
  }
  return myOutputValue;
};
