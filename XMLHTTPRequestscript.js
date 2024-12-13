// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// //console.log(xhr);
// // Step 1

// xhr.open('get',url);
// // xhr.onreadystatechange = function(){
// //     //console.log(xhr);
// //     if(xhr.readyState===4){
// //         const response = xhr.response;
// //         const data = JSON.parse(response);
// //         console.log(data);
        
        
// //     }
    
// // }
// xhr.onload = function(){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
    
// }
// xhr.send();

// Error Handling

// const url = "https://jsonplaceholder.typicode.com/posts";

// const xhr =new XMLHttpRequest();

// xhr.open('get',url);
// xhr.onload = () => {
//     if(xhr.status >= 200 && xhr.status < 300){
//         const data = JSON.parse(xhr.response);
//         //console.log(data);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const url2 = `${url}/${id}`
//         //console.log(url2);
//         xhr2.open("get",url2);
//         xhr2.onload = ()=>{
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//         }
//         xhr2.send();
//         //console.log(id);
        
//     }
//     else{
//         console.log("Something went wrong");
//     }
// }
// xhr.onerror = () => {
//     console.log("Network issue");
    
// }

// xhr.send();

// XHR using Promises

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method,url) {
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = function(){
            reject(new Error("Something went wrong"))
        }
        xhr.send();
    })
}

sendRequest('get',URL)
.then((response)=>{
    const data = JSON.parse(response)
    //console.log(data);
    return data;
})
.then((data)=>{
    const id = data[3].id;
    return id;
})
.then((id)=>{
    const url = `${URL}/${id}`;
    //console.log(url);
    return sendRequest("get",url);
})
.then((newResponse)=>{
    //console.log(newResponse);
    const newData = JSON.parse(newResponse);
    console.log(newData);    
})
.catch((error)=>{
    console.log(error);
    
})