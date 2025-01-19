class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(2)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this 
    }

    pop(){
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while(this.head.nex)
    }
}


const myLinkedList  = new  LinkedList(3)