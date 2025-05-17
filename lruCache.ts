class LRUCache {
  capacity: number;
  cache: Map<string, string>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key: string): string | null | undefined {
    if (!this.cache.has(key)) return undefined;
    let val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val!);
    return val;
  }
  put(key: string, val: string): void {
    this.cache.delete(key);
    if (this.cache.size === this.capacity) {
      if (this.cache.size === 0) return;
      this.cache.delete(this.cache.keys().next().value!);
      this.cache.set(key, val!);
    } else {
      this.cache.set(key, val!);
    }
  }
  getLeastRecent() {
    return Array.from(this.cache)[0];
  }
  getMostRecent() {
    return Array.from(this.cache)[this.cache.size - 1];
  }
}

const cache = new LRUCache(3);
cache.put("a", "wasiful");
cache.put("b", "last");
cache.put("c", "last");
// console.log(cache.get("a"));

class LNode<K, V> {
  public prev: LNode<K, V> | null = null;
  public next: LNode<K, V> | null = null;
  constructor(
    public key: K,
    public value: V,
  ) {}
}

class LRUCacheAdvanced<K, V> {
  private capacity: number;
  readonly head: LNode<K, V>;
  readonly tail: LNode<K, V>;
  private cache: Map<K, LNode<K, V>> = new Map();
  constructor(capacity: number) {
    if (capacity <= 0) throw new Error("capacity must be greater");
    this.capacity = capacity;
    this.head = new LNode<K, V>({} as K, {} as V);
    this.tail = new LNode<K, V>({} as K, {} as V);

    this.head.next = this.tail;
    this.head.prev = null;

    this.tail.prev = this.head;
    this.tail.next = null;
  }
  private addToEnd(node: LNode<K, V>): void {
    const prevTail = this.tail.prev!;
    prevTail.next = node;
    node.prev = prevTail;
    node.next = this.tail;
    this.tail.prev = node;
  }
  private removeNode(node: LNode<K, V>): void {
    const prev = node.prev!;
    const next = node.next!;
    prev.next = next;
    next.prev = prev;
  }
  getNode(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;
    const node = this.cache.get(key)!;
    this.removeNode(node);
    this.addToEnd(node);
    return node.value;
  }
  putNode(key: K, value: V): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.removeNode(node);
      this.addToEnd(node);
    } else {
      const newNode = new LNode(key, value);
      if (this.cache.size >= this.capacity) {
        const lruNode = this.head.next;
        this.cache.delete(lruNode!.key);
        this.removeNode(lruNode!);
      }
      this.cache.set(key, newNode);
      this.addToEnd(newNode);
    }
  }
  getLeastRecent(): [K, V] | undefined {
    const lruNode = this.head.next;
    if (lruNode === this.tail || !lruNode) return undefined;
    return [lruNode.key, lruNode.value];
  }
  getMostRecent(): [K, V] | undefined {
    const mruNode = this.tail.prev;
    if (mruNode === this.head || !mruNode) return undefined;
    return [mruNode.key, mruNode.value];
  }
}

const cached = new LRUCacheAdvanced<string, string>(2);
cached.putNode("a", "Apple");
cached.putNode("b", "Banana");
cached.putNode("c", "cat");
console.log(cached.getLeastRecent());
