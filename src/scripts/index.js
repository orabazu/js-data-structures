import '../styles/index.scss';
import CircularQueue from './CircularQueue';

const circularQueue = new CircularQueue(5);
circularQueue.enQueue(3);
circularQueue.deQueue();
circularQueue.Front();
circularQueue.Rear();
circularQueue.isEmpty();
circularQueue.isFull();
