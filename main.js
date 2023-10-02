// Array Of Words
let words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];

// levels
let lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2
};

// default level
let defaultLevelName = "Easy";
let defaultLevelSeconds = lvls[defaultLevelName];

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// setting level name + seconds + score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// disable paste events
input.onpaste = function () {
  return false;
}

// start game
startButton.onclick = function () {
  this.remove();
  input.focus();
  genWords();
}

function genWords() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);
  theWord.innerHTML = randomWord;
  upcomingWords.innerHTML = '';
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.append(txt);
    upcomingWords.append(div);
  }
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        input.value = '';
        scoreGot.innerHTML++;
        if (words.length > 0) {
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = 'good';
          let spanText = document.createTextNode("Congratz");
          span.append(spanText);
          finishMessage.append(span);
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = 'bad';
        let spanText = document.createTextNode("Game Over");
        span.append(spanText);
        finishMessage.append(span);
      }
    }
  }, 1000);
}