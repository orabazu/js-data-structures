/**
 * Stack implementation with pop, push, isEmpty, top, getMin with complexity O(1)
 */
const Stack = class {
  /**
   * @constructor
   */
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
  * Insert an element into stack.
  * @param {number} x Value to push stack
  * @return {void}
  */
  push(x) {
    this.stack.push(x);
    const minLen = this.minStack.length;
    if (minLen === 0 || this.minStack[minLen - 1] >= x) {
      this.minStack.push(x);
    }
  }

  /**
  Removes the element on top of the stack.
  * @return {void}
  */
  pop() {
    const last = this.stack.pop();
    const minLen = this.minStack.length;
    if (this.minStack[minLen - 1] === last) {
      this.minStack.pop();
    }
  }

  /**
  Get the top element.
  * @return {number}
  */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
  Retrieve the minimum element in the stack.
  * @return {number}
  */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
};

export { Stack as default };

/**
* Your MinStack object will be instantiated and called as such:
* const obj = new MinStack();
* obj.push(x)
* obj.pop()
* const param_3 = obj.top()
* const param_4 = obj.getMin()
* console.log(param_3, param_4)
*/
