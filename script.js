const buttonsEl = document.querySelectorAll("button");

// will add eventListener for each btn
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } 
    //else display the clicked num
    else {
      appendValue(buttonValue);
    }
  });
}

//clear result
function clearResult(){

};

//calculate result
function calculateResult(){

};

//display the clicked num
function appendValue() {};