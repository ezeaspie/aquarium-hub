//Nav Bar

const showNav = () => {
    document.querySelector("nav").style.width = "250px";
    document.querySelector(".container").style.marginLeft = "250px";
    document.querySelector(".showHideNav").classList.add("rotate");
}

const hideNav = () => {
    document.querySelector("nav").style.width = "0";
    document.querySelector(".container").style.marginLeft = "0";
    document.querySelector(".showHideNav").classList.remove("rotate");
}

document.querySelector(".showHideNav").addEventListener("click", function() {
    if(document.querySelector("nav").style.width == "250px") {
        console.log("hide");
        hideNav();
    }
    else {
        console.log("show");
        showNav();
    }
});