//DOM
// Document object model

// select element using get element by id

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// Select element using query selector

// const mainHeading = document.querySelector("#main-heading");
// const header = document.querySelector(".header");
// const navItem = document.querySelectorAll(".nav-item")
// console.log(navItem);

// console.log(header);

// console.log(mainHeading);

// Change text
// textContent and innerText

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.textContent);

// Change the styles of Elements

// const mainHeading = document.querySelector("div.headline h2");
// //console.log(mainHeading);
// mainHeading.style.color = "blue";

// get and set Attribute

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://codprog.com");
// console.log(link.getAttribute("href"));


// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// const navItems = document.getElementsByTagName("a");
// for(let i = 0; i < navItems.length ; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

//}
//innerHtml
// const headLine = document.querySelector(".headline");
// // console.log(headLine);
// headLine.innerHTML = "<h1>Inner Html changed</h1>"
// headLine.innerHTML += "<button class=\"btn\">Learn More</button>"

// console.log(headLine.innerHTML);

//const sectionTodo = document.querySelector(".todo-section");
//console.log(sectionTodo.classList);
//sectionTodo.classList.add('bg-dark');
//sectionTodo.classList.remove('container')
//console.log(sectionTodo.classList.contains("container"));
// sectionTodo.classList.toggle('bg-dark');
// sectionTodo.classList.toggle('bg-dark');

// const header = document.querySelector("header");
// console.log(header.classList);


// innerHTML to add HTML Element
// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML += "<li>New Todo</li>";
// todoList.innerHTML += "<li>Teach Students</li>";

// document.createElement()
// append
// prepend
//remove


// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// // newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);

// console.log(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// console.log(todo1);
// todo1.remove();

//before
//after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);

// clone nodes

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "New Todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);

// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;

// Static list vs live list

// const listItems = document.querySelectorAll(".todo-list li");
// const li = document.createElement("li");
// li.textContent = "New Todo";
// li.append();
// console.log(listItems);

// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "Item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);

// how to get the dimenssion of element
// Height width

// const sectionTodo = document.querySelector(".todo-section");
// const info = sectionTodo.getBoundingClientRect();
// console.log(info);

// Intro to events
// click
// button press
// Mouse hovor

//event add krne ke 3 tarike hai

//const btn = document.querySelector(".btn-headline");
//console.log(btn);
// btn.onclick = function(){
//     console.log('you clicked me');
    
// }

// method --- addEventListener
// function clickMe(){
//     console.log("You clicked me!!!!!!");
    
// }
// btn.addEventListener("click",function(){
//     console.log("You clicked me!!!!!!");
    
// });

// keypress event
// mouseover event

// const body = document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
    
// })

const mainButton = document.querySelector(".btn-headline");
console.log(mainButton);

mainButton.addEventListener("mouseover",(e)=>{
    console.log("mouseover event occured!");
    
    
})





