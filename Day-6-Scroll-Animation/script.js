const boxes = document.querySelectorAll('.box'),
    contents = document.querySelectorAll('h2');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });

    contents.forEach((content, i) => {
        content.innerHTML = `Content ${i + 1}`;
    });
}