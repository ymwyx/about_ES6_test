/*set是一种新的数据结构，类似数组，但无重复值。set本身是一个构造函数*/

let set = new Set();

[2,22,2,3,2,4,5,43,3,3].map(x=>set.add(x));

for (let i of set){
  // console.log(i);
}

/*
console.log(set.add(1));
console.log(Array.from(set));
console.log(set.delete(1));
console.log(set.has(1));
set.clear();
console.log(set);
*/

/*这是一种去重方法*/

let arr=[2,3,2,2,3,5,6,6,3];
// console.log(Array.from(new Set(arr)));

/*并转化为数组～*/


/*set的遍历共有4种方法*/
for (let i of set.keys()){
  console.log(i);
}

for (let i of set.values()){
  console.log(i);
}

/*以上两种方法是因为set的键值对相同。*/

for (let i of set.entries()){
  console.log(i);
}
/*entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。*/






