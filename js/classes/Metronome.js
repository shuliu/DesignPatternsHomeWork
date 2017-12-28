
import { Clock } from './Clock';
import * as MY_CONST from './consts';

/**
 * 補0  helper
 * @param {string|number} str 需要補0字串
 * @param {number} len 長度
 */
const padLeft = (str, len) => {
  str = '' + str;
  return str.length >= len ? str : new Array(len - str.length + 1).join("0") + str;
}

/**
 * 傳入參數
 */
const defaultOptions = {
  /**
   * @param {object} elements 要監聽回傳的元素 Group, 裡面包 json
   * */
  elements: [
    // {
    //   hour: document.querySelector('.hour'),
    //   minute: document.querySelector('.minute'),
    //   second: document.querySelector('.second')
    // }, ...
  ]
};

/**
 * class Metronome
 */
export class Metronome {

  /**
   * constructor
   * @param {json} myOptions
   */
  constructor(myOptions = {}) {
    console.log('new a Metronome');

    /**
     * 選項
     * TODO: 尚未做 myOptions 內多餘選項的過濾
     */
    this.options = Object.assign(defaultOptions, myOptions);

    this.myClock = new Clock();

    this.initial();
  }

  /**
   * setEventListenerGroup
   * 加入監聽 (群組)
   * @param {JSON} groupElement
   */
  setEventListenerGroup(groupElement) {
    console.log('setEventListenerGroup');

    setInterval(() => {
      this.renderHour(groupElement.hour, this.myClock.hour);
      this.renderMinute(groupElement.minute, this.myClock.minute);
      this.renderSecond(groupElement.second, this.myClock.second);
    }, MY_CONST.INTERVAL_LOOP);

  }

  /**
   * render Hour Element
   * @param {NodeList} Element
   * @param {string} Hour
   */
  renderHour(Element, Hour) {
    if( Hour === undefined ) { Hour = '00'; }
    Element.innerText = padLeft(Hour, 2);
  }

  /**
   * render Minute Element
   * @param {NodeList} Element
   * @param {string} Minute
   */
  renderMinute(Element, Minute) {
    if( Minute === undefined ) { Minute = '00'; }
    Element.innerText = padLeft(Minute, 2);
  }

  /**
   * render Second Element
   * @param {NodeList} Element
   * @param {string} Second
   */
  renderSecond(Element, Second) {
    if( Second === undefined ) { Second = '00'; }
    Element.innerText = padLeft(Second, 2);
  }

  /**
   * initial
   * private method
   */
  initial() {
    console.log('initial');

    this.options.elements.forEach(groupElement => {
      this.setEventListenerGroup(groupElement);
    });
  }
}