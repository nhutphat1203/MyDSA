import { BinaryHeap } from './Heap/BinaryHeap.js';

const heap = new BinaryHeap();

const data = [33, 22, 21, 87, 57, 96];

data.forEach((value) => heap.insert(value));

let n = heap.length;

heap.display();

console.log("----------------------------------------------------------------");

for (let i = 0; i < n; i++) {
    console.log(heap.get());
    heap.display();
}

console.log("----------------------------------------------------------------");

const data2 = [101, 1, 2000, 344, 699, 23, 88];

data2.forEach((value) => heap.insert(value));

n = heap.length;

for (let i = 0; i < n; i++) {
    console.log(heap.get());
    heap.display();
}