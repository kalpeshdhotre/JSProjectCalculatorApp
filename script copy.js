let userKeyPressed = document.querySelectorAll(`.btn`);
let stringCaptured = "";
let btnResult = document.querySelector(".btnResult");
let btnCancel = document.querySelector(".btnCancel");

let result;
userKeyPressed.forEach((button) => {
    button.addEventListener(`click`, () => {
        console.log(`${button.innerHTML}`);
        stringCaptured += button.innerHTML;
        document.querySelector(`.screen`).value = stringCaptured;
    });
});

btnResult.addEventListener(`click`, () => {
    result = eval(stringCaptured);
    document.querySelector(`.screen`).value = eval(stringCaptured);
    console.log(result);
    stringCaptured = result;
});

btnCancel.addEventListener(`click`, () => {
    document.querySelector(`.screen`).value = "";
    result = 0;
    stringCaptured = "";
});

// userKeyPressed.addEventListener(`click`, () => {

//      console.log(`${userKeyPressed.innerHTML}`);
//     console.log("Hello");

// });
