class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
        this.head = newNode;
        return;
        }

        let current = this.head;
        while (current.next) {
        current = current.next;
        }
        current.next = newNode;
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
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head.data;
    }

}

// Example Usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

linkedList.printList(); // Output: 10, 20, 30
console.log( linkedList.getFirst());; 
console.log( linkedList.size());; 
  
  