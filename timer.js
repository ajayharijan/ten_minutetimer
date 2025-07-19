const straightminutes = 10;
let time = straightminutes * 60;

setInterval(updateCountdown, 1000)

const trigger = document.getElementById('countdown');
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    trigger.innerHTML = `${minutes}:${seconds}`
    time--;
}
