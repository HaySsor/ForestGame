import './style.css';
import { Howl } from 'howler';
const images = {
  treasure: '💰',
  leafs: '🍃',
};

const board = document.querySelectorAll('.tree');
const counter = document.querySelector('.counter span')
const score = document.querySelector('.score ul')
let failtest = 0
let win = 1


const hideTreasure = () =>
  [...board][Math.floor(Math.random() * [...board].length)].classList.add(
    'treasure'
  );


const sound = {
  win: new Howl({
    src: [
      'https://www.myinstants.com/media/sounds/kids-saying-yay-sound-effect_2.mp3',
    ],
  }),
};
const winAlert = () =>
  window.confirm('Brawooo wygrałeś zagramy jeszcze raz ?')
    ? clear() 
    : null;

function findThree() {
  board.forEach((three) => {
    three.addEventListener('mouseenter', (e) => {
      if (e.target.matches('.treasure')) {
        three.textContent = images.treasure;
        sound.win.play();
        setTimeout(winAlert,500)
        saveScore()
      } else {
        three.textContent = images.leafs;
        counter.textContent = failtest
        failtest ++
      }
    });
  });
}

function saveScore(){
   const result = document.createElement( 'li')
   result.classList.add('score')
  result.textContent =`Twoje ${win} podejscie to wynik ${counter.textContent}`
  score.appendChild(result)
  win++
}


function clear(){
  board.forEach(three=>{
    three.textContent ='🌲'
    three.classList.remove('treasure')
  })
  hideTreasure();
  failtest = 0
  counter.textContent = '...'
}


findThree();
