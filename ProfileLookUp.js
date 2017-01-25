
//Setup
var contacts = [
    { "firstName": "Akira",     "lastName": "Laine",    "number": "0543236543", "likes": ["Pizza", "Coding", "Brownie Points"] },
    { "firstName": "Harry",     "lastName": "Potter",   "number": "0994372684", "likes": ["Hogwarts", "Magic", "Hagrid"] },
    { "firstName": "Sherlock",  "lastName": "Holmes",   "number": "0487345643", "likes": ["Intriguing Cases", "Violin"] },
    { "firstName": "Kristian",  "lastName": "Vos",      "number": "unknown",    "likes": ["Javascript", "Gaming", "Foxes"]  }
    ];

function lookUpProfile(firstName, prop){
// Only change code below this line
for(var i=0; i<contacts.length; i++) {
  if(contacts[i].firstName === firstName) {
    if(contacts[i].hasOwnProperty(prop)) {
      console.log(contacts[i][prop])  
      return contacts[i][prop];
    }
    else {
      console.log("No such property")  
      return "No such property";
        }
     }
  }
    console.log("No such contact")
    return "No such contact";
}
lookUpProfile("Harry", "likes");

