
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
 
  return arr.filter(function(x) { return !!x; });
}

console.log(bouncer([7, "ate", "", false, 9, null, NaN, 123,"string"]));
