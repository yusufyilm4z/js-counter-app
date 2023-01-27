const decreaseButton = document.querySelector(".decrease-button");
const increaseButton = document.querySelector(".increase-button");
const number = document.querySelector(".number");
let initialNumber = 0;

decreaseButton.addEventListener('click' , () => {
    if (initialNumber !== 0){
        initialNumber--;
        number.innerHTML = `${initialNumber}`;
    }
})

increaseButton.addEventListener('click' , () => {
    initialNumber++;
    number.innerHTML = `${initialNumber}`;
})