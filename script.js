const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

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
    inputFieldEl.value = "";
};

//calculate result
function calculateResult(){
    //eval is a built in func that do the arethmetic equation
    inputFieldEl.value = eval(inputFieldEl.value);
};

//display the clicked num
function appendValue(buttonValue) {
    //+ to keep the previous clicked num..if = alone it going to remove the previous clicked num
    inputFieldEl.value += buttonValue
};
