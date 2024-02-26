const cat_walking = document.querySelector('.cat-walking')

const jump = () => {
    cat_walking.classList.add('jump'); 

    setTimeout(() => {

        cat_walking.classList.remove('jump'); // para que o jump possa ser acionado diversas vezes

    }, 700);

}

document.addEventListener('keydown', jump); 