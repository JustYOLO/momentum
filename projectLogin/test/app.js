const img = document.querySelector("#picture"); // get image (id = picture)
const imgWidth = img.naturalWidth;
const imgHeight = img.naturalHeight;
// get image size

function handleMouseMove(event) { // move img element to mouse coordinate
    let x = event.clientX; 
    let y = event.clientY; // get mouse coordinate
    img.style.left = `${x - imgHeight/2}px`;
    img.style.top = `${y - imgWidth/2}px`; // move img to mouse coordinate. adjust with img size to centre. If you don't need centering, delete imgHeight/2 
}
function handleMouseOut() { // when the mouse leaves
    img.style.display = "none";
}
function handleMouseOver() { // when the mouse enters
    img.style.display = null;
}

document.addEventListener('mousemove', handleMouseMove);
window.addEventListener("mouseout", handleMouseOut);
window.addEventListener('mouseover', handleMouseOver);