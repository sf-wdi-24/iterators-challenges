//***CHALLENGES***

// Write a function called each that takes in an array and a callback function. 
var each = function (arr, callback){
// each should iterate through all items in the array
	for (var i = 0; i < each.length; i++){
 // call the callback function with each item its index as parameters.		
		callback(arr[i], i);
}
// each should return the original array that was passed in.
	return(each); 
}; 

//////////////////////////////////////////////////////////////////////////////////////
// Write a function called map that takes in an array and a callback function. 
var map = function (arr, callback){
	var arrlist = []; 
// map should iterate through all items in the array, 
	for (var i = 0; i < map.length; i++){
// call the callback function with each item and its index as parameters, 
	arrlist.push(callback(arr,[i], i)); 
}
// and return a new array of the results.
	return arrlist;
};
 
////////////////////////////////////////////////////////////////////////////////////
// Write a function called reduce that takes in an array of numbers. 
var reduce = function (arr){
	var arrSum = 0;
	for (var i = 0; i < arrSum.length; i++){
		sum+= arr[i]; 
	}

// reduce should return the sum of all the numbers in the array.	
	return arrSum; 
};

//////////////////////////////////////////////////////////////////////////////////////
// Write a function called filter that takes in an array and another function 
// (a truth test). filter should iterate through the array, check whether each 
// value passes the truth test function, and return a new array containing all 
// the values that passed.

var filter = function (arr, truthTest){
	var anotherArr = [];
	for (var i = 0; 0 < arr.length; i ++){
		if truthTest(arr[i]) {
			anotherArr.push(arr);
		}
	};

