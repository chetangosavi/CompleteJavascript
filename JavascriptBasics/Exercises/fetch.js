//fetch with async await

async function fetchUserInfo(){
    const data = await fetch("url",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            title: "Chetan's Post",
            body: "This is cool!",
            userId: 1,
        })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("Error:", err));
}

// Note  - .json() is also a promise!  ---> Always await or .then() it.

