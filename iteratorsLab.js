array = [1,2,3];
function functionA(a){
	return a*2;
}

// Each
var each = function(arr, callback){
	for(var i = 0; i<arr.length; i++){
		var result = callback(arr[i]);
		arr[i] = (result/2);
		return arr;
	}
	return newArr;
};
console.log(each(array,functionA));

// Map
var map = function(arr, callback){
	var newArr = [];
	for(var i = 0; i<arr.length; i++){
		var result = callback(arr[i]);
		newArr.push(result/2);
		return newArr;
	}
	return newArr;
};
console.log(each(array,functionA));

// Reduce
var reduce = function(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++)
	{
	    count += arr[i];
	}
	return "Sum: " + count;
};
console.log(reduce(array));

// Filter
function isEven(num){
    return num % 2 === 0;
}
function filter(arr, callback){
	var newArr = [];
	for(var i = 0; i<arr.length; i++){
		if(callback(arr[i]) === true){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(filter([1, 2, 3, 4, 5, 6], isEven));

// Parition
function isOdd(num){
    return num % 2 !== 0;
}
function partition(arr, callback){
	var newArr = [];
	var otherArr = [];
	for(var i = 0; i<arr.length; i++){
		if(callback(arr[i]) === true){
			newArr.push(arr[i]);
		} else {
			otherArr.push(arr[i]);
		}
	}
	var newestArr = [];
	newestArr.push(newArr);
	newestArr.push(otherArr);
	return newestArr;
}
console.log(partition([0, 1, 2, 3, 4, 5], isOdd));

// Pluck
grandparents = [
    {first: "June", last: "Crane", age: 74},
    {first: "Jim", last: "Crane", age: 76},
    {first: "Linda", last: "Fuentes", age: 62},
    {first: "Panfilo", last: "Fuentes", age: 76}
    ];
function pluck(arr,key){
	var newArr = [];
	for(var i = 0; i<arr.length; i++){
		newArr.push(arr[i][key]);
	}
	return newArr;
}
console.log(pluck(grandparents, 'first'));

// Where
events = [
      {location: "Yerba Buena", day: "Wednesday", time: "0900"},
      {location: "GA", day: "Tuesday", time: "1830"},
      {location: "Blue Bottle", day: "Tuesday", time: "1100"},
      {location: "GA", day: "Thursday", time: "1830"},
      {location: "GA", day: "Monday", time: "0917"},
      {location: "GA", day: "Friday", time: "0917"},
      {location: "Blue", day: "Thursday", time: "0917"},
      {location: "Michigan", day: "Wednesday", time: "0917"},
      {location: "GA", day: "Saturday", time: "1830"},
      {location: "GA", day: "Thursday", time: "1111"}
      ];

function where(arr, properties){
	var newArr = [];
	var propOne = Object.keys(properties)[0];
	var propTwo = Object.keys(properties)[1];
	for(var x in arr){
		if((arr[x][propOne] === properties[propOne]) && (arr[x][propTwo] === properties[propTwo])){
			newArr.push(arr[x]);
		}
	}
	return newArr;
}
console.log(where(events, {time: "1830", location: "GA"}));

function whereWithMultiProp(newArr, properties){
	var indexArray = [];
	for(var x in newArr){
		for(var i in properties){
			if(newArr[x][i] !== properties[i]){
				if(indexArray.indexOf(x) === -1){
					indexArray.push(x);
				}
			}
		}
	}
	var iArray = indexArray.reverse();
	for(var y in iArray){
		newArr.splice(iArray[y],1);
	}
	return newArr;
}
console.log(whereWithMultiProp(events, {time: "1830", location: "GA"}));