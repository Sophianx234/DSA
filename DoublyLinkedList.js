class Node {
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
}


const myDLList = new DoublyLinkedList(10)
