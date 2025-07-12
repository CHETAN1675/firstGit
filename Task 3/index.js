// Write your code below:
// My Task 1 add h3 tag
//createElement
const subHeading = document.createElement('h3');
//createTextNOde
const subHeadingText = document.createTextNode('Buy high quality organic fruits online');

subHeading.style.fontStyle = "italic";

//appendChild
subHeading.appendChild(subHeadingText);



// insertBefore
const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(subHeading);
//create Para Tag task 3
//createElement
const para = document.createElement('p');
const paratext = document.createTextNode('Total fruits:4')

para.appendChild(paratext);

const divs2 = document.getElementsByTagName('div');
const secondDiv = divs2[1];
secondDiv.appendChild(para);
//task 4 set id on para tag
const fruits = document.querySelector('.fruits');
const basketHeading = document.getElementById('basket-Heading');

//setAttribute
para.id = 'fruits-total';