const loginForm = document.querySelector("#loginForm");

const button = document.querySelector(".login-btn");

const page1 = document.querySelector(".page1");
const para = document.querySelector(".new");
const btn = document.querySelector(".button");
const title = document.querySelector(".title");
const footer = document.querySelector(".footer");
const img = document.querySelector(".house-img");
const logo = document.querySelector(".logo");
const options = document.querySelector(".options");


// console.log(loginForm);


btn.addEventListener("mouseenter" , () =>{
    options.style.display= "block";
})

btn.addEventListener("mouseleave" , () =>{
    options.style.display= "none";
})

function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text"; // Show password
        eyeIcon.src = "./images/eye-splash.png"; // Change to "eye-slash" icon
    } else {
        passwordField.type = "password"; // Hide password
        eyeIcon.src = "./images/eye.png"; // Change to "eye" icon
    }
}

loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const onlineId = document.querySelector("#onlineId");
    const password = document.querySelector("#password");
    const rememberMe = document.querySelector("#rememberme");

    if(onlineId && password && rememberMe){
        button.classList.add("loading");

        setTimeout(()=>{
            page1.classList.add("fadeoutPage1");
            para.classList.add("fadeoutnew");
            btn.classList.add("fadeoutbtn");
            title.classList.add("fadeouttitle");
            footer.classList.add("fadeoutfooter");
            img.classList.add("fadeoutimg");
            logo.classList.add("fadeoutlogo");


            button.classList.remove("loading");
        },2000)
    }
})