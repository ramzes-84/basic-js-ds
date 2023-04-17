const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

// const test = new ListNode([5,6,7])
// console.log(test);


class Queue {
  first;
  last;

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    if (this.first) {
      this.last.next = new ListNode(value);
      this.last = this.last.next;
    } else {
      this.first = new ListNode(value);
      this.last = this.first;
    }
  }

  dequeue() {
    let neededItem = this.first.value;
    this.first = this.first.next;
    return neededItem;
  }
}

module.exports = {
  Queue
};
