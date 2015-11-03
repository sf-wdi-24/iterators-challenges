
// 1. each 

function each(array, callback) {
    for (var i = 0; i < array.length; i++) { 
    	callback(array[i]);  
	}
}
each([2, 4, 6, 8], function(num) {
	console.log('number: ' + num);
});


// 2. map

function map(array, callback) {
	var output = [];
	for (var i = 0; i < array.length; i++) {
    	output.push(callback(array[i]));
	}
	return output;
}

var arrayOne = [2,3,4];
console.log('arrayOne: ');
console.log(arrayOne);
console.log('arrayPlusTwo: ');
var arrayPlusTwo = map(arrayOne, function (num) {
	return num + 2;
});
console.log(arrayPlusTwo);


// 3. reduce 

var nums = [1,2,3,4,5];
	
function reduce(nums) {
	var sum = 0;
	for (var i = 0; i < nums.length; i++) {
		sum = nums[i] + sum;
	}
	return sum;
}
console.log(reduce(nums));



//4. filter   filter(arr, truthTest)


function filter(array, truthTest) {
	var output = [];
	for ( var i = 0; i <array.length; i++) {
		if (truthTest(array[i]) === true) {
			output.push(array[i]);
		}
	}
	return output;
}
function isEven(num){
    return num % 2 === 0;
}

filter([1, 2, 3, 4, 5, 6], isEven);

// => [2, 4, 6]


// 5.  partition(arr, truthTest)


function partition(array, truthTest) {
	var pass = [];
	var fail = [];
	for (var i = 0; i <array.length; i++) {
		if (truthTest(array[i]) === true) {
			pass.push(array[i]);
		}	else {
			fail.push(array[i]);
		}
	}	
	return [pass, fail];
} 
function isOdd(num){
    return num % 2 !== 0;
}

partition([0, 1, 2, 3, 4, 5], isOdd);
// => [[1, 3, 5], [0, 2, 4]]



//stretch

// 1.  pluck(arr, key)

grandparents = [
    {first: "June", last: "Crane", age: 74},
    {first: "Jim", last: "Crane", age:76},
    {first: "Linda", last: "Fuentes", age: 62},
    {first: "Panfilo", last: "Fuentes", age: 76}
    ];

pluck(grandparents, 'first');
// =>["June", "Jim", "Linda", "Panfilo"]

function pluck(array, key) {
	var output = [];
	for (var i = 0; i < array.length; i++) {
    	output.push(array[i][key]);
	}
	return output;
}


// 2.  where(arr, properties)

events = [
      {location: "Yerba Buena", day: "Wednesday", time: "0900"},
      {location: "GA", day: "Tuesday", time: "1830"},
      {location: "Blue Bottle", day: "Tuesday", time: "1100"},
      {location: "GA", day: "Thursday", time: "1830"},
      {location: "GA", day: "Thursday", time: "0917"}
      ];

  where(events, {time: "1830", location: "GA"});
  // => [
  //          {location: "GA", day: "Tuesday", time: "1830"},
  //          {location: "GA", day: "Thursday", time: "1830"}
  //    


//change truthTest to object

  // function where() {
// function filter(array, truthTest) {
// 	var output = [];
// 	for ( var i = 0; i <array.length; i++) {
// 		if (truthTest(array[i]) === true) {
// 			output.push(array[i]);
// 		}
// 	}
// 	return output;

// }
