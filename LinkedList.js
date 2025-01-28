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
        const newNode = new Node(value)
        if(!this.head) {
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
        
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail  = null
            
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
        temp.next = null
        this.length --
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp 
    }

    get(index){
        if(index>this.length || index<0) return undefined
        let temp =  this.head
        for(let x = 0 ; x<index; x++){
            temp = temp.next
            
        }
        return temp 
    }

    set(index,value){
        if(index<0 || index>this.length) return undefined
        let temp = this.get(index)
        temp.value = value
        return true
    }
    inset(index,value){
        if(!value) return undefined
        if(index<0 || index>this.length) return undefined
        if(index == 0) return this.unshift(value)
        if(index == this.length) return this.push(value)
        const newNode = new Node(value)
        let temp = this.get(index-1)

        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true 
        
        
        
    }
    remove(index){
        if(index<0 || index>this.length) return undefined
        if(index === 0) return this.shift()
        if(index ===this.length) return this.pop()
        let pre = this.get(index-1)
        let temp = this.get(index)
        pre.next = temp.next
        temp.next = null 
        this.length--
        return true
        
    }

    reverse(){
        if(!this.head) return undefined
        let temp = this.head
        let pre = null
        let next = temp.next
        this.head = this.tail
        this.tail = temp 
        for(let x = 0 ; x<this.length;x++){
            next = temp.next
            temp.next  = pre
            pre = temp 
            temp = next
            
        }
        return this 
    }
}

const myLinkedList = new LinkedList(11)


