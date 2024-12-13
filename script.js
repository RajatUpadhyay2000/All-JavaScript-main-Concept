// Asynchronous Javascript

// console.log("Script start");
// function hello(){
//     console.log("Hello World");
// }

// setTimeout(hello,1000);
// console.log("Script End");

// const body = document.body;
// const btn = document.querySelector("button");
// //console.log(btn);

// //console.log(body);

// const intervalId = setInterval(() => {
//     const red = Math.floor(Math.random()*126);
//     const green = Math.floor(Math.random()*126);
//     const blue = Math.floor(Math.random()*126);
//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.background = rgb;
//     //console.log(rgb);
    
// },1000);

// btn.addEventListener('click',()=>{
//     clearInterval(intervalId);
//     btn.textContent = body.style.background;

// })


// Callback

function getTwoNumbersandAdd(number1,number2,onSuccess, onFailure){
    if(typeof number1 === "number" && typeof number2 ==="number"){
        onSuccess(number1,number2);
    }
    else{
        onFailure();
    }
}



getTwoNumbersandAdd("4","5",(num1,num2)=>{
    console.log(num1+num2);
},
()=>{
    console.log("Wrong Data type");
    console.log("Please pass numbers only");
}
);
