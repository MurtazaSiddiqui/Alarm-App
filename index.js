console.log('this is alarm app')
// Get references to DOM elements
const alarmSubmit = document.getElementById('alarmSubmit');
const alarmInput = document.getElementById('alarmInput');
var clock = document.getElementById('clock')
var alertMsg = document.getElementById('alertMsg')
var alertInner = document.getElementById('alert-inner')
var pauseAlarm = document.getElementById('pauseAlarm')
pauseAlarm.disabled = true
alarmSubmit.addEventListener('click', setAlarm);


function updateClock(){   
    let time = new Date();                      
    let currentTime = time.toLocaleTimeString('en-in'); 
    clock.innerText = currentTime                
    }
    setInterval(() => {updateClock()}, 1000);   

    updateClock()

// Create an audio object for the alarm tone
const audio = new Audio('alarm_classic.mp3');

// Function to play the alarm sound
function ringBell() {
    audio.play();
}
function pauseAlarm (e){
    e.preventDefault();
    audio.pause();
    console.log('alarm is pause')
}
// Function to set the alarm
function setAlarm(e) {
    e.preventDefault();

    const alarmTime = alarmInput.value;
    if (!alarmTime) {
        alert('Please set a valid alarm time.');
        return;
    }

    console.log(`Alarm set for ${alarmTime}`);

    
    // Calculate the time difference
    const alarmDate = new Date(alarmTime);
    const currentDate = new Date();
    const timeToAlarm = alarmDate - currentDate;
    alertInner.innerText = alarmTime;
    alertMsg.style.display='block'
    pauseAlarm.disabled = false;
    
    if (timeToAlarm < 0) {
        console.log('The set time is in the past. Please set a future time.');
        return;
    }

    // Set a timeout to trigger the alarm
    setTimeout(() => {
        console.log('Alarm is ringing!');
        ringBell();
    }, timeToAlarm);
}

// Attach the event listener to the alarm submit button






