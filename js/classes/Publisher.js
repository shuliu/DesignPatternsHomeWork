
export class Publisher {
  constructor() {
    /** 收容所 */
    this.subscribers = [];
  }

  subscribe(fn, type = 'any') {
    if( typeof this.subscribers[type] === 'undefined' ) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }

  unsubscribe(fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  }

  publish(publication, type) {
    this.visitSubscribers('publish', publication, type);
  }

  visitSubscribers(action, arg, type = 'any') {
    this.subscribers[type].forEach((current, index, array) => {
      if (action === 'publish') {
        current(arg)
      } else if (action === 'unsubscribe') {
        if (current === arg) {
          this.subscribers[type].splice(index, 1);
        }
      }
    })
  }
}


/**

let pubsub = new Publisher();

let funcA = (cl) => {
  console.log('msg1' + cl)
}
let funcB = (cl) => {
  console.log('msg2' + cl)
}

pubsub.subscribe(funcA)
pubsub.subscribe(funcB)
pubsub.unsubscribe(funcB)

pubsub.publish(' in publisher')
//> msg1 in publisher

**/