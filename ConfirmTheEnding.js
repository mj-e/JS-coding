//////Check if a string (first argument, str) ends with the given target string (second argument, target).//
//////
////This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use ////one of the JavaScript substring methods instead.

//let confirmEnding = (str, target) => str.substr(-target.length,[str]) === target;

function confirmEnding(str, target) {

str = str.toLowerCase();
target = target.toLowerCase();

	console.log(str.substr(-target.length));
	
    if (str.substr(-target.length)===target){	// if looking back at str the length of target.length = target its good
    	console.log("true");
    	return;
    }
    console.log("false");
    return;
}

confirmEnding("Hello matt", "Hello MAtt");