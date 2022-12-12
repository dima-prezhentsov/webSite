const startTime = new Date();


function ready() {
    const loadInfo = document.getElementById('loadInfo');
    const endTime = new Date();

    const dif = (endTime.getTime() - startTime.getTime()) / 1000;

    loadInfo.innerHTML += `Page load in ${dif} sec`;

    if (document.location.href.includes('/index.html')) {
        document.getElementById('home-page-link').style.textDecoration += "underline";
    }

    if (document.location.href.includes('/review.html')) {
        document.getElementById('review-page-link').style.textDecoration += "underline";
    }

}

document.addEventListener("DOMContentLoaded", ready);