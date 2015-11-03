// 1.
// var thisArray = [1,2,3,4,5];
// var callThis = function (val, ind) {
// 	return 'Value is ' + val + ' Index is ' + ind;
// }

// var each = function (arr, call) {
// 	for(i = 0; i < arr.length; i++) {
// 	var b = call(arr[i],i);
// 	}return arr;
// }
// console.log(each(thisArray, callThis));

// 2.
// var thisArrayTwo = [1,2,3,4,5]; 
// var callThisTwo = function (val, ind) {
// 	return val * val
// }
// var map = function (arr, call) {
// 	var newArr = []
// 	for (i = 0; i < arr.length; i++) {
// 		newArr.push(callThisTwo(arr[i], i));
// 	}return newArr;
// }

// console.log(map(thisArrayTwo, callThisTwo));

// 3.
// var thisArrayThree = [1,3,4,5];
// var reduce = function (arr) {
// 	var sum = 0;
// 	for (i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}return sum;
// }
// console.log(reduce(thisArrayThree));

// //4. 
// var thisArrayFour = [1,2,3,4,5,6,7,8]; 
// var checkEven = function(val) {
// 	return val % 2 === 0
// }
// var filter = function (arr, truth) {
// 	var evenArray = [];
// 	for (i = 0; i < arr.length; i++){
// 		if (truth(arr[i])) {
// 			evenArray.push(arr[i]);
// 		}
// 	}return evenArray;
// }
// console.log(filter(thisArrayFour, checkEven));

// // 5.
// var thisArrayFive = [0,1,2,3,4,5,6,7];
// var checkOdd = function (val) {
// 	return val % 2 !== 0
// }
// var partition = function(arr, truth) {
// 	var oddArray = [];
// 	for (i = 0; i < arr.length; i++) {
// 		if (truth(arr[i])) {
// 			oddArray.push(arr[i]);
// 		}
// 	}return oddArray;
// }
// console.log(partition(thisArrayFive, checkOdd));



///Stretch Challenges
// 6. 









