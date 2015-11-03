////////////////
// Question 1 //
////////////////

function each(array,callback) {
	for (var i = 0; i < array.length; i++) {
		array[i] = callback(array[i]);
	}
	return array;
}

////////////////
// Question 2 //
////////////////

function map(array, callback){
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray = callback(array[i]);
	}
	return newArray;
}

////////////////
// Question 3 //
////////////////

function reduce (arrayNum){
	var sumNum = 0;
	for (var i = 0; i < arrayNum.length; i++) {
		sumNum += arrayNum[i];
	}
	return sumNum;
}

////////////////
// Question 4 //
////////////////

function filter(array,truthTest) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (truthTest(array[i])) {
			newArray.push(array[i]);
		}		
	}
	return newArray;
}

////////////////
// Question 5 //
////////////////

function partition (array,truthTest) {
	var combineArray = [];
 	var falseArray = [];
 	var trueArray = [];
	for (var i = 0; i < array.length; i++) {
		if (truthTest(array[i])) {
			trueArray.push(array[i]);
		}
		else {
			falseArray.push(array[i]);
		}
	}
	combineArray = [trueArray,falseArray];
	return combineArray;
}

/////////////////////////
// Stretch Challenge 1 //
/////////////////////////

function pluck (array, key) {
	var pluckName = [];
	for (i = 0; i < array.length; i++) {
		pluckName.push(array[i][key]);
	}
	return pluckName;
}

/////////////////////////
// Stretch Challenge 2 //
/////////////////////////

function where (array, properties) {
	var newArray = [];
	for (var key in array) {
	    if (array.hasOwnProperty(key)) {
	    	newArray.push(array[x]);
	    }
	}
	return newArray;
}