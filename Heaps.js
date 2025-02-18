class Heap {
  #heap = [];
  parentIndex(index) {
    return Math.floor(index - 1 / 2);
  }
  leftIndex(index) {
    return 2 * index + 1;
  }
  rightIndex(index) {
    return 2 * index + 2;
  }
  swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  sinkDown(index){
    let maxIndex = index
    let size = this.#heap.length
    while(true){
      let leftIndex = this.leftIndex(index)
      let rightIndex = this.rightIndex(index)
      if(leftIndex<size && this.#heap[leftIndex]>this.#heap[maxIndex]){
        maxIndex = leftIndex
      }
      if(rightIndex<size && this.#heap[rightIndex]>this.#heap[maxIndex]){
        maxIndex = rightIndex
      }
      if(maxIndex !== index ){
        this.swap(maxIndex, index)
        index = maxIndex
        
      }else{
        return 
      }
      }
    
  }

  set(value) {
    let current = this.#heap.length;
    this.#heap.push(value);

    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.parentIndex(current)]
    ) {
      this.swap(current, this.parentIndex(current));
      current = this.parentIndex(current);
    }
    return this;
  }

  remove(){
    const maxValue = this.#heap[0]
    this.#heap[0] = this.#heap.pop()
    this.sinkDown(0)
    return maxValue
  }
}

const h = new Heap();
