# Iterators Lab

Tonight you'll be implementing iterator functions as an extension of the lesson from this afternoon.

**Note:** DO NOT use any built-in iterator functions. You will often be asked in interviews to implement well-known methods like this from scratch as problem-solving exercises.

## Challenges

1. Write a function called `each` that takes in an array and a callback function. `each` should iterate through all items in the array and call the callback function with each item and its index as parameters. `each` should return the original array that was passed in.








function add(num){
    return num + 2;
}

var array =[1,2,3,4,5];

function each(arr, callBack) {
  
    for (var i = 0; i < arr.length; i++) {
    arr[i] = callBack(arr[i]);
   }
   return arr ;
   

}

console.log(each(array, add));










2. Write a function called `map` that takes in an array and a callback function. `map` should iterate through all items in the array, call the callback function with each item and its index as parameters, and return a new array of the results.





function add(num) {
    return num + 5;
}


var array=[1,2,3,4,5];

    

function map(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
    
    
    }
return newArr;
}
map(array, add);








3. Write a function called reduce that takes in an array of numbers. `reduce` should return the sum of all the numbers in the array.

4. `filter(arr, truthTest)`

	```js

	function isEven(num){
		return num % 2 === 0;
	}

	filter([1, 2, 3, 4, 5, 6], isEven);

	// => [2, 4, 6]
	```

	Write a function called `filter` that takes in an array and another function (a truth test). `filter` should iterate through the array, check whether each value passes the truth test function, and return a new array containing all the values that passed.




	var array=[1,2,3,4,5,6,7,8,9,10]




function filter(arr, truthTest) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (truthTest(arr[i])) {
           newArr.push(arr[i]);
        } 
         //return newArr;
     }
     return newArr;
    
}

function isEven(num){
    return num % 2 === 0;
}

filter(array, isEven);

















5. `partition(arr, truthTest)`


	```js
	function isOdd(num){
		return num % 2 !== 0;
	}

	partition([0, 1, 2, 3, 4, 5], isOdd);
	// => [[1, 3, 5], [0, 2, 4]]
	```


Write a function called `partition` that takes in an array and another function (a truth test).  `partition` should split the array into two groups: one whose elements all pass the truth test and one whose elements all fail. It should return a new array with the two groups nested inside.






var numbers = [1,2,3,4,5,6,7,8,9,10]


function even(num) {
    return num % 2 === 0;
}


function partition (arr, truthtest) {
    var evenSteven = [];
    var oddTodd = [];
    
    for (var i = 0; i < arr.length;i++) {
        if (even(arr[i])) {
            evenSteven.push(arr[i]);
        } else {
            oddTodd.push(arr[i]);
        }
         
    }
     return [evenSteven, oddTodd];
}


partition(numbers, even);








## Stretch Challenges


6. `pluck(arr, key)`

	```js
	grandparents = [
		{first: "June", last: "Crane", age: 74},
		{first: "Jim", last: "Crane", age:76},
		{first: "Linda", "Fuentes", age: 62},
		{first: "Panfilo", "Fuentes", age: 76}
		];

	pluck(grandparents, 'first');
	// =>["June", "Jim", "Linda", "Panfilo"]
	```


	Write a function called `pluck` that takes in an array of objects and a key. `pluck` should iterate through the array, pick out the value each object has associated with the given key, and return a new array containing those values.



      grandparents = [
    {first: "June", last: "Crane", age: 74},
    {first: "Jim", last: "Crane", age:76},
    {first: "Linda", last: "Fuentes", age: 62},
    {first: "Panfilo", last: "Fuentes", age: 76}];




   
   
    
function pluck(arr, key){
  var outputArr = [];
  for (var i=0; i<arr.length; i++){
    outputArr.push(arr[i][key]);
  }
  return outputArr;
}

pluck(grandparents,"first");
























7. Optional Stretch: `where(arr, properties)`

	```js

  events = [
		{location: "Yerba Buena", day: "Wednesday", time: "0900"},
		{location: "GA", day: "Tuesday", time: "1830"},
		{location: "Blue Bottle", day: "Tuesday", time: "1100"},
		{location: "GA", day: "Thursday", time: "1830"},
		{location: "GA", day: "Thursday", time: "0917"}
		];

	where(events, {time: "1830", location: "GA"});
	// => [
	//			{location: "GA", day: "Tuesday", time: "1830"},
	//			{location: "GA", day: "Thursday", time: "1830"}
	//	  ]
	```


	Write a function called `where` that takes an array of objects and another object. `where` looks through each object in the array, returning a new array containing the objects that match *every* key-value pair given in the second argument.

	Hint: Remember looping through objects with "for in" loops and "hasOwnProperty"? If not, you'll need to look it up!
