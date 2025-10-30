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