const buttonsEl = document.querySelectorAll("button");

// will add eventListener for each btn
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    console.log(buttonsEl[i].textContent);
  });
}


