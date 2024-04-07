// const target = {a : 1 , b : 2};
// const source = {b : 3 , c : 4};

// const mergedObject = Object.assign({} , target , source);

// console.log(mergedObject);


// ques .  Given an object representing a student , write a function to add a new subject with it's corresponding grade to the student's record . Also check if grades property is present or not.Also


// function addSubject(student , subject , marks)
// {
//     if(!student.grades)
//     {
//         student.grades = {};
//     }

//     student.grades[subject] = marks;
//     console.log(student.grades[subject]);
// }


// let student = {

//     name : "Bod", 
//     age : 20,
//     grades : {
//         math : 90, science : 85, History : 88
//     }

// };

// addSubject(student , "physics" , 97);
// addSubject(student , "commerce" , 92);

// console.log(student);




// ques write a function that compares two objects to determine if they have same properties and values 

// function compareObj(obj1 ,obj2)
// {
//     let ob1 = Object.keys(obj1).length; 
//     let ob2 = Object.keys(obj2).length; 

//     if(ob1 != ob2)
//     {
//         return false;
//     }

//     for(let i in obj1)
//     {   
//         if(obj1[i] != obj2[i])
//         {
//             return false;
//         }
//     }
//     return true;
// }

// let objA = {name : "Alice" , age : 26 , city : "New York"};
// let objB = {name : "Alice" , age : 26 , city : "New York"};
// let objC = {name : "Bob" , age : 30 , city : "San Francisco"};


// console.log(compareObj(objA , objB));   // expected Op true
// console.log(compareObj(objB , objC));   // expected Op false




// write a function that transforms an array of an objects into an objects where keys are the object's id's

function arrToObj(objArr)
{
    const newObj = {};

    for(let index of objArr)
    {
        // console.log(index);

        newObj[index.id] = index;
    }

    console.log(newObj);
}


let inputArr = [

    {id : 1 , name : "Alice"},       // 0th index
    {id : 2 , name : "Bod"},        // 1st index
    {id : 3 , name : "Charlie"},   // 2nd index

];

// expected op  { "1" : {id : 1 , name : "Alice"} , "2" : {id : 2 , name : "Bod"} , "3" : {id : 3 , name : "Charlie"} };

arrToObj(inputArr);