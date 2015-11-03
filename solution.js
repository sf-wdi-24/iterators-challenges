function each (array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

function map (array, callback) {
	var newArray = [];
	for (var i = 0 ; i < array.length; i++) {
		newArray.push(callback(array[i]));
	}
	return newArray;
}

function reduce(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function filter(arr, truthTest) {
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		if (truthTest(arr[i])) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

function partition(arr, truthTest) {
	var pass = [];
	var fail = [];
	for (var i = 0; i < arr.length; i++) {
		if (truthTest(arr[i])) {
			pass.push(arr[i]);
		} else {
			fail.push(arr[i]);
		}
	}
	return pass.concat(fail);
}

function pluck(arr, key) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(arr[i][key]);
	}
	return result;
}

function where(arr, keys) {
    for (var x in keys) {
        for (var i = 0; i < arr.length; i ++) {
            if (arr[i][x] !== keys[x]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
}