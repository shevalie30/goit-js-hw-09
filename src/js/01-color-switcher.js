function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
    bodyEl: document.querySelector('body'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
}

refs.btnStart.addEventListener('click', onClickStartColor);
refs.btnStop.addEventListener('click', onClickStopColor);

let timerId = null;

function onClickStartColor() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    timerId = setInterval(() => {
        colorRandom = getRandomHexColor();
        refs.bodyEl.style.background = colorRandom;
    }, 1000);
}


function onClickStopColor() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    clearInterval(timerId);
}
