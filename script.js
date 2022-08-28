let hourss = document.querySelector(".hour");
let minutess = document.querySelector(".minute");
let times = document.querySelector(".time");

let hourTemp;
let minTemp;


let activeAlarm = false;
let sound = new Audio("alarm.mp3.wav");
sound.loop = true;

function hours() {

    for (i = 1; i <= 12; i++) {
        let myHour = document.querySelector('.hour');
        let option = document.createElement('option');
        option.innerText = i;
        myHour.appendChild(option);
    }
}
hours();

function minutes() {

    for (i = 1; i <= 59; i++) {
        let myMin = document.querySelector('.minute');
        let option = document.createElement('option');
        option.innerText = i;
        myMin.appendChild(option);
    }
}
minutes();


let button = document.querySelector('.btn');
button.addEventListener("click", function () {
    if(activeAlarm){
        this.textContent = "Set Alarm";
        activeAlarm = false;
    }
    else{
        hourTemp=hourss.value;
        minTemp=minutess.value; 
        this.textContent = "Clear Alarm";
        activeAlarm = true;
    }
    
})



function Time() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');
   

    if (hr >= 12) {
        session.innerText = 'PM';
    }
     else {
        session.innerText = 'AM';
    }

    if (hr > 12) {
        hr = hr - 12;
    }
    
    if (hourTemp == hr && minTemp == min){
        
        sound.play();
    }else{
        sound.pause();
    }

    document.getElementById('hours').innerHTML = hr;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(Time, 10);




