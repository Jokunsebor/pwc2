//datatypes
let name="joan";//string
let age= 36;//number
let Z= null;//null
let y= undefined;//undefined
let ismarried= false; //boolen
let fruits= ["apples","orange","pears","grapes"]
fruits.push("grape");
fruits.push("strawberry");
fruits.pop();
fruits.shift()
fruits.unshift('kiwi')
console.log(fruits)
fruits[4]= 'mango';

// //object literals
const person ={
name: "joan",
age:30,
hobbies: ['music', 'movies','sports'],
street: '50 main st',
city: 'Boston',
state: 'ma'}

console.log(person.ismarried)

// //loop
for(let i=0; i<10; i++){
    console.log(i);
}

for (let p= 4; p <= 8; p++){
    console.log(p);

   console.log(`Numberis ${p}`);}

  //while loop
   let i= 0;
   while(i<20){
    console.log(i)
    i++
   }

console.log(`number is ${i}`);

//if statement
const x = 20;
if (x==20){
    console.log('x is 20');
    
}else if(x==10){
    console.log ('x is not 20');
} else {
    console.log('x is 10')

}








for(let i=4; i<=20; i++)
console.log(name);
console.log(typeof y);
console.log(typeof ismarried);
console.log(typeof y);
let favColor= ["white","green","pink","blue"];
let s= "Hello World";

// //concatenation
console.log(s.toLocaleUpperCase());
console.log(s.toLowerCase());


let m= "i am ";
let n="i go to pwc bootcamp";
let p= "i love to learn";
console.log( m + name + "and" + p);
console. log (`${m}${n}${p}`);
console.error('this is error');
console.warn( 'this is warning');



const score = 90
if (score == 90) {
    console.log('Execellent')
    
}else if (score==80){
        console.log('verygood')
    }
    else if (score==50){
        console.log('average')
    
    }
    else if (score == 30) {
        console.log('fail')
    }
else {
    console.log('you did not write the test')
}


// Assignment
const result = 6;
if (result > 70 && result <= 100) {
    console.log('Distinction')
} else if (result > 60 && result <= 69){
    console.log('Very good')
} else if (result> 50 && result <= 59){
    console.log('credict')
} else if (result> 40 && result <= 49){
    console.log(pass)
} else if (result> 30 && result <= 39){
    console.log(fail)
} else {
    console.log('you did noy write the test')
}
