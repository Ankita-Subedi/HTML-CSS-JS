const endDate = "31 August 2024 02:22 PM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if(diff<0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);  //days
    inputs[1].value = Math.floor(diff / 3600) % 24;  //hour
    inputs[2].value = Math.floor(diff / 60) % 60; //minutes
    inputs[3].value = Math.floor(diff) % 60;  //sec
};
clock();

setInterval(
    () => {
        clock();
    }, 1000
)