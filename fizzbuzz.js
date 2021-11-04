// let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// function fizzBuzz(){
//     for(let i=0; i<=numArray.length; i++){
//         if(numArray[i] % 3 === 0){
//             numArray[i] = "fizz" 
//             alert(numArray[i])
//         }
//         else if(numArray[i] % 5 === 0){
//             numArray[i] = "Buzz"
//         }
//         else if(numArray[i] % 3 === 0 && numArray[i] % 5 === 0){
//             numArray[i] = "FizzBuzz"
//         }
//     }
// }
// alert(fizzBuzz())
let arr = []
let count = 1
function fizzBuzz(){
    if(count%3 === 0 && count%5 === 0){
        arr.push("fizzbuzz");
    }
    else if(count%3 === 0){
        arr.push("fizz");
    }
    else if(count%5 === 0){
        arr.push("Buzz");
    }
    else{
           arr.push(count);
    }
    count++; 
    console.log(arr);
}
