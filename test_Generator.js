var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function*(a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
    console.log(a);
  }
};

for (var f of flat(arr)) {
   console.log(f);
}
// 1, 2, 3, 4, 5, 6


function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

for (let j=0;j<4;j++){
  console.log(hw.next());
}