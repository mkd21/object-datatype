let obj = {
    Name : "Mayank",
    Profession : "Developer",
}

obj.age = 26;



// let's say if we have to update a value whose key contains Dash(-)

// ex = full-address  aisa kuch key hai to usko kaise update kroge?

// obj.full-address = "Bhagalpur";           ye to hoga nhi error ayega


// to do it we will need bracket notation 

obj["full-address"] = "Bhagalpur";
console.log(obj);


// to access it 

console.log(obj["full-address"]);