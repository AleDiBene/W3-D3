const takeText = function () {
  const myForm = document.querySelector("form");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputText = document.getElementById("inputText");
    const inputValue = inputText.value;
    console.log(inputValue);

    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = inputValue;
    const button = document.createElement("button");
    button.innerText = "Elimina";
    button.classList.add("button");
    button.addEventListener("click", deleteCard);
    ul.appendChild(li);
    li.appendChild(button);
    inputText.value = "";
    li.addEventListener("click", () => {
      li.classList.add("barrato");
    });
  });
};

const deleteCard = function (e) {
  const pressedButton = e.target;
  const cardToRemove = pressedButton.parentElement;
  cardToRemove.remove();
};

takeText();
