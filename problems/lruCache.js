/**
 * @param {number} capacity
 */
/*Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?
*/
/**
**/
/*
node = {next: null, prev: null, key: null, value: null}
*/

let List = function() {
    this.head = null;
    this.tail = null;
}

List.prototype.insert = function(node) {
    // always insert at the top
    // create a new head;
    node.next = this.head;
    if (this.head) this.head.prev = node;
    this.head = node;
    node.prev = null;

    if (!this.tail) this.tail = node;
}

List.prototype.remove = function(node) {
    // remove by previous next's will be
    if (node === this.head) {
        this.head = node.next;
    }
    if (node === this.tail) {
        this.tail = node.prev;
    }

    if (node.prev) {
        node.prev.next = node.next;
    }

    if (node.next) {
        node.next.prev = node.prev;
    }
}

var LRUCache = function(capacity) {
    this.maxCapacity = capacity;
    this.size = 0;
    this.list = new List();
    this.cache = {};
}

LRUCache.prototype.put = function(key, value) {
    let node = this.cache[key];

    if (node) {
        this.list.remove(node)
        delete this.cache[key];
        this.size -= 1;
    }
    node = {key: key, value: value, next: null, prev: null};


    this.list.insert(node)
    this.cache[key] = node;
    this.size += 1;

    if (this.size > this.maxCapacity) {
        // remove the last node;
        let removeLast = this.list.tail;
        delete this.cache[removeLast.key];
        this.list.remove(removeLast);
        this.size -= 1;
    }
}

LRUCache.prototype.get = function(key) {
    if (this.cache.hasOwnProperty(key)) {
        // find node remove and insert again
        let node = this.cache[key];
        this.list.remove(node);
        this.list.insert(node);
        this.cache[key] = node;
        return node.value;
    }
    return -1;
}