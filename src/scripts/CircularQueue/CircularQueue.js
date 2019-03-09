/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
const CircularQueue = class {
  constructor(k) {
    this.size = k;
    this.myQArr = new Array(k);
    this.frontIndex = -1;
    this.rearIndex = -1;
    console.log('My queue initiated with size:', this.size);
  }

  /**
  * Insert an element into the circular queue. Return true if the operation is successful.
  * @param {number} value
  * @return {boolean}
  */
  enQueue(value) {
    if (this.frontIndex === -1 && this.rearIndex === -1) {
      this.rearIndex = 0;
      this.frontIndex = 0;
      this.myQArr[this.rearIndex] = value;
      console.log('Enqueue value:', value, '@rear index:', this.rearIndex);
      return true;
    }
    if (!this.isFull()) {
      this.rearIndex = (this.rearIndex += 1) % this.size;
      this.myQArr[this.rearIndex] = value;
      console.log('Enqueue value:', value, '@rear index:', this.rearIndex);
      return true;
    }
    console.log('Cannot enqueue:', value, '@rear index:', this.rearIndex);
    return false;
  }

  /**
  * Delete an element from the circular queue. Return true if the operation is successful.
  * @return {boolean}
  */
  deQueue() {
    if (this.isEmpty()) {
      console.log('Q is empty cannot deque');
      return false;
    }
    // if front and rear is same, queue is empty
    if (this.frontIndex === this.rearIndex) {
      this.frontIndex = -1;
      this.rearIndex = -1;
    } else {
      this.frontIndex += 1 % this.size;
    }
    console.log('Dequeue value');
    return true;
  }

  /**
  * Get the front item from the queue.
  * @return {number}
  */
  Front() {
    // console.log('Front value :', this.myQArr[this.frontIndex])
    if (this.frontIndex === -1) return this.frontIndex;
    return this.myQArr[this.frontIndex];
  }

  /**
  * Get the last item from the queue.
  * @return {number}
  */
  Rear() {
    // console.log('Rear value:::', this.myQArr[this.rearIndex])
    if (this.rearIndex === -1) return this.rearIndex;
    return this.myQArr[this.rearIndex];
  }

  /**
  * Checks whether the circular queue is empty or not.
  * @return {boolean}
  */
  isEmpty() {
    if (this.frontIndex === -1) {
      console.log('isEmpty:', true);
      return true;
    }
    return false;
  }

  /**
  * Checks whether the circular queue is full or not.
  * @return {boolean}
  */
  isFull() {
    const isEndOfCircle = this.frontIndex === this.rearIndex + 1;
    const isEndOfCircleNotModified = this.frontIndex === 0 && this.rearIndex === (this.size - 1);
    if (isEndOfCircle || isEndOfCircleNotModified) {
      return true;
    }
    return false;
  }
};

/**
 * const circularQueue = new CircularQueue(5);
  circularQueue.enQueue(3);
  circularQueue.deQueue();
  circularQueue.Front();
  circularQueue.Rear();
  circularQueue.isEmpty();
  circularQueue.isFull();
 */


export { CircularQueue as default };
