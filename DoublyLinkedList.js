/* class Node {
    constructor(value){
        this.value = value 
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
        
    }
    push(value){
        const newNode  = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            
        }
        this.length++
        return this
    }
    pop(){
        let temp = this.tail 
        this.tail = temp.prev
        this.tail.next = null
        temp.prev = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail  = newNode
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    shift(){
        if(this.length === 0) return undefined
        let temp = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp 
    }
    get(index){
        if(index<0 || index>=this.length) return undefined
        let temp = this.head
        for(let x = 0 ; x<index;x++){
            temp = temp.next
            
        }
        return temp
    }
}


const myDLList = new DoublyLinkedList(10)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    this.tail = temp.prev;
    temp.prev = null;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.head.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index > this.length / 2) {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    } else {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    }
    return temp;
  }
  set(index,value){
    if(index<0 || index>=this.length)return undefined
    let temp = this.get(index)
    temp.value = value
    return this
  }
  inset(index,value){
    const newNode = new Node(value)
    if(index === 0) return this.unshift(value)
    if(index === this.length) return this.push(value)
    let temp = this.get(index)
    newNode.prev = temp.prev
    temp.prev.next = newNode
    newNode.next = temp
    return this


  }
}

const dl = new DoublyLinkedList(1);
