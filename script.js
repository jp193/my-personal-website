const p1 = document.createElement("p");
p1.textContent = "Hi My name is Jamal Portericker. I am Currently studying software development and have learned a few things along the way. For example how to change to color of a page using javascript. Which is something i learned while finishing my software engineering prep assignments";

document.querySelector("header").appendChild(p1);

const redButton = document.getElementById('red')
const blueButton = document.getElementById('blue')
const pinkButton = document.getElementById('pink')
const purpleButton = document.getElementById('purple')


redButton.addEventListener('click', () => document.body.style.backgroundColor = 'red')
blueButton.addEventListener('click', () => document.body.style.backgroundColor = 'blue')
pinkButton.addEventListener('click', () => document.body.style.backgroundColor = 'pink')
purpleButton.addEventListener('click', () => document.body.style.backgroundColor = 'indigo')