module.exports = function average(numbers) {
  var s = 0;
  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i];
    s += n;
  }
  return s / numbers.length;
};
