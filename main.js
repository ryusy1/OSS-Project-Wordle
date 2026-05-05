const answer = getAnswer();

const input = document.getElementById("input");
const button = document.getElementById("btn");

button.addEventListener("click", handleClick);

function handleClick() {
  const guess = input.value;

  if (!isValidWord(guess)) {
    showMessage("없는 단어");
    return;
  }

  const result = checkGuess(guess, answer);
  render(guess, result);

  input.value = "";
}