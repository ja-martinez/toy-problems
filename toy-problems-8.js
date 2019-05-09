// Add two methods to the SLL class. add() should take in a value and add it to the end of the linked list & remove() should take in a value and remove the first occurance of that value.

class Node{
  constructor(val){
    this.value = val;
    this.next = null;
  }
}
class SLL{
  constructor(head = null){
    this.head = head;
    this.tail = head;
  }
  add(value) {
      let newItem = new Node(value);
      
      // check if there is a head and tail. If not, make this new node both of those values.
      if (this.head === null) {
          this.head = newItem;
          this.tail = newItem;
      } else {
        this.tail.next = newItem;
        this.tail = newItem;
      }
  }
  remove(value) {
    
    let previousNode = this.head;
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== value) {
        previousNode = currentNode;
        currentNode = currentNode.next;    
    }

    if (currentNode === this.head) {
        this.head = currentNode.next;
    } else if (currentNode === this.tail) {
        this.tail = previousNode;
        previousNode.next = null;
    }else if (currentNode === null) {
        
    } else {
        previousNode.next = currentNode.next;
    }

  }
}

let node1 = new Node(5);
let node2 = new Node(2);
let ll = new SLL(node1);
ll.add(2);
ll.add(4);
ll.remove(8)
console.log(ll);