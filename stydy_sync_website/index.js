let body = document.querySelector("body");
let header = document.querySelector("header");
let dark_theme_button = document.querySelector("#dark_theme_button");
let nav_options_items = document.querySelector("#nav_options_items");

function change_mode(){
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    nav_options_items.classList.toggle("dark");
}

dark_theme_button.addEventListener("click", change_mode);

//for invalid email if entered
let send_button = document.getElementById("send_button");
let text_area = document.querySelector(".text_area");

//by default type="email" shows alerts for invalid email
function check_email(event){
    event.preventDefault();

    /* let email = text_area.value;
    let form_footer = document.getElementById("form_footer");

    if (email === "") {
        form_footer.textContent = "!Please enter your email.";
        form_footer.style.color = "orange";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        form_footer.textContent = "!Invalid email address";
        messagform_footereDiv.style.color = "red";
    } */
    //.checkValidity()  ensures the email input passes HTML5’s built-in validation.
    if(text_area.checkValidity()){
        alert("Thank you! You’ve subscribed successfully.");
        text_area.value = "";//to clear input
    }
}

send_button.addEventListener("click",check_email);

