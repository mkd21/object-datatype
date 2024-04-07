// now by making keys like that we made the keys dynamic 

let idType = "collegeId id";
let name = "StudName";

let obj = {
    [idType] : "AZ12345",
    [name] : "Mayank",
    Position : "SDE1",
    age : 27,
    greet : function(){
        console.log(`${idType} ${name}`); 
    }
};

obj.greet();