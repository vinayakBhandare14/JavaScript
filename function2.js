// // rest parameter

// function sum(...numbers){
//     let total =0;
//     for(let num of  numbers)
//     {
//         total +=num;
//     }
//     console.log(total);
// }
// sum(1,2,3);

// console.log("-----------------------------------------")

// //function returning value
// function add(a,b){
//     return a+b;
// }
// let result=add(5,2);
// console.log(result);

// console.log("---------------------------------------------")

// function array(arr){
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// let number =[10,20,30,40,50,60,70,80,90];
// array(number);

// console.log("----------------------------------------------")

// // Example to copy and return even number from argument array

// function evenNumber(arr){
//     let t =[],j=0;
//     for(let i=0;i<arr.length; i++){
//         if (arr[i] % 2 == 0) {
//             t[j++] = arr[i];
//         }

        
//     }
//     return t;
// }

// let numbers = [1,2,3,4,5,6,7,8,9];
// let a =evenNumber(numbers);
// console.log("Numbers :: "+numbers);
// console.log("Even List :: "+a);

// console.log("-----------------------------------------------------------------");

// // arrow function 

// let funcube = (n) => {
//     let t = n*n*n;
//     return t;
// }

// console.log(funcube(2));

// console.log("-----------------------------------------------------")

// // more compact

// let cube = (num) => console.log(num*num*num);
// cube(4);

// // callback function

// function display(msg){
//     for(let i=0; i<10; i++){

//         console.log(i);
//     }
//     msg();
// }

// function endmsg(){
//     console.log("Program is ended !!");
// }

// display(endmsg);

//console.log(------------------------------------------------);

//. IIFE (Immediately Invoked Function Expression):
(function test(){console.log("Hello all")})();

(function test1(){console.log("Good morning")})();

// ANONYMUS FUNCTION
let msg = function(){console.log("This is anonymus function example");}

console.log("-------------------");

// passing arguments in js 
// 1.pass by value

function updateValue(x){
    x = 20; // modifies only the local copy
}
let num = 10;
updateValue(num);
console.log(num);//unchanged

console.log("-----by using pass by reference (for Object and Array)----------");

function updatePerson(obj) {
    obj.age = 30; // Modifies the original object
   }
   let person = { name: "amol", age: 25 };
   const user = Object.freeze(person);
   console.log(user.age);
   updatePerson(user);
   console.log(user.age);