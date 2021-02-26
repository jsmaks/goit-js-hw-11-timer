const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}
const refsResult = document.querySelector('.result');
const timer = {
    intervalId: null,
    start() {
        const targetTime = Date.now() + 990672000;
        this.intervalId = setInterval(() => {
            const startTime = Date.now();
            const deltaTime = targetTime - startTime;
            updateClockface(deltaTime);
            if (0 >= deltaTime) {
                stopTimer();
            }
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        updateClockface(0);
        console.log('Время вышло');
    }
}
function stopTimer() {
    timer.stop();
}
function updateClockface(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}
function pad(value) {
    return String(value).padStart(2, '0');
}

timer.start();