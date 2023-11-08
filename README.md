# LinkedList
Linear data structure 

1. What is a Linked List?
 A linked list is a linear data structure similar to an array. 
However, unlike arrays, elements are not stored in a particular memory location or index. 
Rather each element is a separate object that contains a pointer or a link to the next object in that list.
Each element (commonly called nodes) contains two items: the data stored and a link to the next node. 
The data can be any valid data type. You can see this illustrated in the diagram below.

2. An advantage of Linked Lists
Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
This is one advantage it has over arrays.

3. Disadvantages of Linked Lists
Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. 
Nodes are accessed sequentially starting from the first node.
It uses more memory than arrays because of the storage of the pointers.

4. Types of Linked Lists
There are three types of linked lists:
Singly Linked Lists: Each node contains only one pointer to the next node. This is what we have been talking about so far.
Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
Circular Linked Lists: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.
