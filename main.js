
//1
function each(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = func((arr[i]));
	}
	return arr;
}


//2
function map(arr, func){
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr[i] = func((arr[i]));
	}
	return newArr;
} 


//3 
function reduce(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum = arr[i] + sum;
	}
	return sum;
}


//4
function filter(arr, truthTest) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (truthTest(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

//5
function partition(arr, truthTest){
	trueArr = [];
	falseArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (truthTest(arr[i])) {
			trueArr.push(arr[i]);
		} else {
			falseArr.push(arr[i]);
		}

	}
	return [trueArr, falseArr];

}

//Stretch 1

function pluck(arr, key) {
	newArr = [];
	for (var i = 0; i < arr.length; i++) {
	    var obj = arr[i];
	    newArr.push(obj[key]);
	}

	return newArr;
}


