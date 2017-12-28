
const defaultOptions = {
  /** @param {object} elements 要監聽回傳的元素 */
  elements: []
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

    this.initial();
  }

  /**
   * setEventListenerGroup
   * 加入監聽 (群組)
   * @param {JSON} groupElement
   */
  setEventListenerGroup(groupElement) {
    console.log('setEventListener');
    this.setEventListenerWithHour(groupElement.hour);
    this.setEventListenerWithMinute(groupElement.minute);
    this.setEventListenerWithSecond(groupElement.second);
  }

  /**
   * setEventListenerWithHour
   * 加入監聽 (Hour)
   * @param {NodeList} Element
   * @param {string} Hour
   */
  setEventListenerWithHour(Element, Hour) {
    if( Hour === undefined ) { Hour = '00'; }
    Element.innerText = Hour;
  }

  /**
   * setEventListenerWithMinute
   * 加入監聽 (Minute)
   * @param {NodeList} Element
   * @param {string} Minute
   */
  setEventListenerWithMinute(Element, Minute) {
    if( Minute === undefined ) { Minute = '00'; }
    Element.innerText = Minute;
  }

  /**
   * setEventListenerWithSecond
   * 加入監聽 (Second)
   * @param {NodeList} Element
   * @param {string} Second
   */
  setEventListenerWithSecond(Element, Second) {
    if( Second === undefined ) { Second = '00'; }
    Element.innerText = Second;
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