
function findLongestWord(str) {
  

var lwrStr = str.toLowerCase();
var strArr = lwrStr.split(' ');  // Splits words into array

console.log(lwrStr);
console.log(strArr);

var sorted = strArr.sort(function(a,b){return b.length - a.length;}) //sorts elements in array longest first

	console.log(sorted);
	console.log(sorted.length);
	console.log(sorted[0].length);
	return sorted[0].length;
}

findLongestWord("The brown FoX jump oVeLKIJUqiqiiq the fence");

