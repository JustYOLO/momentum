html = document.querySelector("html");
const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
html.style.background = `no-repeat center / auto 110% url("background/${chosenImage}")`;
