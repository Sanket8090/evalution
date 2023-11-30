let form = document.querySelector("form");
let name = document.querySelector("#name");
let doctor_id = document.querySelector("#doctor_id");
let specialization = document.querySelector("#specialization");
let experience = document.querySelector("#experience");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let arr= [];
let tbody = document.querySelector("tbody");


form.addEventListener('submit',function(){
    event.preventDefault();
   
    obj={};
    obj.name = name.value;
    obj.doctor_id = doctor_id.value;
    obj.specialization = specialization.value;
    obj.experience = experience.value;
    obj.email = email.value;
    obj.mobile = mobile.value;
    arr.push(obj)
    console.log(arr)
    
    tbody.innerHTML = null;
    arr.map((ele)=>{
        let row = document.createElement("tr");
        
        let td1 = document.createElement("td")
        td1.innerText = ele.name; 

        let td2 = document.createElement("td")
        td2.innerText = ele.doctor_id;

        let td3 = document.createElement("td")
        td3.innerText = ele.specialization;

        let td4 = document.createElement("td")
        td4.innerText = ele.experience;

        let td5 = document.createElement("td")
        td5.innerText = ele.email;

        let td6 = document.createElement("td")
        td6.innerText = ele.mobile;

        let td7 = document.createElement("td")
        if(ele.experience <= 1){
            td7.textContent = "Trainee"
        }else if(ele.experience >= 5){
            td7.textContent = "Senior"
        }else if(ele.experience> 2 || ele.experience < 5){
            td7.textContent = "Junior"
        }
        

        let td8 = document.createElement("td")
        td8.textContent = "Delete"
        td8.style.backgroundColor = "red"
        
        td8.addEventListener('click',function(){
            row.textContent = null
        })

        row.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(row)
    })
})