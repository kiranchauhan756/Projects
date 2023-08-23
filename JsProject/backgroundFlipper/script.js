const change = function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = "#" + randomColor;
  document.querySelector(".h1").textContent = `Current color:  ${randomColor}`;
};

document.querySelector(".btn").addEventListener("click", change);
