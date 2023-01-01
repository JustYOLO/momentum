/*const h1 = document.querySelector(".hello h1");
const player = {
    name: "nico",
    points: 10,
    available: true,
};

console.log(player['name'])

function handleTitleClick() {
    h1.style.color = "blue";
}
function handleMouseEnter() {
    h1.innerText = "Mouse is here!"
}
function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS NO WIFI!!!!!");
}
function handleWindowOnline() {
    alert("Back to Online!")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
////////////////////////////////////////////////////////
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden"; // if element have "hidden", it hide by css=> display: none;
const USERNAME_KEY = "userName"; // the key for getting username in localStorage

const savedUserName = localStorage.getItem(USERNAME_KEY); // get userName from localStorage

function onLoginSubmit(event) { // process login process
    event.preventDefault(); // prevent from default event (in this case, default operation is go to '?userName')
    loginForm.classList.add(HIDDEN_CLASSNAME); // make loginForm invisable

    const userName = loginInput.value; // get username from html input
    localStorage.setItem(USERNAME_KEY, userName); // save the username in localStorage
    paintGreetings(userName); // paint greetings using username
}
function paintGreetings(userName) { // paint greetings
    greeting.innerText = `Hello ${userName}`; // add text in h1 greeting
    greeting.classList.remove(HIDDEN_CLASSNAME); // make h1 greeting element visable in html
}

if(savedUserName === null) { // if it's true, the localStorage don't have userName data
    loginForm.classList.remove(HIDDEN_CLASSNAME); // make loginForm visable
    loginForm.addEventListener("submit", onLoginSubmit); // get userName from html user input 
} else { // if it's false, the localStorage have username
    paintGreetings(savedUserName); // display username
}
