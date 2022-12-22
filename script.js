let userKeyPressed = document.querySelectorAll(`.btn`);
let stringCaptured = "";

userKeyPressed.forEach((button) => {
    button.addEventListener(`click`, () => {
        console.log(`${button.innerHTML}`);
        console.log("Hello");
        stringCaptured += button.innerHTML;
        document.querySelector(`.screen`).value = stringCaptured;
    });
});

// userKeyPressed.addEventListener(`click`, () => {

//      console.log(`${userKeyPressed.innerHTML}`);
//     console.log("Hello");

// });
