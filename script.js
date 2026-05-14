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


// main
let switcherIitem = document.querySelectorAll('.switcher-item');

switcherIitem.forEach(function (i, b) {
    var item = i;
    var index = b + 1;

    item.addEventListener("click", function () {
        // remove other active
        switcherIitem.forEach(item => item.classList.remove("active"));

        // add active
        item.classList.add("active")

        cheangeImg(index);

    });
})

function cheangeImg(index) {
    var imagSrcLeft = document.getElementById("model-left");
    var imagSrcRight = document.getElementById("model-right");
    var expertName = document.getElementById("expert-name");
    var expertSkill = document.getElementById("expert-skill");
    var expertLocation = document.getElementById("expert-location");
    var body = document.getElementById("body");


    switch (index) {
        case 1:
            // cheange Img
            imagSrcLeft.style.backgroundImage = "url(Images/model-left.png)";
            imagSrcRight.style.backgroundImage = "url(Images/model-right.png)";


            // animation cheange Img
            imagSrcLeft.style.animation = "cheangeImgLeft 1s";
            imagSrcRight.style.animation = "cheangeImgRight 1.0s .1s";

            setTimeout(function () {
                imagSrcLeft.style.animation = "none";
                imagSrcRight.style.animation = "none";

            }, 1000)

            // text
            expertName.innerHTML = "Elena Morell";
            expertSkill.innerHTML = "Photographer";
            expertLocation.innerHTML = "Brussels,Belgium";
            var aboutExpert = document.getElementById("about-expert");
            aboutExpert.style.animation = "transition 1s";
            setTimeout(function () {
                aboutExpert.style.animation = "none";
            }, 500)

            // background color
            body.style.backgroundImage = "radial-gradient(circle,rgb(50, 78, 110) 0%,#0b1023ff 100%)";
            break;


        case 2:
            // cheange Img
            imagSrcLeft.style.backgroundImage = "url(Images/2-left.png)";
            imagSrcRight.style.backgroundImage = "url(Images/2-right.png)";

            // animation cheange Img
            imagSrcLeft.style.animation = "cheangeImgLeft 1s";
            imagSrcRight.style.animation = "cheangeImgRight 1.0s .1s";

            setTimeout(function () {
                imagSrcLeft.style.animation = "none";
                imagSrcRight.style.animation = "none";

            }, 1000)

            // text
            expertName.innerHTML = "Lorem ipsum";
            expertSkill.innerHTML = "Front end developer";
            expertLocation.innerHTML = "Hamburg";
            var aboutExpert = document.getElementById("about-expert");
            aboutExpert.style.animation = "transition 1s";
            setTimeout(function () {
                aboutExpert.style.animation = "none";
            }, 500)

            // background color
            body.style.backgroundImage = "radial-gradient(circle,rgb(85, 46, 24) 0%,rgb(20, 6, 6) 100%)";
            break;


        case 3:
            // cheange Img
            imagSrcLeft.style.backgroundImage = "url(Images/3-left.png)";
            imagSrcRight.style.backgroundImage = "url(Images/3-right.png)";

            // animation cheange Img
            imagSrcLeft.style.animation = "cheangeImgLeft 1s";
            imagSrcRight.style.animation = "cheangeImgRight 1.0s .1s";

            setTimeout(function () {
                imagSrcLeft.style.animation = "none";
                imagSrcRight.style.animation = "none";

            }, 1000)

            // text
            expertName.innerHTML = "Sara Moni";
            expertSkill.innerHTML = "UI UX Designer";
            expertLocation.innerHTML = "Düsseldorf";
            var aboutExpert = document.getElementById("about-expert");
            aboutExpert.style.animation = "transition 1s";
            setTimeout(function () {
                aboutExpert.style.animation = "none";
            }, 500)

            // background color
            body.style.backgroundImage = "radial-gradient(circle,rgb(95, 43, 43) 0%,rgb(20, 6, 6) 100%)";
            break;

        default:
            break;
    }
}