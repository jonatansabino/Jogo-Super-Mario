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
      pipe.estilo.animation = 'none';
      pipe.estilo.left = `${pipePosition}px`;
      mario.estilo.animation = 'none';
      mario.estilo.bottom = `${marioPosition}px`;
},)

document. addEventListener('keydown', jump)