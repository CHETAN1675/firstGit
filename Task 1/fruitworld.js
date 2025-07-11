// Write your code below:
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit basket";
mainHeading.style.color = "orange";

const header = document.getElementById("header");
header.style.backgroundColor = "green";
header.style.borderBottom = "3px solid orange";

const basketheading = document.getElementById("basket-heading");
basketheading.style.color = "green"

const thanks = document.getElementById("thanks");
thanks.innerHTML = '<p>Please visit us again</p>'

const fruit = document.getElementsByClassName("fruit");
fruit[2].style.backgroundColor = 'yellow'

for (let i = 0; i < fruit.length; i++){
    fruit[i].style.fontWeight = "bold";
}