import "./styles.css"
import "./reset.css"

import buildHome from "./home.js"
import buildMenu from "./menu.js"
import buildAbout from "./about.js"

let currentPage = "home";
let contentDiv = document.getElementById("content");
switchTab(currentPage);

const buttons = document.querySelector(".button-wrapper");

buttons.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    if (e.target.id === currentPage) return
    switchTab(e.target.id)
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
function clearTab() {
    contentDiv.replaceChildren()
}