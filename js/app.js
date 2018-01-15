import { DigitalClock } from './classes/DigitalClock';

(function(){
  let myOption1 = {
    elements: [
      {
        hour: document.querySelector('.box1 .hour'),
        minute: document.querySelector('.box1 .minute'),
        second: document.querySelector('.box1 .second')
      }
    ]
  };

  let myOption2 = {
    elements: [
      {
        hour: document.querySelector('.box2 .hour'),
        minute: document.querySelector('.box2 .minute'),
        second: document.querySelector('.box2 .second')
      }
    ]
  };


  let myClock1 = new DigitalClock(myOption1);
  let myClock2 = new DigitalClock(myOption2);


  console.log('init app');
})(window);