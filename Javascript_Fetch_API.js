// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL, {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response)=>{
//         if(response.ok){
//             return response.json()
//         }
//         else{
//             throw new Error("Something went wrong !!!")
//         }
//     })
//     .then((data)=>{
//         console.log(data); 
//     })
//     .catch((error)=>{
//         console.log("Inside Catch");
//         console.log(error);
        
        
//     })


const URL = "https://jsonplaceholder.typicode.com/pots";

async function getPosts() {
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json()
    return data;
}

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch((error)=>{
        console.log("Inside catch");
        console.log(error);
        
    })
