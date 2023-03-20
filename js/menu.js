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
