import { Metronome } from './classes/Metronome';

(function(){
  let myOption = {
    elements: [
      {
        hour: document.querySelector('.box1 .hour'),
        minute: document.querySelector('.box1 .minute'),
        second: document.querySelector('.box1 .second')
      },
      {
        hour: document.querySelector('.box2 .hour'),
        minute: document.querySelector('.box2 .minute'),
        second: document.querySelector('.box2 .second')
      }
  ]
  };
  let myMetronome = new Metronome(myOption);
  console.log('init app');
})(window);