#Short but sweet. My first small javascript program. Can't wait to expand this further.
var friends = {bill :{
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address : ['Chillin ave', 'park beast', 1]},
steve :{
        firstName: "Steve",
        lastName: "Jobs",
        number: "(101) 555-5555",
        address : [ 212, 'Apple Pie']}
    
};
var list = function(i){
for (var key in friends){
console.log(key)}}

var search = function(name){
    for (var key in friends){
    if (friends[key].firstName === name){
    var fName = friends[key].firstName;
            var lName = friends[key].lastName;
            var phone = friends[key].number;
            var address = friends[key].address;
           // The "/n" is for newline
            console.log("First Name: "+fName+"\n");
            console.log("Last Name: "+lName+"\n");
            console.log("Number: "+phone+"\n");
            console.log("Address: "+address+"\n");
    return friends[key];}
    }};
    
