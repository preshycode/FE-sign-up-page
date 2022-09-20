const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
e.preventDefault();

    
   
    
  

    fnameError();
    lnameError();
    emailError();
    passwordError();
    
    
});

function fnameError ()  {
    const fnameValue = fname.value.trim();
    const s1 = document.getElementById("s1");
    const img1 = document.getElementById("img1");
    if (fnameValue === "") {

        s1.textContent = "First name cannot be empty";
        img1.parentElement.classList.add("error");

    }
}

function lnameError ()  {
    const lnameValue = lname.value.trim();
    const s2 = document.getElementById("s2");
    const img2 = document.getElementById("img2");
    if (lnameValue === "") {
        s2.textContent = "Last name cannot be empty";
        img2.parentElement.classList.add("error");
    }
}


function emailError ()  {
    const emailValue = email.value.trim();
    const s3 = document.getElementById("s3");
    const img3 = document.getElementById("img3");
    if (emailValue === "") {
        s3.textContent = "Email cannot be empty";
        img3.parentElement.classList.add("error");
    }
}


function passwordError ()  {
    const passwordValue = password.value.trim();
    const s4 = document.getElementById("s4");
    const img4 = document.getElementById("img4");
    if (passwordValue === "") {
        s4.textContent = "Password required";
        img4.parentElement.classList.add("error");
    }
}


