
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  console.log(arr.slice(howMany));
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
