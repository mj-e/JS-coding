
function mutation(arr) {

  var string_1 = arr[0].toLowerCase().split("");
  var string_2 = arr[1].toLowerCase().split(""); //
  var result = 0;

  for (var i in string_2) {
    if(string_1.indexOf(string_2[i]) > -1){
      result++;
    }
  }
  console.log(result);
  return result == string_2.length;
}

mutation(["Mary", "AaAaAa"]);


/**
* Note 1:
* The indexOf() method returns the first index at which a given element
* can be found in the array, or -1 if it is not present. so that is the reason * behind the "string_1.indexOf(string_2[i]) > -1" comparison.
* Note 2:
* Always keep in mind that you should loop with the object
* that you want to completely check in your for/in statement.
* In our case, that was the string_2 NOT the string_1. As I qoute:
* "Return true if the string in the FIRST element
*  of the array contains all of the letters of the
*  string in the SECOND element of the array."
***/
