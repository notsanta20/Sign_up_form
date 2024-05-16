const firstName = document.querySelector(`#firstName`);
const lastName = document.querySelector(`#lastName`);
const email = document.querySelector(`#email`);
const phone = document.querySelector(`#phone`);
const pass1 = document.querySelector(`#pass1`);
const pass2 = document.querySelector(`#pass2`);
const form = document.querySelector(`.form`);
let isError = false;


form.addEventListener(`submit`, (e)=>{
    e.preventDefault(); 

    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const pass1Val = pass1.value.trim();
    const pass2Val = pass2.value.trim();
    
    
    if(!firstName.value){
        setError(firstName, `First name cannot be empty`);
        
    }
    else if(firstNameVal.length < 2 || firstNameVal.length > 32){
        setError(firstName, `First name should be between 2 - 32 characters`);
        
    }
    else{
        removeError(firstName, `..`);
    }

    if(lastNameVal === ``){
        setError(lastName, `Last name cannot be empty`);
        noError = false;
    }
    else if(lastNameVal.length < 2 || lastNameVal.length > 32){
        setError(lastName, `Last name should be between 2 - 32 characters`);
        noError = false;
    }
    else{
        removeError(lastName, `..`);
        noError = true;
    }

    if(emailVal === ``){
        setError(email, `Email cannot be empty`);
        noError = false;
    }
    else if(!validEmail(emailVal)){
        setError(email, `Enter a valid email ID`);
        noError = false;
    }
    else{
        removeError(email, `..`);
        noError = true;
    }

    if(phoneVal === ``){
        setError(phone, `Phone number cannot be empty`);
        noError = false;
    }
    else{
        removeError(phone, `..`);
        noError = true;
    }

    if(pass1Val === ``){
        setError(pass1, `Password cannot be empty`);
        noError = false;
    }
    else if(pass1Val.length < 8){
        setError(pass1, `Password need to be atleast 8 characters`);
        noError = false;
    }
    else{
        removeError(pass1, `..`);
        noError = true;
    }

    if(pass2Val === ``){
        setError(pass2, `Password cannot be empty`);
        noError = false;
    }
    else if(pass1Val !== pass2Val){
        setError(pass2, `Passwords are not matching`);
        noError = false;
    }
    else{
        removeError(pass2, `..`);
        noError = true;
    }
});



const setError = function(element, message){
    const parent = element.parentElement;
    const display = parent.querySelector(`.error`);

    display.innerText = message;
    display.style.visibility = `visible`;
    element.classList.remove(`errorGreen`);
    element.classList.add(`errorRed`);
}

const removeError = function (element, message){
    const parent = element.parentElement;
    const display = parent.querySelector(`.error`);
    display.innerText = message;
    display.style.visibility = `hidden`;
    element.classList.remove(`errorRed`);
    element.classList.add(`errorGreen`);
    noError = true
}

const validEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
