const add = require("./subtract");


module.exports.subtractOne =  function(num) {
  return add(num, 1);
}

module.exports.subtractFive =  function(num) {
    return add(num, 5);
}

module.exports.subtractTen =  function(num) {
    return add(num, 10);
}