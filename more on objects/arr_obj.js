// let arr = [

//     {"id": 2, "title": 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3, description: "Slim-fitting style"}, 

//     {"id": 4, "title": 'Mens Casual Premium Slim Fit T-Shirts ', price: 2162.3, description: "Slim-fitting style"} , 

//     {"id": 8, "title": 'Mens Casual Premium Slim Fit T-Shirts ', price: 2.3, description: "Slim-fitting style"}
// ]

// // i thougt ki arr.price will work but i was wrong 
// // array me hai na toh haar index pr jake uska property access krna hoga 
// // direct kaise access kroge
// // isiye looping krna hai

// arr.forEach(index=> {

//     console.log(index.price);
// });


let arr = [

    {"id": 2, "title": 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3, description: "Slim-fitting style", "Quantity" : 1}, 

    {"id": 4, "title": 'Mens Casual Premium Slim Fit T-Shirts ', price: 2162.3, description: "Slim-fitting style" , "Quantity" : 13} , 

    {"id": 8, "title": 'Mens Casual Premium Slim Fit T-Shirts ', price: 2.3, description: "Slim-fitting style" , "Quantity" : 18}
]

let obj = {};

arr.forEach( element => {
    // element ek iterator hai jo haar index pr jyega bas aur kuch nhi
    // what's happening here is

//    1st iteration --> arr ke jo 0th index pr jo id hai uske saath arr ke andar jo quantity hai usko set krdo new object me {2 : 1}
//    2nd iteration --> arr ke jo 1th index pr jo id hai uske saath arr ke andar jo quantity hai usko set krdo new object me {4 : 13}
//    1st iteration --> arr ke jo 0th index pr jo id hai uske saath arr ke andar jo quantity hai usko set krdo new object me {8 : 18}

    obj[element.id] = element.Quantity;

});

console.log(obj);

for(let i in obj)
{
    console.log(obj[i]);
}