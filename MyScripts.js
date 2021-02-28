function twoColors() {
    var currentColor = document.getElementById("html_main").style.backgroundColor;
    if (currentColor == "tomato") {
        document.getElementById("html_main").style.backgroundColor = "deepskyblue";
    }
    else {
        document.getElementById("html_main").style.backgroundColor = "tomato";
    }
}

function randomColors() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("html_main").style.backgroundColor = "#" + randomColor;
}

function monkeyBehavior() {
    var monkButton = document.getElementById("monkeyButton");
    var w = monkButton.offsetWidth;
    var h = monkButton.offsetHeight;
    console.log("H & W worked");
    console.log(w);
    console.log(h);
    monkButton.onmousedown = function () {
        monkButton.style.width = w.toString() + "px";
        monkButton.style.height = h.toString() + "px";
        monkButton.innerHTML = "🐒";
        console.log("This worked");
    }
    monkButton.onmouseup = function () {
        monkButton.innerHTML = "Click me to see an emoji of a monkey!";
        console.log("This worked");
    }
}