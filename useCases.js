const List = require("./main.js");

const example1 = new List();

console.log(`List size before append method: ${example1.size()}`);

example1.append('a');
example1.append('b');
example1.append('c');
example1.append('d');

console.log(`List size after append method: ${example1.size()}`);

example1.insert('e', 1);
example1.insert('f', 2);
example1.insert('g', 3);

console.log(`List size after insert method: ${example1.size()}`);
console.log(`List element with index 1: ${example1.get(1)}`);
console.log(`List element with index 2: ${example1.get(2)}`);
console.log(`List element with index 3: ${example1.get(3)}`);

example1.delete(1);
example1.delete(2);
example1.delete(3);

console.log(`List size after delete method: ${example1.size()}`);
console.log(`List element with index 1: ${example1.get(1)}`);
console.log(`List element with index 2: ${example1.get(2)}`);
console.log(`List element with index 3: ${example1.get(3)}`);

example1.append('a');
example1.append('a');
example1.append('a');
example1.append('a');

console.log(`List size before deleteAll method: ${example1.size()}`);

example1.deleteAll('a');

console.log(`List size after deleteAll method: ${example1.size()}`);

const example2 = example1.clone();

console.log(`List wich should be cloned: ${example1.get(0)}, ${example1.get(1)}, ${example1.get(2)}`);
console.log(`Cloned list: ${example2.get(0)}, ${example2.get(1)}, ${example2.get(2)}`);

console.log(`List before reverse: ${example1.get(0)}, ${example1.get(1)}, ${example1.get(2)}`);

example1.reverse();

console.log(`List after reverse: ${example1.get(0)}, ${example1.get(1)}, ${example1.get(2)}`);

example1.append('d');

console.log(`Index of first elem in list: ${example1.findFirst('d')}`);
console.log(`Index of last elem in list: ${example1.findLast('d')}`);

console.log(`List before extending with size ${example1.size()}: [${example1.get(0)}, ${example1.get(1)}, ${example1.get(2)}, ${example1.get(3)}]`);

example1.extend(example2);

console.log(`List after extending with size ${example1.size()}: [${example1.get(0)}, ${example1.get(1)}, ${example1.get(2)}, ${example1.get(3)}, ${example1.get(4)}, ${example1.get(5)}, ${example1.get(6)}]`);

example1.clear();

console.log(`List after clearing: ${example1.size()}`);