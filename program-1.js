function fib(n){    
  let a=0,b=1,c,i;
  if(n==0){
  return a;
  }for(i=2; i<=n; i++){
    c=a+b;
    a=b;
    b=c;
  }return a,b;
}
let n=9;
console.log(fib(n))