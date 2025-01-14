function getAnswer(element){
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');

    if (answer.style.display === 'block'){
        answer.style.display = 'none';
        // answer.style.transition = '2s';
        icon.style.rotate = '90deg';
    } else {
        answer.style.display = 'block';
        // answer.style.transition = 'smooth';
        icon.style.rotate = '45deg';
    }
}