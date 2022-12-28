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
*/
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);