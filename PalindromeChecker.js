
function palindrome(str) {
  // Good luck!

var lwrStr = str.toLowerCase(); // 1st step all lower case
var stripped = lwrStr.replace(/[^0-9a-z]/g, ''); //2nd step remove non characters

var strArr = []; // create an array to store charracters
var strArr = stripped.split("").join(""); // this splits string into array then joins into string

var revArr = []; // create an array to store reverse string

for (var i = strArr.length -1; i >=0; i--) {  // loop through array backwards
    revArr.push(strArr[i]); // store into new array reverse letters
}
revArr = revArr.join(""); // Join array elements into new string

console.log(strArr);
console.log(revArr);


  if (strArr === revArr){ //compare new strings
    console.log("True");
    return true;
  }
  else
    console.log("False");
    return false;
}

palindrome("sas");
