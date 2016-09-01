
function *fibonacci() {
  let [start,end]=[0,1];
  for (;;){
    [start,end]=[end,start + end];//注意顺序【start，start+end】行不通；
    yield end;
  }
}

for (let i of fibonacci()){
  if (i>100)
    break;
    console.log(i);
  
}