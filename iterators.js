// Dave Sloan

// 1. Each function
// Loop through an array and do something to it, like add text to the array

// Write a function called each that takes in an array 
// and a callback function. each should iterate through 
// all items in the array and call the callback function 
// with each item and its index as parameters. each should 
// return the original array that was passed in.

var array = [2, 4, 6, 8];


var addOne = function(num) {
    return num +1; 
};

var each = function(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
    arr[i]=callback(arr[i]);
}
return arr; 

};
console.log(each(array, addOne));

// 2. Map function
//  Takes an old array, does something to it and outputs an new array


/// Write a function called map that takes in an array and 
// a callback function. map should iterate through all 
// items in the array, call the callback function with 
// each item and its index as parameters, and return a 
// new array of the results.


var array = [3, 5, 7, 9];

var addOne = function(num) {
    return num +1; 
};

var map = function(arr, callback) {
    var newArray = []; 
    for (var i = 0; i < arr.length; i++) {
    newArray[i] = callback(arr[i]);
}
return newArray; 

};
map(array, addOne);

// 3. Reduce array
// Takes all the elements in the array and does something to them together, like multiplies them together. 

// 3. Reduce array
// Takes all the elements in the array and does something 
// to them together, like multiplies them together. 

var array = [1, 2, 3, 4];

var add = function(arr) {
    var sum = 0; 
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
}
return sum; 
};

add(array);


// 4. Filter array - truth test
// Takes an array and filters it down to a subset of the original array

var array = [15, 20, 25, 30, 35]; 

function isEven (num) {
    return num % 2 === 0;
}

var filter = function(arr, truthTest) {
    var newArray = []; 
    for (var i = 0; i < arr.length; i++) {
        if (truthTest(arr[i])) {
    newArray.push(arr[i]);
}
}
return newArray; 
};
filter(array, isEven);


// 5. Partition array
// Takes an array and splits the array into groups, like values that pass the test and values that
// don't pass the test.  For example if the test is 'names with four letters' then names like 'dave' pass and 
// names like 'david' don't pass.  Output is an array with two nested arrays, ie var array = [[1,2,3] [4,5,6]];

var array = [15, 20, 25, 30, 35]; 

function isOdd (num) {
    return num % 2 !== 0;
}
var partition = function(arr, truthTest) {
   // var comboArray = [];
    var oddNums = [];
    var evenNums = []; 
    for (var i = 0; i < arr.length; i++) {
        if (truthTest(arr[i])) 
            oddNums.push(arr[i]);
        else; 
            (truthTest(arr[i]) === false)
            evenNums.push(arr[i]);
}
return [oddNums, evenNums];
};


partition(array, isOdd);

/// But for some reason this adds odd numbers to my second array. 