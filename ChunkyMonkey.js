// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups (arr, size) {

var newArr = [];
while (arr.length) {
newArr.push(arr.splice(0, size));
}
console.log(newArr);
return newArr;
}

chunkArrayInGroups([0,1,2,3,4,5,6,7,8,9], 3) ;

// function chunkeyArray(arr, size){

// 	var chunk = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		chunk.push(arr.splice(0,size));
// 	}
// 	console.log(chunk);
// 	return chunk;
// }
// chunkeyArray([0,1,2,3,4,5,6,7,8,9], 3) ;

