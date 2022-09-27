const mario = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe-gamer');
const clouds = document.querySelector('.clouds-gamer');

const jump = () =>{
      mario.classList.add('jump-mario');

      setTimeout(() =>{
            mario.classList.remove('jump-mario');
      }, 500)
};

const loopGamer = setInterval(() =>{
      const pipePosition = pipe.offsetLeft;
      const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace('px', '');

      if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;
      
      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src="../imagem/mario-game-over.png";
      mario.style.width = '75px';
      mario.style.marginLeft = '45px';

      clearInterval(loopGamer);

      }
}, 10);

document. addEventListener('keydown', jump)