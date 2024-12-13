//console.log("Hello World");

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newInnerHtml = `
                <span class="text">${newTodoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>
            `;
        newLi.innerHTML = newInnerHtml;
        todoList.append(newLi);
        
    todoInput.value = "";
});

todoList.addEventListener("click",(e) =>{
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        //console.log(targetedLi);
        targetedLi.remove();
        
    }
    if(e.target.classList.contains("done")){
       const liSpan = e.target.parentNode.previousElementSibling;
       //console.log(liSpan);
       liSpan.style.textDecoration = "line-through";
       
        
    }
})



