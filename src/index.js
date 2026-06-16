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
    // addFooter()
}
function updateTabColor() {
    const allTabs = document.querySelectorAll(".button-wrapper > button");
    allTabs.forEach((tab) => {
        tab.id === currentPage ? tab.style.backgroundColor = "rgb(253, 248, 237)" : tab.style.backgroundColor = "rgb(221, 216, 206)";
    })
}
function addFooter() {
    const footer = document.createElement("footer");
    footer.id = "footer"
    
    const contact = document.createElement("div");
    contact.id = "contact-info"
    const headline = document.createElement("h4");
    headline.textContent = "Contact Us:"
    const phone = document.createElement("p");
    phone.textContent = "000-000-0000";
    const email = document.createElement("p");
    email.textContent = "email@emaildomain.com"
    
    contact.append(headline)
    contact.append(phone);
    contact.append(email);
    footer.append(contact);
    contentDiv.append(footer)
}