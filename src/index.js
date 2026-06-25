import "./styles.css"
import "./reset.css"

import buildHome from "./home.js"
import buildMenu from "./menu.js"
import buildAbout from "./about.js"

export {currentPage, switchTab, updateTabColor};

let currentPage = "home";
let contentDiv = document.getElementById("content");

pageOpen();

function pageOpen() {
    switchTab(currentPage);
    updateTabColor();
}

const buttons = document.querySelector(".button-wrapper");

buttons.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    if (e.target.id === currentPage) return
    switchTab(e.target.id)
    updateTabColor()
})
function switchTab(tab) {
    switch (tab) {
        case "home":
            buildHome();
            currentPage = "home";
            break;
        case "menu":
            buildMenu();
            currentPage = "menu";
            break;
        case "about":
            buildAbout();
            currentPage = "about";
            break;
    }
}
function updateTabColor() {
    const allTabs = document.querySelectorAll(".button-wrapper > button");
    allTabs.forEach((tab) => {
        tab.id === currentPage ? tab.style.backgroundColor = "rgb(253, 248, 237)" : tab.style.backgroundColor = "rgb(221, 216, 206)";
    })
}
