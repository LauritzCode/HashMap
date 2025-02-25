import { linkedList } from "./linkedList.js";

export class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;

    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);

    if (this.buckets[index] === null) {
      this.buckets[index] = new linkedList();
    }

    const existingNode = this.buckets[index].find(key);
    if (!existingNode) this.size++;

    this.buckets[index].append(key, value);
  }

  get(key) {
    const index = this.hash(key);
    if (this.buckets[index] === null) return null;
    const node = this.buckets[index].find(key);
    if (node) return node.value;
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const linkedList = this.buckets[index];

    if (linkedList === null) return false;
    return linkedList.contains(key);
  }

  remove(key) {
    const index = this.hash(key);
    let linkedList = this.buckets[index];

    if (linkedList === null) return false;
    const removed = linkedList.remove(key);
    if (removed) {
      this.size--;
    }

    if (linkedList.head === null) {
      this.buckets[index] = null;
    }
    return removed;
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);
  }

  keys() {
    let keyList = [];
    for (let i = 0; i < this.capacity; i++) {
      let linkedList = this.buckets[i];
      if (linkedList !== null) {
        let currentNode = linkedList.head;
        while (currentNode !== null) {
          keyList.push(currentNode.key);
          currentNode = currentNode.nextNode;
        }
      }
    }
    return keyList;
  }

  values() {
    let valueList = [];
    for (let i = 0; i < this.capacity; i++) {
      let linkedList = this.buckets[i];
      if (linkedList !== null) {
        let currentNode = linkedList.head;
        while (currentNode !== null) {
          valueList.push(currentNode.value);
          currentNode = currentNode.nextNode;
        }
      }
    }
    return valueList;
  }

  entries() {
    let keyValueList = [];
    for (let i = 0; i < this.capacity; i++) {
      let linkedList = this.buckets[i];
      if (linkedList !== null) {
        let currentNode = linkedList.head;
        while (currentNode !== null) {
          keyValueList.push([currentNode.key, currentNode.value]);
          currentNode = currentNode.nextNode;
        }
      }
    }
    return keyValueList;
  }
}
