console.log(typeof true); // Boolean
console.log(typeof 10); // Number
console.log(typeof function() { }); // Function -> not primitive
console.log(typeof 1.10); // Number
console.log(typeof 't'); // String
console.log(typeof 'yes'); // String
console.log(typeof "t"); // String
console.log(typeof "no"); // String
console.log(typeof {}); // Object -> not a primitive type
console.log(typeof `y`); //  String
console.log(typeof null); // Object - not Null - For legacy reasons
console.log(typeof undefined); // Undefined
console.log(typeof 95958764319175083126125962317526104195876431917508312612596239587643191750831261259623175261041497281617526104149728164972816876431917508312612596231752610414972816); // Number
// A number can be made a BigInt, using primitive wrapper object
console.log(typeof BigInt(5136)); // BigInt
