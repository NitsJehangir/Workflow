'use strict';

//prototypical inheritence (Closure Property).
//"This" property is the current class and not the global object like windows.
function StopWatch() {
    let startClock = false;
    let stopClock = true;
    let startTime = 0;
    let endTime = 0;

    this.start = function startClockWatch() {
        if (startClock) throw new Error('Stop watch already running.');
        startClock = true;
        stopClock = false;
        if (startTime === 0) { startTime = endTime = Date.now() };
        console.log("Stop watch started.");
    }

    this.stop = function stopClockWatch() {
        if (stopClock) throw new Error('Stop watch already stopped.');
        startClock = false;
        stopClock = true;
        endTime = Date.now();
        console.log("Stop watch stopped.")
    }

    this.reset = function resetWatch() {
        startTime = 0;
        endTime = 0;
    }

    this.duration = function getDuration() {

        if (startClock) endTime = Date.now();

        return Math.round((endTime - startTime) / 1000) + ' s';
    }
}

//dynamic deletion

function Shape(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log(radius);
    }
}


//dynamic binding
Shape.prototype.print = function () {
    console.log("Shape form is not defined.")
}