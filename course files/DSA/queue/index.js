class Queue{
  constructor(){
    this.queue = []
  }

  enqueue(data){
    this.queue.push(data)
  }

  dequeue(){
    if (this.isEmpty()) {
      return "Queue is empty"
    }
    return this.queue.shift()
  }

  isEmpty(){
    return this.queue.length === 0
  }

  peek(){
    if (this.isEmpty()) {
      return "Queue is empty"
    }
    return this.queue[0]
  }

  size(){
    return this.queue.length
  }
  clear(){
    this.queue = []
  }

  printQueue(){
    let str = ""
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n"
      
    }
    return str
  }

}

// Usage Example
let myQueue = new Queue()

myQueue.enqueue(20)
myQueue.enqueue(10)
myQueue.enqueue(50)
myQueue.enqueue(70)
myQueue.dequeue()

console.log(myQueue.printQueue())