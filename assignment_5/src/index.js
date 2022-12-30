function changeBackgroundColor(width) {
    if (width >= 1200) {
        document.body.style.backgroundColor = "#f39c12";
    }
    else if (width < 1200 && width > 800) {
        document.body.style.backgroundColor = "#9b59b6";
    }
    else {
        document.body.style.backgroundColor = "#3498db";
    }
}

changeBackgroundColor(window.innerWidth);

window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;
    changeBackgroundColor(windowWidth);
});  