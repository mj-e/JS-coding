//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

//function repeatStringNumTimes(str, num) {
//  if (num > 0){
//    str = '"' + str.repeat(num) + '"';
//    console.log(str);
//    return str;
//  }
//  if (num <= 0){
//  	console.log('""');
//    return '""';
//  }
// 
//  //console.log(num>0 ? str+repeat(str,num-1) : "");
//  //return num>0 ? str+repeat(str,num-1) : "";   
//}
//
//repeatStringNumTimes("abc", 2);


function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  
  return str.repeat(num);

}
repeatStringNumTimes("*", 3);