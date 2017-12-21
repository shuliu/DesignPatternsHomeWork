
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
   * setEventListener
   * 加入監聽
   * @param {NodeList} element 
   */
  setEventListener(element) {
    console.log('setEventListener');
    console.log(element);
  }

  /**
   * initial
   * private method
   */
  initial() {
    console.log('initial');
    
    this.options.elements.forEach(element => {
      this.setEventListener(element);
    });
  }
}