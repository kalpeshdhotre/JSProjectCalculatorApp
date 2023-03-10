let userKeyPressed = document.querySelectorAll(`.btn`);
let btnResult = document.querySelector(".btnResult");
let btnCancel = document.querySelector(".btnCancel");

let stringCaptured = "";
let result;

let keyInputSet = [`.`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`, `Escape`, `Enter`, `/`, `*`, `-`, `+`, `Backspace`];

userKeyPressed.forEach((button) => {
   button.addEventListener(`click`, (event) => capture(button.innerHTML));
});

document.addEventListener(`keydown`, (event) => {
   console.log(`Key is : ${event.key}`);

   if (keyInputSet.includes(event.key)) {
      if (event.key == "Escape") {
         clearScreen();
         return;
      } else if (event.key == "Enter") {
         showResult();
         return;
      } else if (event.key == "Backspace") {
         stringCaptured = stringCaptured.substring(0, stringCaptured.length - 1);
         document.querySelector(`.screen`).value = stringCaptured;
         return;
      }
      capture(event.key);
   } else {
      console.log(`non number keys pressed`);
   }
});

btnResult.addEventListener(`click`, () => showResult());

btnCancel.addEventListener(`click`, () => clearScreen());

function capture(button) {
   console.log(`${button}`);
   
   // Below IF checks checks double entry of operator like /,*,-,+
   if ([`/`, `*`, `-`, `+`].includes(button) && [`/`, `*`, `-`, `+`].includes(stringCaptured.substring(stringCaptured.length - 1))) {
      console.log(`change of operator required`);
      stringCaptured = stringCaptured.substring(0, stringCaptured.length - 1);

   }
   stringCaptured += button;
   document.querySelector(`.screen`).value = stringCaptured;
}

function showResult() {
   result = eval(stringCaptured);
   document.querySelector(`.screen`).value = eval(stringCaptured);
   console.log(result);
   stringCaptured = result;
}

function clearScreen() {
   document.querySelector(`.screen`).value = "";
   result = 0;
   stringCaptured = "";
}
