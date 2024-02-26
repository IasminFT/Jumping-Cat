const cat_walking = document.querySelector('.cat-walking')
const pipe = document.querySelector('.pipe')

const jump = () => {
    cat_walking.classList.add('jump'); 

    setTimeout(() => {
        cat_walking.classList.remove('jump'); 
        // para que o jump possa ser acionado diversas vezes
    }, 700);

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const catPosition = +window.getComputedStyle(cat_walking).bottom.replace('px', '');

    console.log(catPosition);
    
    if(pipePosition <= 145 && pipePosition > 0 && catPosition < 30){
        pipe.style.animation = 'none';
        // ao encostar pipe e cat, a animação do pipe para
        pipe.style.left = `${pipePosition}px`;
        // manter pipe no local onde ele estava ao encostar em cat


    }



},10);

document.addEventListener('keydown', jump); 