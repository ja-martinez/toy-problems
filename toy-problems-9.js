// Add two new methods to our SLL class.
// - find() : takes a value and returns the first occurrence of that value in the linked list
// - clear() : clears the linked list of all nodes

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

  find(value) {
    let currentNode = this.head;

    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }
}

let node1 = new Node(5);
let ll = new SLL(node1);
ll.add(2);
ll.add(4);
ll.clear();
console.log(ll);