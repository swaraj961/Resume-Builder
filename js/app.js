let AddworkExpBtn = document.querySelector("#weAdd-btn");
let RMworkExpBtn = document.querySelector("#weRem-btn");
let workExpFeild = document.querySelector("#workExp");

let eduBtn = document.querySelector("#eduAddbtn");
let education = document.querySelector("#education");


AddworkExpBtn.addEventListener("click", () => {

    let workfeid = document.createElement('textarea');
    workfeid.classList.add('form-control');
    workfeid.classList.add('weField');
    workfeid.classList.add('mt-3');
    workfeid.setAttribute("rows", 6);
    workfeid.setAttribute("placeholder", "Enter here");


    workExpFeild.appendChild(workfeid);

})

// fix remove 

RMworkExpBtn.addEventListener("click", () => {

    let del = confirm("Do you really want to remove it")

    if (del == true) { // remove

        console.log("hey");
    } else {
        console.log(2);
    }


})


eduBtn.addEventListener("click", () => {

    let ed = document.createElement("textarea");
    ed.classList.add("form-control");
    ed.classList.add("EduField");
    ed.classList.add('mt-3');
    ed.setAttribute("rows", 6);
    ed.setAttribute("placeholder", "Enter here");

    education.appendChild(ed);

})


GenerateCV = () => {

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




}

PrintCV = () => {

}
