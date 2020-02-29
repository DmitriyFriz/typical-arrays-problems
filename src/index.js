
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) return Math.min.apply(null, array);
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) return Math.max.apply(null, array);
  return 0;  
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    return array.reduce((sum, item) => sum + item , 0) / array.length;
  }   
  return 0;
}
