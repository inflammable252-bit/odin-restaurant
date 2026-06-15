import hero800w from "./images/hero-800w.jpg";
import hero1200w from "./images/hero-1200w.jpg";
import hero2000w from "./images/hero-2000w.jpg";

import { currentPage, switchTab, updateTabColor } from "./index.js";

let content = document.getElementById("content");

export default function buildHome() {
    content.replaceChildren()
    buildHero()
    buildHomeContent()
    buildHomeImages()
}

function buildHero() {
    const headline = document.createElement("div");
    headline.classList = "hero-text";
    const heroString = "Made fresh./Served warm./Enjoyed everywhere.";
    (heroString.split("/")).forEach((line) => {
        const lineElement = document.createElement("p");
        lineElement.textContent = line;
        headline.appendChild(lineElement);
    })

    const heroImg = document.createElement("img");
    heroImg.id = "hero";
    heroImg.srcset = hero800w + " 800w," + hero1200w + " 1200w," + hero2000w + " 2000w";
    heroImg.sizes = "(width <= 800px) 800w, (width <= 1200px) 1200px, 2000px";
    heroImg.src= hero2000w;
    heroImg.alt = "A dark, luxurious photo of fresh churros being dipped into a caramel sauce with a green paper cup of coffee in the background."

    const heroContainer = document.createElement("div");
    heroContainer.id = "heroContainer";

    const heroCover = document.createElement("div");
    heroCover.id = "heroCover";

    const button = document.createElement("button");
    button.id = "go-to-menu";
    button.textContent = "Explore Our Menu";
    button.addEventListener("click", (e) => {
        switchTab("menu");
        updateTabColor()
        scroll(0,0)
    });

    heroContainer.append(heroCover)
    heroCover.append(headline)
    headline.append(button)
    heroContainer.append(heroImg)
    content.prepend(heroContainer)
}

function buildHomeContent() {
    const intro = document.createElement("p");
    intro.textContent = "At Churro Stand, we make golden, crispy churros fresh throughout the day and serve them warm with your favorite toppings and dips. Whether you're here for a quick snack or a sweet celebration, you'll always find something worth craving.";
    content.appendChild(intro)
}

function buildHomeImages() {
    
}