const cursor = document.querySelectorAll('.cursor');
const links = document.querySelectorAll('.link');

window.addEventListener('mousemove', (e) => {

    let x = e.pageX;
    let y = e.pageY;

    cursor.forEach(function (el) {
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        // cursor.style.opacity = 1;

        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                document.body.style.cursor = 'none';
                el.classList.add('hover');
                // hover.style.cursor = 'none';
            });
            link.addEventListener('mouseleave', () => {
                document.body.style.cursor = 'default';
                el.classList.remove('hover');
                // hover.style.cursor = 'pointer'
            });
        });
    });

});