
const prom = new Promise((resolve,reject)=>{

    let success = false;
    if(success){
        resolve("Happy")
    }
    else {
        reject("Sad")
    }
});


prom
.then((data)=>console.log(data))
.catch((e)=>console.log(e))