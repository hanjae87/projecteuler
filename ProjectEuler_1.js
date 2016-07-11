var solution1 = function(integer) {
  var sum = 0;
  for (var i = 0; i < integer; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(solution1(1000));