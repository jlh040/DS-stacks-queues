/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
      return;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let removedVal;

    if (!this.first) {
      throw Error('Queue is empty!');
    }
    else if (this.length === 1) {
      removedVal = this.first.val;
      this.first = null;
      this.last = null;
      this.size--;
      return removedVal;
    }
    else {
      removedVal = this.first.val;
      this.first = this.first.next;
      this.size--
      return removedVal;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;
