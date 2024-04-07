// Accessing object

let x = {name : "Mayank", age : 25 , address : "Bihar"};

let y = {
        name : "Mayank",
        Designation: "SDE 1 at Amazon",
        age : 25,
        Marks : 25
};

// console.log(x.name);

// console.log(y["Designation"]);


// updating objects are possible....

x["name"] = "Mayank Deep";
y.Designation = "SDE 2 at Google";

// console.log(x["name"]);
// console.log(y.Designation);



// delete key value pair from object 


delete y.Marks;

delete x["address"];

console.log(y);
console.log(x);