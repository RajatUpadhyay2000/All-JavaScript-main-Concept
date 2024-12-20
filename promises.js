const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else{
                reject();
            }
        },time);

    })
    
}

changeText(heading1,"one","red",1000)
    .then(()=>changeText(heading2,"Two","purple",1000))
    .then(()=>changeText(heading3,"three","green",1000))
    .then(()=>changeText(heading4,"Four","Orange",1000))
    .then(()=>changeText(heading5,"Five","Yellow",1000))
    .then(()=>changeText(heading6,"Six","Blue",1000))
    .then(()=>changeText(heading7,"Seven","grey",1000))