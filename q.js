var counter = 0;
var time;
var n;
var speed;

function p() {
    var s = Math.round(Math.random() * 5) + 1;
    document.getElementById(s).style.top = "0px";
    setTimeout(() => {
        document.getElementById(s).style.top = "150px";
    }, speed);
}



function t() {
    if (time == -1 && counter != 14) {
        clearInterval(n);
        clearInterval(timer);
        for (let i = 1; i <= 6; i++)
            document.getElementById(i).style.top = "150px";
        document.getElementById('score').textContent = "loser";
        document.getElementById('res').play();
        time = 0;
    }
    else {
        document.getElementById('time').textContent = time;
        time--;
    }
}
var timer;

function play() {
    var l = document.q.level.value;
    if (l == 'd') {
        speed = 500;
        time = 30;
        timer = setInterval(t, 1000);
        n = setInterval(p, 400);
    }
    else if (l == 'm') {
        speed = 600;
        time = 45;
        timer = setInterval(t, 1000);
        n = setInterval(p, 500);
    }
    else if (l == 'e') {
        speed = 800;
        time = 60;
        timer = setInterval(t, 1000);
        n = setInterval(p, 700);
    }
    document.getElementById('score').textContent = 0;
    counter = 0;
}





function touch() {
    if (counter == 29) {
        clearInterval(n);
        clearInterval(timer);
        for (let i = 1; i <= 6; i++)
            document.getElementById(i).style.top = "150px";
        document.getElementById('score').textContent = "Congratulation";
        document.getElementById('win').play();


    }
    else {
        counter++;
        document.getElementById('tic').play();
        document.getElementById('score').textContent = counter;
    }
}