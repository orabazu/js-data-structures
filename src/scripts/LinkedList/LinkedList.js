/**
 * Class representing linkedlist
 */
const LinkedList = class {
  /**
   * @constructor
   */
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  /**
  * Insert a new element to the end of linkedlist
  * @param {*} to insert
  * @return {void}
  */
  insert(value) {
    const node = { value, next: null };

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
  }

  /**
  * TODO: Add remove node
  * Removes a node
  * @param {*} node to remove
  * @return {*} removed node value
  */
  // remove() {

  // }


  /**
  * TODO: Add prepend node
  * Add a node to be new head
  * @param {*} value
  * @return void
  */
  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  /**
  * Removes the tail
  * @returns {*} returns true if operation succeeded
  */
  removeTail() {
    if (!this.head && !this.tail) return false;
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    return true;
  }

  /**
 * Removes the head
 * @return {*} removed head value
 */
  removeHead() {
    const deletedNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedNode;
  }

  /**
   * Searches for linked list and return true if it finds
   * @param {*} value to search
   * @return {boolean} - true if value is found otherwise false
   */
  contains(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode.value === value) {
      return true;
    }
    return false;
  }
};

export { LinkedList as default };

/**
* Your MinStack object will be instantiated and called as such:
* const obj = new MinStack();
* obj.push(x)
* obj.pop()
* const param_3 = obj.top()
* const param_4 = obj.getMin()
* console.log(param_3, param_4)
*/
