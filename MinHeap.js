class MinHeap {

    constructor () {
        this.heap = [];
    }

    getMin () {
        return this.heap[1];
    }

    insert (node) {
        this.heap.push(node)
        
        if (this.heap.length > 1) {
            let current = this.heap.length - 1
            
            while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }

    remove() {
        let smallest = this.heap[1]
        
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length - 1)
    
            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }
    
            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1
    
            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current] > this.heap[leftChildIndex] ||
                        this.heap[current] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }
    
                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }
        
        if (this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] < this.heap[current]) {
            [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
        }
        
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }
    
        return smallest
    }
    
}