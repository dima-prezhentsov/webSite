const startTime = new Date();


function ready() {
    const loadInfo = document.getElementById('loadInfo');
    const endTime = new Date();

    const dif = (endTime.getTime() - startTime.getTime()) / 1000;

    loadInfo.innerHTML += `Page load in ${dif} sec`;

}

document.addEventListener("DOMContentLoaded", ready);