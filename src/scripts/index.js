import '../styles/index.scss';
import CircularQueue from './CircularQueue';
import Stack from './Stack';
import LinkedList from './LinkedList';

const circularQueue = new CircularQueue(5);
circularQueue.enQueue(3);
circularQueue.deQueue();
circularQueue.Front();
circularQueue.Rear();
circularQueue.isEmpty();
circularQueue.isFull();

const myStack = new Stack();
myStack.push(20);
myStack.push(21);
myStack.push(22);
myStack.pop();
const param3 = myStack.top();
const param4 = myStack.getMin();
console.log(param3, param4);


const myLinkedList = new LinkedList(1);
myLinkedList.insert(2);
myLinkedList.insert(3);
myLinkedList.removeTail();
myLinkedList.removeTail();
myLinkedList.removeHead();
myLinkedList.removeTail();
myLinkedList.insert(7);
myLinkedList.insert(8);
myLinkedList.prepend(9);
console.log('LinkedList', myLinkedList);
