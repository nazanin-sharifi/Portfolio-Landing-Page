// header 
// open menu
let MenuBTN = document.getElementById("menu-box");
const Menu = document.getElementById("menu");

function openCloseMenuBTN() {

    if (MenuBTN.style.visibility == "hidden") {
        MenuBTN.style.opacity = "1";
        MenuBTN.style.visibility = "visible";
        Menu.style.top = "0";
    }
    else {
        MenuBTN.style.opacity = "0";
        MenuBTN.style.visibility = "hidden";
        Menu.style.top = "-430px";
    }
}

// close Menu
function closeMenu() {
    let moseY = event.pageY;
    if (moseY > 430) {
        MenuBTN.style.opacity = "0";
        MenuBTN.style.visibility = "hidden";
        Menu.style.top = "-430px";
    }
}


