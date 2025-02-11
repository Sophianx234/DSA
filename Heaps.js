/* class Heap {
    #heap = []

    getHeap(){
        return [...this.#heap]
    }
    #letfChild(index){
        return 2*index+1
    }
    #rightChild(index){
        return 2*index+2
    }
    #parent(index){
        return Math.floor(index-1/2)
    }
    #swap(index1,index2){
       return  [this.#heap[index1],this.#heap[index2]] = [this.#heap[index2],this.#heap[index1]]
    }

    inset(value){
        this.#heap.push(value)
        let current = this.#heap.length-1
        while(current>0 && this.#heap[current]> this.#heap(this.#parent(current))){
            this.#swap(current,this.#parent(current))
            current = this.#parent()

        }
    }
} */

class Heap{
        #heap = []

        #leftChild(index){
            return  2* index +1

        }
        #rightChild(index){
            return  2* index +2

        }
        #parent(index){
            return (Math.floor(index-1/2))
        }
        #swap(index1,index2){
            [this.#heap[index1],this.#heap[index2]] = [this.#heap[index2],this.#heap[index1]]
        }
        #sinkDown(index){
            let maxIndex = index
            let size = this.#heap.length
            while(true){
                let leftIndex = this.#leftChild(maxIndex)
                let rightIndex = this.#rightChild(maxIndex)
            }
        }

        inset(value){
                this.#heap.push(value)
                let current = this.#heap.length-1
                while(current>0 && this.#heap[current]>this.#heap[this.#parent(current)]){
                    this.#swap(current,this.#parent(current))
                    current = this.#parent(current)

                }
                return true
            
        }
        remove(){

            const maxValue = this.#heap[0]
            this.#heap[0] = this.#heap.pop()

            return this

        }
    }


    const h = new Heap()