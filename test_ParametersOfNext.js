function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

/*
由于 next 方法的参数表示上一个 yield 语句的返回值，
所以第一次使用 next 方法时，不能带有参数。
V8 引擎直接忽略第一次使用 next 方法时的参数，
只有从第二次使用 next 方法开始，参数才是有效的。
*/

var a = foo(5);

console.log(a.next());
console.log(a.next(12));
console.log(a.next(13));

