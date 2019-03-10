import '../styles/index.scss';
import CircularQueue from './CircularQueue';
import Stack from './Stack';

const circularQueue = new CircularQueue(5);
circularQueue.enQueue(3);
circularQueue.deQueue();
circularQueue.Front();
circularQueue.Rear();
circularQueue.isEmpty();
circularQueue.isFull();

const obj = new Stack();
obj.push(20);
obj.push(21);
obj.push(22);
obj.pop();
const param3 = obj.top();
const param4 = obj.getMin();
console.log(param3, param4);
