
const renderInto = document.querySelector(".employee__list-render");
const renderEmployeeInfo = document.querySelector(".emplyee__single-info-render");


(async function fetchData(){
    const data = await fetch("data.json");
    const res = await data.json()
    
    //console.log(res)
    
    function render(){
        renderInto.innerHTML = ''
        res.employees.map((e,index)=>{
            const div = document.createElement('div')
            div.setAttribute('class','employee_item')
            div.setAttribute('data-id', index)
            div.innerHTML = `${e.name}<span class="cancle-box" id="${index}">X</span>`
            renderInto.appendChild(div)
            
        })
    }
    render()
    // console.log(renderInto)
    let employeeNumber = 0;
    renderInto.addEventListener('click',(e)=> {
        const clickedItem = e.target.closest('.employee_item');
        // console.log(e.target.classList)
        const deleteClicked = e.target.closest('.cancle-box')
        // console.log(deleteClicked)
        if(deleteClicked){
            const deleteId = e.target.getAttribute('id')
            console.log(deleteId)
            res.employees.splice(deleteId, 1); 
            render();
            renderEmployeeInfo.innerHTML = ''; 
            return; 
        }
        if(clickedItem){
            employeeNumber = clickedItem.getAttribute('data-id')
            displayEmployeeInformation(employeeNumber)
        }
    })

    function displayEmployeeInformation(input){
        renderEmployeeInfo.innerHTML = ""
        const employeeDiv = document.createElement('div')
        employeeDiv.setAttribute('class','employeeInfo-container')
        const employeeAt0 = res.employees[input]
        employeeDiv.innerHTML =`<div class="profile-img"><img src='${employeeAt0?.img && employeeAt0?.img.length> 0 ? employeeAt0.img : "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid" }'></div>
                                <h1>${employeeAt0.name}</h1>
                                <h4>${employeeAt0.desigmation}</h4>
                                <p style="text-align:center;">${employeeAt0.description}</p>`
        renderEmployeeInfo.appendChild(employeeDiv)
           
    }
    displayEmployeeInformation(employeeNumber)
   
})();

