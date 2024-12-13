//const arr = [2,4,5,8];

// function multiplyByTwo(number , index){
//     console.log("index is", index);
//     console.log(number * 2);
// }

// for(let i = 0 ; i < arr.length ; i++){
//     multiplyByTwo(arr[i] , i);
// }
// ForEach method-----------


// arr.forEach(function(number){
//     console.log(number*3);
// });

// const users = [
//     {firstName : "Rajat",age : 23},
//     {firstName : "Om", age : 18},
//     {firstName : "Saurabh", age : 22},
//     {firstName : "Tej" , age : 21},
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
    
// })

// Map method--------------

// const numbers = [2,3,4,5,6,7];

// // const squre = function(num){
// //     return num*num;
// // }

// const squreNumber = numbers.map(function(num){
//     return num*num;
// });
// console.log(squreNumber);

// const users = [
//     {firstName : "Rajat",age : 23},
//     {firstName : "Om", age : 18},
//     {firstName : "Saurabh", age : 22},
//     {firstName : "Tej" , age : 21},
// ]

// const userNames = users.map((user) => {
//     return user.firstName;
// });
// console.log(userNames);

// Filter Method -------------

// const numbers = [1,2,3,4,5,6,7,8];

// const isEven = function(num){
//     return num%2 === 0;
// }

// const evenNumbers = numbers.filter((num) => {
//     return num%2 === 0;
// });
// console.log(evenNumbers);

// Reduce Method --------------

// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((accumulater, currentValue) => {
//     return accumulater + currentValue;
// });

// console.log(sum);

// const userCart = [
//     {productId : 1, productName : "Mobile", price : 12000},
//     {productId : 2, productName : "Laptop", price : 22000},
//     {productId : 3, productName : "TV", price : 15000}
// ]

// const total = userCart.reduce((totalPrice,currentProduct) => {
//     return totalPrice + currentProduct.price;
// },0)

// console.log("Total Price = ", total);

// Sort Method


// const numbers = [5,9,1200,410,3000];
// numbers.sort((a,b) => {
//      return b-a;
// });

// console.log(numbers);

// const products = [
//     {productId : 1, productName: "p1", price : 300},
//     {productId : 2, productName: "p2", price : 500},
//     {productId : 3, productName: "p3", price : 100},
//     {productId : 4, productName: "p4", price : 700},
//     {productId : 5, productName: "p5", price : 600}
// ]

// // low to high

// products.sort((a,b)=>{
//     return a.price-b.price;
// })

// console.log(products);

// Find Method

// const myArr = ["Hello", "cat", "dog","Lion"];

// const ans = myArr.find((string)=>{
//     return string.length === 3;
// });
// console.log(ans);


// const users = [
//     {userId : 1, userName : "Harshit"},
//     {userId : 2, userName : "Rajat"},
//     {userId : 3, userName : "Om"},
//     {userId : 4, userName : "Tej"},
//     {userId : 5, userName : "Saurabh"}
// ]

// const myUser = users.find((user) => {
//     return user.userId === 3;
// });

// console.log(myUser);

// Every Method -----------

// const numbers = [2,4,6,8,10];

// const ans = numbers.every((num)=>{
//     return num%2===0;
// })

// console.log(ans);

// const userCart = [
//     {productId : 1, productName : "Mobile", price : 12000},
//     {productId : 2, productName : "Laptop", price : 22000},
//     {productId : 3, productName : "TV", price : 15000}
// ]

// const ans = userCart.every((user)=>{
//     return user.price <= 30000;
// })

// console.log(ans);

// Some Method

// const numbers = [3,5,8,9];

// const ans = numbers.some((num)=> num%2===0);
// console.log(ans);

// const userCart = [
//     {productId : 1, productName : "Mobile", price : 12000},
//     {productId : 2, productName : "Laptop", price : 22000},
//     {productId : 3, productName : "TV", price : 15000},
//     {productId : 4, productName : "Macbook", price : 150000}
    
// ]

// const ans = userCart.some((user)=>{
//     return user.price > 100000;
// })

// console.log(ans);

// Fill method----------
// value start end

// const myArr = new Array(10).fill(-1);
// console.log(myArr);

// const arrey = [1,2,3,4,5,6,7];

// arrey.fill(0,1,4);
// console.log(arrey);

// Splice method --------------
//(start, delete,insert)

const myArr =["item1","item2","item3"];
//delete
// myArr.splice(1,1);
// console.log(myArr);

// insert

// myArr.splice(1,0,"Inserted Item");
// console.log(myArr);

// delete and Insert

// myArr.splice(1,2,"inserted item1","inserted item2")
// console.log(myArr);

// Map function 

// const person = new Map();
// person.set('firstName','Rajat');
// person.set('age', 7);
// person.set(1,'one');
// console.log(person);
// console.log(person.get(1));

// for(let key of person.keys()){
//     console.log(key);
    
// }

// for(let [key, value] of person){
//     console.log(key, value);
    
// }

// const person1 = {
//     id : 1,
//     firstName : "Rajat"
// }

// const person2 = {
//     id : 2,
//     firstName : "Om"
// }

// const extraInfo = new Map();
// extraInfo.set(person1,{age : 8, gender : 'male'});
// extraInfo.set(person2, {age : 17, gender : "male"});

// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).age);


// Methods
// function inside object

// const person = {
//     firstName : "Rajat",
//     age : 24,
//     about : function(){
//         console.log(`person name is ${this.firstName} and person age is ${person.age}`);   
//     }
// }

// person.about();

// Call Method


const user1 = {
    firstName : "Rajat",
    age : 24,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

const user2 = {
    firstName : "Mohit",
    age: 9,
}

user1.about.call(user2);











