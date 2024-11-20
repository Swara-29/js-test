//var c = 200
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER", a)
// }

// // for(let i = 0; i < array.length; i++) {
// //     const element = array[i];
// }
// console.log(a);
//console.log(b);

function one () {
    const username = "Swara"

    function two () {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
//one()

if (true) {
    const username = "SWara"
    if (username === "SWara"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);
//// ++++++++++++++++++interesting++++++++++++++++
 
function addone (num) {
    return num + 1
}
console.log(addone(5))

const addTwo = function (num) {
    return num + 2
}

addTwo(5)