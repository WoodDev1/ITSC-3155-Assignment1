export class Stack<T> {
  private array: Array<T> = [];

  public push(item: T): void {
    this.array.push(item);
  }

  public pop(): T | undefined {
    if(this.array.length > 0) {
      return this.array.pop();
    }
    return undefined;
  }

  public peek(): T | undefined {
    if (this.array.length > 0){
      return this.array[(this.array.length - 1)];
    }
    return undefined;
  }

  public size(): number {
     if (this.array.length > 0){
      return this.array.length;
     }
    return 0;
  }
}
