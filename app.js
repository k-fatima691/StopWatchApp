var min = 0;
var sec = 0;
var msec = 0;
//getting elements by id
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
var msecHeading = document.getElementById('msec')
var interval;
//function
function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0
    } else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}
//start function
function start() {
    interval = setInterval(timer, 10)
    document.getElementById("startBtn").disabled = true
    document.getElementById("stopBtn").disabled = false
    document.getElementById("resetBtn").disabled = false
}
//stop function
function stop(){
    clearInterval(interval)
    document.getElementById("startBtn").disabled = false
    document.getElementById("stopBtn").disabled = true
    document.getElementById("resetBtn").disabled = false
}
//reset function
function reset(){
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
    document.getElementById("startBtn").disabled = false
    document.getElementById("stopBtn").disabled = false
    document.getElementById("resetBtn").disabled = true
}



































