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

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const catPosition = +window.getComputedStyle(cat_walking).bottom.replace('px', '');

    console.log(catPosition);
    
    if(pipePosition <= 145 && pipePosition > 0 && catPosition < 30){
        
        pipe.style.animation = 'none';
        // ao encostar pipe e cat, a animação do pipe para
        pipe.style.left = `${pipePosition}px`;
        // manter pipe no local onde ele estava ao encostar em cat
        
        cat_walking.style.animation = 'none';
        // ao encostar pipe e cat, a animação do cat para
        cat_walking.style.bottom = `${catPosition}px`;
        // manter cat no local onde ele estava ao encostar em pipe

        //adicionando e estilizando imagem de gameover
        cat_walking.src = './files/cat-gameover-200px.png';
        cat_walking.style.marginBottom = '-30px'; 
        cat_walking.style.marginLeft = '-15px'; 

        clearInterval(loop); // quando acaba o jogo, o loop para de rodar
    }  

},10);  

document.addEventListener('keydown', jump); 