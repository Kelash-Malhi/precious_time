// ⚙️ SET YOUR TARGET DATE HERE (IMPORTANT)
let targetDate = new Date("2026-05-10T00:00:00").getTime();

let alarmPlayed = false;

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "00d 00h 00m 00s";

        if (!alarmPlayed) {
            document.getElementById("alarmSound").play();
            alarmPlayed = true;
        }
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days}d ${String(hours).padStart(2,'0')}h ${String(minutes).padStart(2,'0')}m ${String(seconds).padStart(2,'0')}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
