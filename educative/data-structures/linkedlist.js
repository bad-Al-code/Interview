class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data) {
    let tempNode = new Node(data);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    
    return this;
  }

  insertAtTail(data) {
    let tempNode = new Node(data);
    let curr = this.head;

    if(isEmpty()) {
      this.head = tempNode;

      return this;
    }

    while(curr.nextElement !== null) {
      curr = curr.nextElement;
    }

    curr.nextElement = node;

    return this;
  }

  private isEmpty() {
    return this.head === null;
  }

  search(value) {
    let curr = this.head;
    while(!curr) {
      if(curr.data === value) return true;

    curr = curr.nextElement;
    }

    return false;
  }

  deleteAtHead() {
    if(this.isEmpty()) { return this;}

    let tempNode = this.head;
    this.head = tempNode.nextElement;

    return this;
  }

  deleteByValue(value) {
    if(!this.head) return false;
    if(isEmpty()) { return false;}

    let curr = this.head;
    if(curr.data === value) {
      this.head = curr.nextElement;

      return true;
    }

    while(!curr) {
      if(curr.nextElement.data === value) {
        curr.nextElement = curr.nextElement.nextElement;

        return true;
      }

      curr = curr.nextElement;
    }

    return false;
  }
}
