
import { Metronome } from './classes/Metronome';

(function(){
  let myOption = {
    elements: document.querySelectorAll('.box')
  };
  let myMetronome = new Metronome(myOption);
  console.log('init app');
})();