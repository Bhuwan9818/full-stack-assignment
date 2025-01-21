function getAnswer(element){
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');

    if (answer.style.display === 'block'){
        answer.style.transition = 'all 0.5s ease';
        answer.style.height = '0px';
        answer.style.opacity = '0';
        setTimeout(() => {
            answer.style.display = 'none';
        }, 300);
        // icon.style.trasform = 'rotate(0deg)';
        icon.style.rotate = '90deg';
    } else {
        answer.style.display = 'block';
        answer.style.height = 'auto';
        answer.style.opacity = '1';
        answer.style.transition = 'all 0.5s ease';
        // icon.style.trasform = 'rotate(145deg)';
        icon.style.rotate = '45deg';
    }
}