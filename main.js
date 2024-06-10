// navigation menu for mobile device
// select all navigation elements
const navBtn = document.querySelector(".nav-btn");
const navOverlay = document.querySelector(".nav-overlay");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");

// let showmenu be "false"
let showMenu = false;

// have navigation listen to click events
navBtn.addEventListener("click", openMenu);
navOverlay.addEventListener("click", openMenu);

function openMenu() {
    // when the button is clicked and showmenu is "false"
    if(!showMenu) {
        // add certain classes be added to the navigation elements
        navBtn.classList.add("close");
        navList.classList.add("show");
        navOverlay.classList.add("show");
        navItem.forEach(item =>{
            item.classList.add("show");
        });

        // showmenu is true
        showMenu = true;
    }
    // when the button is clicked and showmenu is "true"
    else {
        // add certain classes be removed to the navigation elements
        navBtn.classList.remove("close");
        navList.classList.remove("show");
        navOverlay.classList.remove("show");
        navItem.forEach(item =>{
            item.classList.remove("show");
        });

        // showmenu is false
        showMenu = false;
    }
}

