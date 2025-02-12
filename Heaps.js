class Heap {
    #heap = []
    leftIndex(index){
        return 2*index +1
    }
    rightIndex(index){
        return 2*index+2
    }
    parent(index){
        return Math.floor(index-1/2)
    }
    swap(index1,index2){
        [this.#heap[index1],this.#heap[index2]] =[this.#heap[index2],this.#heap[index1]]
    }
    sinkDown(index){
        let maxIndex = index
        while(true){
            let leftIndex = this.leftIndex(index)
            let rightIndex = this.rightIndex(index)

            if(this.#heap[leftIndex] > this.#heap[maxIndex]){
                maxIndex = leftIndex
                
            }
            if(this.#heap[rightIndex] > this.#heap[maxIndex]){
                maxIndex = rightIndex
                
            }
            if(maxIndex !== index){
                this.swap(maxIndex,index)
                index = maxIndex
            }

        }
    }

    inset(value){
        this.#heap.push(value)
        let current = this.#heap.length-1
        while(current>0 && this.#heap[current]> this.#heap[this.parent(current)]){
            this.swap(current,this.parent(current))
            current = this.parent(current)


        }
        return true
    }
    remove(){
        if(this.#heap.length===0) return undefined
        if(this.#heap.length === 1) return this.#heap.pop()

        let maxValue = this.#heap[0]
        this.#heap[0] = this.#heap.pop()
        
    }
}


const h = new Heap()