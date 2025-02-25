export class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(key, value) {
    const node = new Node(key, value);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        if (currentNode.key === key) {
          currentNode.value = value;
          return;
        }
        if (currentNode.nextNode === null) break;

        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node;
    }
  }

  prepend(key, value) {
    const node = new Node(key, value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  at(index) {
    let int = 0;
    let currentNode = this.head;
    if (index < 0) return "not found";

    while (int < index) {
      currentNode = currentNode.nextNode;
      int++;
      if (currentNode === null) return "Index is larger than list";
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    if (currentNode === null) return "List is empty!";
    if (this.head.nextNode === null) {
      this.head = null;
      return "Item popped";
    }
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }

  remove(key) {
    let currentNode = this.head;

    if (this.head === null) return false;
    if (this.head.key === key) {
      this.head = this.head.nextNode;
      return true;
    }

    while (currentNode.nextNode !== null) {
      if (currentNode.nextNode.key === key) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  contains(key) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.key === key) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(key) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.key === key) return currentNode;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode !== null) {
      result += `( ${currentNode.key} - ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    result += "null.";
    return result;
  }
}

export class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.value = value;
    this.key = key;
    this.nextNode = nextNode;
  }
}
