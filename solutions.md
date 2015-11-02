# Solutions

## each
```
// `each` takes in an array and a callback function
var each = function(list, callback) {
  // iterates through each item in array
  for (var i = 0; i < list.length; i += 1) {
    // calls callback function with item and index
    callback(list[i], i);
  }
  // returns original array
  return list;
};
```

## map
```
// `map` takes in an array and a callback function
var map = function(list, callback) {
  var mappedList = [];
  // iterates through each item in array
  for (var i = 0; i < list.length; i += 1) {
    // calls callback function with item and index (adds result to `mappedList`)
    mappedList.push(callback(list[i], i));
  }
  // returns mapped array of results
  return mappedList;
};
```

## reduce
```
// `reduce` takes in an array of numbers
var reduce = function(numList) {
  var sum = 0;
  for (var i = 0; i < numList.length; i += 1) {
    sum += numList[i];
  }
  return sum;
};
```

## truthTest
```
function filter(arr, truthTest){
  var outputArr = [];
  for (var i=0; i<arr.length; i++){
    if truthTest(arr[i]){
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
}
```

## partition
```
function partition(arr, truthTest){
  var trueArr = [];
  var falseArr = [];
  for (var i=0; i<arr.length; i++){
    if truthTest(arr[i]){
      trueArr.push(arr[i]);
    } else {
      falseArr.push(arr[i]);
    }
  }
  return [trueArr, falseArr];
}
```
## pluck
```
function pluck(arr, key){
  var outputArr = [];
  for (var i=0; i<arr.length; i++){
    outputArr.push(arr[i][key]);
  }
  return outputArr;
}

function where(arr, properties){
  var outputArr = [];
  var obj;
  for (var i=0; i<arr.length; i++){
    obj = arr[i];
    for (key in obj){
      if (obj.hasOwnProperty(key) && obj[key] === properties[key]){
          outputArr.push(obj);
      }
    }
  }
  return outputArr;
}
```
