class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    const newNode = new Node(value);
    this.root = newNode;
    this.length = 1;
  }
  inset(value) {
    const newNode = new Node(value);
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (currentNode.value === value) return true;
    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    }
    if (value > currentNode.value) {
      return this.rContains(value, currentNode.right);
    }
  }

  rInset(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);
    if (value < currentNode.value) {
      currentNode.left = this.rInset(value, current.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.rInset(value, currentNode.right);
    }

    return currentNode;
  }

  BFS() {
    let queue = [];
    let results = [];
    let currentNode = this.root;
    results.push(currentNode.value);
    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  DFSPreOrder() {
    let results = [];

    const traverse = (currentNode) => {
      results.push(currentNode.value);
      if (currentNode.left) return traverse(currentNode.left);
      if (currentNode.right) return traverse(currentNode.right);
    };
    traverse(this.root);
    return results 
}
}

const bt = new BST(60);
