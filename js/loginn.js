let id = "admin@gmail.com";
let pass = "admin";

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (id === email && pass === password) {
        setTimeout(function () {
            window.location.href = 'Homepage.html'
        }, 1);
    } else {
        alert("wrong cridentials");
        return false;
    };
}

function LogOut() {
    setTimeout(function () {
        window.location.href = 'index.html'
    }, 1);
}

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // minutes = "0"; seconds = "0";
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

function Jump() {
    setTimeout(function () {
        window.location.href = 'play.html'
    }, 1);
}