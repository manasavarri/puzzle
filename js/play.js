window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
var final;

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    final = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(final);
            let flag = confirm("wanna retry!!!");
            if (flag) {
                window.location.href = "play.html";
            } else
                window.location.href = "HomePage.html";
        }
    }, 1000);
}

function txt1() {
    let data = "Seek high and low, near and far,A letter bold, it's like a star,In the sky or on the ground, It's the 16th, it can always be found.";
    document.getElementById('para').innerHTML = data;
}

function txt2() {
    let data = "Start your search, it's just begun, The first and foremost, the only one, A single digit, simple and clear, Look around, it may appear.";
    document.getElementById('para').innerHTML = data;
}

function txt3() {
    let data = "Look up high and down so low, In the middle or to the side, it may show, It's tall and straight, standing strong, In words and signs, it can belong.";
    document.getElementById('para').innerHTML = data;
}

function txt4() {
    let data = "A lucky number, shining so bright,In a game of dice, it's a fortunate throw, Find it hiding, where you go.";
    document.getElementById('para').innerHTML = data;
}

function txt5() {
    let data = "Look for peaks, majestic and tall, A letter bold, standing above all, With curves and angles, strong and wide, In words and shapes, it can't hide.";
    document.getElementById('para').innerHTML = data;
}

function GetChar() {
    var textboxes = document.querySelectorAll('input[type="text"]');
    let result = "";
    let ans = "P1T7M";
    for (var i = 0; i < textboxes.length; i++) {
        result += textboxes[i].value;
    }
    console.log(typeof (result));

    if (result.toLowerCase() == ans.toLowerCase()) {
        timeCount();
        clearInterval(final);
        alert("win!!!!!!!");
        console.log(result);
        window.location.href = "final.html";
    } else alert("wrong answers check hints");

}

function KeyOpen() {
    var textboxes = document.querySelectorAll('input[type="text"]');
    let flag = 1;
    for (var j = 0; j < textboxes.length; j++) {
        if (textboxes[j].value == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        console.log("going to submit values");
        GetChar();
    }
}

// *****************************************timer function here below************************************************
const startTime = new Date();

function timeCount() {
    const endTime = new Date();
    const diffInMs = endTime - startTime;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInSeconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
    let finaltime = diffInMinutes + "m:" + diffInSeconds + "s";
    sessionStorage.setItem("time", finaltime);
    console.log(finaltime);
    // console.log(`Elapsed time: ${diffInMinutes} minutes ${diffInSeconds} seconds`);
}