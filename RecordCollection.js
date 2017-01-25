
// Setup
var collection = {
    "2548": {"album": "Slippery When Wet", "artist": "Bon Jovi","tracks": [ "Let It Rock",  "You Give Love a Bad Name"] },
    "2468": {"album": "1999", "artist": "Prince", "tracks": [ "1999", "Little Red Corvette" ] },
    "1245": {"artist": "Robert Palmer",  "tracks": [ ] },
    "5439": {"album": "ABBA Gold" }
    };
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (value === "") {
    delete collection[id][prop];

  } else if(prop !== "tracks"){
      collection[id][prop] = value;
    }

    else if (collection[id].hasOwnProperty(prop)) {
      collection[id][prop].push(value);
    }

      else {
      collection[id][prop] = [value];
    }

    console.log(collection);
  return collection;
}

// Alter values below to test your code
//console.log(updateRecords(5439, "artist", "ABBA"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
var col = collection[id];

  if(!value) {
    delete col[prop];
    return collection;
  }

  if (prop === 'tracks') {
    if (col[prop]) col[prop].push(value);
    else col[prop] = [value];
    return collection;
  }

  col[prop] = value;
  //console.log(collection);
  return collection;
}
