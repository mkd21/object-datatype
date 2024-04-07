let obj = {
    name : "Mayank",
    age : 27,
    qualification : "Master's",
    Job : "SDE",
    Company : "Atlassian"
};


// console.log(obj.name);           // using dot notation
// console.log(obj["age"]);           // using bracket notation



// any special reason why this bracket notation was created ?   --> yes there is a reason

let obj1 = {
    Name : "Mayank",
    "Full-Name" : "Mayank Deep"
    // Full-name : "Mayank Deep"    // pahle to this will throw an error using dash(-) is not allowed without string 
};

// now to access the dashed key we will need the bracket notation 

// console.log(obj1.Full-Name);   // will not be able to access the values

// that's why bracket notation was used 
console.log(obj1["Full-Name"]);   // will not be able to access the values