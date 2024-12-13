// console.log("Hello Javascript");

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

setTimeout(()=>{
    heading1.textContent = "Heading 1";
    heading1.style.color = "violet";
    setTimeout(()=>{
        heading2.textContent = "Heading 2";
        heading2.style.color = "purple";
        setTimeout(()=>{
            heading3.textContent = "Heading 3";
            heading3.style.color = "red";
            setTimeout(()=>{
                heading4.textContent = "Heading 4";
                heading4.style.color = "pink";
                setTimeout(()=>{
                    heading5.textContent = "Heading 5";
                    heading5.style.color = "green";
                    setTimeout(()=>{
                        heading6.textContent = "Heading 6";
                        heading6.style.color = "blue";
                        setTimeout(()=>{
                            heading7.textContent = "Heading 7";
                            heading7.style.color = "brown";
                        },1000)
                    },3000)
                },2000);
            },1000);
        },2000)
    },2000);
},1000);
