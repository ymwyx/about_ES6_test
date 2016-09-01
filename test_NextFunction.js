
/*
 * 如果next函数的参数为空，reset就永远是undefined，如果为true,就等于把1赋给reset，
 * i的值就会变化，从下一个起点开始++；
 */

function* f() {
  for(var i=0; true; i++) {
    var reset = yield i;
    if(reset) { i = -2; }
    console.log(i);
  }
}

var g = f();

for (let j=0;j<3;j++){
  console.log(g.next());
}

console.log(g.next(true)); // { value: 0, done: false }
console.log(g.next());
console.log(g.next());
console.log(g.next());


for (let k=0;k<3;k++){
  g.next();
}
g.next(true)
for (let k=0;k<3;k++){
  g.next();
}