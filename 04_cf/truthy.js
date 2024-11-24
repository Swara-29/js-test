//const userEmail = "swara@gmail.com"
const userEmail = []

if (userEmail) {
    console.log("got the user email ");
} else {
    console.log("dont have user email")
}

// falsy values 

// false, 0 ,-0 , BigINt 0n, "" , null , undefined , NaA

//truthy values 

// "0" , 'fcalse' , " " , [] , {} , function(){}

if (userEmail. length === 0) {
     console.log("Array is empty");
     
}  

const emptyObj = {}
 if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
 }