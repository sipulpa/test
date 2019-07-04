// let num = 20;

// function showFirstMessage (text) {

//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("ssssssssssss");
// console.log(num);



function calc(a, b){
    return a + b;
}

console.log(calc(3,4));
console.log(calc(8,4));


function retVat(a, b){
    let num = 50;
    return num;
}

let anNum = retVat();
console.log(anNum);

let str="text";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

 function createCounter() {
       let counter = 0
       const myFunction = function() {
         counter = counter + 1
         return counter
       }
       return myFunction
     }
     const increment = createCounter()
    const c1 = createCounter()
    const c2 = createCounter()
    const c3 = createCounter()
    console.log('example increment', c1, c2, c3)