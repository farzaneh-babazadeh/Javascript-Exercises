const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countDownDate = new Date(2024 , 7 , 3 , 0, 0 , 0).getTime();
// Update countdown time
function updateCountdown() {
	const currentTime = new Date().getTime();
	const diff = countDownDate - currentTime;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	days.innerHTML = d;
	hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);