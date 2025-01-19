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
        while(this.head.next){
            pre = temp 
            temp = this.head.next
        }
        this.length--
        if(this.length===0){
            this.head = null
            this.tail = null
        }
        return temp
    }
    unshift(value){
        const newNode = new Node(value)
        
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            
        }else{
            
            newNode.next = this.head
            
            this.head = newNode
        }
        this.length++
        return this 
    }
    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if(this.length===0){
            this.head = null
            this.tail = null
        }
        return temp
        
    }
}


const myLinkedList  = new  LinkedList(3)