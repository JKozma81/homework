const btns = document.querySelectorAll('button');

const body = document.querySelector('body');

const bgColor = {
    red: {
        value: 0,
        isChanging: false,
        direction: 0
    },
    green: {
        value: 0,
        isChanging: false,
        direction: 0
    },
    blue: {
        value: 0,
        isChanging: false,
        direction: 0
    },
    timeValue: 10
}

function changeColor(color, direction) {
    switch (color) {
        case 'red':
            body.style.backgroundColor = `rgb(${bgColor.red.value = bgColor.red.value + 1 * direction}, ${bgColor.green.value}, ${bgColor.blue.value})`;
            if (bgColor.red.value > 255 && bgColor.red.isChanging) bgColor.red.value = 255;
            if (bgColor.red.value < 0 && bgColor.red.isChanging) bgColor.red.value = 0;
            break;
        case 'green':
            body.style.backgroundColor = `rgb(${bgColor.red.value}, ${bgColor.green.value = bgColor.green.value + 1 * direction}, ${bgColor.blue.value})`;
            if (bgColor.green.value > 255 && bgColor.green.isChanging) bgColor.green.value = 255;
            if (bgColor.green.value < 0 && bgColor.green.isChanging) bgColor.green.value = 0;
            break;
        case 'blue':
            body.style.backgroundColor = `rgb(${bgColor.red.value}, ${bgColor.green.value}, ${bgColor.blue.value = bgColor.blue.value + 1 * direction})`;
            if (bgColor.blue.value > 255 && bgColor.blue.isChanging) bgColor.blue.value = 255;
            if (bgColor.blue.value < 0 && bgColor.blue.isChanging) bgColor.blue.value = 0;
            break;
    }
}

function handleClick(event) {
    if (!bgColor[event.target.dataset.color].isChanging && !bgColor[event.target.dataset.color].direction) {
        bgColor[event.target.dataset.color].isChanging = true;
        bgColor[event.target.dataset.color].direction = +event.target.dataset.direction;
        setInterval(() => {
            changeColor(event.target.dataset.color, bgColor[event.target.dataset.color].direction);
        }, bgColor.timeValue);
    } else {
        bgColor[event.target.dataset.color].direction = +event.target.dataset.direction;
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', handleClick);
})