
import * as MY_CONST from './consts';

export class Clock {
  constructor() {
    console.log('new a Clock class');

    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.days = 0;

    this.interval;

    this.initial();
  }

  /** 停止計時 */
  stop() {
    clearInterval(this.interval);
  }

  /** @return {number} seconds */
  get second() {
    return this.seconds;
  }

  /** @return {number} minutes */
  get minute() {
    return this.minutes;
  }

  /** @return {number} hours */
  get hour() {
    return this.hours;
  }

  /** @return {number} days */
  get day() {
    return this.days;
  }

  /** 開始計時 */
  initial() {
    this.interval = setInterval(() => {
      this.seconds++;

      if (this.seconds >= MY_CONST.secondsToMinutes) {

        this.seconds = 0;
        this.minutes++;

        if (this.minutes >= MY_CONST.minutesToHours) {

          this.minutes = 0;
          this.hours++;

          if (this.hours >= MY_CONST.HoursToDays) {
            this.hours = 0;
            this.days++;
          }
        }
      }
      console.log(this.seconds, this.minutes, this.hours, this.days);
    }, MY_CONST.INTERVAL_LOOP);
  }
}