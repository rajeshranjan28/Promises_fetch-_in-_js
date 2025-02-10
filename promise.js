const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB call, cryptography , network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Rajesh", email: "rajeshranjan2803@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Rajesh", password: "1234"})
        } else{
            reject('ERROR: Something went wrong')
        }
       
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username   
}).then((myUsername) => {
    console.log(myUsername);  
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected")
})




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript", password:"123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

//promise is an object

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error); 
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //string to object conversion (json)
//         const data =  await response.json()
//         console.log(data);    
//     } catch (error) {
//         console.log("E:", error)
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/rajeshranjan28')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



