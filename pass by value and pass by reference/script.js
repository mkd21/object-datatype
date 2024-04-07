// example of pass by value 

let a = 30;

function foo(a)
{
    a = 20;
}

foo(a);
// console.log(a);


// example of pass by reference 

let obj1 = {name : "Mayank" , Age : 26 , Position : "SDE1"};

// let objCopy = obj1;

// objCopy.Position = "SDE3";

// console.log("details of copied object",objCopy);
// console.log("details of original object",obj1);

// we can see that the changes are done in the original object also even if we have done changes in copied object. By this we can state that the actual memeory location gets copied which result in change of data in original object
// this is called pass by reference

// to avoid this we have some object methods 
//Object.assign();
// spread operator (...)

                      // copied obj , original obj
let objCopy = Object.assign({} , obj1);

objCopy.name = "Deep";   // all changes will be only in copied object and not the original one
// console.log(objCopy);
// console.log(obj1);


// quiz 

let obj3 = {name : "Mayank"};
let obj4 = {name : "Mayank"};

const isTrue = obj3 == obj4 ? true : false;
// const isTrue = obj3 === obj4 ? true : false;

console.log(isTrue);  // will always be false because they have the different memory location

// but 

let obj5 = obj3;

const res = obj5 === obj3 ? true : false;

console.log(res);