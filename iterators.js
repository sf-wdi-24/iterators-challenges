function each(arr, funktion) {
	for (var i=0; i<arr.length; i++) {
		arr[i] = funktion(arr[i]);
	}
	return arr;
}

function map(arr, funktion) {
	var arrNew = [];
	for (var i=0; i<arr.length; i++) {
		arrNew.push(funktion(arr[i]));
	}
	return arrNew;
}

function reduce(arr) {
	sum = 0;
	for (var i=0; i<arr.length; i++) {
		if (typeof(arr[i]) === 'number') {
			sum += arr[i];
		} else {
			alert("Array contains elements that are not numbers.");
			return 'undefined';
		}
	}
	return sum;
}

function filter(arr, truthTest) {
	var newArr = [];
	for (var i=0; i<arr.length; i++) {
		if (truthTest(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function partition(arr, truthTest) {
	var trueArr = [];
	var falseArr = [];
	for (var i=0; i<arr.length; i++) {
		if (truthTest(arr[i])) {
			trueArr.push(arr[i]);
		} else if (!truthTest(arr[i])) {
			falseArr.push(arr[i]);
		}
	}
	return [trueArr, falseArr];
}

function pluck(arr, key) {
	var newArr = [];
	for (i=0; i<arr.length; i++) {
		newArr.push(arr[i][key]);
	}
	return newArr;
}

function where(arr, properties) {
	var newArr = arr;
	for (var j in properties) {
    for (i=newArr.length - 1; i>=0; i-=1) {
      if (newArr[i][j] != properties[j]) {
        newArr.splice(i, 1);
 			}
		}
	}
	return newArr;
}