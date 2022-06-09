function sum(a, b) {
  return a + b;
}


function calcular(a, b, callback) {
  return callback(a, b);
}

console.log(calcular(1, 2, sum));

function date (callback){
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate (dateNow){
  console.log(dateNow)
}

date(printDate);