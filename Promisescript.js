// const bucket = ['coffee','chips','vegetables','rice'];

// const res = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//         resolve("Fried rice");
//     }
//     else{
//         reject("Couldn't do it");
//     }
// });

// res.then((data)=>{
//     // Jab promise resolve hoga
//     console.log("Let's eat ",data);
    
// }
// ).catch((error)=>{
//     console.log(error);
    
// })

// function reicePromise(){
//     const bucket = ['coffe','chips','vegetables','salt','rice'];
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//             resolve({value : "Fried Rice"});
//         }
//         else{
//             reject("could not do it")
//         }
//     })
// }

// reicePromise().then((data)=>{
//     console.log("Lets eat", data);
// }).catch((error)=>{
//     console.log(error);
    
// })

// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         },2000)
//     })
// }

// myPromise().then(()=>{
//     console.log("resolved");
    
// }).catch(()=>{
//     console.log("Rejected");
    
// })

// then
// then method hamesha promise return karta hai

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}

myPromise()
    .then(value=>{
        console.log(value);
        value += "bar";
        return value;
        
    })
    .then(value=>{
        console.log(value);
        
    })