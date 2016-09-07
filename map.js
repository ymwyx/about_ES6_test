/*set是一种新的数据结构，类似数组，但无重复值。set本身是一个构造函数*/

let set = new Set();

[2,22,2,3,2,4,5,43,3,3].map(x=>set.add(x));

for (let i of set){
  console.log(i);
}

console.log(set.add(1));
console.log(Array.from(set));
console.log(set.delete(1));
console.log(set.has(1));
set.clear();
console.log(set);
