var arr = [1, [[2, 3], 4], [5, 6]];

function *a(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      yield* a(arr[i]);//不是数字说明需要解析，所以我们暂停在a(arr[i])的状态；
    }
    else {
      yield arr[i];//是数字，所以我要返回这个数字。
    }
  }
}

for (let f of a(arr)){
  console.log(f);
}