const menu = document.getElementById("menu");
const button = document.querySelector(".button-menu");

let isVisible = false;

button.addEventListener("click",()=> {
    isVisible = !isVisible;
    if(isVisible === true)
    {
        menu.classList.add("is-visible");
    }
    else
    {
        menu.classList.remove("is-visible");
    }

});

const navBar = document.querySelector(".navBar-responsive");
const buttonNavbar = document.querySelector(".button-navbar");

let isDisplay = false;

buttonNavbar.addEventListener("click",()=> {
    isDisplay = !isDisplay;
    if(isDisplay === true)
    {
        navBar.classList.add("is-display");
    }
    else
    {
        navBar.classList.remove("is-display");
    }
});
