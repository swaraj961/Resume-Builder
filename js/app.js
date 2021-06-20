let AddworkExpBtn = document.querySelector("#weAdd-btn");
let RMworkExpBtn = document.querySelector("#weRem-btn");
let workExpFeild = document.querySelector("#workExp");

let eduBtn = document.querySelector("#eduAddbtn");
let education = document.querySelector("#education");


AddworkExpBtn.addEventListener("click" ,()=>{

    let workfeid = document.createElement('textarea');
    workfeid.classList.add('form-control');
    workfeid.classList.add('weField');
    workfeid.classList.add('mt-3');
    workfeid.setAttribute("rows",6);
    workfeid.setAttribute("placeholder","Enter here");


    workExpFeild.appendChild(workfeid);

})

// fix remove 

RMworkExpBtn.addEventListener("click",()=>{

   let del=  confirm("Do you really want to remove it")

    if(del==true){ // remove
      
       console.log("hey");
    }else{
        console.log(2);
    }


})


eduBtn.addEventListener("click",()=>{

let ed = document.createElement("textarea");
ed.classList.add("form-control");
ed.classList.add("EduField");
ed.classList.add('mt-3');
ed.setAttribute("rows",6);
ed.setAttribute("placeholder","Enter here");

education.appendChild(ed);

})

