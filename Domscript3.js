// Event bubbling/ Propogation


// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// child.addEventListener("click",()=>{
//     console.log("you clicked on child");
    
// })

// parent.addEventListener("click",()=>{
//     console.log("you clicked on Parent");
    
// })

// grandParent.addEventListener("click",()=>{
//     console.log("you clicked on Grand Parent");
// })

// Event Delegation

const grandParent = document.querySelector(".grandparent");
grandParent.addEventListener('click',()=>{
    console.log('you click something!!!');
})
