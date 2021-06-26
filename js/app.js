let AddworkExpBtn = document.querySelector("#weAdd-btn");
let RMworkExpBtn = document.querySelector("#weRem-btn");
let workExpFeild = document.querySelector("#workExp");

let eduAddBtn = document.querySelector("#eduAddbtn");
let eduRMBtn = document.querySelector("#eduRem-btn");

let InterestAddBtn = document.querySelector("#ITAdd-btn");
let InterestRMBtn = document.querySelector("#ITRem-btn");

let educationField = document.querySelector("#education");
let InterestField = document.querySelector("#interest");



// work exp Add 
AddworkExpBtn.addEventListener("click", () => {

    let workfeid = document.createElement('textarea');
    workfeid.classList.add('form-control');
    workfeid.classList.add('weField');
    workfeid.classList.add('mt-3');
    workfeid.setAttribute("rows", 2);
    workfeid.setAttribute("placeholder", "Enter here");


    workExpFeild.appendChild(workfeid);

})

// work exp remove 
RMworkExpBtn.addEventListener("click", () => {

    let del = confirm("Do you really want to remove it")

    if (del == true) { // remove

        workExpFeild.removeChild(workExpFeild.lastElementChild);
       
    } else {
        console.log(2);
    }


})


//Edu Add
eduAddBtn.addEventListener("click", () => {

    let ed = document.createElement("textarea");
    ed.classList.add("form-control");
    ed.classList.add("EdField");
    ed.classList.add('mt-3');
    ed.setAttribute("rows", 2);
    ed.setAttribute("placeholder", "Enter here");

    educationField.appendChild(ed);
    

})

// edu remove 

eduRMBtn.addEventListener("click", () => {

    let del = confirm("Do you really want to remove it")

    if (del == true) { // remove

       educationField .removeChild(educationField.lastElementChild);
       
    } else {
        console.log(2);
    }


})


// Interest add 

InterestAddBtn.addEventListener("click", ()=>{

    let Interestf = document.createElement("textarea");
    Interestf.classList.add("form-control");
    Interestf.classList.add("interestField");
    Interestf.classList.add('mt-3');
    Interestf.setAttribute("rows", 1);
    Interestf.setAttribute("placeholder", "Enter here");

    InterestField.appendChild(Interestf);

})


//  Interest remove


InterestRMBtn.addEventListener("click", () => {

    let del = confirm("Do you really want to remove it")

    if (del == true) { // remove

       InterestField.removeChild(InterestField.lastElementChild);
       
    } else {
        console.log(2);
    }


})





GenerateCV = () => {


    // PhotoCV

    let photoField = document.getElementById("photocvfield").files[0];

    let imgTemplate = document.getElementById("imgT");
    let imgTemplate2 = document.getElementById("imageTemp");

    // console.log(photoField);

    let imageReader = new FileReader();


     imageReader.readAsDataURL(photoField);


     imageReader.onload= ()=>{ // fixed to read img time


        //  console.log(imageReader.result);

        if(imageReader.result!=""){
            imgTemplate.src = imageReader.result;
        }
        
     }



    // names
    let nameField = document.getElementById('nameField').value;

    let templateName = document.getElementById('nameT');

    templateName.innerHTML = nameField;


    //  mobile 

    let mobieField = document.getElementById('contactField').value;
    let mobileT = document.getElementById('mobileT');
    mobileT.innerHTML = mobieField;


    // address
    let addressField = document.getElementById('addressField').value;
    let addressT = document.getElementById('addressT');
    addressT.innerHTML = addressField;


    // email
    let emailField = document.getElementById('emailField').value;

    let emailtT = document.getElementById('emailT');

    emailtT.innerHTML = emailField;


    // job title

    let jobField = document.getElementById('jobtitleField').value;

    let templateJobtitle = document.getElementById('JobNameT');

    templateJobtitle.innerHTML = jobField;


    //  Social links


    let linkField = document.getElementById('linkedinField').value;
    let linkT = document.getElementById("linkIdT");

    // console.log(linkField);

    let alinkedin = document.createElement('a');

    alinkedin.href = linkField;
    alinkedin.innerText = "Linkedin"
    linkT.innerHTML = "";

    
    linkT.appendChild(alinkedin);

    // github
    let gitField = document.getElementById('gitField').value;
    let gitT = document.getElementById("gitIdT");



    let agitub = document.createElement('a');

    agitub.href = gitField;
    agitub.innerText = "Github"
    gitT.innerHTML = "";
    gitT.appendChild(agitub);

    // portfolio

    let portfolioField = document.getElementById('portfolioField').value;
    let portT = document.getElementById("portIdT");



    let aport = document.createElement('a');

    aport.href = portfolioField;
    aport.innerText = "Portfolio"
    portT.innerHTML = "";

    portT.appendChild(aport);


    // Work Experience

    
    let workExp = document.getElementsByClassName("weField"); //array
    let str = "";
    for(let i of workExp){

        str = str +` <li>${i.value}</li>`
    }
   
    let weTemplate = document.getElementById('weT');

    weTemplate.innerHTML= str;

    // Languages 

    let nativeLanField = document.getElementById('NatLField').value
    let proLanField = document.getElementById('proLField').value


    let proLag = document.getElementById('proL')
    let nativeLag = document.getElementById('nativeL')

    proLag.innerHTML=proLanField;
    nativeLag.innerHTML= nativeLanField

    // Interest 

    let interestFvalue = document.getElementsByClassName("interestField")
    let interest = document.getElementById("TInterest")

    let intStr = ""

    for(let i of interestFvalue){

        intStr+= ` <li>${i.value}</li>`
    }

    interest.innerHTML=intStr



     // Education Qualification
     
     let EdField = document.getElementsByClassName('EdField');
     let str1 = "";

     for(let i of EdField){

        str1 = str1 +`<li>${i.value}</li>`

       
    }

     let eduTemplate = document.getElementById('edT');

      eduTemplate.innerHTML = str1;
    //   console.log(str1);




    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";


}

PrintCV = () => {

    window.print();


}

EditBack= ()=>{

    document.getElementById("cv-template").style.display="none";
    document.getElementById("cv-form").style.display="block";

}

// !todo : more details fields + print friendly , image not selected alert, put all html in one page 