const obj = {
    1 : 4,
    2 : 6,
    3 : 10,
    "type" : "clothes"
}

// console.log(obj);

// can be played by the value of object 
// for(let i = 1; i<=3; i++)
// {
//     obj[i] = i + 1;
// }


// this will iterate on whole object and set the value of i with each key--> last wala string h fir v uspr iterate krega aur value me type hi assign kr dega

// let count = 0;
// for(let i in obj)
// {
//     obj[i] = i;
//     count++;
// }
// console.log(obj);
// console.log(count);

// obj[1] = 34;
// obj["type"] = "bangles";
// obj.type = "jewellery";

// console.log(obj);


                 // assigning values using loop 

                // jb bhi assign krna hai value har index to wo array type se hoga wo kaam [] bracket lga ke 

                // (.) lga ke kya nhi? 

// let obj1 = {};
// let count = 0;
// for(let i = 1; i <=5; i++)
// {
//     obj1[i] = count;
//     count++;
//     console.log(obj1);
// }

// console.log(obj1);



let obj2 = {1 : "Mayank" , 2 : "SDE" , 3 : "BGP" , 4 : "27"};

// for(let i in obj2)
// {
//     obj2.i = "Yoooo";        // ye krne se har index pr jake changes nhi hoga bs last me jake object ka key add hoga i : yooo bs
// }
for(let i in obj2)
{
    obj2[i] = "Yoooo";         // ye krne se poore obj pr jake uska value ko yooo bna dega. Just like an Array 
}

console.log(obj2);