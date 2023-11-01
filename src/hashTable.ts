export function hashFunc(key: string): number {
  return key
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export class MyHashTable<T> {
  arr: T[] = [];
  stringArr: string[] = [];
  get(key: string): T | undefined {
    const map = new Map<string, T>();
    return this.arr[hashFunc(key)]
  }
  set(key: string, value: T): void {
    // do thing
    const index = hashFunc(key)
    this.stringArr[index] = key
    this.arr[index] = value
  }
}

// npm i -D @types/jest