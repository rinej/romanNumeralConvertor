var config = require('./config.json');

module.exports = function(int) {
  var letters = sortObjectByValue(config.letters);

  var result = '';
  for(var i = 0; i< letters.length; i++){
    var element = letters[i];
    var arabicValue = parseInt(element[1]);
    var romanValue = element[0];

    while( int >= arabicValue){
      result += romanValue;
      int -= arabicValue;
    }
  }
  return result;
};

function sortObjectByValue(unsortedObject) {
  var sortedObject = [];
  for (var element in unsortedObject)
  sortedObject.push([element, unsortedObject[element]])
  sortedObject.sort(
    (a, b) => {
      return b[1] - a[1]
    }
  )

  return sortedObject;
}
