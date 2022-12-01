

/**
 1- Create Function sumObjectValues() that will sum all values of
    the fields that contain numbers . ensure that iteration is
    done only over own property of the object (15 points) 
 */
function sumObjectValues(emp) {
    debugger;
    let sum = 0;
    for (let index in emp) {
        let item = emp[index];
        if (typeof(item) == 'number') {
            sum += item;
        }
    }
    return sum;
}


let employee={Id:1,City:"Cairo",Salary:2000,Rate:3};
var result =sumObjectValues(employee)
console.log(result);//2004


/*

3- Get the maximum value from a numbers array along with its index

*/

var nums:number[] = [3, 5, 8, 100, 20,500] ;

var max = Math.max(...nums);
let index = nums.indexOf(max);
let value= nums[index];
console.log("Index = "+index +" ,Value="+value);



/*
4- Write a function which accepts two valid dates and returns the
difference between them as number of days
*/

function datediff(first, second) {        
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

const firstDate = new Date(2022, 1, 12);
const secondDate = new Date(2022, 1, 22);
var days= datediff( firstDate, secondDate);
console.log(days);


/*

5- Design a Calulator interface for 2 number inputs which can
perform sum, difference, product and dividend whenever invoked
on the same interface

*/

class Calculator {

    number1:number;
    number2:number;
    constructor(firstNum:number ,secondNum:number){

        this.number1=firstNum;
        this.number2=secondNum;

    }
   
    add() {
      return this.number1+this.number2;
    }
  
    
    multiply() {
      return this.number1*this.number2;
    }
  
    
    substract() {
      return this.number1-this.number2;
    }
  
    
    divide() {
        return this.number1/this.number2;
     
    }
  }

let calc=new Calculator(8,5);
console.log(calc.add());
console.log(calc.substract());
console.log(calc.multiply());
console.log(calc.divide());

/*
6- Write a function which can return multiple values from a function
*/

function getPersonalData() {
  return ["ali", 24]
}
const [first, second] = getPersonalData();
console.log(first);
console.log(second);

/*
7- Write a function to reverse an array. For Example :
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1] 
*/

function reverse (arr){
  return arr.reverse();
}
const arr = [1, 2, 3, 4];
reverse(arr);

console.log(arr);

/*
8- Write a function that converts an object into an array, where each
element represents a key-value pair in the form of an array.
For Example :
 ({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
*/

function convertObjectToArray(obj){
  return Object.entries(obj);
}

const empObj={Id:1,Name:"Salah",City:"Giza"};
console.log(convertObjectToArray(empObj));

/*
Bonus ++ 
8.1- Write a function which can convert the time input given in 12
hours format to 24 hours format [10 points] 

*/

function convertTo24Format(time){
  
  var hours = Number(time.match(/^(\d+)/)[1]);
  var minutes = Number(time.match(/:(\d+)/)[1]);
  var AMPM = time.match(/\s(.*)$/)[1];
  if(AMPM == "PM" && hours<12) hours = hours+12;
  if(AMPM == "AM" && hours==12) hours = hours-12;
  var sHours = hours.toString();
  var sMinutes = minutes.toString();
  if(hours<10) sHours = "0" + sHours;
  if(minutes<10) sMinutes = "0" + sMinutes;
  return sHours + ":" + sMinutes;
  }
  
  console.log(convertTo24Format('09:45 PM'));

  /*
  Bonus ++ 
8.2- Make this syntax possible: var a = add(2)(3); //5
  */

  var add = function(x) {
    return function(y) { return x + y; };
}

console.log(add(2)(3));


/*
Bonus ++ 
8.3- Check if the user with the name "John" exists in the array of
objects
*/


function findUser(arr,name){
  var found =arr.find(i=>i.Name==name);

  if(found)
   return name+ " Exists";
  
   return "Not found";
}

let users=[{Id:1,Name:"Salah"},{Id:2,Name:"John"},{Id:3,Name:"Ali"}];


console.log(findUser(users,"John"))
