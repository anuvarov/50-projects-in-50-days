const progres = document.getElementById('progress'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    circles = document.querySelectorAll('.circle');

let curAc = 1;

next.addEventListener('click', () => {
    curAc++;

    if (curAc > circles.length) {
        curAc = circles.length;
    }

    update();
});

prev.addEventListener('click', () => {
    curAc--;

    if (curAc < 1) {
        curAc = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, i) => {
        if (i < curAc) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progres.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (curAc === 1) {
        prev.disabled = true;
    } else if (curAc === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}