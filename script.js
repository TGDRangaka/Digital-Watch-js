let hoursElement = $("#hours");
let minutesElement = $("#minutes");
let secondsElement = $("#seconds");
let watchHeight = $(".watch").eq(0).height();

const addNumbers = () => {
    for(let i = 1; i < 24; i++){
        let html = hoursElement.html();
        hoursElement.html(html + `<h1>${i}h</h1>`)
    }
    for(let i = 1; i < 60; i++){
        let html = minutesElement.html();
        minutesElement.html(html + `<h1>${i}m</h1>`)
    }
    for(let i = 1; i < 60; i++){
        let html = secondsElement.html();
        secondsElement.html(html + `<h1>${i}s</h1>`)
    }
}

let d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();

const setTime = () => {
    d = new Date();
    hour = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    watchHeight = $(".watch").eq(0).height();
    hoursElement.css("transform", `translateY(-${hour * watchHeight}px)`);
    minutesElement.css("transform", `translateY(-${min * watchHeight}px)`);
    secondsElement.css("transform", `translateY(-${sec * watchHeight}px)`);
}

addNumbers();
setTime();

setInterval(setTime, 1000);