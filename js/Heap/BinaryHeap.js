
class BinaryHeap {
    constructor(comparator=BinaryHeap.minComparator) {
        this.heap = [];
        this.length = 0;
        this.capacity = 1;
        this.comparator = comparator;
    }
    
    static minComparator(current, other) {
        return current > other;
    }
    static maxComparator(a, b) 
    {
        return current < other;
    }
    // Insertion
    insert(value) {
        if (this.length + 1 > this.capacity) 
        {
            this.capacity = Math.floor(0.5 * this.capacity) + this.capacity + 1;
            this.heap.length = this.capacity;
        }

        this.heap[this.length++] = value;
        this.bubbleUp(this.length - 1);
    }
    
    // Heapify
    heapify(index) {
        
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largestIndex = index;
            if (leftChildIndex < this.length && this.comparator(this.heap[largestIndex], this.heap[leftChildIndex]))
                largestIndex = leftChildIndex;
            if (rightChildIndex < this.length && this.comparator(this.heap[largestIndex], this.heap[rightChildIndex]))
                largestIndex = rightChildIndex;
            if (largestIndex === index)
                break;
            [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
            index = largestIndex;
            leftChildIndex = 2 * index + 1;
            rightChildIndex = 2 * index + 2;
        }
    
    }
    
    // Bubble Up
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);          
            if (this.comparator(this.heap[index], this.heap[parentIndex])) 
                break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    
    // Removal
    
    get() {
        if (this.length === 0)
            return null;
        const top = this.heap[0];
        this.heap[0] = this.heap[this.length - 1];
        this.heap[this.length - 1] = undefined;
        this.length--;
        this.heapify(0);
        if (BinaryHeap.checkTooMuchSpace(this.length, this.capacity, 0.75)) {
            this.capacity = Math.floor(0.75 * this.capacity);
            this.heap.length = this.capacity;
        }
        return top;
    }

    static checkTooMuchSpace(realLength, capacity, scale) {
        return realLength <= Math.floor(scale * capacity);
    }

    display() {
        console.log({
            heap: this.heap.flat(),
            length: this.length,
            capacity: this.capacity,
            comparator: this.comparator.name,
        });
    }
}

export {BinaryHeap};