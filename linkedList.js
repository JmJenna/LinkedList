class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    getFirst() {
        return this.head ? this.head.data : null;
    }

    getLast() {
        return this.tail ? this.tail.data : null;
    }

    // Additional methods can be added for specific functionality, such as insertion, deletion, etc.
}

// Example Usage:
const doublyList = new DoublyLinkedList();
doublyList.append(10);
doublyList.append(20);
doublyList.prepend(5); // Prepend 5 to the beginning

doublyList.printList(); // Output: 5, 10, 20
console.log(doublyList.getFirst()); // Output: 5
console.log(doublyList.getLast()); // Output: 20
console.log(doublyList.size()); // Output: 3
