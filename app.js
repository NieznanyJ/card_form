
patternLet = /[a-zA-Z]+/;
patternNUm = /[0-9]+/;


const frontCardName = document.querySelector(".front-card-name");
const frontCardMonth = document.querySelector(".month");
const frontCardYear = document.querySelector(".year");
const frontCardNum = document.querySelector(".front-card-num");
const backCardCvc = document.querySelector(".back-card-num");

const inpName = document.querySelector(".name-inp");
const inpNum = document.querySelector(".num-inp");
const inpMonth = document.querySelector(".month-inp");
const inpYear = document.querySelector(".year-inp");
const inpCvc = document.querySelector(".cvc-inp");

const errorDate = document.querySelector(".error-date");
const errorNum = document.querySelector(".error-num");
const errorName = document.querySelector(".error-name");
const errorCvc = document.querySelector(".error-cvc");

const infoForm = document.querySelector(".info-container");

const popup = document.querySelector(".popup-container");
const popupBtn = document.querySelector(".popup-btn");

const checkName = (name) =>{
    if(!patternLet.test(name) && name){
        inpName.classList.add("invalid");
        errorName.textContent = "Enter valid name";      
    }
    else if (!name){
        inpName.classList.remove("invalid");
        errorName.textContent = "";
        frontCardName.textContent = "Jane Appleseeds";
    }
    else{
        errorName.textContent = "";
        frontCardName.textContent = name;
        inpName.classList.remove("invalid");
        return true;
    }
    
}


 const checkMonth = (month) =>{
    if(!month){
        inpMonth.classList.remove("invalid");
        errorDate.textContent = "";
        frontCardMonth.textContent = "00";
    }
    else if (!patternNUm.test(month) || month > 12){
        inpMonth.classList.add("invalid");
        errorDate.textContent = "Invalid date";
        frontCardMonth.textContent = "00";
    }
    else{
        inpMonth.classList.remove("invalid");
        errorDate.textContent = "";
        if (month < 10){
            frontCardMonth.textContent = "0" + month;
        }
        else{
            frontCardMonth.textContent = month;
        }
        return true;
    }
    
 }

 const checkYear = (year) =>{
    if(!year){       
        inpYear.classList.remove("invalid");
        errorDate.textContent = "";
        frontCardYear.textContent = "00";
    }
    else if (!patternNUm.test(year) || year < 23){
        inpYear.classList.add("invalid");
        errorDate.textContent = "Invalid date";
        frontCardYear.textContent = "00";
    }
    else{
        inpYear.classList.remove("invalid");
        errorDate.textContent = ""; 
        frontCardYear.textContent = year;

        return true;
    }
    
 }

 const checkCvc = (cvc) =>{
    if(!cvc){
        inpCvc.classList.remove("invalid");
        errorCvc.textContent = "";
        backCardCvc.textContent = "000";
    }
    else if (!patternNUm.test(cvc)){
        inpCvc.classList.add("invalid");
        errorCvc.textContent = "Wrong format";
    }
    else{
        backCardCvc.textContent = inpCvc.value;
        inpCvc.classList.remove("invalid");
        errorCvc.textContent = "";

        return true;
    }  
        
 }

 const checkNum = (num) =>{
    patternCardNum = /[0-9\s]+/;

    if(!num){
        errorNum.textContent = "";
        inpNum.classList.remove("invalid");
    }
    else if (!patternCardNum.test(inpNum.value)){
        errorNum.textContent = "Wrong format, numbers only";
        inpNum.classList.add("invalid");  
    } 
    else{
         if(inpNum.value.length === 4 || inpNum.value.length === 9 || inpNum.value.length === 14){
            inpNum.value += " ";
            errorNum.textContent = "";
            inpNum.classList.remove("invalid");

            return true;
        } 
        frontCardNum.textContent = inpNum.value;
        
        return true;
    }
    
}

const checkInput = () =>{
    if (inpNum.value.length < 19 || !inpNum.value){
        errorNum.textContent = "This field is required";
        inpNum.classList.add("invalid"); 
    }
    if (!inpName.value){
        inpName.classList.add("invalid");
        errorName.textContent = "This field is required";
    }
    if (!inpMonth.value || !inpYear.value){
        if (!inpMonth.value){
            inpMonth.classList.add("invalid");
        }
        inpYear.classList.add("invalid");
        errorDate.textContent = "Invalid date";
    }
    if (!inpCvc.value){
        inpCvc.classList.add("invalid");
        errorCvc.textContent = "This field is required";
    }
}

popupBtn.addEventListener("click", (e) =>{
    location.href = "index.html";
});

infoForm.addEventListener("submit", (e)=>{
    if(checkName(inpName.value) && checkMonth(inpMonth.value) && checkYear(inpYear.value) && checkCvc(inpCvc.value) && checkNum(inpNum.value)){
        checkInput();
        
        errorNum.textContent = "";
        inpNum.classList.remove("invalid");
        infoForm.classList.add("hidden");
        popup.classList.remove("hidden");
        e.preventDefault();
        
    }
    else{
        checkInput();
        e.preventDefault();              
    }
});


inpName.addEventListener("input", ()=>{
    checkName(inpName.value);  
    
});

inpMonth.addEventListener("input", ()=>{
    checkMonth(inpMonth.value);
});

inpYear.addEventListener("input", ()=>{
    checkYear(inpYear.value);
});

inpCvc.addEventListener("input", ()=>{
    checkCvc(inpCvc.value);
    
});


inpNum.addEventListener("input", (e)=>{    
    checkNum(inpNum.value);

});
