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
    monkButton.onmousedown = function () {
        monkButton.style.width = w.toString() + "px";
        monkButton.style.height = h.toString() + "px";
        monkButton.innerHTML = "🐒";
    }
    monkButton.onmouseup = function () {
        monkButton.innerHTML = "Click me to see an emoji of a monkey!";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function alternate() {
    while (true) {
        await sleep(175);
        if (document.getElementById("movingButton").style.backgroundColor == "blueviolet") {
            document.getElementById("movingButton").style.backgroundColor = "yellow";
        }
        else {
            document.getElementById("movingButton").style.backgroundColor = "blueviolet";
        }
    }
}

async function moveSideToSide() {
    while (true) {
        for (var i = 0; i < 50; i++) {
            document.getElementById("movingButton").style.position = "absolute";
            var xPos = parseInt(document.getElementById("movingButton").style.left);
            xPos += 10;
            document.getElementById("movingButton").style.left = xPos.toString() + "px";
            await sleep(50);
        }
        for (var i = 0; i < 50; i++) {
            document.getElementById("movingButton").style.position = "absolute";
            var yPos = parseInt(document.getElementById("movingButton").style.top);
            yPos += 10;
            document.getElementById("movingButton").style.top = yPos.toString() + "px";
            await sleep(50);
        }
        for (var i = 0; i < 50; i++) {
            document.getElementById("movingButton").style.position = "absolute";
            var xPos = parseInt(document.getElementById("movingButton").style.left);
            xPos -= 10;
            document.getElementById("movingButton").style.left = xPos.toString() + "px";
            await sleep(50);
        }
        for (var i = 0; i < 50; i++) {
            document.getElementById("movingButton").style.position = "absolute";
            var yPos = parseInt(document.getElementById("movingButton").style.top);
            yPos -= 10;
            document.getElementById("movingButton").style.top = yPos.toString() + "px";
            await sleep(50);
        }
    }
}

async function randomMotion() {
    var bttn = document.getElementById("random");
    var numMovements = 0;
    while (true) {
        await sleep(500);
        var xPos = Math.random() * 500;
        var yPos = Math.random() * 500;
        bttn.style.left = xPos.toString() + "px";
        bttn.style.top = yPos.toString() + "px";
        var pnl = document.getElementById("results panel");
        if (numMovements < 20) {
            pnl.innerHTML += "At " + xPos.toFixed(2) + ", " + yPos.toFixed(2) + "<br />";
        }
        else if (numMovements == 20){
            pnl.innerHTML += ".<br>.<br>."
        }
        bttn.hidden = false;
        numMovements++;
    }
}
