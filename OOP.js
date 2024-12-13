
// function (that function create object)
// 2) add key value pair
// 3) object ko return karega
// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age,address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser("Rajat","Upadhyay","rajat@gmail.com",24,"Varanasi");
// console.log(user1);
// const abt = user1.about();
// console.log(abt);

// New keyword

// function createUser(firstName,age){
//    this.firstName = firstName;
//    this.age = age; 
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
    
// }
// // new keyword
// // 1) empty object this = {}
// // 2) return this

// const user1 = new createUser("Rajat", 24);
// // console.log(user1);

// user1.about();

// function createUser(firstName,lastName,age,email,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.address = address;
// }

// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// }

// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// createUser.prototype.sing = function(){
//     return "la la la la";
// }

// const user1 = new createUser("Rajat","Upadhyay", 24, "rajat@gmail.com", "Varanasi");
// // console.log(user1);
// // console.log(user1.sing());
// // console.log(user1.about());

// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
        
//     }
// }

// class createUser{
//     constructor(firstName,lastName,age,email,address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//         this.address = address;
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return "la la la la";
//     }
// }

// const user1 = new createUser("Rajat","Upadhyay", 24, "rajat@gmail.com", "Varanasi");
// console.log(user1.firstName);
// console.log(user1.sing());
// console.log(user1.age);



// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log("Eating");
//     }
// }

// class Dog extends Animal{
//     constructor(name , age , speed){
//         super(name , age);
//         this.speed = speed;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}`;
//     }
// }

// const tommy = new Dog("Tommy",3,45);
// console.log(tommy.run());
// console.log(tommy.eat());



// const a1 = new Animal("Chetak", 24);
// console.log(a1.name);
// console.log(a1.age);
// a1.eat();



class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
     get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Rajat","Upadhyay", 24);
person1.setName("Monisha", "K");

// console.log(person1);
 console.log(person1.fullName);
 console.log(person1.firstName);
 console.log(person1.lastName);
 
 
 
// console.log(person1.setName("Om","Upadhyay"));
// console.log(person1.firstName);
// console.log(person1.lastName);
console.log(person1.age);






